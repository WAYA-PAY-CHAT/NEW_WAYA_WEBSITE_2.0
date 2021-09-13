import { Card, Button } from '@themesberg/react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ExclamationCircleOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { imageUrl } from '../../../services/axios';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { blogAlert, blogEditor, blogRefresh, blogResponse, editBlogBal, editBlogModal } from '../../../states/blogs';
import { EditModal } from './Modal';
import { EditorState } from "draft-js";
import { Modal } from 'antd';
import { deleteBlog } from '../../../services/apiCalls';
import { getRawData } from '../../../services/utilities';

export const BlogCard = ({ data }) => {

  const setShowModal = useSetRecoilState(editBlogModal);
  const setResponse = useSetRecoilState(blogResponse)
  const setShowAlert = useSetRecoilState(blogAlert);
  const setRefresh = useSetRecoilState(blogRefresh)
  const setEditor = useSetRecoilState(blogEditor)
  const [viewModal, setViewModal] = useState(false)
  const [content, setContent] = useState({})
  const [value, setValue] = useRecoilState(editBlogBal)
  const { confirm } = Modal;

  const handleUpdate = (value) => {
    setShowModal(true)
    if (value.content) {
      const contentState = getRawData(value.content)
      setEditor(EditorState.createWithContent(contentState));
    }
    setValue(value)
    setResponse({})
  }

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
    const res = await deleteBlog(id)
    if (res.status) {
      setResponse({ message: res.message, title: "success" })
      setShowAlert(true)
      setRefresh(date.toTimeString())
    } else {
      setResponse({ message: res.message || res, title: "failed" })
      setShowAlert(true)
    }
  }

  const handleView = (value) => {
    setViewModal(true)
    setContent(value)
  }

  return (
    <Card border="light" className="text-center p-0 mb-4">
      <EditModal value={value} />
      {/* View Blog COntent start */}
      <Modal
        title={content.title}
        centered
        visible={viewModal}
        footer={null}
        onCancel={() => setViewModal(false)}
      >
        <p dangerouslySetInnerHTML={{ __html: content.content }} />
      </Modal>
      {/* View Blog Content end */}

      <div style={{ backgroundImage: `url(${imageUrl}${data.image_url})` }} className="profile-cover rounded-top" />
      <Card.Body className="pb-2">
        {/* <Card.Img src={Profile1} alt="Neil Portrait" className="user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-4" /> */}
        <Card.Title>{data.title}</Card.Title>
        <Card.Subtitle className="fw-normal mb-4">{data.short_content}</Card.Subtitle>
        {/* <Card.Text className="text-gray mb-4">{data.short_content}</Card.Text> */}
        <Button variant="success" size="sm" className="me-2 mb-2">
          <FontAwesomeIcon icon={faEdit} onClick={() => handleUpdate(data)} />
        </Button>
        <Button onClick={() => confirmDelete(data.id)} variant="primary" size="sm" className="me-2 mb-2">
          <FontAwesomeIcon icon={faTrash} />
        </Button>
        <Button onClick={() => handleView(data)} className="me-2 mb-2" variant="secondary" size="sm">
          <FontAwesomeIcon icon={faEye} />
        </Button>
      </Card.Body>
    </Card>
  )
}
