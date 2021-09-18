import PageFooter from '../componentParts/footer'
import GenericJumbotron from '../componentParts/genericJumbotron'
import TopNav from '../componentParts/topNav'
import Fade from 'react-reveal/Fade';
// import Zoom from 'react-reveal/Zoom';
import '../styles/about.scss'
import { useRecoilValueLoadable } from 'recoil';
import { getAboutContent, getSettings } from '../states/home';
import { imageUrl } from '../services/axios';

function About() {
  const data = useRecoilValueLoadable(getAboutContent)
  const dataS = useRecoilValueLoadable(getSettings)
  const settings = dataS.state === "hasValue" ? dataS.contents : {}
  const aboutContent = data.state === "hasValue" ? data.contents : []
  console.log(aboutContent)
  return (
    <div>
      <TopNav />
      <div id='aboutsection' >
        <GenericJumbotron titleText='ABOUT US' desc={settings.about_us} />
        <div id='aboutGrid' className='pb-4 mb-4 px-4 mx-2'>
          {aboutContent.map(about =>
            <Fade bottom key={about.id}>
              <div>
                <img src={`${imageUrl}${about.image_url}`} />
                <div className='text-center'>
                  <h6>{about.title}</h6>
                  <div className='row justify-content-center'>
                    <p className='col  '>{about.content}</p>
                  </div>
                </div>
              </div>
            </Fade>)}
        </div>
        <PageFooter />
      </div>
    </div>
  )
}

export default About