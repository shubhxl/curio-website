// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col, Collapse, Card, CardBody, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';

//Import Componenets
// import Counter2 from "../../components/Shared/counter2";

//import images
import faq from '../assets/images/illustrator/faq.svg';

class Faqs extends Component {

    constructor(props) {
        super(props);
        this.state = {

            isOpen: false, 
            collapse1 : true,
            col1: false,
			col2: false,
			col3: false,
            col4: false,
            col5: false
        }
        this.openModal = this.openModal.bind(this);
        this.t_col1 = this.t_col1.bind(this);
		this.t_col2 = this.t_col2.bind(this);
		this.t_col3 = this.t_col3.bind(this);
        this.t_col4 = this.t_col4.bind(this);
        this.t_col5 = this.t_col5.bind(this);
    }

    openModal() {
        this.setState({ isOpen: true })
    }

    t_col1() {
		this.setState({ col1: !this.state.col1, col2 : false, col3 : false, col4 : false, col5 : false });
	}
	t_col2() {
		this.setState({ col2: !this.state.col2, col1 : false, col3 : false, col4 : false, col5 : false });
	}
	t_col3() {
		this.setState({ col3: !this.state.col3, col2 : false, col1 : false, col4 : false, col5 : false });
	}
	t_col4() {
		this.setState({ col4: !this.state.col4, col2 : false, col3 : false, col1 : false, col5 : false });
    }
    t_col5() {
		this.setState({ col5: !this.state.col5, col2 : false, col3 : false, col1 : false, col4 : false });
    }

    render() {
        return (
            <React.Fragment>
                <section className="section">

                    <Container className="mt-60">
                    <h2>FAQs</h2>
                        <Row className="align-items-center">
                            
                            <Col lg="7" md="6">
                                <div className="faq-content mr-lg-5">
                                    <div className="accordion" id="accordionExample">

                                    <Card className="border-0 rounded mb-2">
                                        <Link to="#" onClick={this.t_col1} className={this.state.col1 ? "faq position-relative text-primary" : "faq position-relative text-dark"}>
                                            <CardHeader className="border-0 bg-light p-3 pr-5" id="headingOne">
                                                <h6 className="title mb-0"> What actually Curio does ?
                                                <i className={this.state.col1 ? "mdi mdi-chevron-up float-right" : "mdi mdi-chevron-down float-right"}></i>
                                                </h6>
                                            </CardHeader>
                                        </Link>
                                        <Collapse isOpen={this.state.col1}>
                                            <CardBody>
                                                <p className="text-muted mb-0 faq-ans">Curio provides you the opportunity to enroll your child in multiple activities and courses at a single location at a curio center near you. No more hassle of picking and dropping your kids at multiple locations. Our content partners are the nest in their choosen field and will ensure the best allround academic, physical and mental development for your kids.</p>
                                            </CardBody>
                                        </Collapse>
                                    </Card>

                                    <Card className="border-0 rounded mb-2">
                                        <Link to="#" onClick={this.t_col2} className={this.state.col2 ? "faq position-relative text-primary" : "faq position-relative text-dark"} >
                                            <CardHeader className="border-0 bg-light p-3 pr-5" id="headingTwo">
                                                <h6 className="title mb-0"> How to enroll if I am interested ?
                                                <i className={this.state.col2 ? "mdi mdi-chevron-up float-right" : "mdi mdi-chevron-down float-right"}></i>
                                                </h6>
                                            </CardHeader>
                                        </Link>
                                        <Collapse isOpen={this.state.col2}>
                                            <CardBody>
                                                <p className="text-muted mb-0 faq-ans">You can click on the "Explore more" button in top section </p>
                                            </CardBody>
                                        </Collapse>
                                    </Card>

                                    
                                    </div>
                                </div>
                            </Col>

                            <Col lg="5" md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <img src={faq} alt="FAQ" loading="lazy" />
                            </Col>
                        </Row>
                    </Container>

                </section>
            </React.Fragment>
        );
    }
}

export default Faqs;