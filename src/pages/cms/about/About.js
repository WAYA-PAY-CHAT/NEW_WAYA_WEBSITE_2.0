import { Breadcrumb, Row, Col, Card, Button } from '@themesberg/react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faEdit, faHome, faMobile, faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react'
import { Modal, Form, Card as AntCard, Button as AntButton } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { useRecoilState, useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { settingAlert, settingResponse, settings, settingsRefresh } from '../../../states/settings';
import { aboutRefresh, abouts, editAboutModal, editABoutVal } from '../../../states/about';
import { getHtml, getRawData } from '../../../services/utilities';
import { deleteAbout, updateSettings } from '../../../services/apiCalls';
import AlertToast from '../../../components/AlertToast';
import AboutModal, { EditModal } from './Modal';
import { createAboutModal } from '../../../states/about';
import { imageUrl } from '../../../services/axios';

const { Meta } = AntCard;
const About = () => {
  const data = useRecoilValueLoadable(settings)
  const about = useRecoilValueLoadable(abouts)
  const [showAlert, setShowAlert] = useRecoilState(settingAlert);
  const [response, setResponse] = useRecoilState(settingResponse)
  const setCreateModal = useSetRecoilState(createAboutModal);
  const setUpdateModal = useSetRecoilState(editAboutModal);
  const setRefresh = useSetRecoilState(settingsRefresh)
  const setAboutRefresh = useSetRecoilState(aboutRefresh)
  const setValue = useSetRecoilState(editABoutVal)
  const aboutData = about.state === "hasValue" && about.contents ? about.contents : []
  const settingData = data.state === "hasValue" ? data.contents : {}
  const [viewModal, setViewModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()
  const [editor, setEditor] = useState("")
  const { confirm } = Modal;

  const handleUpdate = () => {
    if (settingData.about_us) {
      const contentState = getRawData(settingData.about_us)
      setEditor(EditorState.createWithContent(contentState));
    }
    setViewModal(true)
  }

  const handleEditModal = (val) => {
    setUpdateModal(true)
    setValue(val)
    setResponse({})
  }
  const onFinishUpdate = async () => {
    const date = new Date()
    setLoading(true)
    const res = await updateSettings({ data: { about_us: getHtml(editor) }, type: "about" })
    if (res.status) {
      setResponse({ message: res.message, title: "success" })
      setShowAlert(true)
      setRefresh(date.toTimeString())
      setViewModal(false)
      setEditor("")
    } else {
      setResponse({ message: res.message || res, title: "failed" })
      setShowAlert(true)
    }
    setLoading(false)
  }
  const onEditorStateChange = editorState => {
    setEditor(editorState);
  };

  const confirmDelete = (id) => {
    confirm({
      title: `Are you sure you want to delete this Post?`,
      icon: <ExclamationCircleOutlined />,
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
    const res = await deleteAbout(id)
    if (res.status) {
      setResponse({ message: res.message, title: "success" })
      setShowAlert(true)
      setAboutRefresh(date.toTimeString())
    } else {
      setResponse({ message: res.message || res, title: "failed" })
      setShowAlert(true)
    }
  }
  return (
    <div>
      <AlertToast showAlert={showAlert} setShowAlert={setShowAlert} response={response} page="About" />
      <AboutModal />
      <EditModal />
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Waya pay</Breadcrumb.Item>
            <Breadcrumb.Item active>About</Breadcrumb.Item>
          </Breadcrumb>
          <h4>About Us Page</h4>
        </div>
      </div>
      <div className="table-settings mb-4">
        <Button variant="secondary" className="text-white me-3" onClick={handleUpdate}>
          Update About Us<FontAwesomeIcon icon={faAddressCard} className="d-none d-sm-inline ms-1" />
        </Button>
        <Button variant="success" className="text-white me-3" onClick={() => setCreateModal(true)}>
          Create New Feature Content <FontAwesomeIcon icon={faMobile} className="d-none d-sm-inline ms-1" />
        </Button>
      </div>
      <Card border="light" className="bg-white shadow-sm mb-4">
        <Card.Body>
          <h5 className="mb-4 text-primary">About Us</h5>
          <p dangerouslySetInnerHTML={{ __html: settingData.about_us }} />
        </Card.Body>
      </Card>
      <Row>
        {aboutData.map((b, index) => (
          <Col key={index} xs={12} xl={4} lg={4} md={6}>
            <AntCard
              hoverable
              style={{ width: 240 }}
              cover={<img alt="features" src={`${imageUrl}${b.image_url}`} />}
            >
              <Meta title={b.title} description={b.content} />
              <Button size="sm" variant="success" className="text-white m-3" onClick={() => handleEditModal(b)}>
                <FontAwesomeIcon icon={faEdit} />
              </Button>
              <Button size="sm" variant="primary" className="text-white m-3" onClick={() => confirmDelete(b.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </AntCard>
          </Col>))}
      </Row>
      {/* About Content start */}
      <Modal
        title="Update About Us"
        centered
        visible={viewModal}
        footer={null}
        onCancel={() => setViewModal(false)}
      >
        <Form form={form} onFinish={onFinishUpdate} layout="vertical">
          <Form.Item label="About Us" name="about_us" rules={[{ required: true }]}>
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
          <Form.Item>
            <AntButton type="primary" htmlType="submit" loading={loading}>
              Create
            </AntButton>
          </Form.Item>
        </Form>
      </Modal>
      {/* About Content end */}
    </div>
  )
}

export default About
