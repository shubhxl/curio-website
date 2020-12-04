import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from "react-router-dom";
import cricket from '../assets/icons/cricket.svg'
import football from '../assets/icons/football.svg'
import exercise from '../assets/icons/exercise.svg'

class TopCategories extends Component {
    render() {
        return (
           <React.Fragment>
            <Container className="mt-100 mt-60">
                <Row>
                    <Col xs={12}>
                        <h5 className="mb-0">Top Categories</h5>
                    </Col>
                </Row>

                <Row>
                    <Col lg={2} md={4} xs={6} className="mt-4 pt-2">
                        <Card className="explore-feature border-0 rounded text-center bg-white">
                            <CardBody>
                                <div className="icon rounded-circle shadow-lg d-inline-block h2">
                                    <i className="uil uil-football"></i>
                                </div>
                                <div className="content mt-3">
                                    <h6 className="mb-0"><Link to="#" className="title text-dark">Multi-Sports</Link></h6>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    
                    <Col lg={2} md={4} xs={6} className="mt-4 pt-2">
                        <Card className="explore-feature border-0 rounded text-center bg-white">
                            <CardBody>
                                <div className="icon rounded-circle shadow-lg d-inline-block h2">
                                    <i className="uil uil-basketball"></i>
                                </div>
                                <div className="content mt-3">
                                    <h6 className="mb-0"><Link to="#" className="title text-dark">Basketball</Link></h6>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    
                    <Col lg={2} md={4} xs={6} className="mt-4 pt-2">
                        <Card className="explore-feature border-0 rounded text-center bg-white">
                            <CardBody>
                                <div className="icon rounded-circle shadow-lg d-inline-block h2">
                                    <img src={cricket} loading="lazy" className="icc" alt="cricket coaching for kids"/>
                                </div>
                                <div className="content mt-3">
                                    <h6 className="mb-0"><Link to="#" className="title text-dark">Cricket</Link></h6>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    
                    <Col lg={2} md={4} xs={6} className="mt-4 pt-2">
                        <Card className="explore-feature border-0 rounded text-center bg-white">
                            <CardBody>
                                <div className="icon rounded-circle shadow-lg d-inline-block h2">
                                <img src={football} className="icc" loading="lazy" alt="football for kids"/>
                                </div>
                                <div className="content mt-3">
                                    <h6 className="mb-0"><Link to="#" className="title text-dark">FootBall</Link></h6>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    
                    <Col lg={2} md={4} xs={6} className="mt-4 pt-2">
                        <Card className="explore-feature border-0 rounded text-center bg-white">
                            <CardBody>
                                <div className="icon rounded-circle shadow-lg d-inline-block h2">
                                    <i className="uil uil-golf-ball"></i>
                                </div>
                                <div className="content mt-3">
                                    <h6 className="mb-0"><Link to="#" className="title text-dark">Golf</Link></h6>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    
                    <Col lg={2} md={4} xs={6} className="mt-4 pt-2">
                        <Card className="explore-feature border-0 rounded text-center bg-white">
                            <CardBody>
                                <div className="icon rounded-circle shadow-lg d-inline-block h2">
                                 <img src={exercise} className="icc" loading="lazy" alt="fitness classes for kids"/>
                                </div>
                                <div className="content mt-3">
                                    <h6 className="mb-0"><Link to="#" className="title text-dark">Fitness</Link></h6>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
           </React.Fragment>
        );
    }
}

export default TopCategories;