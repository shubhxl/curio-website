import React, { Component } from 'react';
import { Col, Card, CardBody } from "reactstrap";

class CategoryBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.jobCategories.map((category, key) =>
                        <Col lg="4" md="6" xs="12" key={key} className="mt-4 pt-2">
                            <Card className="catagories overflow-hidden rounded shadow border-0">
                                <img src={category.image} loading="lazy" className="curImg" alt=""/>
                                <CardBody>
                                    <ul className="list-unstyled d-flex justify-content-between mb-0">
                                        <li><a href={category.link} className="title cct text-dark">{category.title}</a></li>
                                        <li className="mb-0 jobs">{category.jobs} </li>
                                    </ul> 
                                    <span className="card-age">{category.age}</span>
                                </CardBody>
                            </Card>
                        </Col>
                    )
                }

            </React.Fragment>
        );
    }
}

export default CategoryBox;