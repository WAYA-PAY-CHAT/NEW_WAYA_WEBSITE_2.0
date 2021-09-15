import React, { useState } from 'react'
import { Breadcrumb, Card, Button } from '@themesberg/react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useRecoilValueLoadable } from 'recoil';
import { messages } from '../../../states/settings';
import { Modal, Table } from 'antd';

const Messages = () => {
  const data = useRecoilValueLoadable(messages)
  const messagesList = data.state === "hasValue" && data.contents.data ? data.contents.data : []
  const [showView, setShowView] = useState(false)
  const [value, setValue] = useState({})
  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Subject',
      dataIndex: 'subject',
      key: 'subject',
    },
    {
      title: 'Action',
      dataIndex: 'id',
      key: 'id',
      render: (id, value) => <Button size="sm" onClick={() => handleView(value)}>View</Button>
    },
    {
      title: 'Date',
      dataIndex: 'created_at',
      key: 'created_at',
      render: text => <p>{new Date(text).toDateString()}</p>
    },
  ];
  const handleView = (val) => {
    setShowView(true)
    setValue(val)
  }
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Waya pay</Breadcrumb.Item>
            <Breadcrumb.Item active>Messages</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Messages</h4>
        </div>
      </div>
      <Card border="light" className="bg-white shadow-sm mb-4">
        <Card.Body>
          <h5 className="mb-4 text-primary">Messages List</h5>
          <Table columns={columns} pagination={false} dataSource={messagesList} rowKey="id" />
        </Card.Body>
      </Card>
      {/*create contact start */}
      <Modal
        title={value.subject}
        centered
        visible={showView}
        footer={null}
        onCancel={() => setShowView(false)}
      >
        {value.message}
      </Modal>
      {/*create contact end */}
    </div>
  )
}

export default Messages
