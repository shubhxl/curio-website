import React,{Component} from 'react';
import PageAboutUs from '../../components/PageAboutUs'
import Footer from '../../components/Footer'

class indexAbout extends Component {
  
 componentDidMount(){
     document.title = "About Curio Team"
 }

    render() {
        return (
            <div>
            <PageAboutUs/>
            <Footer/>
            </div>
        );

    }
}

export default indexAbout;