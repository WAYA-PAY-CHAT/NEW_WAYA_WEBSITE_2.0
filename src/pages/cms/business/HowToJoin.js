import React, { useState } from 'react'
import { Card, Button } from '@themesberg/react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation, faPlus } from '@fortawesome/free-solid-svg-icons';
import { InboxOutlined } from '@ant-design/icons'
import { Modal, Table, Form, Input, Button as AntButton, Upload, Space } from 'antd'
import { businessAlert, businessRefresh, businessResponse, howToJoin } from '../../../states/business';
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { createBusiness, deleteBusiness, updateBusiness } from '../../../services/apiCalls';
import { dummyRequest } from '../../../services/utilities';
import { imageUrl } from '../../../services/axios';

const HowToJoin = () => {
  const data = useRecoilValueLoadable(howToJoin)
  const agentList = data.state === "hasValue" ? data.contents : []
  const setShowAlert = useSetRecoilState(businessAlert);
  const setResponse = useSetRecoilState(businessResponse)
  const setRefresh = useSetRecoilState(businessRefresh)
  const [createModal, setCreateModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState("")
  const [edit, setEdit] = useState(false)
  const [form] = Form.useForm()
  const { confirm } = Modal

  const tableColumn = [
    {
      title: 'Image',
      dataIndex: 'image_url',
      key: 'image_url',
      render: text => <img style={{ width: 50, height: 50 }} alt="how to join" src={`${imageUrl}${text}`} />
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Action',
      dataIndex: 'id',
      key: 'id',
      render: (id, record) => {
        return (
          <Space size="middle">
            <AntButton type="ghost" onClick={() => handleUpdateModal(record, true)}>Edit </AntButton>
            <AntButton type="danger" onClick={() => confirmAction(id)}>Delete</AntButton>
          </Space>
        )
      },
    },
  ]

  const handleUpdateModal = (val, state) => {
    setCreateModal(state)
    setEdit(state)
    form.setFieldsValue({ title: val.title, position: val.position, iimage_url: val.image_url, id: val.id })
  }

  const confirmAction = (id) => {
    confirm({
      title: `Are you sure you want to delete this step?`,
      icon: <FontAwesomeIcon icon={faExclamation} color="primary" />,
      content: 'Click Ok to continue',
      onOk() {
        handleDelete(id)
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  const handleDelete = async (id) => {
    const date = new Date()
    const res = await deleteBusiness(`/admin/business/agent/how_to_join/${id}`)
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
    setLoading(true)
    const fd = new FormData();
    fd.append('title', val.title)
    fd.append('position', val.position)
    fd.append('id', val.id)
    fd.append('image_url', val.image_url)
    fd.append('how_to_join_image', file);
    const date = new Date()
    try {
      let res
      if (edit) {
        res = await updateBusiness({ data: fd, url: `/admin/business/agent/how_to_join/${val.id}` })
      } else {
        res = await createBusiness({ data: fd, url: "/admin/business/agent/how_to_join" })
      }
      if (res.status) {
        setResponse({ message: res.message, title: "success" })
        setShowAlert(true)
        setRefresh(date.toTimeString())
        setFile("")
        handleUpdateModal({}, false)
      } else {
        setResponse({ message: res.message || res, title: "failed" })
        setShowAlert(true)
      }
    } catch (error) {
      console.log(error)
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
    <div>
      <Card border="light" className="bg-white shadow-sm mb-4">
        <Card.Body>
          <h5>
            How to join steps &nbsp;
            <Button variant="success" size="sm" className="text-white me-3" onClick={() => setCreateModal(true)}>
              <FontAwesomeIcon icon={faPlus} /> create Steps
            </Button>
          </h5>
          <Table columns={tableColumn} dataSource={agentList} rowKey="id" />
        </Card.Body>
      </Card>
      {/*create how to join start */}
      <Modal
        title="create How to join"
        centered
        visible={createModal}
        footer={null}
        onCancel={() => handleUpdateModal({}, false)}
      >
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item label="Title" name="title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Position" name="position" rules={[{ required: true }]}>
            <Input type="number" />
          </Form.Item>
          {edit && <>
            <Form.Item hidden name="id" >
              <Input />
            </Form.Item>
            <Form.Item hidden name="image_url" >
              <Input />
            </Form.Item>
          </>}
          <Form.Item >
            <Upload onChange={handleChange} customRequest={dummyRequest} maxCount={1}>
              <AntButton icon={<InboxOutlined />}>Upload Image</AntButton>
            </Upload>
          </Form.Item>
          <Form.Item>
            <AntButton type="primary" htmlType="submit" loading={loading}>
              Update
            </AntButton>
          </Form.Item>
        </Form>
      </Modal>
      {/**create how to join end */}
    </div>
  )
}

export default HowToJoin
