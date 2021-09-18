import PageFooter from '../componentParts/footer'
import TopNav from '../componentParts/topNav'
import Fade from 'react-reveal/Fade';
import { getSettings } from '../states/home';
import { useRecoilValueLoadable } from 'recoil';

function TermsOfUse() {
  const data = useRecoilValueLoadable(getSettings)
  const settings = data.state === "hasValue" ? data.contents : {}
  return (
    <div>
      <TopNav />
      <div id='termsofservice' className='documentPages'>
        <div className="tou-jumbotron py-4 mb-4 pl-4 pb-2" style={{ backgroundImage: 'url(/grain.png)' }}>
          <Fade right>
            <div className="py-4 ml-4 pl-4 row">
              <h2>Terms of Use</h2>
            </div>
          </Fade>
        </div>
        <article >
          <div className="entry-content" dangerouslySetInnerHTML={{ __html: settings.terms_of_use }} />
        </article>
        <PageFooter />
      </div>
    </div>
  )
}

export default TermsOfUse