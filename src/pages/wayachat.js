// import '../styles/wayachat.scss'
import SingleBox from '../componentParts/singleBox'
import {useState} from 'react'
import Fade from 'react-reveal/Fade';
import PageFooter from '../componentParts/footer'
import TopNav from '../componentParts/topNav'
import '../styles/wayachat.scss'

function WayaChat(){
    const [longText, setLongText] = useState('With WayaChat, you’ll get fast, simple, secure messaging and calling for free, available on andriod phones all over the world')
    const [headerText, setheaderText] = useState('Simple. Secure. Reliable Messaging.')
    const [shortText, setshortText] = useState('Data Charges may apply. Contact your provider for details')
    const [gridData, setgridData] = useState([
        {
            title: 'make post',
            image: '/post.png',
            text: 'Make short posts and share across moments with friends and families'
        },
        {
            title: 'join group',
            image: '/Group.png',
            text: 'Join group, follow events, like and follow personal and business pages'
        },
        {
            title: 'Socialize',
            image: '/socializeIcon.png',
            text: 'Socialise with the power of a growing community on WayaGram, express yourself within the limits of boundless freedom'
        },
        {
            title: 'Vote',
            image: '/vote.png',
            text: 'Participate in poll on WayaGram, vote for friends and families with WayaGram'
        },
        {
            title: 'enjoy moments',
            image: '/smileys.png',
            text: 'Watch short clips of your followers or any other WayaGram user. enjoy momemts, like and share with others in your timeline'
        }
    ])
    return (     
       <div id='wayachat'>
           <TopNav/>
            <div className="jumbotron wayagramJumbotron py-1 mb-0" style={{backgroundImage: 'url(/Ellipse.png)'}}>
            <Fade right>
                <div className=" row justify-content-center">
                    <div className='col-md-5 pt-4 pr-2 mr-4'>
                        <h2 className="">{headerText}</h2>
                        <p className='pt-2'>{longText}</p>
                        <p className='lighter'>Data Charges may apply. Contact your provider for details</p>
                    </div>
                    <div className="col-md-4 ml-4">
                        <img src='/about6.png' alt='Socialize Jumbotron'/>
                    </div>
                </div>
                </Fade>
            </div>
            <Fade bottom cascade>
           <div className='theGrids pt-4 pb-4' style={{backgroundColor:'#F9F8F7'}}>
           {gridData.map(el => {
                return <SingleBox bgColor={'white'}
                title={el.title}
                body={el.text}
                 imageName={el.image}/>
           })}           
           </div>
           </Fade>
           <PageFooter/>
       </div>
    )
}

export default WayaChat