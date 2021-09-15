import React from 'react'
import { Breadcrumb } from '@themesberg/react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import BusinessCard from './BusinessCard';
import { agents, businessAlert, businessResponse } from '../../../states/business';
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil';
import AlertToast from '../../../components/AlertToast';

const Agents = () => {
  const data = useRecoilValueLoadable(agents)
  const merchantList = data.state === "hasValue" ? data.contents : {}
  const [showAlert, setShowAlert] = useRecoilState(businessAlert);
  const response = useRecoilValue(businessResponse)

  return (
    <div>
      <AlertToast showAlert={showAlert} setShowAlert={setShowAlert} response={response} page="Merchant" />
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Waya pay</Breadcrumb.Item>
            <Breadcrumb.Item active>Agents</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Agent Page</h4>
        </div>
      </div>
      <BusinessCard page="merchant" img={merchantList.hero_image_url} description={merchantList.hero_description} title={merchantList.hero_title} type="hero" url="/admin/business/agent/hero" />
      <BusinessCard page="agent" img={merchantList.why_become_agent_image} description={merchantList.body1_description} title={merchantList.body1_title} type="body" url="/admin/business/agent/body" />
    </div>
  )
}

export default Agents
