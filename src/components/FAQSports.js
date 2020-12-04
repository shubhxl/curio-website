// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col, Collapse, Card, CardBody, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';


//import images
import faq from '../assets/images/illustrator/faq.svg';


class FAQSports extends Component {

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
                    <h2> FAQs</h2>
                    <Container className="mt-100 mt-60">
                        <Row className="align-items-center">
                            <Col lg="7" md="6">
                                <div className="faq-content mr-lg-5">
                                    <div className="accordion" id="accordionExample">
                                    <Card className="border-0 rounded mb-2">
                                        <Link to="#" onClick={this.t_col1} className={this.state.col1 ? "faq position-relative text-primary" : "faq position-relative text-dark"}>
                                            <CardHeader className="border-0 bg-light p-3 pr-5" id="headingOne">
                                                <h6 className="title mb-0"> Who is going to be teaching these sports activities for kids?
                                                <i className={this.state.col1 ? "mdi mdi-chevron-up float-right" : "mdi mdi-chevron-down float-right"}></i>
                                                </h6>
                                            </CardHeader>
                                        </Link>
                                        <Collapse isOpen={this.state.col1}>
                                            <CardBody>
                                                <p className="text-muted mb-0 faq-ans">Curio has partnered with Sportybeans, India's leading multi sport program for children, to deliver these sports activities for kids near you. They have trained professional sports teachers and early childhood educators who conduct these classes.</p>
                                            </CardBody>
                                        </Collapse>
                                    </Card>

                                    <Card className="border-0 rounded mb-2">
                                        <Link to="#" onClick={this.t_col2} className={this.state.col2 ? "faq position-relative text-primary" : "faq position-relative text-dark"} >
                                            <CardHeader className="border-0 bg-light p-3 pr-5" id="headingTwo">
                                                <h6 className="title mb-0"> What are the timings for these sport activities for children?
                                                <i className={this.state.col2 ? "mdi mdi-chevron-up float-right" : "mdi mdi-chevron-down float-right"}></i>
                                                </h6>
                                            </CardHeader>
                                        </Link>
                                        <Collapse isOpen={this.state.col2}>
                                            <CardBody>
                                                <p className="text-muted mb-0 faq-ans">Timings for these multi sports classes differes during summer and winter months. During summers, these sports classes for children run between 4:30 pm to 7:30 pm from Monday to Saturday. </p>
                                            </CardBody>
                                        </Collapse>
                                    </Card>

                                    <Card className="border-0 rounded mb-2">
                                        <Link to="#" onClick={this.t_col3} className={this.state.col3 ? "faq position-relative text-primary" : "faq position-relative text-dark"}>
                                            <CardHeader className="border-0 bg-light p-3 pr-5" id="headingfive">
                                            <h6 className="title mb-0"> What age groups do these sports classes are for?
                                                <i className={this.state.col3 ? "mdi mdi-chevron-up float-right" : "mdi mdi-chevron-down float-right"}></i>
                                                </h6>
                                            </CardHeader>
                                        </Link>
                                        <Collapse isOpen={this.state.col3}>
                                            <CardBody>
                                                <p className="text-muted mb-0 faq-ans"> The Sportybeans program conducts sports classes for children from the age of 2.5 years to 8 years. </p>
                                            </CardBody>
                                        </Collapse>
                                    </Card>

                                    <Card className="border-0 rounded mb-2">
                                        <Link to="#" onClick={this.t_col4} className={this.state.col4 ? "faq position-relative text-primary" : "faq position-relative text-dark"}>
                                            <CardHeader className="border-0 bg-light p-3 pr-5" id="headingfive">
                                            <h6 className="title mb-0"> How are the sport programs decided for every kid? Based on age group or sport?
                                                <i className={this.state.col4 ? "mdi mdi-chevron-up float-right" : "mdi mdi-chevron-down float-right"}></i>
                                                </h6>
                                            </CardHeader>
                                        </Link>
                                        <Collapse isOpen={this.state.col4}>
                                            <CardBody>
                                                <p className="text-muted mb-0 faq-ans">Sporty beans has various options to cater to everyone's  needs. There are multi-sport programs, single sport focussed programs, specific skills training as well. We find a kids sports program according to your needs.</p>
                                            </CardBody>
                                        </Collapse>
                                    </Card>

                                    <Card className="border-0 rounded">
                                        <Link to="#" onClick={this.t_col5} className={this.state.col5 ? "faq position-relative text-primary" : "faq position-relative text-dark"}>
                                            <CardHeader className="border-0 bg-light p-3 pr-5" id="headingfive">
                                            <h6 className="title mb-0"> Do you offer sports classes for kindergarten?
                                                <i className={this.state.col5 ? "mdi mdi-chevron-up float-right" : "mdi mdi-chevron-down float-right"}></i>
                                                </h6>
                                            </CardHeader>
                                        </Link>
                                        <Collapse isOpen={this.state.col5}>
                                            <CardBody>
                                                <p className="text-muted mb-0 faq-ans">Yes. We have programs related to sports activities for kindergarten.</p>
                                            </CardBody>
                                        </Collapse>
                                    </Card>
                                    </div>
                                </div>
                            </Col>

                            <Col lg="5" md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <img src={faq} alt="" />
                            </Col>
                        </Row>
                    </Container>

                </section>
            </React.Fragment>
        );
    }
}

export default FAQSports;