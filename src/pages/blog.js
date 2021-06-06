import '../styles/blog.scss'
import {useState} from 'react'

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
    return (     
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
            <div className='pagination row justify-content-center'>
                <div className='row justify-content-center align-center col-sm-3'>
                <button className='col-sm-2'>
                    <img src='/left.png'/>
                </button>
                <div className='col-sm-6'>
                <span className=''><img src='/dot.png'/></span>
                <span className=''><img src='/darkDot.png'/></span>
                <span className=''><img src='/darkDot.png'/></span>
                </div>
                <button className='col-sm-2'>
                    <img src='/right.png'/>
                </button>
                </div>
            </div>
       </div>
    )
}

export default Blog