import React, { useState } from 'react'
import { Breadcrumb, Card, Button } from '@themesberg/react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faExclamation, faHome, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Modal, Form, Button as AntButton, Timeline, Input, Space } from 'antd'
import BusinessCard from './BusinessCard';
import { agents, businessAlert, businessRefresh, businessResponse } from '../../../states/business';
import { useRecoilState, useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import AlertToast from '../../../components/AlertToast';
import { createBusiness, deleteBusiness, updateBusiness } from '../../../services/apiCalls';
import HowToJoin from './HowToJoin';

const Agents = () => {
  const data = useRecoilValueLoadable(agents)
  const agentList = data.state === "hasValue" ? data.contents : {}
  const [showAlert, setShowAlert] = useRecoilState(businessAlert);
  const [response, setResponse] = useRecoilState(businessResponse)
  const setRefresh = useSetRecoilState(businessRefresh)
  const [createModal, setCreateModal] = useState(false)
  const [edit, setEdit] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()
  const { confirm } = Modal
  const boss = agentList.be_your_own_boss ? agentList.be_your_own_boss.split("*") : []

  const handleUpdateModal = (val, state) => {
    setCreateModal(state)
    setEdit(state)
    form.setFieldsValue({ title: val.title, id: val.id })
  }

  const onFinish = async (val) => {
    setLoading(true)
    const date = new Date()
    try {
      let res
      if (edit) {
        res = await updateBusiness({ data: val, url: `/admin/business/agent/be_your_own_boss/${val.id}` })
      } else {
        res = await createBusiness({ data: val, url: "/admin/business/agent/be_your_own_boss" })
      }
      if (res.status) {
        setResponse({ message: res.message, title: "success" })
        setShowAlert(true)
        setRefresh(date.toTimeString())
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

  const confirmAction = (id) => {
    confirm({
      title: `Are you sure you want to delete?`,
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
    const res = await deleteBusiness(`/admin/business/agent/be_your_own_boss/${id}`)
    if (res.status) {
      setResponse({ message: res.message, title: "success" })
      setShowAlert(true)
      setRefresh(date.toTimeString())
    } else {
      setResponse({ message: res.message || res, title: "failed" })
      setShowAlert(true)
    }
  }

  return (
    <div>
      <AlertToast showAlert={showAlert} setShowAlert={setShowAlert} response={response} page="Merchant" />
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Waya pay</Breadcrumb.Item>
            <Breadcrumb.Item active>Agents</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Agent Page</h4>
        </div>
      </div>
      <BusinessCard page="merchant" img={agentList.hero_image_url} description={agentList.hero_description} title={agentList.hero_title} type="hero" url="/admin/business/agent/hero" />
      <BusinessCard page="agent" img={agentList.why_become_agent_image} img1={agentList.sign_up_image_url} type="body" url="/admin/business/agent/body" />
      <Card border="light" className="bg-white shadow-sm mb-4">
        <Card.Body>
          <h5 className="mb-3">
            Be your own boss &nbsp;
            <Button variant="success" size="sm" className="text-white me-3" onClick={() => setCreateModal(true)}>
              <FontAwesomeIcon icon={faPlus} /> create
            </Button>
          </h5>
          <Timeline>
            {boss.map((list, index) => (
              <Timeline.Item key={index}>{list} &nbsp; &nbsp;
                <Space size="middle">
                  <Button variant="success" size="sm" className="text-white me-3" onClick={() => handleUpdateModal({ title: list, id: index + 1 }, true)}>
                    <FontAwesomeIcon icon={faEdit} />
                  </Button>
                  <Button variant="danger" size="sm" className="text-white me-3" onClick={() => confirmAction(index + 1)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </Space>
              </Timeline.Item>))}
          </Timeline>
        </Card.Body>
      </Card>
      <HowToJoin />
      {/*create be ur boss start */}
      <Modal
        title="Be your own boss"
        centered
        visible={createModal}
        footer={null}
        onCancel={() => handleUpdateModal({}, false)}
      >
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item label="Title" name="title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          {edit &&
            <Form.Item name="id" hidden>
              <Input />
            </Form.Item>}
          <Form.Item>
            <AntButton type="primary" htmlType="submit" loading={loading}>
              Update
            </AntButton>
          </Form.Item>
        </Form>
      </Modal>
      {/**create be ur boss end */}
    </div>
  )
}

export default Agents
