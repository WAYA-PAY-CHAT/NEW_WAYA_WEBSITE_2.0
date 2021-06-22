import '../styles/blog.scss'
import axios from 'axios'
import {useState, useEffect} from 'react'
import PageFooter from '../componentParts/footer'
import TopNav from '../componentParts/topNav'
import {  useRouteMatch, Link  } from "react-router-dom";

function Blog(props){
    let { path, url } = useRouteMatch();
    const [posts, setposts] = useState([])
    const [loading, setloading] = useState(true)

    let dateFormater = (theDate) => {
        const dateobj = new Date(theDate);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return dateobj.toLocaleDateString(undefined, options)
    }

    let truncateText = (contents) => {
       let reduced = contents.slice(0, 150)
       return reduced
    }

    // let spliceIntoChunks = (elements, chunkSize) => {
    //     const res = [];
    //     while (elements.length > 0) {
    //         const chunk = elements.splice(0, chunkSize);
    //         res.push(chunk);
    //     }
    //     return res;
    // }

    let formatUrl = (url) => {
        return `https://www.waya-pay-chat.herokuapp.com${url}`
    }

    useEffect(() => {
        axios.get('https://waya-pay-chat.herokuapp.com/posts/').then(res => {
            setposts(res.data)
            console.log(res.data)
           setTimeout(() => {
               setloading(false)
           }, 2000);
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
            <div className={`${loading?'showing':'hiding'} loading`}> 
            <img src='/fading.gif' />
            </div>
            <div className={`${loading?'hiding':'showing'}`}>
            <div className='blogs pb-4'>
            {
                posts.map(el => {
                    return  <div className="card blog-card" key={el.id} >
                     <img className="card-img-top" src={`${el.image?formatUrl(el.image.url):'/blogPic.png'}`} alt="Blog Image"/> 
                        
                        <div className="card-body">
                            <div className='row justify-content-between'>
                                <p className='col'>{dateFormater(el.updated_at)}</p>
                                <p className='col-sm-4'>{`${el.read_time?`${el.read_time} mins read`:'10 mins read'}`}</p>
                            </div>
                            <h6 className="card-title">{el.title}</h6>
                            <p className="card-text">{truncateText(el.content)}</p>
                            <button className='orange'>
                            <Link to={{ 
                                    pathname: `${url}/${el.id}`, 
                                    state: `${el.id}` 
                                    }}>
                                    Read More
                                    </Link>
                                <span><img src='/rightArr.png' /></span></button>
                    </div>
                </div>
                })
            }
            </div>  
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