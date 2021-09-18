import PageFooter from '../componentParts/footer'
import GenericJumbotron from '../componentParts/genericJumbotron'
import TopNav from '../componentParts/topNav'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import '../styles/home.scss'
import { useRecoilValueLoadable } from 'recoil';
import { getHome, getSettings, getFeatures } from '../states/home';
import { imageUrl } from '../services/axios';
// import {useState} from 'react'

function Home() {
  const data = useRecoilValueLoadable(getHome)
  const dataS = useRecoilValueLoadable(getSettings)
  const dataF = useRecoilValueLoadable(getFeatures)
  const home = data.state === "hasValue" ? data.contents : {}
  const settings = dataS.state === "hasValue" ? dataS.contents : {}
  const features = dataF.state === "hasValue" && dataF.contents ? dataF.contents : []
  console.log(home)
  return (
    <div id='homesection'>
      <TopNav className='mb-4' />
      <div className="home-jumbotron py-4 " style={{ backgroundImage: 'url(/grain.png)' }}>
        <div className="py-4 row">
          <Fade left>
            <div className='col-md-6 pt-4 mt-4'>
              <h1 className="">{home.hero_title}</h1>
              <p className=''>{home.hero_description}</p>
              <div className=' mt-3 bannerLinks'>
                <a href={settings.play_store_link} className='col col-md-4' target='_blank'>
                  <img alt='Google Play Download' src='/google-play-badge.png' className='' />
                </a>
                <a className='col col-md-4' href={settings.app_store_link} target='_blank'>
                  <img alt='App Store Download' src='/app-store-badge.png' />
                </a>

              </div>
              <div className='goDown mt-4'>
                <button className='pt-4'>
                  <img src='/pngarrow.png' />
                </button>
              </div>
            </div>
          </Fade>
          <Fade right>
            <img src={`${imageUrl}${home.hero_image_url}`} className="col" alt='jumbotron' />
          </Fade>
        </div>
      </div>
      <Fade bottom>
        <div className='genericJumbo'>
          <GenericJumbotron titleText='About Waya PayChat' desc={settings.about_us} />
        </div>
      </Fade>
      <section className='categories'>
        <div className='row justify-content-center text-center'>
          <Fade bottom>
            <div className='col-sm-12 col-md-4 mt-3'>
              <img src={`${imageUrl}${home.feature1_image_url}`} alt='Pay Bills' className='pb-2' />
              <h6 className='py-4'>{home.feature1_title}</h6>
              <p>{home.feature1_description}</p>
            </div>
            <div className='col-sm-12 col-md-4 px-1'>
              <img src={`${imageUrl}${home.feature2_image_url}`} alt='QR Code Scan' className='pb-2' />
              <h6 className='py-4'>{home.feature2_title}</h6>
              <p>{home.feature2_description}</p>
            </div>
            <div className='col-sm-12 col-md-4'>
              <img src={`${imageUrl}${home.feature3_image_url}`} alt='Socialize' className='pb-2' />
              <h6 className='py-4'>{home.feature3_title}</h6>
              <p>{home.feature3_description}</p>
            </div>
          </Fade>
        </div>
      </section>
      <section className='features text-center' style={{ backgroundImage: 'url(/grain.png)' }}>
        <h4>Waya PayChat Unique Features</h4>
        <div className='infographic row'>
          <Fade big>
            <div className='col' className='singlePhone'>
              <img src={home.feature_image_url ? `${imageUrl}${home.feature_image_url}` : '/singlePhone.png'} />
            </div>
          </Fade>
          <Fade right cascade>
            <div className='col'>
              {features.map(feature => (
                <div key={feature.id} className='special-row'>
                  <div className=''>
                    <img src={`${imageUrl}${feature.image_url}`} />
                  </div>
                  <div className='theTexts'>
                    <h6>{feature.title}</h6>
                    <p>
                      {feature.description}
                    </p>
                  </div>
                </div>))}
            </div>
          </Fade>
        </div>
      </section>
      <section className='features-two row'>
        <Fade right cascade>
          <ul className="timeline col">
            <li className="timeline-item">
              <div className="timeline-arrow"></div>
              <div>
                <strong>{home.feature4_title}</strong>
                <p className="">{home.feature4_description}</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-arrow"></div>
              <div>
                <strong>{home.feature5_title}</strong>
                <p className="">{home.feature5_description}</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-arrow"></div>
              <div>
                <strong >{home.feature6_title}</strong>
                <p className=" font-weight-light">{home.feature6_description}</p>
              </div>
            </li>
          </ul>
        </Fade>
        <Zoom>
          <div className='col thevideoSection'>
            <iframe title="how it work" height="315"
              src={home.feature_video_url} >
            </iframe>
            {/* <video controls>
              <source src={home.feature_video_url} type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
          </div>
        </Zoom>
      </section>
      <Zoom>
        <div className="last-jumbotron pt-1 container mb-4" style={{ backgroundImage: 'url(/grain.png)' }}>
          <div className=" row">
            <div className='col-md-3 col-lg-4'>
              <img src={`${imageUrl}${home.download_app_image_url}`} alt='Phone in hand' />
            </div>
            <div className='col'>
              <h1 className="">Download <br /> the app</h1>
              <p className='py-2'>Download Waya PayChat and start enjoying our great features.</p>
              <div className='row mt-3 bannerLinks'>
                <a href={settings.play_store_link} className='col col-md-4' target='_blank'>
                  <img alt='Google Play Download' src='/google-play-badge.png' className='' />
                </a>
                <a className='col col-md-4' href={settings.app_store_link} target='_blank'>
                  <img alt='App Store Download' src='/app-store-badge.png' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Zoom>
      <PageFooter />
    </div>
  )
}

export default Home