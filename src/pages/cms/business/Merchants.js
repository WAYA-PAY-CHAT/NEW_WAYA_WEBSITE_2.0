import React from 'react'
import { Breadcrumb } from '@themesberg/react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import BusinessCard from './BusinessCard';
import { businessAlert, businessResponse, merchants } from '../../../states/business';
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil';
import AlertToast from '../../../components/AlertToast';

const Merchant = () => {
  const data = useRecoilValueLoadable(merchants)
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
            <Breadcrumb.Item active>Merchants</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Merchants Page</h4>
        </div>
      </div>
      <BusinessCard page="merchant" img={merchantList.hero_image_url} description={merchantList.hero_description} title={merchantList.hero_title} type="hero" url="/admin/business/merchant/hero" />
      <BusinessCard page="merchant" img={merchantList.body1_image_url} description={merchantList.body1_description} title={merchantList.body1_title} type="body" url="/admin/business/merchant/body/1" />
      <BusinessCard page="merchant" img={merchantList.body2_image_url} description={merchantList.body2_description} title={merchantList.body2_title} type="body" url="/admin/business/merchant/body/2" />
      <BusinessCard page="merchant" img={merchantList.body3_image_url} description={merchantList.body3_description} title={merchantList.body3_title} type="body" url="/admin/business/merchant/body/3" />
    </div>
  )
}

export default Merchant
