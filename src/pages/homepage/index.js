// React Basic and Bootstrap
import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
// import generic componenets

import Section from "./Section";
import Topbar from "../../components/Topbar";


const Features = lazy(() => import('../../components/Features'));
const Categories = lazy(() => import('../../components/Categories'));
const Classes = lazy(() => import('../../components/Classes'));
const Faqs = lazy(() => import('../../components/Faqs'));
const Footer = lazy(() => import('../../components/Footer'));
const About = lazy(() => import('../../components/About'));


class Index extends Component {
    
    componentDidMount() {
        document.title="Neighbourhood Activity centers"
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);
      }
  
       // Make sure to remove the DOM listener when the component is unmounted.
     componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
     }
     
      scrollNavigation = () => {
          var doc = document.documentElement;
          var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
          if(top > 80)
          {
               document.getElementById('topnav').classList.add('nav-sticky');
          } 
          else
          {
            document.getElementById('topnav').classList.remove('nav-sticky');
          }
      }
      
    render() {

        return (
            
                <BrowserRouter>
                <Topbar/>
                <Section/>
            <Suspense fallback={<div>Loading...</div>}>
                <Classes/>
                <Features/>
                <Categories/>
                <About/>
                <Faqs/>
                <Footer/>
            </Suspense>
                </BrowserRouter>
          
        );
    }
}

export default Index;
