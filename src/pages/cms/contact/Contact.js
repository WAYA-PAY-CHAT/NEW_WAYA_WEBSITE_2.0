import React, { useState } from 'react'
import { Breadcrumb, Button, Card } from '@themesberg/react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faExclamation, faHome } from '@fortawesome/free-solid-svg-icons';
import { Form, Input, Modal, Button as AntButton, Select, Table, Space, Tag } from 'antd';
import { contact, contactAlert, contactRefresh, contactResponse } from '../../../states/contact';
import { useRecoilState, useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { createContact, deleteContact, updateContact } from '../../../services/apiCalls';
import AlertToast from '../../../components/AlertToast';

const Contact = () => {
  const data = useRecoilValueLoadable(contact)
  const [viewModal, setViewModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState({})
  const [showAlert, setShowAlert] = useRecoilState(contactAlert);
  const [response, setResponse] = useRecoilState(contactResponse)
  const setRefresh = useSetRecoilState(contactRefresh)
  const [form] = Form.useForm()
  const { Option } = Select
  const { confirm } = Modal;
  const contactList = data.state === "hasValue" && data.contents ? data.contents : []

  const columns = [
    {
      title: 'Name',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Address',
      dataIndex: 'value',
      key: 'value',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Status',
      dataIndex: 'visible',
      key: 'visible',
      render: text => <Tag color={text ? "#2db7f5" : "#f50"}>{text ? "Show" : "Hide"}</Tag>
    },
    {
      title: 'Action',
      dataIndex: 'id',
      key: 'id',
      render: (id, record) => {
        const action = record.visible ? "Hide" : "Show"
        return (
          <Space size="middle">
            <AntButton type="ghost" onClick={() => handleUpdateModal(record)}>Edit </AntButton>
            <AntButton type="primary" onClick={() => confirmAction(id, action)}>{action}</AntButton>
            <AntButton type="danger" onClick={() => confirmAction(id, "delete")}>Delete</AntButton>
          </Space>
        )
      },
    },
  ];

  const confirmAction = (id, action) => {
    confirm({
      title: `Are you sure you want to ${action} this Contact?`,
      icon: <FontAwesomeIcon icon={faExclamation} color="primary" />,
      content: 'Click Ok to continue',
      onOk() {
        action === "delete" ? handleDelete(id) : handleShowHide(id, action.toLowerCase())
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  const handleShowHide = async (id, type) => {
    const res = await updateContact({ data: {}, type, id })
    handleResponse(res)
  }

  const handleDelete = async (id) => {
    const res = await deleteContact(id)
    handleResponse(res)
  }

  const onFinish = async (val) => {
    setLoading(true)
    const res = await createContact(val)
    handleResponse(res)
    setLoading(false)
  }

  const onFinishUpdate = async (val) => {
    setLoading(true)
    const res = await updateContact({ data: val, type: "update", id: val.id })
    handleResponse(res)
    setLoading(false)
  }

  const handleResponse = (res) => {
    const date = new Date()
    if (res.status) {
      setResponse({ message: res.message, title: "success" })
      setShowAlert(true)
      setRefresh(date.toTimeString())
      setEditModal(false)
      setViewModal(false)
    } else {
      setResponse({ message: res.message || res, title: "failed" })
      setShowAlert(true)
    }
  }

  const handleUpdateModal = (val) => {
    setEditModal(true)
    setValue(val)
  }
  return (
    <div>
      <AlertToast showAlert={showAlert} setShowAlert={setShowAlert} response={response} page="Contact" />
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Waya pay</Breadcrumb.Item>
            <Breadcrumb.Item active>Contact</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Contact Page</h4>
        </div>
      </div>
      <div className="table-settings mb-4">
        <Button variant="success" className="text-white me-3" onClick={() => setViewModal(true)}>
          Create New Contact <FontAwesomeIcon icon={faAddressBook} className="d-none d-sm-inline ms-1" />
        </Button>
      </div>
      <Card border="light" className="bg-white shadow-sm mb-4">
        <Card.Body>
          <h5 className="mb-4 text-primary">Contact List</h5>
          <Table columns={columns} loading={loading} pagination={false} dataSource={contactList} rowKey="id" />
        </Card.Body>
      </Card>

      {/*create contact start */}
      <Modal
        title="Create New Contact"
        centered
        visible={viewModal}
        footer={null}
        onCancel={() => setViewModal(false)}
      >
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item label="Name" name="key" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Address" name="value" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Type" name="type" rules={[{ required: true }]}>
            <Select
              placeholder="Select Product Category"
              allowClear
            >
              <Option value="ADDRESS">Address</Option>
              <Option value="EMAIL">Email</Option>
              <Option value="PHONE">Phone</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <AntButton type="primary" htmlType="submit" loading={loading}>
              Create
            </AntButton>
          </Form.Item>
        </Form>
      </Modal>
      {/*create contact end */}

      {/* update contact start */}
      <Modal
        title="Update Contact"
        centered
        visible={editModal}
        footer={null}
        onCancel={() => setEditModal(false)}
      >
        <Form form={form} onFinish={onFinishUpdate} layout="vertical" initialValues={{ key: value.key, value: value.value, id: value.id, type: value.type }}>
          <Form.Item label="Name" name="key" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Address" name="value" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="id" hidden>
            <Input />
          </Form.Item>
          <Form.Item label="Type" name="type" rules={[{ required: true }]}>
            <Select
              placeholder="Select Type"
              allowClear
            >
              <Option value="ADDRESS">Address</Option>
              <Option value="EMAIL">Email</Option>
              <Option value="PHONE">Phone</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <AntButton type="primary" htmlType="submit" loading={loading}>
              Update
            </AntButton>
          </Form.Item>
        </Form>
      </Modal>
      {/* update contact end */}
    </div>
  )
}

export default Contact
