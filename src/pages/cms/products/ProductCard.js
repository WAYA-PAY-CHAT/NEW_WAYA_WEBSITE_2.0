import React, { useState } from 'react'
import { Card } from '@themesberg/react-bootstrap'
import { Space, Table, Button, Modal, Form, Input, Select, Upload } from 'antd'
import { imageUrl } from '../../../services/axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { createProduct, deleteProduct, updateProduct } from '../../../services/apiCalls';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { InboxOutlined } from '@ant-design/icons'
import { createProductModal, editProductModal, productAlert, productRefresh, productResponse } from '../../../states/product';
import { dummyRequest } from '../../../services/utilities';

const ProductCard = ({ data, categories }) => {

  // const [value, setValue] = useState({})
  const [file, setFile] = useState("")
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useRecoilState(createProductModal);
  const [editModal, setEditModal] = useRecoilState(editProductModal);
  const setShowAlert = useSetRecoilState(productAlert);
  const setResponse = useSetRecoilState(productResponse)
  const setRefresh = useSetRecoilState(productRefresh)
  const { Option } = Select
  const [form] = Form.useForm()
  const [forms] = Form.useForm()
  const { confirm } = Modal;

  const columns = [
    {
      title: '#',
      dataIndex: 'product_image_url',
      key: 'product_image_url',
      render: text => <img alt="products" src={`${imageUrl}${text}`} />
    },
    {
      title: 'Name',
      dataIndex: 'product_name',
      key: 'product_name',
    },
    {
      title: 'Description',
      dataIndex: 'product_description',
      key: 'product_description',
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
    forms.setFieldsValue({ name: value.product_name, id: value.id, description: value.product_description, image_url: value.product_image_url, category_id: value.product_category_id, url: value.url })
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
    const res = await deleteProduct(id)
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
    fd.append('description', val.description)
    fd.append('category_id', val.category_id)
    fd.append('url', val.url)
    fd.append('product_image', file);
    const res = await createProduct(fd)
    if (res.status) {
      setResponse({ message: res.message, title: "success" })
      setShowAlert(true)
      setRefresh(date.toTimeString())
      setShowModal(false)
      form.setFieldsValue()
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
    fd.append('description', val.description)
    fd.append('category_id', val.category_id)
    fd.append('url', val.url)
    fd.append('product_image', file);
    fd.append('image_url', val.image_url);
    fd.append('id', val.id);
    const res = await updateProduct({ data: fd, id: val.id })
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
          <h5 className="mb-4 text-primary">All Product</h5>
          <Table columns={columns} pagination={false} dataSource={data} rowKey="id" />
        </Card.Body>
      </Card>

      {/*create product start */}
      <Modal
        title="Create New Product"
        centered
        visible={showModal}
        footer={null}
        onCancel={() => setShowModal(false)}
      >
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Product Url" name="url" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="Category" name="category_id" rules={[{ required: true }]}>
            <Select
              placeholder="Select Product Category"
              allowClear
            >
              {categories.map(cat => <Option key={cat.id} value={cat.id}>{cat.category_name}</Option>)}
            </Select>
          </Form.Item>
          <Form.Item >
            <Upload onChange={handleChange} customRequest={dummyRequest} maxCount={1}>
              <Button icon={<InboxOutlined />}>Upload Product Image</Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Create
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      {/*create product end */}

      {/* update product start */}
      <Modal
        title="Update Product"
        centered
        visible={editModal}
        footer={null}
        onCancel={() => setEditModal(false)}
      >
        <Form form={forms} onFinish={onFinishUpdate} layout="vertical">
          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Product Url" name="url" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item hidden name="id">
            <Input />
          </Form.Item>
          <Form.Item hidden name="image_url">
            <Input />
          </Form.Item>
          <Form.Item label="Category" name="category_id" rules={[{ required: true }]}>
            <Select
              placeholder="Select Product Category"
              allowClear
            >
              {categories.map(cat => <Option key={cat.id} value={cat.id}>{cat.category_name}</Option>)}
            </Select>
          </Form.Item>
          <Form.Item >
            <Upload onChange={handleChange} customRequest={dummyRequest} maxCount={1}>
              <Button icon={<InboxOutlined />}>Upload Product Image</Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Update
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      {/* update contact end */}
    </>
  )
}

export default ProductCard
