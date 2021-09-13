import React from 'react'
import { Breadcrumb, Row, Col, InputGroup, Form, Button } from '@themesberg/react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useRecoilState, useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { blogAlert, blogList, blogResponse, createBlogModal } from '../../../states/blogs';
import { BlogCard } from './BlogCard';
import AlertToast from '../../../components/AlertToast';
import BlogModal from './Modal';

const Blogs = () => {
  const data = useRecoilValueLoadable(blogList)
  const [response, setResponse] = useRecoilState(blogResponse)
  const setShowModal = useSetRecoilState(createBlogModal)
  const [showAlert, setShowAlert] = useRecoilState(blogAlert)
  const blogs = data.state === "hasValue" && data.contents.data ? data.contents.data : []
  // const meta = data.state === "hasValue" && data.contents.meta ? data.contents.meta : {}
  // console.log(meta)

  const handleCreate = () => {
    setResponse({})
    setShowModal(true)
  }

  return (
    <div>
      <AlertToast showAlert={showAlert} setShowAlert={setShowAlert} response={response} page="Blog" />
      <BlogModal />
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Waya pay</Breadcrumb.Item>
            <Breadcrumb.Item active>Blogs</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Blogs Page</h4>
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
              Create Blog <FontAwesomeIcon icon={faGlobe} className="d-none d-sm-inline ms-1" />
            </Button>
          </Col>
        </Row>
      </div>
      <Row>
        {blogs.map((b, index) => (
          <Col key={index} xs={12} xl={4} lg={4} md={6}>
            <BlogCard data={b} />
          </Col>))}
      </Row>
    </div>
  )
}

export default Blogs
