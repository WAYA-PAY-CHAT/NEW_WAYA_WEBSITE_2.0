import PageFooter from '../componentParts/footer'
import '../styles/agent.scss'

function Agent(){
    return (     
       <div id='agentsection' >
            <div className="about-jumbotron py-4 mb-4 pl-4 pb-2">
                <div className="py-4 ml-4 pl-4 row justify-content-center">
                    <div className='col-md-5 pt-4 pl-4 mt-4'>
                        <div className='pb-4'>
                        <h1 className="">earn more with waya</h1>
                        <p>
                        Earn upto 10 naira for each customer you invite to WayPay</p>
                        </div>
                        <div className='row mt-4'>
                            <img alt='Google Play Download' src='/google-play-badge.png' className='col-md-4'/>
                            <img alt='App Store Download' src='/app-store-badge.png' className='col-md-4'/>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <img src='/operate.png' alt='banner pic'/>
                    </div>
                </div>
            </div>
            <div className='banner-two pt-4 container-fluid'>
                <div className='row justify-content-center'>
                <h3 className='col-sm-12 text-center'>Why become a Waya Agent?</h3>
                <img src='/range.png' className='col-sm-12' alt='Waya Agent Options'/>
                </div>
            </div>
            <div className='last-banner pt-4 container-fluid'>
            <div className="bottom-jumbotron mb-1 pl-4 ">
                <div className="py-4 ml-4 pl-4 row justify-content-center">
                    <div className='col-md-5 pt-4 pl-4 mt-4'>
                        <div className='pb-4'>
                        <h5 className="text-center">How to join</h5>
                       <div className=' justify-content-center last-banner-phones'>
                           <div className='single'>
                               <div>
                                    <img className='mt-2' src='/about4.png' />
                               </div>
                               <p className='mt-4 text-center'>Signup as <br/> an agent</p>
                           </div>
                           <div className='single '>
                               <div>
                                    <img className='mt-2' src='/about1.png' />
                               </div>
                               <p className='mt-4 text-center'>Signup as <br/> an agent</p>
                           </div>
                           <div className='single'>
                               <div>
                                    <img className='mt-2' src='/about4.png' />
                               </div>
                               <p className='mt-4 text-center'>Start transacting <br/> immediately</p>
                           </div> 
                           
                       </div>
                        </div>
                    </div>
                    <div className='col-md-6 pt-4 mt-4'>
                    <h5 className="">be your own boss</h5>
                        <p>
                        Earn upto 10 naira for each customer you invite to WayPay</p>
                        <div>
                      
                <ul className="timeline">
                    <li className="timeline-item">
                        <div className="timeline-arrow"></div>
                        <p className="ml-2 font-weight-light">10 naira bank transfer for any amount</p>
                    </li>
                    <li className="timeline-item">
                        <div className="timeline-arrow"></div>
                    
                        <p className="pl-2">Free airtime recharge</p>
                    </li>
                    <li className="timeline-item">
                        <div className="timeline-arrow"></div>
                    
                        <p className="pl-2">10 fee for bills payments</p>
                    </li>
                </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ending container-fluid'  style={{backgroundImage:'url(/wave.png)'}}>
            <div className="row justify-content-center">
                    <div className='col-md-6 pt-4 pr-0 pl-4 mt-4'>
                        <div className='pb-4'>
                        <h2 className="">sign up now to join for free</h2>
                        </div>
                        <div className='row mt-4'>
                            <img alt='Google Play Download' src='/google-play-badge.png' className='col-md-3'/>
                            <img alt='App Store Download' src='/app-store-badge.png' className='col-md-3'/>
                        </div>
                    </div>
                    <div className='col-md-5 pl-0'>
                        <img src='/wayaphone.png' alt='banner pic'/>
                    </div>
                </div>
            </div>
            <section className='container-fluid'>
                <h4 className='text-center'>sign up now as an Agent</h4>
                <form>
                <label>Name</label> <br/>
                    <div className='inputGroup row justify-content-between ml-0'>
                       
                        <input type='text' className='col-sm-5' placeholder='First Name' required />
                      
                        <input type='text' className='col-sm-5' placeholder='Last Name' required />
                    </div>
                    <div className='row'>
                    <label for='email' className='col-sm-7'>Email</label>
                    <label for='email' className='col pl-2'>Phone</label>
                    </div>
                    <div className='inputGroup row justify-content-between ml-0'>
                    <input type='email'  className='col-sm-5' placeholder='Email' required />
                    <input type='tel'  className='col-sm-5' placeholder='Phone Number' required />
                    </div>
                    <label >Address  </label>
                    <div className='inputGroup row justify-content-between ml-0'>
                       
                    
                        <input type='text'  className='col-sm-5' placeholder='Address' required />
                
                        <input type='tel'  className='col-sm-5' placeholder='Phone Number' required />
                        
                    </div>
                    <div className='text-center pt-4'>
                    <button type='submit' className='orange mb-4'>Submit<span><img src='/rightArr.png' /></span></button>
                    <p className='py-4' style={{fontSize: '13px'}}>Do not submit confidential information such as credit card details and account passwords. Report Abuse</p>
                    <img src='/zoho.png' />
                    </div>
                   
                </form>
            </section>
            </div>
            <PageFooter/>
       </div>
    )
}

export default Agent