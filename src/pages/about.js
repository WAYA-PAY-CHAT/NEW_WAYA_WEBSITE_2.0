import PageFooter from '../componentParts/footer'
import GenericJumbotron from '../componentParts/genericJumbotron'
import TopNav from '../componentParts/topNav'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import '../styles/about.scss'

function About(){
    return (     
        <div>
            <TopNav />
            <div id='aboutsection' >
            <GenericJumbotron titleText='ABOUT US'/>
            <Fade bottom cascade>
            <div id='aboutGrid' className='pb-4 mb-4 px-4 mx-2'>
            <div>
                    <img src='/about1.png'/>
                    <div className='text-center'>
                        <h6>PAYMENT SOLUTION</h6>
                        <div className='row justify-content-center'>
                        <p className='col  '>
Register, Login and Transact with your Phone number</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src='/about2.png'/>
                    <div className='text-center'>
                        <h6>  EASY TO USE</h6>
                        <div className='row justify-content-center'>
                        <p className='col  '>
                      
Add Bank card / setup Bank account and start transacting</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src='/about3.png'/>
                    <div className='text-center'>
                        <h6>   EASY TO TRANSACT</h6>
                        <div className='row justify-content-center'>
                        <p className='col  '>
                     
Link Your BVN, Top up your Wallet, Request for Payment, Accept payment, Transfer money, Pay for Subscriptions and Services, with just few clicks.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src='/about4.png'/>
                    <div className='text-center'>
                        <h6>PAYMENT OPTIONS</h6>
                        <div className='row justify-content-center'>
                        <p className='col  '>
 
Transact, and Receive payments with or without Internet access with our multiple payment options.</p>
                        </div>
                    </div>
                </div> 
                <div>
                    <img src='/about5.png'/>
                    <div className='text-center'>
                        <h6> QR CODE</h6>
                        <div className='row justify-content-center'>
                        <p className='col  '>
                       
Scan and make payments, Send QR code to customers/contact list and get paid in minutes.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src='/about6.png'/>
                    <div className='text-center'>
                        <h6>CHAT, CALL, TRANSACT</h6>
                        <div className='row justify-content-center'>
                        <p className='col  '>
                  
Get in touch with your loved ones, send them pictures and videos, make free video and audio calls, and send them money</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src='/about7.png'/>
                    <div className='text-center'>
                        <h6>SOCIALIZE</h6>
                        <div className='row justify-content-center'>
                        <p className='col  '>
                        
Meet new people, Post pictures and videos, create groups, advertise your products, follow people and synchronize with your other social media accounts</p>
                        </div>
                    </div>
                </div>
            </div>
            </Fade>
           <PageFooter/>
       </div>
        </div>
    )
}

export default About