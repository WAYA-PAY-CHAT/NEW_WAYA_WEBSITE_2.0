// import '../styles/wayachat.scss'
import SingleBox from '../componentParts/singleBox'
import { useState } from 'react'
import Fade from 'react-reveal/Fade';
import PageFooter from '../componentParts/footer'
import TopNav from '../componentParts/topNav'
import '../styles/wayachat.scss'
import { getCategories, getProducts } from '../states/product';
import { useRecoilValueLoadable } from 'recoil';
import { useParams } from 'react-router';
import { imageUrl } from '../services/axios';

function WayaChat() {
  const data = useRecoilValueLoadable(getProducts)
  const dataC = useRecoilValueLoadable(getCategories)
  const products = data.state === "hasValue" && data.contents ? data.contents.data : []
  const categories = dataC.state === "hasValue" && dataC.contents ? dataC.contents.data : []
  let { cat } = useParams();
  const categoryData = categories.find(category => category.url === cat) || {}
  const gridData = categoryData && products.filter(product => product.product_category_id === categoryData.id)
  console.log("data", categoryData)

  return (
    <div >
      <TopNav />
      <div id="wayaPayPage" className="">
        <div className="jumbotron wayagramJumbotron py-1 mb-1" style={{ backgroundImage: 'url(/Ellipse.png)' }}>
          <Fade right>
            <div className="pb-1 row justify-content-center">
              <div className='col-md-5 pt-4 '>
                <h2 className="">{categoryData.category_page_title}</h2>
                <p className='pt-2'>{categoryData.category_description}</p>
                <p className='lighter'>{categoryData.category_description2}</p>
              </div>
              <div className="col-md-4">
                <img src={`${imageUrl}${categoryData.category_image_url}`} alt='Socialize Jumbotron' />
              </div>
            </div>
          </Fade>
        </div>
        <Fade bottom cascade>
          <div className='theGrids pb-4' style={{ backgroundColor: '#F9F8F7' }}>
            {gridData && gridData.map(el => {
              return <SingleBox key={el.id} bgColor={'white'}
                title={el.product_name}
                body={el.product_description}
                givenId={el.url}
                imageName={el.product_image_url} />
            })}
          </div>
        </Fade>
        <PageFooter />
      </div>
    </div>
  )
}

export default WayaChat
