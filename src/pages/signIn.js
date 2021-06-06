import '../styles/signin.scss'
import {useState} from 'react'

function SignIn(){
    const [showLogin, setshowLogin] = useState(true)
    return (     
       <div id='signIn' style={{backgroundImage: 'url(loginBack.png)'}}>
            {/* <div className='login row justify-content-center'>
                <form>
                    <div className='text-center pb-2'>
                    <img src='wayapaychatLogo.png'/>
                    </div>
                    <h5 className='text-center py-2'>Login</h5>
                    <div className='inputGroup text-left py-1'>
                    <label for='emailornumber'>Email or Phone number</label>
                    <br/>
                    <input type='text' className='' id='emailornumber' placeholder='Email / phone number' required />
                    </div>
                    <div className='inputGroup text-left py-1'>
                    <label for='userpassword'>Password</label>
                    <br/>
                    <input id="userpassword" type='password' placeholder='Password' required />
                    <div className='row pl-3 '>
                    <button type='submit' id='login' className='orange col-sm-9'>Sign In <span><img src='/rightArr.png' /></span></button>
                    </div>
                    <div className='row justify-content-center pl-0 pr-4 mr-4'>
                    <p style={{color:'#2626BC', fontSize: '13px'}} className='py-3 col-sm-9 text-center pl-0 pr-4 mr-4'>Or continue with</p> 
                    </div>
                    <div className='justify-content-between'>
                                      <button className=' ml-1 btn pl-0 mr-4 socialBtn'>
                            <span className='pr-3'><img src='fbIcon.png'/> </span>Facebook
                        </button>
                        <button className=' btn  ml-3 socialBtn' >
                            <span className='pr-3'><img src='googleIcon.png'/></span>Google
                        </button>
                    </div> 
                    <div className='row justify-content-center pl-0 pr-4 mr-4'>
                    <div style={{fontSize: '13px'}} className='py-3 single col-sm-9 text-center pl-0 pr-4 mr-4'>New User? <a style={{color:'#2626BC'}}>Sign Up here</a></div> 
                    </div>
                    </div>
                </form>
            </div> */}
            <div className='signUp row align-items-center justify-content-center'>
                <div className='col-sm-4'>
                    <h2>
                    We are committed to providing a secure and cashless payment solution
                    </h2>
                    <p>
                    With our multiple options for transactions you don’t have to worry about internet access to make payments or receive payments, we have solved that problem for you.
                    </p>
                </div>
                <div className='col-sm-11 col-md-6'>
                <form>
                    <div className='text-center pb-2'>
                    <img src='wayapaychatLogo.png'/>
                    </div>
                    <h5 className='text-center py-2'>Login</h5>
                    <div className='inputGroup text-left py-1'>
                    <label for='usernumber'>Email or Phone number</label>
                    <br/>
                    <input type='tel' className='' id='usernumber' placeholder='Email / phone number' required />
                    </div>
                    <div className='inputGroup text-left py-1'>
                    <label for='newuserpassword'>Password</label>
                    <br/>
                    <input id="newuserpassword" type='password' placeholder='Password' required />
                    <div className='row pl-3 '>
                    <button type='submit' id='login' className='orange col-sm-9'>Sign In <span><img src='/rightArr.png' /></span></button>
                    </div>
                    <div className='row justify-content-center pl-0 pr-4 mr-4'>
                    <p style={{color:'#2626BC', fontSize: '13px'}} className='py-3 col-sm-9 text-center pl-0 pr-4 mr-4'>Or continue with</p> 
                    </div>
                    <div className='justify-content-between'>
                                      <button className=' ml-1 btn pl-0 mr-4 socialBtn'>
                            <span className='pr-3'><img src='fbIcon.png'/> </span>Facebook
                        </button>
                        <button className=' btn  ml-3 socialBtn' >
                            <span className='pr-3'><img src='googleIcon.png'/></span>Google
                        </button>
                    </div> 
                    <div className='row justify-content-center pl-0 pr-4 mr-4'>
                    <div style={{fontSize: '13px'}} className='py-3 single col-sm-9 text-center pl-0 pr-4 mr-4'>New User? <a style={{color:'#2626BC'}}>Sign Up here</a></div> 
                    </div>
                    </div>
                </form>
                </div>
            </div>
       </div>
    )
}

export default SignIn