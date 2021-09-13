import React, { useState } from "react";
import { Button, Modal, Form, InputGroup } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnlockAlt, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { useRecoilState, useSetRecoilState } from "recoil";
import { alert, createModal, editBal, editModal, refresh, response } from "../../states/admin";
import { fetchAdmin } from "../../services/apiCalls";


const AdminModal = () => {
  const [data, setData] = useState({ email: "", password: "", full_name: "" })
  const [loading, setLoading] = useState(false)
  const setShowAlert = useSetRecoilState(alert);
  const setResponse = useSetRecoilState(response)
  const setRefresh = useSetRecoilState(refresh)
  const [showModal, setShowModal] = useRecoilState(createModal);

  const handleClose = () => setShowModal(false);

  const handleChange = (e) => {
    const { value, name } = e.target
    setData(data => ({ ...data, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const date = new Date()
    setLoading(true)
    const res = await fetchAdmin({ data, method: "POST" })
    if (res.status) {
      setResponse({ message: res.message, title: "success" })
      setShowAlert(true)
      setRefresh(date.toTimeString())
      handleClose()
    } else {
      setResponse({ message: res.message || res, title: "failed" })
      setShowAlert(true)
    }
    setLoading(false)
  }
  return (
    <Modal as={Modal.Dialog} centered show={showModal} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title className="h6">Create New Admin</Modal.Title>
        <Button variant="close" aria-label="Close" onClick={handleClose} />
      </Modal.Header>
      <Modal.Body>
        <Form className="mt-4" onSubmit={(e) => handleSubmit(e)}>
          <Form.Group id="name" className="mb-4">
            <Form.Label>Your Full Name</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faUser} />
              </InputGroup.Text>
              <Form.Control onChange={handleChange} required name="full_name" type="text" placeholder="josh morony" />
            </InputGroup>
          </Form.Group>
          <Form.Group id="email" className="mb-4">
            <Form.Label>Your Email</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faEnvelope} />
              </InputGroup.Text>
              <Form.Control onChange={handleChange} required name="email" type="email" placeholder="example@company.com" />
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <Form.Group id="password" className="mb-4">
              <Form.Label>Your Password</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faUnlockAlt} />
                </InputGroup.Text>
                <Form.Control onChange={handleChange} name="password" required type="password" placeholder="Password" />
              </InputGroup>
            </Form.Group>
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            {loading ? "Loading..." : "Create"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default AdminModal

export const EditModal = () => {
  const [data, setData] = useRecoilState(editBal)
  const [loading, setLoading] = useState(false)
  const setShowAlert = useSetRecoilState(alert);
  const setResponse = useSetRecoilState(response)
  const setRefresh = useSetRecoilState(refresh)
  const [showModal, setShowModal] = useRecoilState(editModal);

  const handleClose = () => setShowModal(false);

  const handleChange = (e) => {
    const { value, name } = e.target
    setData(data => ({ ...data, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const date = new Date()
    setLoading(true)
    const res = await fetchAdmin({ data, method: "PUT" })
    if (res.status) {
      setResponse({ message: res.message, title: "success" })
      setShowAlert(true)
      setRefresh(date.toTimeString())
      handleClose()
    } else {
      setResponse({ message: res.message || res, title: "failed" })
      setShowAlert(true)
    }
    setLoading(false)
  }
  return (
    <Modal as={Modal.Dialog} centered show={showModal} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title className="h6">Update Admin</Modal.Title>
        <Button variant="close" aria-label="Close" onClick={handleClose} />
      </Modal.Header>
      <Modal.Body>
        <Form className="mt-4" onSubmit={(e) => handleSubmit(e)}>
          <Form.Group id="name" className="mb-4">
            <Form.Label>Your Full Name</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faUser} />
              </InputGroup.Text>
              <Form.Control value={data.full_name} onChange={handleChange} required name="full_name" type="text" placeholder="josh morony" />
            </InputGroup>
          </Form.Group>
          <Form.Group id="email" className="mb-4">
            <Form.Label>Your Email</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faEnvelope} />
              </InputGroup.Text>
              <Form.Control value={data.email} onChange={handleChange} required name="email" type="email" placeholder="example@company.com" />
            </InputGroup>
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            {loading ? "Loading..." : "Update"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}