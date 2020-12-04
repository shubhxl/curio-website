// React Basic and Bootstrap
import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

// import generic componenets
import Section from "./section";
import Topbar from '../../components/Topbar';

const TopCategories = lazy(() => import('../../components/TopCategories'));
const WhySports = lazy(() => import('../../components/WhySports'));
const FAQSports = lazy(() => import('../../components/FAQSports'));
const Footer = lazy(() => import('../../components/Footer'));

class IndexS extends Component {
    
    componentDidMount() {
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
                <Section/>
                <Suspense fallback={<div>Loading...</div>}>
                <TopCategories/>
                <WhySports/>
                <FAQSports/>
                <Footer/>
                </Suspense>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default IndexS;
