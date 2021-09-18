import '../styles/howitworks.scss'
import { useEffect } from 'react'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import PageFooter from '../componentParts/footer';
import TopNav from '../componentParts/topNav';
import { useRecoilValueLoadable } from 'recoil';
import { getHome, getHowItWorks } from '../states/home';

function HowItWorks() {
  const data = useRecoilValueLoadable(getHome)
  const dataH = useRecoilValueLoadable(getHowItWorks)
  const home = data.state === "hasValue" ? data.contents : {}
  const howItWorks = dataH.state === "hasValue" && dataH.contents ? dataH.contents : []

  useEffect(() => {
    let acc = document.getElementsByClassName("accordion");
    let i;
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
          panel.style.paddingTop = panel.style.paddingBottom = 0
        } else {
          panel.style.maxHeight = 'max-content';
          panel.style.paddingTop = panel.style.paddingBottom = '1.5%'

        }
      });
    }
    return () => {
      // cleanup
    }
  }, [howItWorks])

  return (
    <div>
      <TopNav />
      <div id='howitworkssection'>
        <Zoom>
          <div className='videoSection'>
            {/* <video controls>
                <source src="https://www.wayapaychat.com/wp-content/uploads/2020/01/Skype_Video2.mp4?_=1" type="video/mp4"/>
                Your browser does not support the video tag.
                </video> */}
            <iframe title="how it work" height="315"
              src={home.feature_video_url} >
            </iframe>
          </div>
        </Zoom>

        <div className='faqs mb-4'>
          {howItWorks.map((h, i) => {
            const dir = (i + 1) % 2 === 1 ? true : false
            // console.log(h.content)
            return (
              <Fade key={h.id} left>
                <div className='mb-3'>
                  <button class="accordion">{h.title}</button>
                  <div class="panel">
                    <p dangerouslySetInnerHTML={{ __html: h.content }} />
                  </div>
                </div>
              </Fade>)
          })}
        </div>
        <PageFooter />
      </div>
    </div>
  )
}

export default HowItWorks