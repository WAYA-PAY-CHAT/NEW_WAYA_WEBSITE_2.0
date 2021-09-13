import React, { useState } from "react";
import { Modal } from '@themesberg/react-bootstrap';
import { Button, Form, Input, Upload } from "antd";
import { InboxOutlined } from '@ant-design/icons'
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { createAboutModal, aboutRefresh, editAboutModal, editABoutVal } from "../../../states/about";
import { settingAlert, settingResponse } from "../../../states/settings";
import { dummyRequest } from "../../../services/utilities";
import { createAbout, updateAbout } from "../../../services/apiCalls";

const AboutModal = () => {
  const [loading, setLoading] = useState(false)
  const setShowAlert = useSetRecoilState(settingAlert);
  const setResponse = useSetRecoilState(settingResponse)
  const setRefresh = useSetRecoilState(aboutRefresh)
  const [showModal, setShowModal] = useRecoilState(createAboutModal);
  const [file, setFile] = useState({})
  const [form] = Form.useForm()

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

  const handleSubmit = async (val) => {
    const date = new Date()
    setLoading(true)
    const fd = new FormData();
    fd.append('title', val.title)
    fd.append('content', val.content)
    fd.append('about_image', file);
    const res = await createAbout(fd)
    if (res.status) {
      setResponse({ message: res.message, title: "success" })
      setShowAlert(true)
      setRefresh(date.toTimeString())
      setShowModal(false)
      setFile("")
      form.resetFields()
    } else {
      setResponse({ message: res.message || res, title: "failed" })
      setShowAlert(true)
    }
    setLoading(false)
  }
  return (
    <Modal as={Modal.Dialog} centered show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header>
        <Modal.Title className="h6">Create New Admin</Modal.Title>
        <Button variant="close" aria-label="Close" onClick={() => setShowModal(false)} />
      </Modal.Header>
      <Modal.Body>
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Title" name="title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="content" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item >
            <Upload onChange={handleChange} customRequest={dummyRequest} maxCount={1}>
              <Button icon={<InboxOutlined />}>Upload Blog Image</Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Update
            </Button>
          </Form.Item>
        </Form>
      </Modal.Body>
    </Modal>
  )
}
export default AboutModal

export const EditModal = () => {
  const [loading, setLoading] = useState(false)
  const setShowAlert = useSetRecoilState(settingAlert);
  const setResponse = useSetRecoilState(settingResponse)
  const setRefresh = useSetRecoilState(aboutRefresh)
  const value = useRecoilValue(editABoutVal)
  const [showModal, setShowModal] = useRecoilState(editAboutModal);
  const [file, setFile] = useState({})
  const [form] = Form.useForm()
  form.setFieldsValue({ title: value.title, content: value.content, id: value.id, image_url: value.image_url })

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

  const handleSubmit = async (val) => {
    const date = new Date()
    setLoading(true)
    const fd = new FormData();
    fd.append('title', val.title)
    fd.append('content', val.content)
    fd.append('about_image', file);
    fd.append('id', val.id);
    fd.append('image_url', val.image_url);
    const res = await updateAbout({ data: fd, id: val.id })
    if (res.status) {
      setResponse({ message: res.message, title: "success" })
      setShowAlert(true)
      setRefresh(date.toTimeString())
      setShowModal(false)
      setFile("")
      form.resetFields()
    } else {
      setResponse({ message: res.message || res, title: "failed" })
      setShowAlert(true)
    }
    setLoading(false)
  }
  return (
    <Modal as={Modal.Dialog} centered show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header>
        <Modal.Title className="h6">Update Feature</Modal.Title>
        <Button variant="close" aria-label="Close" onClick={() => setShowModal(false)} />
      </Modal.Header>
      <Modal.Body>
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Title" name="title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item hidden name="id">
            <Input />
          </Form.Item>
          <Form.Item hidden name="image_url">
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="content" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item >
            <Upload onChange={handleChange} customRequest={dummyRequest} maxCount={1}>
              <Button icon={<InboxOutlined />}>Upload Image</Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Update
            </Button>
          </Form.Item>
        </Form>
      </Modal.Body>
    </Modal>
  )
}