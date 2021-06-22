import '../styles/blog.scss'
import axios from 'axios'
import {useState, useEffect} from 'react'
import PageFooter from '../componentParts/footer'
import TopNav from '../componentParts/topNav'

function Blog(){
    const [posts, setposts] = useState([
        {
            title:'Strategies for Business Survival during a Recession ',
            image: '/blogPic.png',
            preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna diam vestibulum in aliquam faucibus ornare. Amet feugiat mauris consequat, risus, arcu.',
            link: '',
            date: 'Sunday, 20 May, 2020',
            duration: '12 Min read'
        },
        {
            title:'18 Strategic ways to win customers and make them persistent for life',
            image: '/blogPic.png',
            preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna diam vestibulum in aliquam faucibus ornare. Amet feugiat mauris consequat, risus, arcu.',
            link: '',
            date: 'Sunday, 20 May, 2020',
            duration: '12 Min read'
        },
        {
            title:'The Benefits of Digital Payments',
            image: '/blogPic.png',
            preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna diam vestibulum in aliquam faucibus ornare. Amet feugiat mauris consequat, risus, arcu.',
            link: '',
            date: 'Sunday, 20 May, 2020',
            duration: '12 Min read'
        },
        {
            title:'Why the Digital Mobile Wallet is the Future and Better Than Cash?',
            image: '/blogPic.png',
            preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna diam vestibulum in aliquam faucibus ornare. Amet feugiat mauris consequat, risus, arcu.',
            link: '',
            date: 'Sunday, 20 May, 2020',
            duration: '12 Min read'
        },
        {
            title:'Six (6) Ways To Manage Your Expenses This Yuletide Season',
            image: '/blogPic.png',
            preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna diam vestibulum in aliquam faucibus ornare. Amet feugiat mauris consequat, risus, arcu.',
            link: '',
            date: 'Sunday, 20 May, 2020',
            duration: '12 Min read'
        },
        {
            title:'Are you behind your sales push? This is for you to grow',
            image: '/blogPic.png',
            preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna diam vestibulum in aliquam faucibus ornare. Amet feugiat mauris consequat, risus, arcu.',
            link: '',
            date: 'Sunday, 20 May, 2020',
            duration: '12 Min read'
        },
    ])

    useEffect(() => {
        axios.get('https://waya-pay-chat.herokuapp.com/posts/').then(res => {
            console.log(res)
        }).catch(err => {
            console.error(err)
        })
        // return () => {
        //     cleanup
        // }
    }, [])

    return (     
        <div>
            <TopNav/>
            <div id='blog' style={{backgroundImage: 'url(/radial.png)'}}>
            <div className="blog-jumbotron pb-4 mb-4" >
                <div className="py-4 text-center">
                    <div className='pt-4 mt-4'>
                        <h1 className="">Blog</h1>
                        <p className=''>The latest updates, stories, ideas and guides from the Waya team.</p>
                    </div>
                </div>
            </div>
            <div className='blogs pb-4'>
            {
                posts.map(el => {
                    return  <div className="card blog-card" >
                    <img className="card-img-top" src={el.image} alt="Blog Image"/>
                        <div className="card-body">
                            <div className='row justify-content-between'>
                                <p className='col'>{el.date}</p>
                                <p className='col-sm-4'>{el.duration}</p>
                            </div>
                            <h6 className="card-title">{el.title}</h6>
                            <p className="card-text">{el.preview}</p>
                            <button className='orange'>Read More <span><img src='/rightArr.png' /></span></button>
                    </div>
                </div>
                })
            }
            </div>
            <div aria-label="Page  navigation example">
                <ul className="justify-content-center pagination">
                    <li className="page-item"><a className="page-link" href="#">  <img src='/left.png'/></a></li>
                    <li className="page-item active"><a className="page-link" href="#"><img src='/dot.png'/></a></li>
                    <li className="page-item"><a className="page-link" href="#"><img src='/darkDot.png'/></a></li>
                    <li className="page-item"><a className="page-link" href="#"><img src='/darkDot.png'/></a></li>
                    <li className="page-item"><a className="page-link" href="#">  <img src='/right.png'/></a></li>
                </ul>
            </div>
            <PageFooter/>
       </div>
        </div>
    )
}

export default Blog