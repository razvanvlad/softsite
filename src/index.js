import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/App";
import MainLayout from "./components/layout/MainLayout";
import About from "./components/page/about/About";
import BlogSidebar from "./components/page/blog/BlogSidebar";
import BlogDetails from "./components/page/BlogDetails/BlogDetails";
import BlogStandard from "./components/page/BlogStandard/BlogStandard";
import Contact from "./components/page/contact/Contact";
import ErrorPage from "./components/page/error/ErrorPage";
import PachetDigital from "./components/page/pachet/PachetDigital";
import HomePageTwo from "./components/page/homepage2/HomePageTwo";
import Pricing from "./components/page/pricing/Pricing";
import Project from "./components/page/project/Project";
import ProjectDetails from "./components/page/ProjectDetails/ProjectDetails";
import Service from "./components/page/service/Service";
import CreareWebsite from "./components/page/ServiceDetails/CreareWebsite";
import DezvoltareSoftware from "./components/page/ServiceDetails/DezvoltareSoftware";
import MagazinOnline from "./components/page/ServiceDetails/MagazinOnline";
import MarketingPromovare from "./components/page/ServiceDetails/MarketingPromovare";
import DesignGrafic from "./components/page/ServiceDetails/DesignGrafic"; 
import Gazduire from "./components/page/ServiceDetails/Gazduire";
import Mentenanta from "./components/page/ServiceDetails/Mentenanta";
import AutomatizariRpa from "./components/page/ServiceDetails/AutomatizariRpa";
import AplicatieAndroidIos from "./components/page/ServiceDetails/AplicatieAndroidIos";
import EchipamenteIt from "./components/page/ServiceDetails/EchipamenteIt";
import Team from "./components/page/team/Team";
import "./index.css"

//Default Warniing Error Hide
console.log = console.warn = console.error = () => {};

/*
=>version : 0.1
=>Event : Rendering al content to web
=>Action: define all routes and page
@return HTML
*/

function Root() {
  return <>
  <BrowserRouter basename="/">
    <Switch>
      {/*main layout*/}
      <Route exact path="/" component={MainLayout} />
      {/* secound layout */}
      <Route exact path="/index2" component={HomePageTwo} />
      {/* all inner page load layout component */}
      <Layout>
        {/* <Route
          exact
          path={`${process.env.PUBLIC_URL}/about-us`}
          component={AboutPage}
        /> */}
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/despre-noi`}
          component={About}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/contact`}
          component={Contact}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/eroare`}
          component={ErrorPage}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/articole`}
          component={BlogSidebar}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/articole-standard`}
          component={BlogStandard}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/detalii-articol`}
          component={BlogDetails}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/servicii`}
          component={Service}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/creare-website`}
          component={CreareWebsite}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/dezvoltare-software`}
          component={DezvoltareSoftware}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/magazin-online`}
          component={MagazinOnline}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/marketing-si-promovare`}
          component={MarketingPromovare} 
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/design-grafic`}
          component={DesignGrafic}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/gazduire`}
          component={Gazduire}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/mentenanta-si-suport`}
          component={Mentenanta}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/automatizari-rpa`}
          component={AutomatizariRpa}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/aplicatie-android-si-ios`}
          component={AplicatieAndroidIos}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/furnizare-echipamente-it`}
          component={EchipamenteIt}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/detalii-proiect`}
          component={ProjectDetails}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/proiecte`}
          component={Project}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/echipa`}
          component={Team}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/preturi`}
          component={Pricing}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/pachet-digital-startup-nation-2022`}
          component={PachetDigital}
        />
        {/* 
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/team`}
          component={TeamPage}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/feedback`}
          component={FeedbackPage}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/faq`}
          component={FaqPage}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/error`}
          component={ErrorPage}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/blog-grid`}
          component={BlogGridPage}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/blog-sidebar`}
          component={BlogSidebarPage}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/blog-details`}
          component={BlogDetailsPage}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/project`}
          component={ProjectPage}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/project-details`}
          component={ProjectDetailsPage}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/servicii`}
          component={ServicePage}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/service-details`}
          component={ServiceDetailsPage}
        /> */}
      </Layout>
    </Switch>
  </BrowserRouter>
</>
}

export default Root;

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
