import React, { useState } from "react";
import { Modal } from '@themesberg/react-bootstrap';
import { Button, Form, Input } from "antd";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { Editor } from "react-draft-wysiwyg";
import { settingAlert, settingResponse } from "../../../states/settings";
import { createHowItWorkModal, editHowItWorkModal, editHowItWorkVal, howItWorkEditor, howItWorkRefresh } from "../../../states/howItWork";
import { createHowItWork, updateHowItWork } from "../../../services/apiCalls";
import { getHtml } from "../../../services/utilities";

const HowItWorkModal = () => {
  const [loading, setLoading] = useState(false)
  const setShowAlert = useSetRecoilState(settingAlert);
  const setResponse = useSetRecoilState(settingResponse)
  const setRefresh = useSetRecoilState(howItWorkRefresh)
  const [showModal, setShowModal] = useRecoilState(createHowItWorkModal);
  const [form] = Form.useForm()
  const [editor, setEditor] = useState("")

  const onEditorStateChange = editorState => {
    setEditor(editorState);
  };

  const handleSubmit = async (val) => {
    const date = new Date()
    setLoading(true)
    const d = {
      title: val.title,
      content: getHtml(editor),
      position: val.position
    }
    const res = await createHowItWork(d)
    if (res.status) {
      setResponse({ message: res.message, title: "success" })
      setShowAlert(true)
      setRefresh(date.toTimeString())
      setShowModal(false)
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
            <Editor
              editorState={editor}
              editorClassName="px-3 border border-gray-1"
              editorStyle={{
                height: 200,
                overflow: 'auto',
              }}
              onEditorStateChange={onEditorStateChange}
            />
          </Form.Item>
          <Form.Item label="Position" name="position" rules={[{ required: true }]}>
            <Input />
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
export default HowItWorkModal

export const EditModal = () => {
  const [loading, setLoading] = useState(false)
  const setShowAlert = useSetRecoilState(settingAlert);
  const setResponse = useSetRecoilState(settingResponse)
  const setRefresh = useSetRecoilState(howItWorkRefresh)
  const value = useRecoilValue(editHowItWorkVal)
  const [showModal, setShowModal] = useRecoilState(editHowItWorkModal);
  const [form] = Form.useForm()
  const [editor, setEditor] = useRecoilState(howItWorkEditor)
  form.setFieldsValue({ title: value.title, id: value.id, position: value.position })

  const handleSubmit = async (val) => {
    const date = new Date()
    setLoading(true)
    const d = {
      title: val.title,
      content: getHtml(editor),
      position: val.position,
      id: val.id
    }
    const res = await updateHowItWork({ data: d, id: val.id })
    if (res.status) {
      setResponse({ message: res.message, title: "success" })
      setShowAlert(true)
      setRefresh(date.toTimeString())
      setShowModal(false)
      form.resetFields()
    } else {
      setResponse({ message: res.message || res, title: "failed" })
      setShowAlert(true)
    }
    setLoading(false)
  }
  const onEditorStateChange = editorState => {
    setEditor(editorState);
  };
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
          <Form.Item label="Description" name="content" rules={[{ required: true }]}>
            <Editor
              editorState={editor}
              editorClassName="px-3 border border-gray-1"
              editorStyle={{
                height: 200,
                overflow: 'auto',
              }}
              onEditorStateChange={onEditorStateChange}
            />
          </Form.Item>
          <Form.Item label="Position" name="position" rules={[{ required: true }]}>
            <Input />
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