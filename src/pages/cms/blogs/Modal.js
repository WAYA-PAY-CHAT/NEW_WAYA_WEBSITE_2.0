import React, { useState } from "react";
import { Form, Upload, Button, Input, Drawer } from 'antd';
import { InboxOutlined } from '@ant-design/icons'
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { blogAlert, createBlogModal, editBlogBal, editBlogModal, blogRefresh, blogResponse, blogEditor } from "../../../states/blogs";
import { createBlogs, updateBlogs } from "../../../services/apiCalls";
import { Editor } from "react-draft-wysiwyg";
import { dummyRequest, getHtml } from "../../../services/utilities";

const BlogModal = () => {
  const [loading, setLoading] = useState(false)
  const setShowAlert = useSetRecoilState(blogAlert);
  const setResponse = useSetRecoilState(blogResponse)
  const setRefresh = useSetRecoilState(blogRefresh)
  const [showModal, setShowModal] = useRecoilState(createBlogModal);
  const [file, setFile] = useState("")
  const [form] = Form.useForm();
  const [editor, setEditor] = useState("")

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
    if (file !== "") {
      const fd = new FormData();
      fd.append('title', val.title)
      fd.append('short_content', val.short_content)
      fd.append('content', getHtml(editor))
      fd.append('blog_image', file);
      const res = await createBlogs(fd)
      if (res.status) {
        setResponse({ message: res.message, title: "success" })
        setShowAlert(true)
        setRefresh(date.toTimeString())
        setShowModal(false)
        setFile("")
        setEditor("")
        form.resetFields()
      } else {
        setResponse({ message: res.message || res, title: "failed" })
        setShowAlert(true)
      }
    }
    setLoading(false)
  }

  const onEditorStateChange = editorState => {
    setEditor(editorState);
  };
  return (
    <Drawer
      title="Create New Blog"
      placement="right"
      width={500}
      closable={false}
      onClose={() => setShowModal(false)}
      visible={showModal}
    >
      <div className="card">
        <div className="card-body">
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Form.Item label="Blog Title" name="title" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Blog Description" name="short_content" rules={[{ required: true }]}>
              <Input.TextArea />
            </Form.Item>
            <Form.Item label="Blog Content" name="content" rules={[{ required: true }]}>
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
            <Form.Item >
              <Upload onChange={handleChange} customRequest={dummyRequest} maxCount={1}>
                <Button icon={<InboxOutlined />}>Upload Blog Image</Button>
              </Upload>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>
                Create
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Drawer>
  )
}
export default BlogModal

export const EditModal = () => {
  const [loading, setLoading] = useState(false)
  const setShowAlert = useSetRecoilState(blogAlert);
  const setResponse = useSetRecoilState(blogResponse)
  const setRefresh = useSetRecoilState(blogRefresh)
  const [showModal, setShowModal] = useRecoilState(editBlogModal);
  const value = useRecoilValue(editBlogBal);
  const [editor, setEditor] = useRecoilState(blogEditor);
  const [file, setFile] = useState("")
  const [form] = Form.useForm();


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
    fd.append('short_content', val.short_content)
    fd.append('content', getHtml(editor))
    fd.append('blog_image', file);
    fd.append('id', val.id);
    fd.append('image_url', val.image_url);
    const res = await updateBlogs({ data: fd, id: val.id })
    if (res.status) {
      setResponse({ message: res.message, title: "success" })
      setShowAlert(true)
      setRefresh(date.toTimeString())
      setShowModal(false)
      setFile("")
      setEditor("")
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
    <Drawer
      title="Create New Blog"
      placement="right"
      width={500}
      closable={false}
      onClose={() => setShowModal(false)}
      visible={showModal}
    >
      <div className="card">
        <div className="card-body">
          <Form form={form} layout="vertical" onFinish={handleSubmit} initialValues={{ title: value.title, short_content: value.short_content, id: value.id, image_url: value.image_url }}>
            <Form.Item label="Blog Title" name="title" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item hidden name="id">
              <Input />
            </Form.Item>
            <Form.Item label="Blog Description" name="short_content" rules={[{ required: true }]}>
              <Input.TextArea />
            </Form.Item>
            <Form.Item label="Blog Content" name="content" rules={[{ required: true }]}>
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
        </div>
      </div>
    </Drawer>
  )
}
