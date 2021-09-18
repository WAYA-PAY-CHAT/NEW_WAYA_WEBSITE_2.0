import { Card, Row, Col, Button } from '@themesberg/react-bootstrap'
import React, { useState } from 'react'
import { InboxOutlined } from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { businessAlert, businessRefresh, businessResponse } from '../../../states/business';
import { useSetRecoilState } from 'recoil';
import { Form, Input, Upload, Button as AntButton, Modal } from 'antd';
import { dummyRequest } from '../../../services/utilities';
import { updateBusiness } from '../../../services/apiCalls';
import { imageUrl } from '../../../services/axios'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const BusinessCard = ({ img, description, title, type, url, page, img1 }) => {
  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState("")
  const [file1, setFile1] = useState("")
  const [createModal, setCreateModal] = useState(false)
  const setShowAlert = useSetRecoilState(businessAlert);
  const setResponse = useSetRecoilState(businessResponse)
  const setRefresh = useSetRecoilState(businessRefresh)
  const [form] = Form.useForm()

  const onFinish = async (val) => {
    setLoading(true)
    const date = new Date()
    const fdBody = new FormData();
    const fdHero = new FormData();
    fdBody.append('title', val.title)
    fdBody.append('description', val.description)
    fdBody.append('body_image', file);
    fdBody.append('sign_up_image', file1);
    fdHero.append('hero_title', val.title)
    fdHero.append('hero_description', val.description)
    fdHero.append('hero_image', file);
    try {
      const res = await updateBusiness({ data: type === "body" ? fdBody : fdHero, url })
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

  const handleChange1 = info => {
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => {
        setFile1(info.file.originFileObj)
      });
    }
  };


  return (
    <>
      <Card border="light" className="bg-white shadow-sm mb-4">
        <Card.Body>
          <Row>
            <Col xs={12} xl={6} lg={6}>
              <img src={`${imageUrl}${img}`} alt="business" />
              <Button variant="success" size="sm" className="text-white me-3" onClick={() => setCreateModal(true)}>
                Update <FontAwesomeIcon icon={faBriefcase} className="d-none d-sm-inline ms-1" />
              </Button>
            </Col>
            <Col xs={12} xl={6} lg={6}>
              {page === "merchant" ?
                <><h5>{title}</h5>
                  <p>{description}</p></> :
                <img src={`${imageUrl}${img1}`} alt="business" />}
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {/*update merchant hero start */}
      <Modal
        title="Update Business "
        centered
        visible={createModal}
        footer={null}
        onCancel={() => setCreateModal(false)}
      >
        <Form form={form} onFinish={onFinish} layout="vertical" initialValues={{ title, description }}>
          {page === "merchant" && <>
            <Form.Item label="Title" name="title" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Description" name="description" rules={[{ required: true }]}>
              <Input.TextArea />
            </Form.Item>
          </>}
          <Form.Item >
            <Upload onChange={handleChange} customRequest={dummyRequest} maxCount={1}>
              <AntButton icon={<InboxOutlined />}>Upload Image</AntButton>
            </Upload>
          </Form.Item>
          {page === "agent" &&
            <Form.Item >
              <Upload onChange={handleChange1} customRequest={dummyRequest} maxCount={1}>
                <AntButton icon={<InboxOutlined />}>Upload Signup image</AntButton>
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

export default BusinessCard
