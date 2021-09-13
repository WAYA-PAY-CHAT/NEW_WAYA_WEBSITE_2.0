import React from 'react'
import { Breadcrumb, Button } from '@themesberg/react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faHome, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useRecoilState, useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { categories, createCategoryModal, createProductModal, productAlert, productResponse, products } from '../../../states/product';
import ProductCard from './ProductCard';
import CategoryCard from './CategoryCard';
import AlertToast from '../../../components/AlertToast';

const Product = () => {
  const data = useRecoilValueLoadable(products)
  const datac = useRecoilValueLoadable(categories)
  const setCreateProdModal = useSetRecoilState(createProductModal)
  const setCreateCatModal = useSetRecoilState(createCategoryModal)
  const [showAlert, setShowAlert] = useRecoilState(productAlert);
  const response = useRecoilValue(productResponse)
  const productList = data.state === "hasValue" && data.contents.data ? data.contents.data : []
  const categoryList = datac.state === "hasValue" && datac.contents.data ? datac.contents.data : []

  return (
    <div>
      <AlertToast showAlert={showAlert} setShowAlert={setShowAlert} response={response} page="Blog" />
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Waya pay</Breadcrumb.Item>
            <Breadcrumb.Item active>Product</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Products Page</h4>
        </div>
      </div>
      <div className="table-settings mb-4">
        <Button variant="success" className="text-white me-3" onClick={() => setCreateCatModal(true)}>
          Create New Category <FontAwesomeIcon icon={faCartArrowDown} className="d-none d-sm-inline ms-1" />
        </Button>
        <Button variant="secondary" className="text-white me-3" onClick={() => setCreateProdModal(true)}>
          Create New Product<FontAwesomeIcon icon={faShoppingCart} className="d-none d-sm-inline ms-1" />
        </Button>
      </div>
      <CategoryCard data={categoryList} />
      <ProductCard data={productList} categories={categoryList} />
    </div>
  )
}

export default Product
