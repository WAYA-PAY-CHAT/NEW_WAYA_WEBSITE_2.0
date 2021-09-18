import '../styles/nav.scss'
import { useLocation, Link } from 'react-router-dom'
import { getCategories, getProducts } from '../states/product'
import { useRecoilValueLoadable } from 'recoil'

function TopNav(params) {
  const data = useRecoilValueLoadable(getProducts)
  const dataC = useRecoilValueLoadable(getCategories)
  const products = data.state === "hasValue" && data.contents ? data.contents.data : []
  const categories = dataC.state === "hasValue" && dataC.contents ? dataC.contents.data : []
  let location = useLocation()

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundImage: 'url(/grain.png)' }}>
      <a className="navbar-brand ml-4 pl-3" href="/">
        <img src='/Logo-white.png' alt='wayachat logo' />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className=""><img src='/menu-icon.png'></img> </span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul className="navbar-nav mr-4">
          <li className="nav-item active">
            <a className="nav-link" href="/about">About us <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Business
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="/merchant">Merchants</a>
              <a className="dropdown-item" href="/agent">Agents</a>
              {/* <a className="dropdown-item" href="#">E-Commerce</a> */}
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Products
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              {categories && categories.map(cat => {
                return (
                  <li className="nav-item dropdown" key={cat.id}>
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {cat.category_name}
                    </a>
                    <div className="dropdown-menu inner-menu" aria-labelledby="navbarDropdownMenuLink">
                      {products && products.map(product => {
                        if (product.product_category_id === cat.id) {
                          return (
                            <a key={product.id} className="dropdown-item" href={`/product/${cat.url}#${product.url}`}>{product.product_name}</a>
                          )
                        }
                      })}
                    </div>
                  </li>)
              })}
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/how-it-works">How it works</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/blogs">Blog</a>
          </li>
          <li className={`${location.pathname == '/signin' ? 'hiding' : 'showing'} nav-item link-btn`}>
            <a className="nav-link" href="/signin">LOGIN</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default TopNav
