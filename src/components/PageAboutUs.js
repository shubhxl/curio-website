// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

//Import components
import PageBreadcrumb from "./Shared/PageBreadcrumb";
import SectionTitle from "./Shared/SectionTitle";
import TeamBox from "./Shared/TeamBox";

// import images
import sam from '../assets/images/client/sam.jpg';
import kritika from '../assets/images/client/kritika.jpg';
import ss from '../assets/images/client/ss.jpg';
import mann from '../assets/images/client/mann.jpg';
import abt from '../assets/images/abt.jpg';


class PageAboutUs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pathItems : [
                //id must required
                { id : 1, name : "Curio", link : "/" },
                { id : 2, name : "About Us" },
            ],
            candidates : [
                { id : 1, image : sam, name : "Samarth Agarwal", designation : "C.E.O", link : "www.about.me/samarth.agarwal",
                    socialIds : [
                        { icon : "facebook", link : "https://www.facebook.com/samarth76a" },
                        { icon : "instagram", link : "https://www.instagram.com/samarth76a/" },
                        { icon : "twitter", link : "#" },
                        { icon : "linkedin", link : "https://www.linkedin.com/in/samarth76a/" },
                    ]
                },
                { id : 2, image : ss, name : "Shubham Sinha", designation : "Product Engineer", link : "",
                    socialIds : [
                        { icon : "facebook", link : "https://www.facebook.com/shubham007sinha/" },
                        { icon : "instagram", link : "https://www.instagram.com/shubh_xl/" },
                        { icon : "twitter", link : "https://twitter.com/shubhxl007" },
                        { icon : "linkedin", link : "https://www.linkedin.com/in/shubham-sinha-/" },
                    ]
                },
                { id : 3, image : kritika, name : "Kritika Dixit", designation : "Sales Apprentice", link : "",
                    socialIds : [
                        { icon : "facebook", link : "#" },
                        { icon : "instagram", link : "#" },
                        { icon : "twitter", link : "#" },
                        { icon : "linkedin", link : "#" },
                    ]
                },
                { id : 4, image : mann, name : "Mann Gupta", designation : "Marketing Apprentice", link : "",
                    socialIds : [
                        { icon : "facebook", link : "#" },
                        { icon : "instagram", link : "#" },
                        { icon : "twitter", link : "#" },
                        { icon : "linkedin", link : "#" },
                    ]
                },
            ],
            isOpen: false, 
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true })
    }

    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

     // Make sure to remove the DOM listener when the component is unmounted.
     componentWillUnmount() {
        window.removeEventListener("scroll",this.scrollNavigation, true);
     }

    render() {

        return (
            <React.Fragment>
                {/* breadcrumb */}
                <PageBreadcrumb
                    title="About Us"
                    pathItems = {this.state.pathItems}
                />
                <div className="position-relative">
                    <div className="shape overflow-hidden text-white">
                        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>

              
                                    
                <section className="section">
                    <Container>
                        <Row className="align-items-center">
                            <Col lg={5} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div className="position-relative">
                                    <img src={abt} className="rounded img-fluid mx-auto d-block" alt="team"/> 
                                    {/* <img src={about} className="rounded img-fluid mx-auto d-block" alt="" />
                                    <div className="play-icon">
                                        <a onClick={this.openModal} href="#" className="play-btn video-play-icon">
                                            <i className="mdi mdi-play text-primary rounded-pill bg-white shadow"></i>
                                        </a>
                                    </div> */}
                                </div>
                            </Col>

                            <Col lg={7} md={7} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div className="section-title ml-lg-4">
                                    <h4 className="title mb-4">Our Story</h4>
                                    <p className="text-muted">Start working with Curio so that we can share our story with you :)</p>
                                    <a href="/" className="btn btn-primary mt-3"> Our Blog <i className="mdi mdi-chevron-right"></i></a>
                                </div>
                            </Col>
                        </Row>
                    </Container>

             
                </section>

                <section className="section bg-light">
                    <Container>
                    {/* Render Section Title */}
                    <SectionTitle title="Our Greatest Minds"  />

                        <Row>
                            {/* teambox */}
                            <TeamBox candidates={this.state.candidates} isTransparent={true} />
                        </Row>
                    </Container>

         
                </section>
            </React.Fragment>
        );
    }
}
export default PageAboutUs;
