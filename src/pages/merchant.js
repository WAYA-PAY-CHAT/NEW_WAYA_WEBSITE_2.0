import PageFooter from '../componentParts/footer'
import TopNav from '../componentParts/topNav'
import Fade from 'react-reveal/Fade';
import '../styles/merchant.scss'
import { useRecoilValueLoadable } from 'recoil';
import { getMerchants } from '../states/business';
import { imageUrl } from '../services/axios';
import { getSettings } from '../states/home';

function Merchant() {
  const data = useRecoilValueLoadable(getMerchants)
  const dataS = useRecoilValueLoadable(getSettings)
  const merchants = data.state === "hasValue" ? data.contents : {}
  const settings = dataS.state === "hasValue" ? dataS.contents : {}
  return (
    <div>
      <TopNav />
      <div id="merchantPage" className="">
        <div className="main-jumbotron pb-4 mb-4">
          <Fade right cascade>
            <div className="row">
              <div className='col-md-5 pt-lg-4 mt-4'>
                <h1 className="">{merchants.hero_title}</h1>
                <p className=''>{merchants.hero_description}</p>
                <strong className='pb-3'>Download and sign up for free </strong>
                <div className=' mt-3'>
                  <a href={settings.play_store_link} className='col col-md-4' target='_blank'>
                    <img alt='Google Play Download' src='/google-play-badge.png' className='' />
                  </a>
                  <a className='col col-md-4' href={settings.app_store_link} target='_blank'>
                    <img alt='App Store Download' src='/app-store-badge.png' />
                  </a>
                </div>
              </div>
              <div className="col pt-4">
                <img src={`${imageUrl}${merchants.hero_image_url}`} alt='jumbotron' />
              </div>
            </div>
          </Fade>
        </div>
        <div className='container innerBanner pt-4'>
          <div className='row  justify-content-center'>
            <Fade right>
              <img src={`${imageUrl}${merchants.body1_image_url}`} className='col-sm-12 col-lg-6' alt='QR Code Scan' />
            </Fade>
            <Fade left>
              <div className='col-sm-12 col-lg-5'>
                <h3 className="">{merchants.body1_title}</h3>
                <p className=''>{merchants.body1_description}</p>
              </div>
            </Fade>
          </div>
        </div>
        <div className='jumbotron innerBanner '>
          <div className='row align-end justify-content-center'>
            <Fade right>
              <div className='col-sm-12 col-lg-4 '>
                <h3 className="">{merchants.body2_title}</h3>
                <p className=''>{merchants.body2_description}</p>
              </div>
            </Fade>
            <Fade left>
              <img src={`${imageUrl}${merchants.body2_image_url}`} className='col-sm-12 col-lg-6' alt='security' />
            </Fade>
          </div>
        </div>
        <div className='container innerBanner py-4'>
          <div className='row  except justify-content-center'>
            <Fade right>
              <img src={`${imageUrl}${merchants.body3_image_url}`} alt='open wallet' className='col-sm-12 col-lg-6' />
            </Fade>
            <Fade left>
              <div className='col-sm-12 col-lg-5'>
                <h3 className="">{merchants.body3_title}</h3>
                <p className=''>{merchants.body3_description}</p>
                <div className=' mt-3'>
                  <a href={settings.play_store_link} className='col col-md-4' target='_blank'>
                    <img alt='Google Play Download' src='/google-play-badge.png' className='' />
                  </a>
                  <a className='col col-md-4' href={settings.app_store_link} target='_blank'>
                    <img alt='App Store Download' src='/app-store-badge.png' />
                  </a>
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <PageFooter />
      </div>
    </div>
  )
}

export default Merchant