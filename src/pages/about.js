import '../styles/about.scss'

function About(){
    return (     
       <div id='aboutsection' >
            <div className="about-jumbotron py-4 mb-4 pl-4 pb-2" style={{backgroundImage: 'url(/grain.png)'}}>
                <div className="py-4 ml-4 pl-4 row">
                    <div className='col-md-9 pt-4 pl-4 mt-4 textArea' style={{
                        backgroundImage:'url(/chat.png)'
                    }}>
                        <h1 className="">ABOUT US</h1>
                        <p className=''>Waya PayChat is the new social mobile payment app in Nigeria which combines a financial inclusion and a social solution in one app. By combining a social platform and mobile transactions we want to ease the problems of transactions and people staying connected. With Waya PayChat you can make free calls, chat, socialize, and make transactions seamlessly. With our multiple options for transactions you don’t have to worry about internet access to make payments or receive payments, we have solved that problem for you.
                        </p>
                        <p>
                        We are committed to providing a secure and cashless payment solution that assists our users, merchants, and organizations, to optimize their daily lives and business processes while taking care of their transactions.</p>
                    </div>
                </div>
            </div>

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
            <img src='/chatting.png' alt='chat icon'/>
       </div>
    )
}

export default About