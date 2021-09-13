import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Breadcrumb, InputGroup, Button } from '@themesberg/react-bootstrap';
import React from 'react'
import AdminTable from './Table';
import { adminList, alert, createModal, response } from '../../states/admin';
import { useRecoilState, useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import AdminModal from './Modal';
import AlertToast from '../../components/AlertToast';

const Admin = () => {
  const setShowModal = useSetRecoilState(createModal);
  const [showAlert, setShowAlert] = useRecoilState(alert)
  const [respons, setRespons] = useRecoilState(response)
  const data = useRecoilValueLoadable(adminList)
  const admins = data.state === "hasValue" && data.contents.data ? data.contents.data : []
  const meta = data.state === "hasValue" && data.contents.meta ? data.contents.meta : {}

  const handleCreate = () => {
    setRespons({})
    setShowModal(true)
  }

  return (
    <>
      <AlertToast showAlert={showAlert} setShowAlert={setShowAlert} response={respons} page="Admin" />
      <AdminModal />
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Waya pay</Breadcrumb.Item>
            <Breadcrumb.Item active>Administrators</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Waya Pay Admin</h4>
        </div>
      </div>
      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
          <Col xs={6} md={6} lg={3} xl={4}>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Search" />
            </InputGroup>
          </Col>
          <Col xs={6} md={6} xl={6} className="ps-md-0 text-end">
            <Button variant="secondary" className="text-dark me-3" onClick={handleCreate}>
              Add New Admin <FontAwesomeIcon icon={faUserShield} className="d-none d-sm-inline ms-1" />
            </Button>
          </Col>
        </Row>
      </div>
      <AdminTable data={admins} meta={meta} />
    </>
  )
}

export default Admin
