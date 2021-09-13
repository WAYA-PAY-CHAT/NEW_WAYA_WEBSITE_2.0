import React, { useState } from 'react'
import { Card } from '@themesberg/react-bootstrap'
import { Space, Table, Button, Modal, Form, Input, Upload } from 'antd'
import { imageUrl } from '../../../services/axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { createCategories, deleteCategories, updateCategories } from '../../../services/apiCalls';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { InboxOutlined } from '@ant-design/icons'
import { createCategoryModal, editCategoryModal, productAlert, productRefresh, productResponse } from '../../../states/product';
import { dummyRequest } from '../../../services/utilities';

const CategoryCard = ({ data }) => {

  const [value, setValue] = useState({})
  const [file, setFile] = useState("")
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useRecoilState(createCategoryModal);
  const [editModal, setEditModal] = useRecoilState(editCategoryModal);
  const setShowAlert = useSetRecoilState(productAlert);
  const setResponse = useSetRecoilState(productResponse)
  const setRefresh = useSetRecoilState(productRefresh)
  const [form] = Form.useForm()
  const [forms] = Form.useForm()
  const { confirm } = Modal;

  const columns = [
    {
      title: '#',
      dataIndex: 'category_image_url',
      key: 'category_image_url',
      render: text => <img alt="products" src={`${imageUrl}${text}`} />
    },
    {
      title: 'Name',
      dataIndex: 'category_name',
      key: 'category_name',
    },
    {
      title: 'Title',
      dataIndex: 'category_page_title',
      key: 'category_page_title',
    },
    {
      title: 'Description',
      dataIndex: 'category_description',
      key: 'category_description',
    },
    {
      title: 'Sub Description',
      dataIndex: 'category_description2',
      key: 'category_description2',
    },
    {
      title: 'Action',
      dataIndex: 'id',
      key: 'id',
      render: (id, record) => (
        <Space size="middle">
          <Button type="ghost" onClick={() => handleUpdateModal(record)}>Edit </Button>
          <Button type="danger" onClick={() => confirmAction(id)}>Delete</Button>
        </Space>
      )
    },
  ];

  const handleUpdateModal = (value) => {
    setValue(value)
    setEditModal(true)
    setResponse({})
  }

  const confirmAction = (id) => {
    confirm({
      title: `Are you sure you want to delete this product?`,
      icon: <FontAwesomeIcon icon={faExclamation} color="primary" />,
      content: 'Click Ok to continue',
      onOk() {
        deleteProducts(id)
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  const deleteProducts = async (id) => {
    const date = new Date()
    const res = await deleteCategories(id)
    if (res.status) {
      setResponse({ message: res.message, title: "success" })
      setShowAlert(true)
      setRefresh(date.toTimeString())
    } else {
      setResponse({ message: res.message || res, title: "failed" })
      setShowAlert(true)
    }
  }

  const onFinish = async (val) => {
    const date = new Date()
    setLoading(true)
    const fd = new FormData();
    fd.append('name', val.name)
    fd.append('page_title', val.page_title)
    fd.append('description_main', val.description_main)
    fd.append('description_sub', val.description_sub)
    fd.append('category_image', file);
    const res = await createCategories(fd)
    if (res.status) {
      setResponse({ message: res.message, title: "success" })
      setShowAlert(true)
      setRefresh(date.toTimeString())
      setShowModal(false)
      form.setFieldsValue({})
    } else {
      setResponse({ message: res.message || res, title: "failed" })
      setShowAlert(true)
    }
    setLoading(false)
  }

  const onFinishUpdate = async (val) => {
    const date = new Date()
    setLoading(true)
    const fd = new FormData();
    fd.append('name', val.name)
    fd.append('page_title', val.page_title)
    fd.append('description_main', val.description_main)
    fd.append('description_sub', val.description_sub)
    fd.append('category_image', file);
    fd.append('image_url', val.image_url);
    fd.append('id', val.id);
    const res = await updateCategories({ data: fd, id: val.id })
    if (res.status) {
      setResponse({ message: res.message, title: "success" })
      setShowAlert(true)
      setRefresh(date.toTimeString())
      setEditModal(false)
    } else {
      setResponse({ message: res.message || res, title: "failed" })
      setShowAlert(true)
    }
    setLoading(false)
  }

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  const handleChange = info => {
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => {
        setFile(info.file.originFileObj)
      });
    }
  };

  return (
    <>
      <Card border="light" className="text-center p-0 mb-4">
        <Card.Body>
          <Table columns={columns} pagination={false} dataSource={data} rowKey="id" />
        </Card.Body>
      </Card>

      {/*create product start */}
      <Modal
        title="Create New Category"
        centered
        visible={showModal}
        footer={null}
        onCancel={() => setShowModal(false)}
      >
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Title" name="page_title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description_main" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="Sub Description" name="description_sub" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item >
            <Upload onChange={handleChange} customRequest={dummyRequest} maxCount={1}>
              <Button icon={<InboxOutlined />}>Upload Category Image</Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Create
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      {/*create Category end */}

      {/* update Category start */}
      <Modal
        title="Update Category"
        centered
        visible={editModal}
        footer={null}
        onCancel={() => setEditModal(false)}
      >
        <Form form={forms} onFinish={onFinishUpdate} layout="vertical" initialValues={{ page_title: value.category_page_title, description_main: value.category_description, name: value.category_name, description_sub: value.category_description2, id: value.id, image_url: value.category_image_url }}>
          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Title" name="page_title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="id" hidden>
            <Input />
          </Form.Item>
          <Form.Item name="image_url" hidden>
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description_main" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="Sub Description" name="description_sub" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item >
            <Upload onChange={handleChange} customRequest={dummyRequest} maxCount={1}>
              <Button icon={<InboxOutlined />}>Upload Category Image</Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Update
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      {/* update category end */}
    </>
  )
}

export default CategoryCard
