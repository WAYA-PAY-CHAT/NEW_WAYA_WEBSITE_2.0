import { Card, Row, Col, Button } from '@themesberg/react-bootstrap'
import React, { useState } from 'react'
import { InboxOutlined } from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSetRecoilState } from 'recoil';
import { Form, Input, Upload, Button as AntButton, Modal } from 'antd';
import { dummyRequest } from '../../../services/utilities';
import { updateHomePage } from '../../../services/apiCalls';
import { imageUrl } from '../../../services/axios'
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { featureAlert, featureResponse, homeRefresh } from '../../../states/home';

const MediaCard = ({ img, video_url, url }) => {
  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState("")
  const [createModal, setCreateModal] = useState(false)
  const setShowAlert = useSetRecoilState(featureAlert);
  const setResponse = useSetRecoilState(featureResponse)
  const setRefresh = useSetRecoilState(homeRefresh)
  const [form] = Form.useForm()

  const onFinish = async (val) => {
    setLoading(true)
    const date = new Date()
    const fd = new FormData();
    fd.append('video_url', val.video_url)
    fd.append('download_app_image', file);
    try {
      const res = await updateHomePage({ data: fd, url })
      if (res.status) {
        setResponse({ message: res.message, title: "success" })
        setShowAlert(true)
        setRefresh(date.toTimeString())
        setCreateModal(false)
        setFile("")
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
    <>
      <Card border="light" className="bg-white shadow-sm mb-4">
        <Card.Body>
          <Button variant="success" size="sm" className="text-white me-3 mb-4" onClick={() => setCreateModal(true)}>
            Update Media <FontAwesomeIcon icon={faVideo} className="d-none d-sm-inline ms-1" />
          </Button>
          <Row>
            <Col xs={12} xl={6} lg={6}>
              <img src={`${imageUrl}${img}`} alt="business" className="mb-4" />
            </Col>
            <Col xs={12} xl={6} lg={6}>
              <iframe title="how it work" height="315"
                src={video_url} >
              </iframe>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {/*update media start */}
      <Modal
        title="Update Media "
        centered
        visible={createModal}
        footer={null}
        onCancel={() => setCreateModal(false)}
      >
        <Form form={form} onFinish={onFinish} layout="vertical" initialValues={{ video_url, }}>
          <Form.Item label="Video Url" name="video_url" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
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
      {/**update media end */}
    </>
  )
}

export default MediaCard
