import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "../routes";

// pages
import DashboardOverview from "./dashboard/DashboardOverview";
import Transactions from "./Transactions";
import Signin from "./examples/Signin";
import ForgotPassword from "./examples/ForgotPassword";
import ResetPassword from "./examples/ResetPassword";
import Lock from "./examples/Lock";
import NotFoundPage from "./examples/NotFound";

// import Settings from "./Settings";
// import Upgrade from "./Upgrade";
// import ServerError from "./examples/ServerError";
// import Signup from "./examples/Signup";
// import BootstrapTables from "./tables/BootstrapTables";
// import Presentation from "./Presentation";
// documentation pages
// import DocsOverview from "./documentation/DocsOverview";
// import DocsDownload from "./documentation/DocsDownload";
// import DocsQuickStart from "./documentation/DocsQuickStart";
// import DocsLicense from "./documentation/DocsLicense";
// import DocsFolderStructure from "./documentation/DocsFolderStructure";
// import DocsBuild from "./documentation/DocsBuild";
// import DocsChangelog from "./documentation/DocsChangelog";

// components
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import Sidebar from "../components/Sidebar";

import Accordion from "./components/Accordion";
import Alerts from "./components/Alerts";
import Badges from "./components/Badges";
import Breadcrumbs from "./components/Breadcrumbs";
import Buttons from "./components/Buttons";
import Forms from "./components/Forms";
import Modals from "./components/Modals";
import Navs from "./components/Navs";
import Navbars from "./components/Navbars";
import Pagination from "./components/Pagination";
import Popovers from "./components/Popovers";
import Progress from "./components/Progress";
import Tables from "./components/Tables";
import Tabs from "./components/Tabs";
import Tooltips from "./components/Tooltips";
import Toasts from "./components/Toasts";
import Admin from './admin/Admin';
import About from './cms/about/About';
import Blogs from './cms/blogs/Blogs';
import Merchants from './cms/business/Merchants';
import Contact from './cms/contact/Contact';
import Home from './cms/home/Home';
import HowItWork from './cms/howItWork/HowItWork';
import Product from './cms/products/Product';
import { history } from '..';
import Settings from './cms/settings/Settings';
import Subscribers from './cms/subscribers/Subscribers';
import Features from './cms/features/Features';
import Agents from './cms/business/Agents';

const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route {...rest} render={props => (<> <Preloader show={loaded ? false : true} /> <Component {...props} /> </>)} />
  );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("user_data")
    if (!data) {
      history.push(Routes.Signin)
    }
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // const localStorageIsSettingsVisible = () => {
  //   return localStorage.getItem('settingsVisible') === 'false' ? false : true
  // }

  // const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

  // const toggleSettings = () => {
  //   setShowSettings(!showSettings);
  //   localStorage.setItem('settingsVisible', !showSettings);
  // }

  return (
    <Route {...rest} render={props => (
      <>
        <Preloader show={loaded ? false : true} />
        <Sidebar />

        <main className="content">
          {/* <Navbar /> */}
          <Component {...props} />
          {/* <Footer toggleSettings={toggleSettings} showSettings={showSettings} /> */}
        </main>
      </>
    )}
    />
  );
};

export default () => (
  <Switch>
    <RouteWithLoader exact path={Routes.Signin} component={Signin} />
    <RouteWithLoader exact path={Routes.ForgotPassword} component={ForgotPassword} />
    <RouteWithLoader exact path={Routes.ResetPassword} component={ResetPassword} />
    <RouteWithLoader exact path={Routes.Lock} component={Lock} />
    <RouteWithLoader exact path={Routes.NotFound} component={NotFoundPage} />

    {/* pages */}
    <RouteWithSidebar exact path={Routes.DashboardOverview} component={DashboardOverview} />
    <RouteWithSidebar exact path={Routes.Transactions} component={Transactions} />
    <RouteWithSidebar exact path={Routes.Settings} component={Settings} />
    <RouteWithSidebar exact path={Routes.Subscribers} component={Subscribers} />
    <RouteWithSidebar exact path={Routes.Admin} component={Admin} />
    <RouteWithSidebar exact path={Routes.About} component={About} />
    <RouteWithSidebar exact path={Routes.Blogs} component={Blogs} />
    <RouteWithSidebar exact path={Routes.Merchants} component={Merchants} />
    <RouteWithSidebar exact path={Routes.Agents} component={Agents} />
    <RouteWithSidebar exact path={Routes.Contact} component={Contact} />
    <RouteWithSidebar exact path={Routes.Home} component={Home} />
    <RouteWithSidebar exact path={Routes.HowItWork} component={HowItWork} />
    <RouteWithSidebar exact path={Routes.Product} component={Product} />
    <RouteWithSidebar exact path={Routes.Features} component={Features} />

    {/* components */}
    <RouteWithSidebar exact path={Routes.Accordions} component={Accordion} />
    <RouteWithSidebar exact path={Routes.Alerts} component={Alerts} />
    <RouteWithSidebar exact path={Routes.Badges} component={Badges} />
    <RouteWithSidebar exact path={Routes.Breadcrumbs} component={Breadcrumbs} />
    <RouteWithSidebar exact path={Routes.Buttons} component={Buttons} />
    <RouteWithSidebar exact path={Routes.Forms} component={Forms} />
    <RouteWithSidebar exact path={Routes.Modals} component={Modals} />
    <RouteWithSidebar exact path={Routes.Navs} component={Navs} />
    <RouteWithSidebar exact path={Routes.Navbars} component={Navbars} />
    <RouteWithSidebar exact path={Routes.Pagination} component={Pagination} />
    <RouteWithSidebar exact path={Routes.Popovers} component={Popovers} />
    <RouteWithSidebar exact path={Routes.Progress} component={Progress} />
    <RouteWithSidebar exact path={Routes.Tables} component={Tables} />
    <RouteWithSidebar exact path={Routes.Tabs} component={Tabs} />
    <RouteWithSidebar exact path={Routes.Tooltips} component={Tooltips} />
    <RouteWithSidebar exact path={Routes.Toasts} component={Toasts} />

    {/* documentation */}
    {/* <RouteWithSidebar exact path={Routes.DocsOverview} component={DocsOverview} />
    <RouteWithSidebar exact path={Routes.DocsDownload} component={DocsDownload} />
    <RouteWithSidebar exact path={Routes.DocsQuickStart} component={DocsQuickStart} />
    <RouteWithSidebar exact path={Routes.DocsLicense} component={DocsLicense} />
    <RouteWithSidebar exact path={Routes.DocsFolderStructure} component={DocsFolderStructure} />
    <RouteWithSidebar exact path={Routes.DocsBuild} component={DocsBuild} />
    <RouteWithSidebar exact path={Routes.DocsChangelog} component={DocsChangelog} /> */}
    {/* <RouteWithLoader exact path={Routes.ServerError} component={ServerError} />
    <RouteWithLoader exact path={Routes.Signup} component={Signup} />
    <RouteWithLoader exact path={Routes.Presentation} component={Presentation} /> */}
    {/* <RouteWithSidebar exact path={Routes.Upgrade} component={Upgrade} />
    <RouteWithSidebar exact path={Routes.BootstrapTables} component={BootstrapTables} /> */}

    <Redirect to={Routes.NotFound} />
  </Switch>
);
