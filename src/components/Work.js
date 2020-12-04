// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import PopularCourses from './PopularCourses'

// import Lightbox from 'react-image-lightbox';
// import '../../../node_modules/react-image-lightbox/style.css';

//Import Images
import work1 from "../assets/images/work/20.jpg";
import work2 from "../assets/images/work/13.jpg";
import work3 from "../assets/images/work/14.jpg";
import work4 from "../assets/images/work/15.jpg";
import work5 from "../assets/images/work/16.jpg";
import work6 from "../assets/images/work/17.jpg";
import work7 from "../assets/images/work/18.jpg";
import work8 from "../assets/images/work/19.jpg";

//creating array of images for image portfolio
const images = [
    work1,work2,work3,work4,work5,work6,work7,work8
];

class Work extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects : [
                { image : work1, title : "Iphone mockup", subtitle : "Branding", category : "Branding" },
                { image : work2, title : "Mockup Collection", subtitle : "Mockup", category : "Designing" },
                { image : work3, title : "Abstract images", subtitle : "Abstract", category : "Photography" },
                { image : work4, title : "Yellow bg with Books", subtitle : "Company V-card", category : "Development" },
                { image : work5, title : "Company V-card", subtitle : "V-card", category : "Branding" },
                { image : work6, title : "Mockup box with paints", subtitle : "Photography", category : "Branding" }
            ],
            displayCategory: "All",
            photoIndex: 0,
            isOpen: false,
        }
        this.setCategory.bind(this);
    }

    setCategory(category) {
        this.setState({
          displayCategory: category
        });
    }

    render() {
        const { photoIndex, isOpen } = this.state;
        return (
            <React.Fragment>
                <section className="section">
                    <Container>
                        <Row>
                            <ul className="col container-filter list-unstyled categories-filter text-center" id="filter">
                                <li className="list-inline-item mr-1"><Link  to="#" onClick={() => this.setCategory("All")} className={this.state.displayCategory === "All" ? "categories border d-block text-dark rounded active" : "categories border d-block text-dark rounded" }>All</Link></li>
                                <li className="list-inline-item mr-1"><Link to="#" onClick={() => this.setCategory("Branding")} className={this.state.displayCategory === "Branding" ? "categories border d-block text-dark rounded active" : "categories border d-block text-dark rounded" } >Branding</Link></li>
                                <li className="list-inline-item mr-1"><Link to="#" onClick={() => this.setCategory("Designing")} className={this.state.displayCategory === "Designing" ? "categories border d-block text-dark rounded active" :"categories border d-block text-dark rounded"  }>Designing</Link></li>
                                <li className="list-inline-item mr-1"><Link  to="#" onClick={() => this.setCategory("Photography")} className={this.state.displayCategory === "Photography" ?  "categories border d-block text-dark rounded active" :  "categories border d-block text-dark rounded" } >Photography</Link></li>
                                <li className="list-inline-item"><Link to="#" onClick={() => this.setCategory("Development")} className={this.state.displayCategory === "Development" ?"categories border d-block text-dark rounded active"  : "categories border d-block text-dark rounded" } >Development</Link></li>
                            </ul>
                        </Row>
                    </Container>
                    
                    <Container fluid>
                        <Row className="container-grid projects-wrapper">
                        { this.state.projects
                            .filter(
                                ({ category }) =>
                                this.state.displayCategory === category || this.state.displayCategory === "All"
                            )
                            .map(({ title, image, subtitle  }, key) => (
                                <Col lg={4} md={6} xs={12} key={key} className="spacing mt-3">
                                    <Card className="border-0 work-container work-grid position-relative d-block overflow-hidden rounded">
                                        <CardBody className="p-0">
                                            <Link to="#" className="mfp-image d-inline-block" onClick={(event) => {event.preventDefault(); this.setState({ isOpen: true, photoIndex : key })}} >
                                                <img src={image} className="img-fluid" loading="lazy" alt="work"/>
                                            </Link>
                                            <div className="content bg-white p-3">
                                                <h5 className="mb-0"><Link to="page-work-detail" className="text-dark title">{title}</Link></h5>
                                                <h6 className="text-muted tag mb-0">{subtitle}</h6>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>

                        ))}
                                
                         </Row>
                         {/* lightbox for portfolio images */}
                         { isOpen && ( <PopularCourses/>
                                    // <Lightbox
                                    //     mainSrc={images[photoIndex]}
                                    //     nextSrc={images[(photoIndex + 1) % images.length]}
                                    //     prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                    //     imagePadding={100}
                                    //     onCloseRequest={() => this.setState({ isOpen: false })}
                                    //     onMovePrevRequest={() =>
                                    //     this.setState({
                                    //         photoIndex: (photoIndex + images.length - 1) % images.length,
                                    //     })
                                    //     }
                                    //     onMoveNextRequest={() =>
                                    //     this.setState({
                                    //         photoIndex: (photoIndex + 1) % images.length,
                                    //     })
                                    //     }
                                    // />
                                    ) }
                    </Container>
                    <Container className="mt-100 mt-60">
                        <Row className="justify-content-center">
                            <Col xs="12" className="text-center">
                                <div className="section-title">
                                    <h4 className="title mb-4">Let's talk about your portfolio</h4>
                                    <p className="text-muted para-desc mx-auto">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    <div className="mt-4 pt-2">
                                        <Link to="#" className="btn btn-primary">Get Started Now</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Work;