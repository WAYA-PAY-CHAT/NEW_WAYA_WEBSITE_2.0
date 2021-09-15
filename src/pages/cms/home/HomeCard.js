import { Card, Row, Col, Button } from '@themesberg/react-bootstrap'
import React, { useState } from 'react'
import { InboxOutlined } from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSetRecoilState } from 'recoil';
import { Form, Input, Upload, Button as AntButton, Modal } from 'antd';
import { dummyRequest } from '../../../services/utilities';
import { updateHomePage } from '../../../services/apiCalls';
import { imageUrl } from '../../../services/axios'
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { featureAlert, featureResponse, homeRefresh } from '../../../states/home';

const HomeCard = ({ img, description, title, type, url, featureImg }) => {
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
    const fdBody = new FormData();
    const fdHero = new FormData();
    fdBody.append('title', val.title)
    fdBody.append('description', val.description)
    fdBody.append('feature_image', file);
    fdHero.append('title', val.title)
    fdHero.append('description', val.description)
    fdHero.append('hero_image', file);
    try {
      const res = await updateHomePage({ data: type === "feature" ? fdBody : fdHero, url })
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
          {type === "hero" ?
            <Row>
              <Col xs={12} xl={6} lg={6}>
                <img src={`${imageUrl}${img}`} alt="hero home" />
              </Col>
              <Col xs={12} xl={6} lg={6}>
                <h5>{title}</h5>
                <p>{description}</p>
                <Button variant="success" size="sm" className="text-white me-3" onClick={() => setCreateModal(true)}>
                  <FontAwesomeIcon icon={faEdit} />
                </Button>
              </Col>
            </Row> :
            <div>
              {featureImg && <img src={`${imageUrl}${img}`} alt="features" />}
              <h5>{title}</h5>
              <p>{description}</p>
              <Button variant="success" size="sm" className="text-white me-3" onClick={() => setCreateModal(true)}>
                <FontAwesomeIcon icon={faEdit} />
              </Button>
            </div>}
        </Card.Body>
      </Card>
      {/*update merchant hero start */}
      <Modal
        title="Update Home Content "
        centered
        visible={createModal}
        footer={null}
        onCancel={() => setCreateModal(false)}
      >
        <Form form={form} onFinish={onFinish} layout="vertical" initialValues={{ title, description }}>
          <Form.Item label="Title" name="title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>
          {featureImg &&
            <Form.Item >
              <Upload onChange={handleChange} customRequest={dummyRequest} maxCount={1}>
                <AntButton icon={<InboxOutlined />}>Upload Image</AntButton>
              </Upload>
            </Form.Item>}
          <Form.Item>
            <AntButton type="primary" htmlType="submit" loading={loading}>
              Update
            </AntButton>
          </Form.Item>
        </Form>
      </Modal>
      {/**update merchant hero end */}
    </>
  )
}

export default HomeCard
