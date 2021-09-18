import '../styles/single-post.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'
import PageFooter from '../componentParts/footer'
import TopNav from '../componentParts/topNav'
import { useParams, useRouteMatch } from "react-router-dom";
import { imageUrl } from '../services/axios'
import { useRecoilState, useRecoilValueLoadable, useSetRecoilState } from 'recoil'
import { fetching } from '../states/home'
import { blogId, getSingleBlog } from '../states/blog'

function SinglePost(props) {
  let { url } = useRouteMatch();
  let { postId } = useParams();
  const [blogid, setBlogId] = useRecoilState(blogId)
  setBlogId(url)
  const [loading, setloading] = useRecoilState(fetching)
  const data = useRecoilValueLoadable(getSingleBlog)
  const singleData = data && data.state === "hasValue" && data.contents ? data.contents : {}

  let dateFormater = (theDate) => {
    const dateobj = new Date(theDate);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return dateobj.toLocaleDateString(undefined, options)
  }

  useEffect(() => {
    if (data.contents && data.contents.data) {
      setloading(false)
    }
  }, [singleData])

  return (
    <div>
      <TopNav />
      <div id='singlePost'>
        <div className={`${loading ? 'showing' : 'hiding'} loading`}>
          <img src='/fading.gif' />
        </div>
        <div className={`${loading ? 'hiding' : 'showing'} theBody`}>
          <div className='jumbotron'>
            <img className="" src={`${imageUrl}${singleData.image_url}`} />
            <p>{dateFormater(singleData.created_at)}</p>
            <p>Posted by {singleData.author || 'Admin'}</p>
            <h3>{singleData.title}</h3>
            <section>
              <p dangerouslySetInnerHTML={{ __html: singleData.content }} />
            </section>

          </div>
          <div className='row ml-3 mb-4'>
            <div className='col-sm-2'>
              <a href={`https://twitter.com/intent/tweet?url=https://wayachat-preview.netlify.app/blog/${postId}`}>
                <img src='/twitter.png' style={{ maxWidth: '20%' }} alt='twitter' />
              </a>
            </div>
            <div className='col-sm-2'>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=https://wayachat-preview.netlify.app/blog/${postId}`}>
                <img src='/facebook.png' style={{ maxWidth: '10%' }} alt='facebook' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  )
}

export default SinglePost