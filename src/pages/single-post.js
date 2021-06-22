import '../styles/single-post.scss'
import axios from 'axios'
import {useState, useEffect} from 'react'
import PageFooter from '../componentParts/footer'
import TopNav from '../componentParts/topNav'
import { useParams } from "react-router-dom";

function SinglePost(props){
    let { postId } = useParams();
    const [post, setPost] = useState({})
    let dateFormater = (theDate) => {
        const dateobj = new Date(theDate);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return dateobj.toLocaleDateString(undefined, options)
    }

    let formatPostTitle = (text) => {
        let pieces = text.split(' ')
        let joined = pieces.join('%20')
        return joined
    }

    useEffect(() => {
        axios.get(`https://waya-pay-chat.herokuapp.com/posts/1`).then(res => {
            console.log(res)
            setPost(res.data)
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
                <div id='singlePost'>
                    <div className='theBody'>
                    <div className='jumbotron'>
                    <img className="" src={'/blogPic.png'} alt="Blog Image"/>
                    <p>{dateFormater(post.updated_at)}</p>
                    <p>{post.author || 'Author'}</p>
                    <h3>{post.title}</h3>
                    <section>
                        {post.content}
                    </section>
                    
                    </div>
                    <div className='row ml-3 mb-4'>
                        <div className='col-sm-2'>
                        <a href={`https://twitter.com/intent/tweet?url=https://wayachat-preview.netlify.app/blog/${postId}`}>
                        <img src='/twitter.png' style={{maxWidth: '20%'}} alt='twitter'/>
                        </a>
                        </div>
                        <div className='col-sm-2'>
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=https://wayachat-preview.netlify.app/blog/${postId}`}>
                        <img src='/facebook.png' style={{maxWidth: '10%'}}  alt='facebook'/>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
            <PageFooter/>
       </div>
    )
}

export default SinglePost