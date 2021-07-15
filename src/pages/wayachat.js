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
            title: 'Voice call',
            image: '/chaticon.png',
            text: 'Make secured VOIP calls with friends or business associates using SPONSORED INTERENET DATA on WayaChat, it’s all FREE'
        },
        {
            title: 'video call',
            image: '/video-call.png',
            text: 'Use WayaChat’s video call features to make end-to-end video calls with any of your contacts using SPONSORED INTERNET DATA'
        },
        {
            title: 'send media',
            image: '/sharer.png',
            text: 'Send multimedia files; Video, GIF, Images, Voice Notes to your contacts at super speed to enhance your communication on WayaChat'
        },
        {
            title: 'chat',
            image: '/chats.png',
            text: 'WayaChat is an instant messaging tool that allows you to chat with friends and family. Send secure short messages to personal contacts or within groups. Messaging is fun with WayaChat'
        },
        {
            title: 'share files',
            image: '/sharing.png',
            text: 'WayaChat allows you to share documents like PDF, Docx, links, JPGE, PNG, SVG, MP4... share files on the go with WayaChat'
        },
        {
            title: 'GROUP VOICE CALL AND VIDEO',
            image: '/groupcall.png',
            text: 'Initiate or join group voice calls and video with friends and family or business associates and make group voice calls or video with WayaChat. All calls on WayaChat are end-to-end encrypted with the most robust encryption technology'
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
