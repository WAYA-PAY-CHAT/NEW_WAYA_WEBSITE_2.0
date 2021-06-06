import '../styles/contact.scss'

function Contact(){
    return (
        <div id="contactPage" className="row pt-4 justify-content-start">
            <div className="col text-start">
                <h3>Contact Us</h3>
                <p className="py-4">You are welcome to reach us at any of the contacts below</p>
                <address className='row'>
                    <img src='/ion_home.png' alt='home icon' className='col-sm-3 pr-2 mt-md-1'/>
                    <div className='col-sm-8 col-md-7'>
                        <h5>Head Office</h5>
                        <p>69 Seefeldstrasse, Zurich, Switzerland</p>
                    </div>
                </address>
                <address className='row'>
                    <img src='/ion_home.png' alt='home icon' className='col-sm-3 pr-2 mt-md-1'/>
                    <div className='col-sm-8 col-md-7'>
                        <h5>African Hub Office</h5>
                        <p>5, Ogunsiji Close, By Adeboye Solanke Avenue, Off Allen Avenue, Ikeja, Lagos.</p>
                    </div>
                </address>
                <address className='row'>
                    <img src='/send.png' alt='send icon'  className='col-sm-3 pr-2 mt-md-1'/>
                    <div className='col-sm-8 col-md-7'>
                        <p>info@wayapaychat.com</p>
                    </div>
                </address>
                <div className="mapouter text-start">
                    <div className="gmap_canvas">
                        <iframe id="gmap_canvas" title="Map showing Office address" src="https://maps.google.com/maps?q=No.%205,%20Ogunsiji%20Close,%20By%20Adeboye%20Solanke%20Avenue,%20Off%20Allen%20Avenue,%20Ikeja,%20Lagos.&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                        </iframe>
                    </div>
                </div>
            </div>
            <div className="col text-start">
                <h4>Get in touch</h4>
                <form className='pt-4'>
                    <input type='text' placeholder='Name' required />
                    <input type='email' placeholder='Email' required />
                    <input type='tel' placeholder='Phone number' required />
                    <input type='text' placeholder='Subject' required />
                    <textarea placeholder='Leave us a message'></textarea>
                    <button type='submit' className='orange'>Send <span><img src='/rightArr.png' /></span></button>
                </form>
            </div>
        </div>
    )
}

export default Contact