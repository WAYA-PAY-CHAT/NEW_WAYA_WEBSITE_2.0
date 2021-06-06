import '../styles/blog.scss'
import {useState} from 'react'
function Blog(){
    const [posts, setposts] = useState([
        {
            title:'',
            image: '',
            preview: '',
            link: ''
        }
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
            <div className='blogs'>
            <div className="card blog-card" >
                <img className="card-img-top" src='/blogPic.png' alt="Blog Image"/>
                    <div className="card-body">
                        <div className='row justify-content-between'>
                            <p className='col'>Sunday, 20 May, 2020</p>
                            <p className='col'>12 Min read</p>
                        </div>
                        <h6 className="card-title">Strategies for Business Survival during a Recession </h6>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna diam vestibulum in aliquam faucibus ornare. Amet feugiat mauris consequat, risus, arcu.</p>
                        <button className='orange'>Read More <span><img src='/rightArr.png' /></span></button>
                </div>
            </div>
            <div className="card blog-card" >
                <img className="card-img-top" src='/blogPic.png' alt="Blog Image"/>
                    <div className="card-body">
                        <h6 className="card-title">18 Strategic ways to win customers and make them persistent for life</h6>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna diam vestibulum in aliquam faucibus ornare. Amet feugiat mauris consequat, risus, arcu. </p>
                        <button className='orange'>Read More <span><img src='/rightArr.png' /></span></button>
                </div>
            </div>
            </div>
       </div>
    )
}

export default Blog