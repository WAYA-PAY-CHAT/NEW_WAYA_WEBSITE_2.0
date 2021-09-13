// import { faFacebook, faInstagram, faLinkedin, faTwitter, faWeebly } from '@fortawesome/free-brands-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, Button } from '@themesberg/react-bootstrap'
import { Form, Input, Modal, Button as AntButton } from 'antd'
import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { updateSettings } from '../../../services/apiCalls'
import { settingAlert, settingResponse, settingsRefresh } from '../../../states/settings'
import { getHtml, getRawData } from '../../../services/utilities'

const OtherSetting = ({ data }) => {
  const [appStoreModal, setAppStoreModal] = useState(false)
  const [privacyModal, setPrivacyModal] = useState(false)
  const [termsModal, setTermsModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [editor, setEditor] = useState("")
  const [editor1, setEditor1] = useState("")
  const setShowAlert = useSetRecoilState(settingAlert);
  const setResponse = useSetRecoilState(settingResponse)
  const setRefresh = useSetRecoilState(settingsRefresh)
  const [form] = Form.useForm()
  const [forms] = Form.useForm()
  const [formss] = Form.useForm()

  const onEditorStateChange1 = editorState => {
    setEditor1(editorState);
  };
  const onEditorStateChange = editorState => {
    setEditor(editorState);
  };

  const handleUpdateModal = (type) => {
    if (type === "privacy") {
      if (data.privacy_and_policy) {
        const contentState = getRawData(data.privacy_and_policy)
        setEditor(EditorState.createWithContent(contentState));
      }
      setPrivacyModal(true)
    } else {
      if (data.terms_of_use) {
        const contentState = getRawData(data.terms_of_use)
        setEditor1(EditorState.createWithContent(contentState));
      }
      setTermsModal(true)
    }
    setResponse({})
  }

  const onFinishUpdate = async (val) => {
    const date = new Date()
    const value = {
      play_store_link: val.play_store_link,
      app_store_link: val.app_store_link,
      privacy_and_policy: val.type === "privacy_and_policy" && getHtml(editor),
      terms_of_use: val.type === "terms_of_use" && getHtml(editor1)
    }
    setLoading(true)
    const res = await updateSettings({ data: value, type: val.type })
    if (res.status) {
      setResponse({ message: res.message, title: "success" })
      setShowAlert(true)
      setRefresh(date.toTimeString())
      setAppStoreModal(false)
      setTermsModal(false)
      setPrivacyModal(false)
    } else {
      setResponse({ message: res.message || res, title: "failed" })
      setShowAlert(true)
    }
    setLoading(false)
  }

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4 text-primary">
          App Store Link  &nbsp;
          <Button variant="secondary" size="sm" className="text-white me-3" onClick={() => { setAppStoreModal(true) }}>
            <FontAwesomeIcon icon={faEdit} />
          </Button>
        </h5>
        <a className="text-dark" href={data.play_store_link} rel="noopener noreferrer" target="_blank"><p>Play Store Link</p></a>
        <a className="text-dark" href={data.app_store_link} rel="noopener noreferrer" target="_blank"><p>Apple Store Link </p></a>
        <div className="m-3">
          <h5 className="mb-4 text-primary">
            Privacy And Policy &nbsp;
            <Button variant="secondary" size="sm" className="text-white me-3" onClick={() => handleUpdateModal("privacy")}>
              <FontAwesomeIcon icon={faEdit} />
            </Button>
          </h5>
          <p dangerouslySetInnerHTML={{ __html: data.privacy_and_policy }} />
        </div>
        <div className="m-3">
          <h5 className="mb-4 text-primary">
            Terms Of Use &nbsp;
            <Button variant="secondary" size="sm" className="text-white me-3" onClick={() => handleUpdateModal("terms")}>
              <FontAwesomeIcon icon={faEdit} />
            </Button>
          </h5>
          <p dangerouslySetInnerHTML={{ __html: data.terms_of_use }} />
        </div>
      </Card.Body>
      {/* App store link start */}
      <Modal
        title="Update App Store Link"
        centered
        visible={appStoreModal}
        footer={null}
        onCancel={() => setAppStoreModal(false)}
      >
        <Form form={form} onFinish={onFinishUpdate} layout="horizontal" initialValues={{ play_store_link: data.play_store_link, app_store_link: data.app_store_link, type: "store" }}>
          <Form.Item label="PlayStore url" name="play_store_link" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Apple Store url" name="app_store_link" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item hidden name="type">
            <Input />
          </Form.Item>
          <Form.Item>
            <AntButton type="primary" htmlType="submit" loading={loading}>
              Update
            </AntButton>
          </Form.Item>
        </Form>
      </Modal>
      {/* App store link end */}

      {/* Privacy policy start */}
      <Modal
        title="Update Privacy Policy"
        centered
        visible={privacyModal}
        footer={null}
        onCancel={() => setPrivacyModal(false)}
      >
        <Form form={forms} onFinish={onFinishUpdate} layout="vertical" initialValues={{ type: "privacy_and_policy" }}>
          <Form.Item label="Privacy Policy" name="privacy_and_policy" rules={[{ required: true }]}>
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
          <Form.Item hidden name="type">
            <Input />
          </Form.Item>
          <Form.Item>
            <AntButton type="primary" htmlType="submit" loading={loading}>
              Update
            </AntButton>
          </Form.Item>
        </Form>
      </Modal>
      {/* Privacy policy end */}

      {/* Terms of use start */}
      <Modal
        title="Update Terms And Condition"
        centered
        visible={termsModal}
        footer={null}
        onCancel={() => setTermsModal(false)}
      >
        <Form form={formss} onFinish={onFinishUpdate} layout="vertical" initialValues={{ type: "terms_of_use" }}>
          <Form.Item label="Terms of use" name="terms_of_use" rules={[{ required: true }]}>
            <Editor
              editorState={editor1}
              editorClassName="px-3 border border-gray-1"
              editorStyle={{
                height: 200,
                overflow: 'auto',
              }}
              onEditorStateChange={onEditorStateChange1}
            />
          </Form.Item>
          <Form.Item hidden name="type">
            <Input />
          </Form.Item>
          <Form.Item>
            <AntButton type="primary" htmlType="submit" loading={loading}>
              Update
            </AntButton>
          </Form.Item>
        </Form>
      </Modal>
      {/* Terms of use end */}
    </Card>
  )
}

export default OtherSetting
