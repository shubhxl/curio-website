// React Basic and Bootstrap
import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';

// import generic components

import Topbar from '../../components/Topbar';
import SectionSporty from '../../components/sectionSporty';
import About from '../../components/About';

const WhySportyBeans = lazy(() => import('../../components/WhySportyBeans'));
const FAQSports = lazy(() => import('../../components/FAQSports'));
const Footer = lazy(() => import("../../components/Footer"));
const AboutSporty = lazy(()=>import("../../components/AboutSportyBeans"))

class IndexSporty extends Component {
    
    componentDidMount() {
        document.title = "SportyBeans-Sports Classes for kids"
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
            <React.Fragment>
                <BrowserRouter>
                <Topbar/>
                <SectionSporty/>
                <Suspense fallback={<div>Loading...</div>}>
                <WhySportyBeans/>
                <AboutSporty/>
                <FAQSports/>
                <Footer/>
                </Suspense>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default IndexSporty;
