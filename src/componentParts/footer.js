
import '../styles/footer.scss'

function PageFooter(){
    return (     
        <footer>
            <div className='top row' style={{backgroundImage: 'url(/chat.png)'}}>
                <div className='col mr-4 justify-content-between'>
                    <h4>Customer Support</h4>
                    <p>If you have any questions or want to know more about Waya PayChat
and our services, check our FAQ or contact our Customer Support</p>
<div className='contacts row'>
    <div className='col-sm-3 mr-4'>
    <button type='submit' className='orange'>Contact Us <span><img src='/rightArr.png' /></span></button>
    </div>
    <div className='col ml-4 pt-1 pl-4'>
        <img src='/twitter.png' style={{maxWidth: '50%'}} alt='twitter'/>
    </div>
    <div className='col'>
        <img src='/facebook.png' style={{maxWidth: '30%'}}  alt='facebook'/>
    </div>
    <div className='col'>
        <img src='/instagram.png' style={{maxWidth: '55%'}}  alt='instagram'/>
    </div>
    <div className='col'>
        <img src='/linkedin.png' style={{maxWidth: '55%'}}  alt='linkedin'/>
    </div>
</div>
                </div>
                <div className='col pl-4 pt-4 mt-3 ml-4'>
                <p>Be the First to Know About our Promotions, Giveaways, and <br/>Amazing Business Offers</p>
                <input type='text' placeholder='Enter your email address'/>
                <button type='submit'>Subscribe</button>
                </div>
            </div>
            <div className='bottom container pt-4'>
                <hr className='pt-4 mt-4'/>
                <div className='row'>
                    <p className='col'>
Copyright &copy; Waya 2020  All rights reserved</p>
                    <ul className='col'>
                        <li>About Us</li>
                        <li>Terms of use</li>
                        <li>Privacy Policy</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
        </footer> 
    )
}

export default PageFooter