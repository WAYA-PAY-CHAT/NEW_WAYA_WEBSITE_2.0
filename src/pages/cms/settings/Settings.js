import React from 'react'
import { Breadcrumb } from '@themesberg/react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
// import { Table } from 'antd';
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { settingAlert, settingResponse, settings, socialLink } from '../../../states/settings';
import SocialLink from './SocialLink';
import OtherSetting from './OtherSetting';
import AlertToast from '../../../components/AlertToast';

const Settings = () => {
  const data = useRecoilValueLoadable(socialLink)
  const settingsData = useRecoilValueLoadable(settings)
  const [showAlert, setShowAlert] = useRecoilState(settingAlert);
  const response = useRecoilValue(settingResponse)
  const socialLinkList = data.state === "hasValue" && data.contents ? data.contents : {}
  const settingDataList = settingsData.state === "hasValue" ? settingsData.contents : {}
  // const columns = [
  //   {
  //     title: '#',
  //     dataIndex: 'id',
  //     key: 'id',
  //   },
  //   {
  //     title: 'Email',
  //     dataIndex: 'email',
  //     key: 'email',
  //   },
  //   {
  //     title: 'Date',
  //     dataIndex: 'created_at',
  //     key: 'created_at',
  //     render: text => <p>{new Date(text).toDateString()}</p>
  //   },
  // ];
  return (
    <div>
      <AlertToast showAlert={showAlert} setShowAlert={setShowAlert} response={response} page="Setings" />
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faCog} /></Breadcrumb.Item>
            <Breadcrumb.Item>Waya pay</Breadcrumb.Item>
            <Breadcrumb.Item active>Setting</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Other Settings</h4>
        </div>
      </div>
      {/* <Row>
        <Col xs={12} xl={6} lg={6}> */}
      <SocialLink data={socialLinkList} />
      {/* </Col>
        <Col> */}
      <OtherSetting data={settingDataList} />
      {/* </Col>
      </Row> */}
    </div>
  )
}

export default Settings
