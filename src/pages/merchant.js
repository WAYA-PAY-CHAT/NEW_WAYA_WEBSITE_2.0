import PageFooter from '../componentParts/footer'
import '../styles/merchant.scss'

function Merchant(){
    return (
        <div id="merchantPage" className="">
            <div className="main-jumbotron py-4 my-4">
                <div className="py-4 row">
                    <div className='col-md-5 pt-4 mt-4'>
                        <h1 className="">WAYA PAYCHAT WAS MADE TO HELP YOUR BUSINESS GROW</h1>
                        <p className=''>Join the group of smart business owners already enjoying faster, smoother and rewarding payment experience on Waya PayChat.</p>
                        <strong className='pb-3'>Download and sign up for free </strong>
                        <div className='row mt-3'>
                            <img alt='Google Play Download' src='/google-play-badge.png' className='col-md-3'/>
                            <img alt='App Store Download' src='/app-store-badge.png' className='col-md-3'/>
                        </div>
                    </div>
                    <div className="col">
                        <img src='/full.png' alt='jumbotron'/>
                    </div>
                </div>
            </div>
            <div className='container innerBanner pt-4'>
                <div className='row  justify-content-center'>
                    <img src='/scan.png' className='col-sm-12 col-md-6' alt='QR Code Scan'/>
                    <div className='col-sm-12 col-md-5'>
                    <h3 className="">Now your customer can pay faster and easier with the Waya PayChat scan-to-pay feature.</h3>
                        <p className=''>There are no limits to how much our scan-to-pay feature will boost transactions for your business. Our merchants have experienced increased inflow and better customer experience using the simple scan-to-pay solution. You also earn commissions when customers pay with Waya Paychat.</p>
                    </div>
                </div>
            </div>
            <div className='jumbotron innerBanner '>
                <div className='row align-end justify-content-center'>
                    <div className='col-sm-12 col-md-4 '>
                    <h3 className="">Safe, Secure and Reliable</h3>
                        <p className=''>There are no limits to how much our scan-to-pay feature will boost transactions for your business. Our merchants have experienced increased inflow and better customer experience using the simple scan-to-pay solution. You also earn commissions when customers pay with Waya Paychat.</p>
                        <p>With Waya PayChat, there are no hidden fees and our rates are one of the lowest in the industry.</p>
                    </div>
                    <img src='/secure.png' className='col-sm-12 col-md-6' alt='security'/>
                </div>
            </div>
            <div className='container innerBanner py-4'>
                <div className='row  justify-content-center'>
                    <img src='/wallet.png' alt='open wallet' className='col-sm-12 col-md-6'/>
                    <div className='col-sm-12 col-md-5'>
                    <h3 className="">Earn commissions every time your customer pay you using the app.</h3>
                        <p className=''>Download and sign up for free </p>
                        <div className='row mt-3'>
                            <img src='/google-play-badge.png' className='col-md-3' alt='Google Play Download'/>
                            <img src='/app-store-badge.png' className='col-md-3' alt='App Store Download'/>
                        </div>
                    </div>
                </div>
            </div>
            <PageFooter/>
        </div>
    )
}

export default Merchant