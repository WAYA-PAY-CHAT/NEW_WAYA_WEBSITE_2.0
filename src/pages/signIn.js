import '../styles/signin.scss'
import {useState} from 'react'
import Rotate from 'react-reveal/Rotate';
// import PageFooter from '../componentParts/footer'
import TopNav from '../componentParts/topNav'

function SignIn(){
    const [showLogin, setshowLogin] = useState(true)

    let togglePasswordVisibility = (e, section) => {
        e.preventDefault()
        let theTag
        if(section == 'login'){
            theTag = document.querySelector('input#userpassword')
            if (theTag.type === "password") {
                theTag.type = "text";
            } else {
                theTag.type = "password";
            }
        } else {
            theTag = document.querySelector('input#newuserpassword')
            if (theTag.type === "password") {
                theTag.type = "text";
            } else {
                theTag.type = "password";
            }
        }
    }

    let toggleForms = (e) => {
        e.preventDefault()
        if(showLogin){
            setshowLogin(false)
        } else {
            setshowLogin(true)
        }
     
    }

    return (     
       <div>
           <TopNav/>
           <div id='signIn' style={{backgroundImage: 'url(loginBack.png)'}}>
            <div className={`${showLogin?'hiding':'showing'}`}> 
            <Rotate top right when={!showLogin}>

            <div id='loginSection' className='login row justify-content-center' >
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
                <span className='iconeye' onClick={(e) => {togglePasswordVisibility(e, 'login') }}> <img  src='/see.png'/></span>
                <input id="userpassword" type='password' placeholder='Password' required />
                <div className=' mt-3'>
                <button type='submit' id='loginBtn' className='orange '>Sign In <span><img src='/rightArr.png' /></span></button>
                </div>
                <div className='row justify-content-center loginContinue pl-0 pr-4 mr-4'>
                <p style={{color:'#2626BC', fontSize: '13px'}} className='py-3 col-sm-9 text-center pl-4'>Or continue with</p> 
                </div>
                <div className='justify-content-center loginSocial row mr-2'>
                    <button className='col-sm-5 btn pl-0 mr-4 socialBtn'>
                        <span className='pr-3'><img src='fbIcon.png'/> </span>Facebook
                    </button>
                    <button className='col-sm-5 btn mr-4 socialBtn' >
                        <span className='pr-3'><img src='googleIcon.png'/></span>Google
                    </button>
                </div> 
                <div className='row justify-content-center pl-0 '>
                <div style={{fontSize: '13px'}} className='py-3 single col-sm-9 text-center pl-0 pr-4 mr-4'>New User? <a href="#" onClick={toggleForms} style={{color:'#2626BC'}}>Sign Up here</a></div> 
                </div>
                </div>
            </form>
           
        </div> 
        </Rotate>
            </div>
            
            <div className={`${!showLogin?'hiding':'showing'}`}>
            <Rotate bottom left when={showLogin}>
            <div id='signUp' className='row align-items-center justify-content-center'>
                <div className='col-sm-4 part-text'>
                    <h3>
                    We are committed to providing a secure and cashless payment solution
                    </h3>
                    <p>
                    With our multiple options for transactions you don’t have to worry about internet access to make payments or receive payments, we have solved that problem for you.
                    </p>
                </div>
                <div className='col-sm-11 col-md-6'>
                <form>
                    <h4 className='text-start'>Sign up to get started</h4>
                    <p style={{color:'#2626BC', fontSize: '13px'}} className='py-1 col-sm-9 text-start pl-0'>Already have an account? <a href='#' onClick={toggleForms}>Sign In</a></p> 
                    <input className="mr-2" type="checkbox" value="" id="t&c"/>
                    <label className=" " for="t&c">
                    I am a Merchant
                    </label>
                    <div className='name  my-3 '>
                        <input type='text' className='' placeholder='First Name' required />
                        <input type='text' className='ml-2' placeholder='Last Name' required />
                    </div>
                    <div className=''>
                    <div className='inputGroup text-left'>
                    <input type='email' placeholder='Email' required />
                    </div>
                    <div className='inputGroup text-left'>
                     <span className='iconeye' onClick={(e) => {togglePasswordVisibility(e, 'signup') }}> <img  src='/see.png'/></span>
                    <input id='newuserpassword' type='password' placeholder='Password' required />
                    </div>
                    <div className='inputGroup text-left'>
                    <input type='tel' placeholder='Phone Number' required />
                    </div>
                    
                    <input className="mr-2" type="checkbox" value="" id="t&c"/>
                    <label className=" " for="t&c">
                    By signing up, you agree to our <span>Terms & Conditions</span>
                    </label>
                   
                    <div className=' mt-3'>
                    <button type='submit' id='signupBtn' className='orange '>Sign Up <span><img src='/rightArr.png' /></span></button>
                    </div>
                    <div className='row justify-content-center continueText pl-0 pr-4 mr-4'>
                    <p style={{color:'#2626BC', fontSize: '13px'}} className='pt-3 mr-3 col-sm-9 text-center'>Or continue with</p> 
                    </div>
                    <div className='justify-content-center row mr-2 sociallinks'>
                        <button className='col-sm-5 btn pl-0 mr-4 socialBtn'>
                            <span className='pr-3'><img src='fbIcon.png'/> </span>Facebook
                        </button>
                        <button className='col-sm-5 btn mr-4 socialBtn' >
                            <span className='pr-3'><img src='googleIcon.png'/></span>Google
                        </button>
                    </div> 
                    </div>
                </form>
                </div>
            </div>  
            </Rotate>
            </div>
       </div>
       </div>
    )
}

export default SignIn