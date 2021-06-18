import PageFooter from '../componentParts/footer'
import TopNav from '../componentParts/topNav'
import Fade from 'react-reveal/Fade';
import '../styles/merchant.scss'

function Merchant(){
    return (
       <div>
           <TopNav/>
           <div id="merchantPage" className="">
            <div className="main-jumbotron pb-4 mb-4">
                <Fade right cascade>
                <div className="row">
                    <div className='col-md-5 pt-lg-4 mt-4'>
                        <h1 className="">WAYA PAYCHAT WAS MADE TO HELP YOUR BUSINESS GROW</h1>
                        <p className=''>Join the group of smart business owners already enjoying faster, smoother and rewarding payment experience on Waya PayChat.</p>
                        <strong className='pb-3'>Download and sign up for free </strong>
                        <div className=' mt-3'>
                        <a href='https://play.google.com/store/apps/details?id=com.wayapaychat' className='col col-md-4' target='_blank'>
                            <img alt='Google Play Download' src='/google-play-badge.png' className=''/>
                            </a>
                            <a className='col col-md-4' href='https://apps.apple.com/us/app/id1480642853' target='_blank'>
                            <img alt='App Store Download' src='/app-store-badge.png' />
                            </a>
                        </div>
                    </div>
                    <div className="col pt-4">
                        <img src='/full.png' alt='jumbotron'/>
                    </div>
                </div>
                </Fade>
            </div>
            <div className='container innerBanner pt-4'>
                <div className='row  justify-content-center'>
                    <Fade right>
                    <img src='/scan.png' className='col-sm-12 col-lg-6' alt='QR Code Scan'/>
                    </Fade>
                    <Fade left>
                    <div className='col-sm-12 col-lg-5'>
                    <h3 className="">Now your customer can pay faster and easier with the Waya PayChat scan-to-pay feature.</h3>
                        <p className=''>There are no limits to how much our scan-to-pay feature will boost transactions for your business. Our merchants have experienced increased inflow and better customer experience using the simple scan-to-pay solution. You also earn commissions when customers pay with Waya Paychat.</p>
                    </div>
                    </Fade>
                </div>
            </div>
            <div className='jumbotron innerBanner '>
                <div className='row align-end justify-content-center'>
                <Fade right>
                    <div className='col-sm-12 col-lg-4 '>
                    <h3 className="">Safe, Secure and Reliable</h3>
                        <p className=''>There are no limits to how much our scan-to-pay feature will boost transactions for your business. Our merchants have experienced increased inflow and better customer experience using the simple scan-to-pay solution. You also earn commissions when customers pay with Waya Paychat.</p>
                        <p>With Waya PayChat, there are no hidden fees and our rates are one of the lowest in the industry.</p>
                    </div>
                    </Fade>
                    <Fade left>
                    <img src='/secure.png' className='col-sm-12 col-lg-6' alt='security'/>
                    </Fade>
                </div>
            </div>
            <div className='container innerBanner py-4'>
                <div className='row  except justify-content-center'>
                <Fade right>
                    <img src='/wallet.png' alt='open wallet' className='col-sm-12 col-lg-6'/>
                </Fade>
                <Fade left>
                    <div className='col-sm-12 col-lg-5'>
                    <h3 className="">Earn commissions every time your customer pay you using the app.</h3>
                        <p className=''>Download and sign up for free </p>
                        <div className=' mt-3'>
                        <a href='https://play.google.com/store/apps/details?id=com.wayapaychat' className='col col-md-4' target='_blank'>
                            <img alt='Google Play Download' src='/google-play-badge.png' className=''/>
                            </a>
                            <a className='col col-md-4' href='https://apps.apple.com/us/app/id1480642853' target='_blank'>
                            <img alt='App Store Download' src='/app-store-badge.png' />
                            </a>
                        </div>
                    </div>
                    </Fade>
                </div>
            </div>
            <PageFooter/>
        </div>
       </div>
    )
}

export default Merchant