import PageFooter from '../componentParts/footer'
import TopNav from '../componentParts/topNav'
import Fade from 'react-reveal/Fade';
import '../styles/contact.scss'
import { useRecoilValueLoadable } from 'recoil';
import { getAllContacts } from '../states/contact';
import { useState } from 'react';
import { sendData } from '../services/apiCalls';

function Contact() {
  const dataC = useRecoilValueLoadable(getAllContacts)
  const contacts = dataC.state === "hasValue" && dataC.contents ? dataC.contents : []
  const [data, setData] = useState({ name: "", email: "", phone: "", subject: "", message: "", })
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState({ show: false })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const res = await sendData({ data, url: "messages" })
    if (res.status) {
      setResponse({ status: "success", message: res.message, show: true })
      setData({ name: "", email: "", phone: "", subject: "", message: "", })
    } else {
      setResponse({ status: "warning", message: res.message || res, show: true })
    }
    setLoading(false)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setData(data => ({ ...data, [name]: value }))
  }

  return (
    <div id="contactPage">
      <TopNav />
      <div className="row actual-content pt-4 pl-4 justify-content-start">
        <Fade right>
          <div className="col-sm-10 col-md-6 text first">
            <h3>Contact Us</h3>
            <p className="">You are welcome to reach us at any of the contacts below</p>
            {contacts.map(contact => (
              <address className='row' key={contact.id}>
                <div className='col-sm-1 pr-2 mt-md-1'>
                  <img src={contact.type === "ADDRESS" ? '/ion_home.png' : '/send.png'} alt='icon' />
                </div>
                <div className='col-sm-9 ml-1 text'>
                  <h5>{contact.key}</h5>
                  <p>{contact.value}</p>
                </div>
              </address>))}

            <div className="mapouter text-start">
              <div className="gmap_canvas">
                <iframe id="gmap_canvas" title="Map showing Office address" src="https://maps.google.com/maps?q=No.%205,%20Ogunsiji%20Close,%20By%20Adeboye%20Solanke%20Avenue,%20Off%20Allen%20Avenue,%20Ikeja,%20Lagos.&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                </iframe>
              </div>
            </div>
          </div>
        </Fade>
        <Fade left>
          <div className="col-sm-10 col-md-6 text-start">
            <h4>Get in touch</h4>
            <form className='pt-4' id='contactForm' onSubmit={handleSubmit}>
              <input onChange={handleChange} name="name" value={data.name} type='text' placeholder='Name' required />
              <input onChange={handleChange} name="email" value={data.email} type='email' placeholder='Email' required />
              <input onChange={handleChange} name="phone" value={data.phone} type='tel' placeholder='Phone number' required />
              <input onChange={handleChange} name="subject" value={data.subject} type='text' placeholder='Subject' required />
              <textarea onChange={handleChange} name="message" value={data.message} placeholder='Leave us a message'></textarea>
              {response.show &&
                <div class={`alert alert-${response.status} mr-3`} role="alert">
                  {response.message}
                </div>}
              <button type='submit' className='orange mb-3'>{loading ? "Sending..." : "Send"} <span><img src='/rightArr.png' /></span></button>
            </form>
          </div>
        </Fade>
        <PageFooter />
      </div>
    </div>
  )
}

export default Contact