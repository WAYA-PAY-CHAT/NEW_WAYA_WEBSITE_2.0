import { useState } from 'react';
import Fade from 'react-reveal/Zoom';
import { useRecoilValueLoadable } from 'recoil';
import { sendData } from '../services/apiCalls';
import { getSocialLinks } from '../states/contact';
import '../styles/footer.scss'

function PageFooter() {
  const data = useRecoilValueLoadable(getSocialLinks)
  const social = data.state === "hasValue" ? data.contents : {}
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState({ show: false })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const res = await sendData({ data: { email }, url: "subscribe" })
    if (res.status) {
      setResponse({ status: "success", message: res.message, show: true })
      setEmail("")
    } else {
      setResponse({ status: "warning", message: res.message || res, show: true })
    }
    setLoading(false)
  }
  return (
    <footer>
      {response.show &&
        <div class={`alert alert-${response.status}`} role="alert">
          {response.message}
        </div>}
      <Fade right cascade>
        <div className='top row' style={{ backgroundImage: 'url(/chat.png)' }}>
          <Fade right cascade>
            <div className='col mr-4 justify-content-between'>
              <h4>Customer Support</h4>
              <p>If you have any questions or want to know more about Waya PayChat
                and our services, check our FAQ or contact our Customer Support</p>
              <div className='contacts row'>
                <div className='col-sm-3 col-md-12 col-lg-3 mr-4'>
                  <a href={`tel:${social.phone}`}>
                    <button type='submit' className='orange'>Contact Us <span><img src='/rightArr.png' /></span></button>
                  </a>
                </div>
                <div className='col col-md-12 col-lg-8 row socials' >
                  <div className='col ml-4 pt-1 pl-4'>
                    <a href={social.twitter} target='_blank'>
                      <img src='/twitter.png' style={{ maxWidth: '50%' }} alt='twitter' />
                    </a>
                  </div>
                  <div className='col'>
                    <a href={social.facebook} target='_blank'>
                      <img src='/facebook.png' style={{ maxWidth: '30%' }} alt='facebook' />
                    </a>
                  </div>
                  <div className='col'>
                    <a href={social.instagram} target='_blank'>
                      <img src='/instagram.png' style={{ maxWidth: '55%' }} alt='instagram' />
                    </a>
                  </div>
                  <div className='col'>
                    <a href={social.linked_in} target='_blank'>
                      <img src='/linkedin.png' style={{ maxWidth: '55%' }} alt='linkedin' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='inputs col pl-4 pt-4 mt-3 ml-4'>
              <p>Be the First to Know About our Promotions, Giveaways, and <br />Amazing Business Offers</p>
              <form onSubmit={handleSubmit}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Enter your email address' />
                <button type='submit'>{loading ? "Loading..." : "Subscribe"}</button>
              </form>
            </div>
          </Fade>
        </div>
        <div className='bottom container pt-4'>
          <hr className='pt-4 mt-4' />
          <div className='row justify-content-between'>
            <p className='col-sm-12 col-lg-4'>
              Copyright &copy; Waya {new Date().getFullYear()}  All rights reserved</p>
            <ul className='col col-lg-7'>
              <li>
                <a className="nav-link" href="/about">
                  About Us
                </a>
              </li>
              <li>
                <a className="nav-link" href="/terms-of-use">
                  Terms of use
                </a>
              </li>
              <li>
                <a className="nav-link" href="/privacy-page">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="nav-link" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Fade>
    </footer>
  )
}

export default PageFooter