import '../styles/nav.scss'
import { useLocation, Link } from 'react-router-dom'

function TopNav(params) {
  let location = useLocation()
  
    return (
        <nav className="navbar navbar-expand-lg" style={{backgroundImage: 'url(/grain.png)'}}>
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
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        WayaPay
        </a>
        <div className="dropdown-menu inner-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/wayapay#wallet">Digital Wallet</a>
          <a className="dropdown-item" href="/wayapay#sendMoney">Send Money</a>
          <a className="dropdown-item" href="/wayapay#withdraw">Withdraw Money</a>
          <a className="dropdown-item" href="/wayapay#qr">Qr code scanner</a>
          <a className="dropdown-item" href="/wayapay#bills">Pay Bills</a>
          <a className="dropdown-item" href="/wayapay#checkout">Online Checkout</a>
          <a className="dropdown-item" href="/wayapay#rmoney">Request Money</a>
          <a className="dropdown-item" href="/wayapay#invoice">Settle Invoice</a>
          <a className="dropdown-item" href="/wayapay#tvSub">Pay TV Subscription</a>
          <a className="dropdown-item" href="/wayapay#topUp">Top-up Airtime and Data</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        WayaChat
        </a>
        <div className="dropdown-menu inner-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/wayachat#voiceCall">Voice call</a>
          <a className="dropdown-item" href="/wayachat#videoCall">Video call</a>
          <a className="dropdown-item" href="/wayachat#media">Send media</a>
          <a className="dropdown-item" href="/wayachat#chats">Chat</a>
          <a className="dropdown-item" href="/wayachat#sharing">Share files</a>
          <a className="dropdown-item" href="/wayachat#groupcall">Group Voice Call and Video</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        WayaGram
        </a>
        <div className="dropdown-menu inner-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/wayagram#post">Make Post</a>
          <a className="dropdown-item" href="/wayagram#group">Join Group</a>
          <a className="dropdown-item" href="/wayagram#socialize">Socialize</a>
          <a className="dropdown-item" href="/wayagram#vote">Vote</a>
          <a className="dropdown-item" href="/wayagram#moments">Enjoy Moments</a>
          <a className="dropdown-item" href="/wayagram#advertise">Advertise</a>
          <a className="dropdown-item" href="/wayagram#live">Share Live Screen</a>
          <a className="dropdown-item" href="/wayagram#campaign">Campaign</a>
        </div>
      </li>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/how-it-works">How it works</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/contact">Contact</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/blog">Blog</a>
      </li>
      <li className={`${location.pathname=='/signin'?'hiding':'showing'} nav-item link-btn`}>
        <a className="nav-link" href="/signin">LOGIN</a>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default TopNav
