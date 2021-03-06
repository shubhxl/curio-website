import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

// import images
// import services from "../assets/images/illustrator/services.svg";
import sporty from '../../assets/images/sporty.jpg'

class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false, 
        }  
    }
 
    render() {
        return (
            <React.Fragment>
                <section className="hh d-table w-100" id="home">
                            <Container>
                                <Row className="align-items-center">
                                    <Col lg={5} md={5}>
                                        <div className="title-heading mt-4">
                                            <h1 className="heading mb-3">Neighbourhood <br />Activity Centers </h1>
                                            <div className="watch-video mt-4 pt-2">
                                                <a href="https://forms.gle/U2ikRkbCJwMSYzcC7" target="_blank" rel="noreferrer" className="btn btn-primary mb-2 mr-2">Explore more</a>    
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={5} md={5} className="mt-sm-0 pt-sm-0">
                                        <img src={sporty} loading="lazy" className="sbeans" alt="sportybeans" />
                                    </Col>
                                </Row>
                            </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;