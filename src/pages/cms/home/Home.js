import React, { useState } from 'react'
import { Breadcrumb, Button, Card, Row, Col } from '@themesberg/react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation, faHome } from '@fortawesome/free-solid-svg-icons';
import { Form, Input, Modal, Button as AntButton, Table, Space, Tag, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons'
import { useRecoilState, useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { createFeature, updateFeature } from '../../../services/apiCalls';
import AlertToast from '../../../components/AlertToast';
import { featureAlert, featureRefresh, featureResponse, features, homePage } from '../../../states/home';
import { dummyRequest } from '../../../services/utilities';
import { imageUrl } from '../../../services/axios';
import HomeCard from './HomeCard';
import MediaCard from './MediaCard';

const Home = () => {
  const data = useRecoilValueLoadable(features)
  const dataH = useRecoilValueLoadable(homePage)
  const [viewModal, setViewModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState({})
  const [file, setFile] = useState("")
  const [showAlert, setShowAlert] = useRecoilState(featureAlert);
  const [response, setResponse] = useRecoilState(featureResponse)
  const setRefresh = useSetRecoilState(featureRefresh)
  const [form] = Form.useForm()
  const { confirm } = Modal;
  const featureList = data.state === "hasValue" && data.contents ? data.contents : []
  const home = dataH.state === "hasValue" && dataH.contents ? dataH.contents : []

  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Image',
      dataIndex: 'image_url',
      key: 'image_url',
      render: text => <img alt="features" src={`${imageUrl}${text}`} />
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Status',
      dataIndex: 'visible',
      key: 'visible',
      render: text => <Tag color={text ? "#2db7f5" : "#f50"}>{text ? "Show" : "Hide"}</Tag>
    },
    {
      title: 'Action',
      dataIndex: 'id',
      key: 'id',
      render: (id, record) => {
        const action = record.visible ? "Hide" : "Show"
        return (
          <Space size="middle">
            <AntButton type="ghost" onClick={() => handleUpdateModal(record)}>Edit </AntButton>
            <AntButton type="danger" onClick={() => confirmAction(id, action)}>{action}</AntButton>
          </Space>
        )
      },
    },
  ];

  const confirmAction = (id, action) => {
    confirm({
      title: `Are you sure you want to ${action} this Contact?`,
      icon: <FontAwesomeIcon icon={faExclamation} color="primary" />,
      content: 'Click Ok to continue',
      onOk() {
        handleShowHide(id, action.toLowerCase())
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  const handleShowHide = async (id, type) => {
    const date = new Date()
    const res = await updateFeature({ data: {}, type, id })
    if (res.status) {
      setResponse({ message: res.message, title: "success" })
      setShowAlert(true)
      setRefresh(date.toTimeString())
    } else {
      setResponse({ message: res.message || res, title: "failed" })
      setShowAlert(true)
    }
  }

  const onFinish = async (val) => {
    setLoading(true)
    const date = new Date()
    const fd = new FormData();
    fd.append('title', val.title)
    fd.append('description', val.description)
    fd.append('feature_image', file);
    const res = await createFeature(fd)
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

  const onFinishUpdate = async (val) => {
    setLoading(true)
    const date = new Date()
    const fd = new FormData();
    fd.append('title', val.title)
    fd.append('description', val.description)
    fd.append('id', val.id)
    fd.append('image_url', val.image_url)
    fd.append('feature_image', file);
    const res = await updateFeature({ data: fd, type: "update", id: val.id })
    if (res.status) {
      setResponse({ message: res.message, title: "success" })
      setShowAlert(true)
      setRefresh(date.toTimeString())
      setEditModal(false)
    } else {
      setResponse({ message: res.message || res, title: "failed" })
      setShowAlert(true)
    }
    setLoading(false)
  }

  const handleUpdateModal = (val) => {
    setEditModal(true)
    setValue(val)
  }

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

  return (
    <div>
      <AlertToast showAlert={showAlert} setShowAlert={setShowAlert} response={response} page="Home" />
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Waya pay</Breadcrumb.Item>
            <Breadcrumb.Item active>Home</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Home Page</h4>
        </div>
      </div>
      <HomeCard img={home.hero_image_url} description={home.hero_description} title={home.hero_title} type="hero" url="/admin/home_page/hero" />
      <Row>
        <Col xs={12} xl={4} lg={4}>
          <HomeCard featureImg={true} img={home.feature1_image_url} description={home.feature1_description} title={home.feature1_title} type="feature" url="/admin/home_page/feature/1" />
        </Col>
        <Col xs={12} xl={4} lg={4}>
          <HomeCard featureImg={true} img={home.feature2_image_url} description={home.feature2_description} title={home.feature2_title} type="feature" url="/admin/home_page/feature/2" />
        </Col>
        <Col xs={12} xl={4} lg={4}>
          <HomeCard featureImg={true} img={home.feature3_image_url} description={home.feature3_description} title={home.feature3_title} type="feature" url="/admin/home_page/feature/3" />
        </Col>
      </Row>
      <Row>
        <Col xs={12} xl={4} lg={4}>
          <HomeCard featureImg={false} img={home.feature4_image_url} description={home.feature4_description} title={home.feature4_title} type="feature" url="/admin/home_page/feature/4" />
        </Col>
        <Col xs={12} xl={4} lg={4}>
          <HomeCard featureImg={false} img={home.feature5_image_url} description={home.feature5_description} title={home.feature5_title} type="feature" url="/admin/home_page/feature/5" />
        </Col>
        <Col xs={12} xl={4} lg={4}>
          <HomeCard featureImg={false} img={home.feature6_image_url} description={home.feature6_description} title={home.feature6_title} type="feature" url="/admin/home_page/feature/6" />
        </Col>
      </Row>
      <div className="table-settings mb-4">
        <Button variant="success" className="text-white me-3" onClick={() => setViewModal(true)}>
          Create New Feature <FontAwesomeIcon icon={faHome} className="d-none d-sm-inline ms-1" />
        </Button>
      </div>
      <Card border="light" className="bg-white shadow-sm mb-4">
        <Card.Body>
          <h5 className="mb-4 text-primary">Feature List</h5>
          <Table columns={columns} loading={loading} pagination={false} dataSource={featureList} rowKey="id" />
        </Card.Body>
      </Card>
      <MediaCard img={home.download_app_image_url} video_url={home.feature_video_url} url="/admin/home_page/others" />

      {/*create feature start */}
      <Modal
        title="Create New Feature"
        centered
        visible={viewModal}
        footer={null}
        onCancel={() => setViewModal(false)}
      >
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item label="Title" name="title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item >
            <Upload onChange={handleChange} customRequest={dummyRequest} maxCount={1}>
              <AntButton icon={<InboxOutlined />}>Upload Feature Image</AntButton>
            </Upload>
          </Form.Item>
          <Form.Item>
            <AntButton type="primary" htmlType="submit" loading={loading}>
              Create
            </AntButton>
          </Form.Item>
        </Form>
      </Modal>
      {/*create feature end */}

      {/* update feature start */}
      <Modal
        title="Update Feature"
        centered
        visible={editModal}
        footer={null}
        onCancel={() => setEditModal(false)}
      >
        <Form form={form} onFinish={onFinishUpdate} layout="vertical" initialValues={{ title: value.title, description: value.description, id: value.id, image_url: value.image_url }}>
          <Form.Item label="Title" name="title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="id" hidden>
            <Input />
          </Form.Item>
          <Form.Item >
            <Upload onChange={handleChange} customRequest={dummyRequest} maxCount={1}>
              <AntButton icon={<InboxOutlined />}>Upload Feature Image</AntButton>
            </Upload>
          </Form.Item>
          <Form.Item>
            <AntButton type="primary" htmlType="submit" loading={loading}>
              Update
            </AntButton>
          </Form.Item>
        </Form>
      </Modal>
      {/* update feature end */}
    </div>
  )
}

export default Home
