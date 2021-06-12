import PageFooter from '../componentParts/footer'
import TopNav from '../componentParts/topNav'
import '../styles/wayapay.scss'

function WayaPay(){
    return (
        <div>
            <TopNav/>
            <div id="wayaPayPage" className="">
            <div className="jumbotron wayapayJumbotron pb-4 mb-1" style={{backgroundImage: 'url(/Ellipse.png)'}}>
                <div className="pb-1 row justify-content-center">
                    <div className='col-md-5 pt-4 '>
                        <h2 className="">Send money to friends and family or get payments from your customers</h2>
                        <p className='pt-2'>Waya PayChat digital wallet is an all - in - one platform to perform safe and secure transactions, pay your bills and socialize with friends and family.</p>
                    </div>
                    <div className="col-md-4">
                        <img src='/wayaphone.png' alt='Waya Phone'/>
                    </div>
                </div>
            </div>
            <div className='theGrids container pb-4'>
                <div className='singleBox'>
                    <img src='/digital.png'/>
                    <h6>DIGITAL WALLET</h6>
                    <p>Digital wallet personalised for you to store funds safely, receive money, budget spendings, pay bills</p>
                </div>
                <div className='singleBox'>
                    <img src='/sendmoney.png'/>
                    <h6>SEND MONEY</h6>
                    <p>Send money using WayaPay at insanely fast, secure and cheap rates either as a customer or agent</p>
                </div>
                <div className='singleBox'>
                    <img src='/withdraw.png'/>
                    <h6>WITHDRAW MONEY</h6>
                    <p>Withdraw money from your WayaPay digital wallet direct to your bank account or any WAYA Agent</p>
                </div>
                <div className='singleBox'>
                    <img src='/scan.png'/>
                    <h6>qr code scanner</h6>
                    <p>WayaPay’s scan and pay feature helps ypu transfer or receive funds without needing a bank account or phone number. Just whip out your app, scan and pay and the fund is transferred easy peasy!</p>
                </div>
                <div className='singleBox'>
                    <img src='/bill.png'/>
                    <h6>pay bills</h6>
                    <p>Pay bills using our digital wallet with our list of growing merchants who use WayaPay as their preferred way of receiving money from their customers, school fess, hotel booking, visa payment, utility bills, church, mousque and religious expenses etc.</p>
                </div>
                <div className='singleBox'>
                    <img src='/paying.png'/>
                    <h6>online checkout</h6>
                    <p>Online checkout has never been easier with WayaPay digital wallet, pay for your online shopping across several top websites like Jumia, Amazon, Konga, Alibaba etc. WayaPay affords every user simple and easy way to create instant virtual cards to shop and enjoy befitting lifestyle.</p>
                </div>

                <div className='singleBox'>
                    <img src='/request.png'/>
                    <h6>REQUEST MONEY</h6>
                    <p>Request and receive money from friends and families, customers etc, using phone number through WayaPay</p>
                </div>
                <div className='singleBox'>
                    <img src='/settle.png'/>
                    <h6>settle invioce</h6>
                    <p>Settle invoice from customers, WayaPay enables easy settlement and clearing for smooth business operation</p>
                </div>
                <div className='singleBox'>
                    <img src='/subs.png'/>
                    <h6>pay tv subscription</h6>
                    <p>Pay - TV subscription for your pay - TV like DSTV, GoTV, TSTV etc</p>
                </div>
                <div className='singleBox'>
                    <img src='/mobile-phoneOne.png'/>
                    <h6>top-up airtime and data</h6>
                    <p>Request and receive money from friends and families, customers etc, using phone number through WayaPay</p>
                </div>
            </div>
            <PageFooter/>
        </div>
        </div>
    )
}

export default WayaPay