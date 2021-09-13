import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faGlobe, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, Button, Row, Col } from '@themesberg/react-bootstrap'
import { Form, Input, Modal, Button as AntButton } from 'antd'
import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { updateSocial } from '../../../services/apiCalls'
import { settingAlert, settingResponse, socialRefresh } from '../../../states/settings'

const SocialLink = ({ data }) => {
  const [viewModal, setViewModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const setShowAlert = useSetRecoilState(settingAlert);
  const setResponse = useSetRecoilState(settingResponse)
  const setRefresh = useSetRecoilState(socialRefresh)
  const [form] = Form.useForm()

  const onFinishUpdate = async (val) => {
    const date = new Date()
    setLoading(true)
    const res = await updateSocial(val)
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
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Row className="justify-content-between align-items-center">
        <Col xs={6} md={6} lg={6} xl={6}>
          <h5 className="mb-4 text-primary m-3">Social Link List</h5>
        </Col>
        <Col xs={6} md={6} xl={6} className="ps-md-0 text-end">
          <Button variant="secondary" className="text-white me-3" onClick={() => { setViewModal(true) }}>
            Update Links<FontAwesomeIcon icon={faGlobe} className="d-none d-sm-inline ms-1" />
          </Button>
        </Col>
      </Row>

      <Card.Body>
        <p className="mb-1 text-dark mr-3"><FontAwesomeIcon className="mr-5" icon={faFacebook} /> &nbsp;{data.facebook}</p>
        <p className="mb-1 text-dark mr-3"><FontAwesomeIcon className="mr-5" icon={faTwitter} /> &nbsp;{data.twitter}</p>
        <p className="mb-1 text-dark mr-3"><FontAwesomeIcon className="mr-5" icon={faInstagram} /> &nbsp;{data.instagram}</p>
        <p className="mb-1 text-dark mr-3"><FontAwesomeIcon className="mr-5" icon={faLinkedin} /> &nbsp;{data.linked_in}</p>
        <p className="mb-1 text-dark mr-3"><FontAwesomeIcon className="mr-5" icon={faEnvelope} /> &nbsp;{data.email}</p>
        <p className="mb-1 text-dark mr-3"><FontAwesomeIcon className="mr-5" icon={faPhoneAlt} />&nbsp;{data.phone}</p>
      </Card.Body>
      {/* Social link start */}
      <Modal
        title="Update Social Link"
        centered
        visible={viewModal}
        footer={null}
        onCancel={() => setViewModal(false)}
      >
        <Form form={form} onFinish={onFinishUpdate} layout="horizontal" initialValues={{ facebook: data.facebook, twitter: data.twitter, instagram: data.instagram, linked_in: data.linked_in, email: data.email, phone: data.phone }}>
          <Form.Item label="Facebook url" name="facebook" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Twitter url" name="twitter" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Instagram url" name="instagram" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="LinkedIn url" name="linked_in" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Phone Number" name="phone" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item>
            <AntButton type="primary" htmlType="submit" loading={loading}>
              Update
            </AntButton>
          </Form.Item>
        </Form>
      </Modal>
      {/* Social link end */}
    </Card>
  )
}

export default SocialLink
