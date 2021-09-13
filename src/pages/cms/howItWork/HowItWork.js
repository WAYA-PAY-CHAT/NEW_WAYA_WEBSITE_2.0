import React, { useState } from 'react'
import { Breadcrumb, Card, Button } from '@themesberg/react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faHome, faVideo } from '@fortawesome/free-solid-svg-icons';
import { useRecoilState, useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { settingAlert, settingResponse, settings, settingsRefresh } from '../../../states/settings';
import { Input, Form, Button as AntButton, Modal } from 'antd';
import AlertToast from '../../../components/AlertToast';
import { updateSettings } from '../../../services/apiCalls';
import { createHowItWorkModal, howItWork } from '../../../states/howItWork';
import HowItWorkModal from './Modal';
import Table from './Table';

const HowItWork = () => {
  const data = useRecoilValueLoadable(settings)
  const dataList = useRecoilValueLoadable(howItWork)
  const [viewModal, setViewModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showAlert, setShowAlert] = useRecoilState(settingAlert);
  const [response, setResponse] = useRecoilState(settingResponse)
  const setRefresh = useSetRecoilState(settingsRefresh)
  const setCreateModal = useSetRecoilState(createHowItWorkModal);
  const settingData = data.state === "hasValue" ? data.contents : {}
  const howItWorkData = dataList.state === "hasValue" && dataList.contents ? dataList.contents : []
  const [form] = Form.useForm()


  const onFinishUpdate = async (val) => {
    const date = new Date()
    setLoading(true)
    const res = await updateSettings({ data: val, type: "how_it_works" })
    if (res.status) {
      setResponse({ message: res.message, title: "success" })
      setShowAlert(true)
      setRefresh(date.toTimeString())
      setViewModal(false)
    } else {
      setResponse({ message: res.message || res, title: "failed" })
      setShowAlert(true)
    }
    setLoading(false)
  }

  return (
    <div>
      <AlertToast showAlert={showAlert} setShowAlert={setShowAlert} response={response} page="How it work" />
      <HowItWorkModal />
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Waya pay</Breadcrumb.Item>
            <Breadcrumb.Item active>About</Breadcrumb.Item>
          </Breadcrumb>
          <h4>How It Work Page</h4>
        </div>
      </div>
      <div className="table-settings mb-4">
        <Button variant="secondary" className="text-white me-3" onClick={() => { setViewModal(true) }}>
          Update video<FontAwesomeIcon icon={faVideo} className="d-none d-sm-inline ms-1" />
        </Button>
        <Button variant="success" className="text-white me-3" onClick={() => setCreateModal(true)}>
          Create New Feature Content <FontAwesomeIcon icon={faCogs} className="d-none d-sm-inline ms-1" />
        </Button>
      </div>
      <Card border="light" className="bg-white shadow-sm mb-4">
        <Card.Body>
          <h5 className="mb-4 text-primary">How It Work</h5>
          {/* <video height="400" controls>
            <source src={settingData.how_it_works_video_url} type="video/mp4" />
            <source src="https://www.wayapaychat.com/wp-content/uploads/2020/01/Skype_Video2.ogg?_=1" type="video/ogg" />
            Your browser does not support HTML video.
          </video> */}
          <iframe title="how it work" width="420" height="315"
            src={settingData.how_it_works_video_url} >
          </iframe>
        </Card.Body>
      </Card>
      <Table data={howItWorkData} />
      {/* How it work video start */}
      <Modal
        title="Update How it work video"
        centered
        visible={viewModal}
        footer={null}
        onCancel={() => setViewModal(false)}
      >
        <Form form={form} onFinish={onFinishUpdate} layout="vertical">
          <Form.Item label="How it work vidoe url" name="video_url" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item>
            <AntButton type="primary" htmlType="submit" loading={loading}>
              Update
            </AntButton>
          </Form.Item>
        </Form>
      </Modal>
      {/* How it work video end */}
    </div>
  )
}

export default HowItWork
