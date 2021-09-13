import React from 'react'
import { Breadcrumb, Card } from '@themesberg/react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { useRecoilValueLoadable } from 'recoil';
import { subScriber } from '../../../states/settings';
import { Table } from 'antd';

const Subscribers = () => {
  const data = useRecoilValueLoadable(subScriber)
  const subscriberList = data.state === "hasValue" && data.contents ? data.contents : []
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
      title: 'Date',
      dataIndex: 'created_at',
      key: 'created_at',
      render: text => <p>{new Date(text).toDateString()}</p>
    },
  ];
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faUserFriends} /></Breadcrumb.Item>
            <Breadcrumb.Item>Waya pay</Breadcrumb.Item>
            <Breadcrumb.Item active>Subscribers</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Subscribers</h4>
        </div>
      </div>
      <Card border="light" className="bg-white shadow-sm mb-4">
        <Card.Body>
          <h5 className="mb-4 text-primary">Subscriber List</h5>
          <Table columns={columns} pagination={false} dataSource={subscriberList} rowKey="id" />
        </Card.Body>
      </Card>
    </div>
  )
}

export default Subscribers
