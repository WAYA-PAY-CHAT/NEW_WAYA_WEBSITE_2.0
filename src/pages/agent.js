import PageFooter from '../componentParts/footer'
import TopNav from '../componentParts/topNav'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import '../styles/agent.scss'
import { useRecoilValueLoadable } from 'recoil';
import { getAgents, getHowToJoin } from '../states/business';
import { getSettings } from '../states/home';
import { imageUrl } from '../services/axios';

function Agent() {
  const data = useRecoilValueLoadable(getAgents)
  const dataS = useRecoilValueLoadable(getSettings)
  const dataH = useRecoilValueLoadable(getHowToJoin)
  const agents = data.state === "hasValue" ? data.contents : {}
  const settings = dataS.state === "hasValue" ? dataS.contents : {}
  const steps = dataH.state === "hasValue" ? dataH.contents : []
  const boss = agents.be_your_own_boss ? agents.be_your_own_boss.split("*") : []
  return (
    <div>
      <TopNav />
      <div id='agentsection' >
        <Fade right cascade>
          <div className="about-jumbotron pb-4 mb-4 pl-4 pb-2">
            <div className="pb-4 row justify-content-center">
              <div className='col-md-5 pt-4'>
                <div className='pb-4'>
                  <h1 className="">{agents.hero_title}</h1>
                  <p>{agents.hero_description}</p>
                </div>
              </div>
              <div className='col-md-6'>
                <img src={`${imageUrl}${agents.hero_image_url}`} alt='banner' />
              </div>
            </div>
            <div className=' socials justify-content-start pl-4'>
              <a href={settings.play_store_link} className='col col-md-4' target='_blank'>
                <img alt='Google Play Download' src='/google-play-badge.png' className='' />
              </a>
              <a className='col col-md-4' href={settings.app_store_link} target='_blank'>
                <img alt='App Store Download' src='/app-store-badge.png' />
              </a>
            </div>
          </div>
        </Fade>
        <div className='banner-two pt-4 container-fluid'>
          <Zoom cascade>
            <div className='row justify-content-center'>
              <h3 className='col-sm-12 text-center'>Why become a Waya Agent?</h3>
              <img src={`${imageUrl}${agents.why_become_agent_image}`} className='col-sm-12' alt='Waya Agent Options' />
            </div>
          </Zoom>
        </div>
        <div className='last-banner pt-0'>
          <div className="bottom-jumbotron mb-1">
            <div className="py-4 row justify-content-center">

              <div className='col-sm-12 col-lg-5 pt-4 pl-4 mt-4'>
                <div className='pb-4'>
                  <h5 className="text-center">How to join</h5>
                  <Fade bottom cascade>
                    <div className=' justify-content-center last-banner-phones'>
                      {steps.map(s => (<div className='single'>
                        <div>
                          <img className='mt-2' src={`${imageUrl}${s.image_url}`} />
                        </div>
                        <p className='mt-4 text-center'>{s.title}</p>
                      </div>))}
                    </div>
                  </Fade>
                </div>
              </div>
              <Fade bottom>
                <div className='col-sm-12 top-timeline col-lg-6 pt-4 mt-4'>
                  <h5 className="">be your own boss</h5>
                  <p>{agents.hero_description}</p>
                  <div>
                    <Fade right cascade>
                      <ul className="timeline">
                        {boss.map((b, index) => (
                          <li key={index} className="timeline-item">
                            <div className="timeline-arrow"></div>
                            <p className="ml-2 font-weight-light">{b}</p>
                          </li>))}
                      </ul>
                    </Fade>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
          <div className='ending container-fluid ' style={{ backgroundImage: 'url(/wave.png)' }}>
            <Fade right>
              <div className="row justify-content-center">
                <div className='col-sm-8 col-md-6 pt-4 pb-4 pr-0 pl-4 mt-4'>
                  <div className='pb-md-4'>
                    <h2 className="">sign up now to join for free</h2>
                  </div>
                  <div className='row justify-content-left last-socials mt-4'>
                    <a href={settings.play_store_link} className='col col-md-4' target='_blank'>
                      <img alt='Google Play Download' src='/google-play-badge.png' className='' />
                    </a>
                    <a className='col col-md-4' href={settings.app_store_link} target='_blank'>
                      <img alt='App Store Download' src='/app-store-badge.png' />
                    </a>

                  </div>
                </div>
                <div className='col-sm-3 col-md-5 pl-0 lastphone'>
                  <img src={`${imageUrl}${agents.sign_up_image_url}`} alt='banner pic' />
                </div>
              </div>
            </Fade>
          </div>
          <section className='container-fluid last-form'>
            <Zoom>
              <h4 className='text-center'>sign up now as an Agent</h4>
              <form className='pb-4'>
                <label>Name</label> <br />
                <div className='inputGroup row justify-content-between ml-0'>

                  <input type='text' className='col-sm-5' placeholder='First Name' required />

                  <input type='text' className='col-sm-5' placeholder='Last Name' required />
                </div>
                <div className='row'>
                  <label for='email' className='col-sm-7'>Email</label>
                  <label for='email' className='col pl-2 desktopView'>Phone</label>
                </div>
                <div className='inputGroup row justify-content-between ml-0'>
                  <input type='email' className='col-sm-5' placeholder='Email' required />
                  <label for='email' className='col pl-2 mobileView'>Phone</label>
                  <input type='tel' className='col-sm-5' placeholder='Phone Number' required />
                </div>
                <div className='row'>
                  <label for='soo' className='col-sm-7'>State  </label>
                  <label for='lga' className='col pl-2 desktopView'>LGA  </label>
                </div>
                <div className='inputGroup row justify-content-between ml-0'>


                  <input type='text' id='soo' className='col-sm-5' placeholder='State' required />

                  <input type='text' className='col-sm-5' placeholder='LGA' required />

                </div>
                <div className='row'>
                  <label for='city' className='col-sm-7'>City  </label>
                  <label for='house' className='col pl-2 desktopView'>House Address  </label>
                </div>
                <div className='inputGroup row justify-content-between ml-0'>


                  <input type='text' id='soo' className='col-sm-5' placeholder='City' required />

                  <input type='text' className='col-sm-5' placeholder='Address (Including House Number)' required />

                </div>
                <div className='text-center pt-4'>
                  <button type='submit' className='orange mb-4'>Submit<span><img src='/rightArr.png' /></span></button>
                  <p className='py-4' style={{ fontSize: '13px' }}>Do not submit confidential information such as credit card details and account passwords. Report Abuse</p>
                  <img src='/zoho.png' />
                </div>

              </form>
            </Zoom>
          </section>
        </div>
        <PageFooter />
      </div>
    </div>
  )
}

export default Agent