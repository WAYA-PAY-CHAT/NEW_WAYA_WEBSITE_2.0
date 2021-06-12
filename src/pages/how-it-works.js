import '../styles/howitworks.scss'
import {useEffect} from 'react'
import PageFooter from '../componentParts/footer';
import TopNav from '../componentParts/topNav';

function HowItWorks(){

    useEffect(() => {
        let acc = document.getElementsByClassName("accordion");
        let i;

        for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.style.paddingTop = panel.style.paddingBottom = 0
            } else {
            panel.style.maxHeight = 'max-content';
            panel.style.paddingTop = panel.style.paddingBottom = '1.5%'

            } 
        });
        }
        return () => {
            // cleanup
        }
    }, [])

    return (     
    <div>
        <TopNav />
       <div id='howitworkssection'>
           <div className='videoSection'>
           <video controls>
                <source src="https://www.wayapaychat.com/wp-content/uploads/2020/01/Skype_Video2.mp4?_=1" type="video/mp4"/>
                Your browser does not support the video tag.
                </video>
           </div>
           <div className='faqs mb-4'>
            <div className='mb-3'>
           <button class="accordion">Download Waya PayChat</button>
                <div class="panel">
                <p>You can download the Waya PayChat app for free from Google Play and App store. You need minimum Android version 5.0 and IOS version 10 to download the app.</p>
                </div>
                </div>
                <div className='mb-3'>
                <button class="accordion">Register</button>
                <div class="panel">
                <p>Enter your phone number, name, and password. You will get a One Time Password (OTP) (SMS code) on your phone. Enter the OTP to verify your phone number. Note that Waya PayChat only works with a Nigerian phone number.</p>
                </div>
</div>
<div className='mb-3'>
                <button class="accordion">Login</button>
                <div class="panel">
                <p>Enter your phone number and password to login to Waya PayChat.</p>
                </div>
</div>
<div className='mb-3'>
                <button class="accordion">Add Bank Card</button>
                <div class="panel">
                <p>You can add your bank card in order to send and receive money, pay merchants, and bills.</p>
                <ul>
                    <li>Add your bank card details.</li>
                    <li>Enter your Waya PayChat password</li>
                    <li>A One Time Password (OTP) (SMS code) will be sent to you by your bank to verify you are the owner of the bank card</li>
                    <li>Enter the OTP and your card is added successfully</li>
                    <li>You can add as many cards as possible</li>
                </ul>
                </div>
</div>
<div className='mb-3'>
                <button class="accordion">Fund Your Wallet</button>
                <div class="panel">
                <p>You can fund your Waya PayChat wallet to enable you to send and receive money, pay your bills.</p>
                <ul>
                    How to;
                    <li>Go to (#) Page on Waya PayChat</li>
                    <li>Click on balance</li>
                    <li>Click on load wallet</li>
                    <li>Choose the bank account you want to load your Waya PayChat wallet from</li>
                    <li>Enter the amount and your Waya PayChat password</li>
                    <li>Your Waya PayChat wallet is credited and your bank account is debited</li>
                </ul>
                </div>
</div>
<div className='mb-3'>
                <button class="accordion">Request Money</button>
                <div class="panel">
                <p>You can fund your Waya PayChat wallet to enable you to send and receive money, pay your bills.</p>
                <ul>
                    <li>Go to the waya pay page</li>
                    <li>Click on payment request</li>
                    <li>Choose from your phone contacts or enter the phone number of the person you wish to request money from</li>
                    <li>Enter the amount requested and click send</li>
                    <li>The receiver will receive a message from you with the details of the requested payment</li>
                    <li>The receiver will have to accept your request and the amount is sent to you</li>
                    <li>The receiver can also reject your request in which the money will not be sent to you.</li>
                </ul>
                </div>
</div>
<div className='mb-3'>
                <button class="accordion">Send Money</button>
                <div class="panel">
                <p>You can send money from your Waya PayChat wallet to your phone contacts and to any phone number.</p>
                <ul>
                    <li>Go to the waya pay page</li>
                    <li>Click on transfer</li>
                    <li>Click on transfer money</li>
                    <li>Choose from your phone contacts or enter the phone number of the person you wish to send money to</li>
                    <li>Enter the amount and your Waya PayChat password</li>
                    <li>Money is sent</li>
                    <li>Your wallet is debited and the receivers wallet is credited</li>
                </ul>
                <p>(The receiver of the money you sent, can receive the money if they have a Waya PayChat account or via a Waya PayChat Agent close to them. The receiver will get a message saying you have sent money to them, the amount and the code to use for withdrawing the money)</p>
                </div>
                </div>
                <div className='mb-3'>
                <button class="accordion">Pay Merchant</button>
                <div class="panel">
                <p>You can pay merchants for any goods and services with your Waya Paychat wallet.</p>
                <ul>
                    <li>Go to the waya pay page (#)</li>
                    <li>Click on pay merchant</li>
                    <li>Choose  whether you want to scan the merchant QR code or enter the merchant phone number and pay</li>
                    <li>Enter the amount and your Waya PayChat password</li>
                    <li>Payment is made. Your wallet is debited and the merchant wallet is credited</li>
                </ul>
                </div>
</div>
<div className='mb-3'>
                <button class="accordion">Scan QR Code to Send Money or Make Payments</button>
                <div class="panel">
                <p>You can scan any user or merchants QR code and send money or pay.</p>
                <ul>
                    <li>Go to the waya pay page (#)</li>
                    <li>Click on Transfer or Pay Merchant</li>
                    <li>Click on scan QR</li>
                    <li>Your camera will pop up. Scan the user/merchant QR Code. The details will populate automatically</li>
                    <li>Enter the amount and your Waya PayChat password</li>
                    <li>Transaction is made</li>
                </ul>
                </div>
                </div>
              <div className='mb-3'>
                <button class="accordion">Pay Bills</button>
                <div class="panel">
                <p>You can top up your call credit, artime and data simply from your Waya PayChat wallet. You can as well pay for your internet, TV subscriptions, light bills and more..</p>
                <ul>
                    <li>Go to the waya pay page (#)</li>
                    <li>Scroll down to see the list of services and vendors</li>
                    <li>Select which of the vendors you wish to pay to</li>
                    <li>Enter your phone number or your subscription number</li>
                    <li>Enter the amount and your Waya PayChat password</li>
                    <li>Your top up is done. Your invoice is paid. Your subscription is done</li>
                </ul>
                </div>
                </div>
                <div className='mb-3'>
                <button class="accordion">Send and Receive Money Via USSD</button>
                <div class="panel">
                <p>You can send and Receive Money via USSD either through the APP USSD or Phone Dial USSD</p>
                <ul>
                    <li>Go to the waya pay page</li>
                    <li>Click on Wallet</li>
                    <li>Select the Transfer option from the list of options available</li>
                    <li>Select the send money option</li>
                    <li>Click on the send via USSD option</li>
                    <li>The ‘USSD Code” *347*006*2*Amount*6# will be displayed</li>
                    <li>Enter the amount you want to send and your password.</li>
                    <li>Your transaction is completed.</li>
                </ul>
                <p>Phone Dail Option</p>
                <ul>
                    <li>Go to your phone dial</li>
                    <li>Dial *347*006#</li>
                    <li>A message will be displayed with options</li>
                    <li>Select option 3 which is transfer to another wallet</li>
                    <li>Enter the amount you want to send and your Waya PayChat password</li>
                    <li>Your transaction is completed.</li>
                </ul>
                </div>
                </div>
                <div className='mb-3'>
                <button class="accordion">Withdraw Money</button>
                <div class="panel">
                <p>You can withdraw money from your wallet to your bank account</p>
                <ul>
                    <li>Go to the waya pay page (#)</li>
                    <li>Click on my wallet</li>
                    <li>Click on my balance</li>
                    <li>Select Withdraw money (min 2000 N)</li>
                    <li>Select the bank account you wish to withdraw to</li>
                    <li>Enter amount and your Waya PayChat password</li>
                    <li>Your bank account or bank card is credited and your Way PayChat wallet is debited</li>
                </ul>
                <p>Note: You can only withdraw money if you have Linked and Validated your BVN on the Waya App</p>
                </div>
                </div>
                <div className='mb-3'>
                <button class="accordion">Chat and Call</button>
                <div class="panel">
                <p>You can chat and call friends and family with Waya PayChat. Simply go to the Waya Chat page and enjoy our features for free.</p>
                </div>
                </div>
                <div className='mb-3'>
                <button class="accordion">Socialize</button>
                <div class="panel">
                <p>Use Waya Gram to socialize, post and review comments, images, market your goods and services.</p>
                </div>
                </div>
                <div className='mb-3'>
                <button class="accordion">
                Add Phone Contacts and Invite Contacts
                   </button>
                <div class="panel">
                    <p> Your phone contacts are synchronised differentiating Waya Users from Non-Waya Users, but you can add your phone contacts to Waya PayChat and invite your contacts to join Waya Paychat. Simply click on your contact and and click on invite.</p>
                <p>You can also invite your friends through email and other social media network.</p>
                <ul>
                    <li>Go to the contact menu</li>
                    <li>Click on add contact</li>
                    <li>Select phone number, social media or email to invite a friend to join Waya PayChat</li>
                    <li>Enter the details and click send</li>
                    <li>Your contact will receive an SMS notification, with an invite and a link to download the App on ios or android</li>
                </ul>
                </div>
                </div>
                <div className='mb-3'>
                <button class="accordion">Fees, Pricing and Limits</button>
                <div class="panel">
                <p>Waya PayChat is free to download.</p>
                <p  className='toptext'>Fees and pricing:</p>
                <p>Fund your Waya PayChat wallet via bank account or bank card: 20N</p>
                <p>Send money: 10N</p>
                <p>Pay merchant: 10N</p>
                <p>Pay a bill: Free</p>
                <p>Airtime Topup: Free</p>
                <p>Receive or request money: 0N</p>
                <p>Merchants commission per Waya PayChat payment received: 1N</p>
                <p>Merchant cost receiving Waya PayChat payments: 0N</p>
                <p>Withdraw money to bank account (min amount 1000N): 10N</p>
                <p>Making transactions, chat and call and socialize (Waya Gram) is free of charge* and you will not spend your own data using these features. (*special terms may apply).</p>
                <p className='toptext'>Send, receive and withdraw money limits:</p>
                <p>Send money: Private user: 500,000N per transaction limit (2,000,000N daily limit).</p>
                <p>Merchant: 1.000.000N per transaction limit (5,000,000N daily limit).</p>
                <p>Receive money: Private user and Merchant: no daily limits</p>
                <p>Withdraw money: Private user: 500,000N per transaction limit (2,000,000N daily limit).</p>
                <p>Merchant: 1.000.000N per transaction limit (5,000,000N daily limit).</p>
                <p>Funding your Waya PayChat wallet as a Private user or a Merchant has no limit.</p>
                </div>
                </div>
                <div className='mb-3'>
                <button class="accordion">Safe and Secure Transactions</button>
                <div class="panel">
                <p>Your Waya PayChat app is protected with a PIN code. If you lose your phone, you can have your Waya PayChat account blocked at any time.
Waya PayChat is as secure as e-banking. The money is not stored directly on the phone. All transactions take place in a secure environment.
We stores all personal data at a secure location and we do not disclose any personal data to third parties</p>
                </div>
                </div>
           </div>
           <PageFooter/>
       </div>
       </div>
    )
}

export default HowItWorks