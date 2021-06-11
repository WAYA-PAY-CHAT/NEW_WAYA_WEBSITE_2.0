import PageFooter from '../componentParts/footer'
import GenericJumbotron from '../componentParts/genericJumbotron'
import '../styles/home.scss'
// import {useState} from 'react'

function Home(){
    return (     
       <div id='homesection'>
            <div className="home-jumbotron py-4 " style={{backgroundImage: 'url(/grain.png)'}}>
                <div className="py-4 row">
                    <div className='col-md-6 pt-4 mt-4'>
                        <h1 className="">TRANSACT, SOCIALIZE, CHAT AND CALL
FOR FREE.</h1>
                        <p className=''>Waya Paychat digital wallet is an all-in-one platform to perform safe and secure transactions, pay your bills and socialize with friends and family, making calls, chats and sharing personal moments.</p>
                        <div className='row mt-3'>
                            <img alt='Google Play Download' src='/google-play-badge.png' className='col-md-4'/>
                            <img alt='App Store Download' src='/app-store-badge.png' className='col-md-4'/>
                        </div>
                        <div className='goDown mt-4'>
                            <button className='pt-4'>
                                <img src='/pngarrow.png'/>
                            </button>
                        </div>
                    </div>
                    {/* <div className="col" style={{position:'relative'}}> */}
                        <img src='/twoPhones.png' className="col" alt='jumbotron'/>
                    {/* </div> */}
                </div>
            </div>
            <GenericJumbotron titleText='About Waya PayChat' />
            <section className='categories'>
                <div className='row justify-content-center text-center'>
                    <div className='col-sm-12 col-md-4 mt-3'>
                        <img src='/bills.png' alt='Pay Bills' className='pb-2'/>
                        <h6 className='py-4'>Bills Payment</h6>
                        <p>
                        Need to pay your bills? Subscribe to your favorite cable TV provider, top up your airtime, or place your bets to win. It’s always a sure thing with Waya.
                        </p>
                    </div>
                    <div className='col-sm-12 col-md-4 px-1'>
                        <img src='/qr.png' alt='QR Code Scan' className='pb-2'/>
                        <h6 className='py-4'>MAKE TRANSACTIONS VIA
PHONE NUMBER OR QR CODE</h6>
                        <p>
                        Send money to friends and family or get payments from your customers using our easy scan to pay feature. You can also send and receive money into your wallet via our Waya agents available Nationwide.
                        </p>
                    </div>
                    <div className='col-sm-12 col-md-4'>
                        <img src='/last.png' alt='Socialize' className='pb-2'/>
                        <h6 className='py-4'>Socialize</h6>
                        <p>
                        The next big thing is on WayaGram and you don’t want to miss it. Chat, call capture and share amazing moments with your friends and family.
                        </p>
                    </div>
                </div>
                <button className='floatChat'>
                <img src='/chatting.png' alt='Chat' />
                </button>
            </section>
            <section className='features text-center' style={{backgroundImage: 'url(/grain.png)'}}>
                <h4>Waya PayChat Unique Features</h4>
                <div className='infographic row'>
                    <div className='col' className='singlePhone'>
                        <img src='/singlePhone.png'/>
                    </div>
                    <div className='col'>
                        <div className='special-row'>
                        <div className=''>
                        <img src='/safensecure.png' />
                        </div>
                        <div className=''>
                            <h6>Safe and Secure</h6>
                            <p>
                            Transactions are safe and secure when you send and receive money and our fees are low (10N).
                            </p>
                        </div>
                        </div>
                        <div className='special-row'>
                        <div className=''>
                        <img src='/safensecure.png' />
                        </div>
                        <div className=''>
                            <h6>Safe and Secure</h6>
                            <p>
                            Transactions are safe and secure when you send and receive money and our fees are low (10N).
                            </p>
                        </div>
                        </div>
                        <div className='special-row'>
                        <div className=''>
                        <img src='/safensecure.png' />
                        </div>
                        <div className=''>
                            <h6>Safe and Secure</h6>
                            <p>
                            Transactions are safe and secure when you send and receive money and our fees are low (10N).
                            </p>
                        </div>
                        </div>
                        <div className='special-row'>
                        <div className=''>
                        <img src='/safensecure.png' />
                        </div>
                        <div className=''>
                            <h6>Safe and Secure</h6>
                            <p>
                            Transactions are safe and secure when you send and receive money and our fees are low (10N).
                            </p>
                        </div>
                        </div>
                        <div className='special-row'>
                        <div className=''>
                        <img src='/safensecure.png' />
                        </div>
                        <div className=''>
                            <h6>Safe and Secure</h6>
                            <p>
                            Transactions are safe and secure when you send and receive money and our fees are low (10N).
                            </p>
                        </div>
                        </div>
                        <div className='special-row'>
                        <div className=''>
                        <img src='/safensecure.png' />
                        </div>
                        <div className=''>
                            <h6>Safe and Secure</h6>
                            <p>
                            Transactions are safe and secure when you send and receive money and our fees are low (10N).
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='features-two row'>
                <ul className="timeline col">
                    <li className="timeline-item">
                        <div className="timeline-arrow"></div>
                        <div>
                            <strong>Protected Access</strong>
                            <p className="">Your Waya Account is protected with multiple layers of security. If you lose your phone, you can have your Waya PayChat account blocked at any time.</p>
                        </div>
                    </li>
                    <li className="timeline-item">
                        <div className="timeline-arrow"></div>
                        <div>
                        <strong>Secure Transactions</strong>
                        <p className="">Waya PayChat is as secure as e-banking. The money is not stored directly on the phone. All transactions take place in a secure environment.</p>
                        </div>
                    </li>
                    <li className="timeline-item">
                        <div className="timeline-arrow"></div>
                        <div>
                        <strong >Data Protection</strong>
                        <p className=" font-weight-light">Waya PayChat stores all personal data at a secure location and we do not disclose any personal data to third parties</p>
                        </div>
                    </li>
                </ul>
                <div className='col thevideoSection'>
           <video controls>
                <source src="https://www.wayapaychat.com/wp-content/uploads/2020/01/Skype_Video2.mp4?_=1" type="video/mp4"/>
                Your browser does not support the video tag.
                </video>
           </div>
            </section>
            <div className="last-jumbotron pt-1 container mb-4" style={{backgroundImage: 'url(/grain.png)'}}>
                <div className=" row">
                    <div className='col-md-4'>
                        <img src='/phoneinhand.png' alt='Phone in hand'/>
                    </div>
                    <div className='col pt-4 mt-4'>
                        <h1 className="">Download <br/> the app</h1>
                        <p className='py-2'>Download Waya PayChat and start enjoying our great features.</p>
                        <div className='row mt-3'>
                            <img alt='Google Play Download' src='/google-play-badge.png' className='col-md-4'/>
                            <img alt='App Store Download' src='/app-store-badge.png' className='col-md-4'/>
                        </div>
                    </div>
                </div>
            </div>
            <PageFooter />
       </div>
    )
}

export default Home