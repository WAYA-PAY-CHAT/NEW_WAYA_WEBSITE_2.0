
import React, { useState } from "react";
import SimpleBar from 'simplebar-react';
import { useLocation } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faAddressCard, faGlobe, faBusinessTime, faAddressBook, faHome, faCartArrowDown, faTimes, faUserShield, faArrowRight, faCog, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { Nav, Badge, Image, Button, Navbar } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../routes";
// import ThemesbergLogo from "../assets/img/themesberg.svg";
// import ReactHero from "../assets/img/technologies/react-hero-logo.svg";
import ProfilePicture from "../assets/img/Logo-white.png";
import { logout } from "../services/apiCalls";

export default (props = {}) => {
  const location = useLocation();
  const { pathname } = location;
  const [show, setShow] = useState(false);
  const showClass = show ? "show" : "";

  const onCollapse = () => setShow(!show);

  // const CollapsableNavItem = (props) => {
  //   const { eventKey, title, icon, children = null } = props;
  //   const defaultKey = pathname.indexOf(eventKey) !== -1 ? eventKey : "";

  //   return (
  //     <Accordion as={Nav.Item} defaultActiveKey={defaultKey}>
  //       <Accordion.Item eventKey={eventKey}>
  //         <Accordion.Button as={Nav.Link} className="d-flex justify-content-between align-items-center">
  //           <span>
  //             <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span>
  //             <span className="sidebar-text">{title}</span>
  //           </span>
  //         </Accordion.Button>
  //         <Accordion.Body className="multi-level">
  //           <Nav className="flex-column">
  //             {children}
  //           </Nav>
  //         </Accordion.Body>
  //       </Accordion.Item>
  //     </Accordion>
  //   );
  // };

  const NavItem = (props) => {
    const { title, link, external, target, icon, image, badgeText, badgeBg = "secondary", badgeColor = "primary" } = props;
    const classNames = badgeText ? "d-flex justify-content-start align-items-center justify-content-between" : "";
    const navItemClassName = link === pathname ? "active" : "";
    const linkProps = external ? { href: link } : { as: Link, to: link };

    return (
      <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
        <Nav.Link {...linkProps} target={target} className={classNames}>
          <span>
            {icon ? <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span> : null}
            {image ? <Image src={image} width={20} height={20} className="sidebar-icon svg-icon" /> : null}

            <span className="sidebar-text">{title}</span>
          </span>
          {badgeText ? (
            <Badge pill bg={badgeBg} text={badgeColor} className="badge-md notification-count ms-2">{badgeText}</Badge>
          ) : null}
        </Nav.Link>
      </Nav.Item>
    );
  };

  return (
    <>
      <Navbar expand={false} collapseOnSelect variant="dark" className="navbar-theme-primary px-4 d-md-none">
        <Navbar.Brand className="me-lg-5" as={Link} to={Routes.DashboardOverview}>
          <Image src={ProfilePicture} className="navbar-brand-light" />
        </Navbar.Brand>
        <Navbar.Toggle as={Button} aria-controls="main-navbar" onClick={onCollapse}>
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
      </Navbar>
      <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
        <SimpleBar className={`collapse ${showClass} sidebar d-md-block bg-primary text-white`}>
          <div className="sidebar-inner px-4 pt-3">
            <div className="user-card d-flex align-items-center justify-content-between justify-content-md-center pb-4">
              <div className="d-flex align-items-center">
                <div className="user-avatar lg-avatar me-4">
                  <Image src={ProfilePicture} className="card-img-top rounded-circle border-white" />
                </div>
                {/* <div className="d-block">
                  <h6>Hi, Jane</h6>
                  <Button as={Link} variant="secondary" size="xs" to={Routes.Signin} className="text-dark">
                    <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Sign Out
                  </Button>
                </div> */}
              </div>
              <Nav.Link className="collapse-close d-md-none" onClick={onCollapse}>
                <FontAwesomeIcon icon={faTimes} />
              </Nav.Link>
            </div>
            <Nav className="flex-column pt-3 pt-md-0">
              {/* <NavItem title="Dashboard" link={Routes.DashboardOverview} icon={faChartPie} /> */}
              <NavItem title="Admin" link={Routes.Admin} icon={faUserShield} />
              <NavItem title="About" icon={faAddressCard} link={Routes.About} />
              <NavItem title="Blogs" icon={faGlobe} link={Routes.Blogs} />
              <NavItem title="Merchants" icon={faBusinessTime} link={Routes.Merchants} />
              <NavItem title="Agents" icon={faBusinessTime} link={Routes.Agents} />
              <NavItem title="Contact" icon={faAddressBook} link={Routes.Contact} />
              <NavItem title="Home" icon={faHome} link={Routes.Home} />
              <NavItem title="HowItWork" icon={faCogs} link={Routes.HowItWork} />
              <NavItem title="Product" icon={faCartArrowDown} link={Routes.Product} />
              <NavItem title="Subscribers" icon={faUserFriends} link={Routes.Subscribers} />
              <NavItem title="Settings" icon={faCog} link={Routes.Settings} />
              <Button variant="secondary" className="text-dark me-3" onClick={() => logout()}>
                Logout <FontAwesomeIcon icon={faArrowRight} className="d-none d-sm-inline ms-1" />
              </Button>
              {/* <NavItem title="Transactions" icon={faHandHoldingUsd} link={Routes.Transactions} /> */}
              {/* <NavItem title="Settings" icon={faCog} link={Routes.Settings} /> */}
              {/* <NavItem title="Volt React" link={Routes.Presentation} image={ReactHero} /> */}
              {/* <NavItem external title="Messages" link="https://demo.themesberg.com/volt-pro-react/#/messages" target="_blank" badgeText="Pro" icon={faInbox} /> */}
              {/* <NavItem external title="Calendar" link="https://demo.themesberg.com/volt-pro-react/#/calendar" target="_blank" badgeText="Pro" icon={faCalendarAlt} /> */}
              {/* <NavItem external title="Map" link="https://demo.themesberg.com/volt-pro-react/#/map" target="_blank" badgeText="Pro" icon={faMapPin} /> */}
              {/* <NavItem external title="Plugins" link="https://demo.themesberg.com/volt-pro-react/#/plugins/datatable" target="_blank" badgeText="Pro" icon={faChartPie} /> */}

              {/* <CollapsableNavItem eventKey="tables/" title="Tables" icon={faTable}>
                <NavItem title="Bootstrap Table" link={Routes.BootstrapTables} />
              </CollapsableNavItem>

              <CollapsableNavItem eventKey="examples/" title="Page Examples" icon={faFileAlt}>
                <NavItem title="Sign In" link={Routes.Signin} />
                <NavItem title="Sign Up" link={Routes.Signup} />
                <NavItem title="Forgot password" link={Routes.ForgotPassword} />
                <NavItem title="Reset password" link={Routes.ResetPassword} />
                <NavItem title="Lock" link={Routes.Lock} />
                <NavItem title="404 Not Found" link={Routes.NotFound} />
                <NavItem title="500 Server Error" link={Routes.ServerError} />
              </CollapsableNavItem> */}


              {/* <Dropdown.Divider className="my-3 border-indigo" /> */}

              {/* <CollapsableNavItem eventKey="documentation/" title="Getting Started" icon={faBook}>
                <NavItem title="Overview" link={Routes.DocsOverview} />
                <NavItem title="Download" link={Routes.DocsDownload} />
                <NavItem title="Quick Start" link={Routes.DocsQuickStart} />
                <NavItem title="License" link={Routes.DocsLicense} />
                <NavItem title="Folder Structure" link={Routes.DocsFolderStructure} />
                <NavItem title="Build Tools" link={Routes.DocsBuild} />
                <NavItem title="Changelog" link={Routes.DocsChangelog} />
              </CollapsableNavItem> */}
              {/* <CollapsableNavItem eventKey="components/" title="Components" icon={faBoxOpen}>
                <NavItem title="Accordion" link={Routes.Accordions} />
                <NavItem title="Alerts" link={Routes.Alerts} />
                <NavItem title="Badges" link={Routes.Badges} />
                <NavItem external title="Widgets" link="https://demo.themesberg.com/volt-pro-react/#/components/widgets" target="_blank" badgeText="Pro" />
                <NavItem title="Breadcrumbs" link={Routes.Breadcrumbs} />
                <NavItem title="Buttons" link={Routes.Buttons} />
                <NavItem title="Forms" link={Routes.Forms} />
                <NavItem title="Modals" link={Routes.Modals} />
                <NavItem title="Navbars" link={Routes.Navbars} />
                <NavItem title="Navs" link={Routes.Navs} />
                <NavItem title="Pagination" link={Routes.Pagination} />
                <NavItem title="Popovers" link={Routes.Popovers} />
                <NavItem title="Progress" link={Routes.Progress} />
                <NavItem title="Tables" link={Routes.Tables} />
                <NavItem title="Tabs" link={Routes.Tabs} />
                <NavItem title="Toasts" link={Routes.Toasts} />
                <NavItem title="Tooltips" link={Routes.Tooltips} />
              </CollapsableNavItem> */}
              {/* <NavItem external title="Themesberg" link="https://themesberg.com" target="_blank" image={ThemesbergLogo} /> */}
              {/* <Button as={Link} to={Routes.Upgrade} variant="secondary" className="upgrade-to-pro"><FontAwesomeIcon icon={faRocket} className="me-1" /> Upgrade to Pro</Button> */}
            </Nav>
          </div>
        </SimpleBar>
      </CSSTransition>
    </>
  );
};
