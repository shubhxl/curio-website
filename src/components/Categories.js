import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Components
import CategoryBox from "./CategoryBox";

//Immport Images
import sbeans from '../assets/images/sbeans.jpg'
import roboclub from '../assets/images/roboclub.jpg'
import scipie from '../assets/images/scipie.jpeg'
import tgr from '../assets/images/tgr.jpg'
import influent from '../assets/images/influent.jpg'
import coding from '../assets/images/coding.jpg'

class Categories extends Component {
    state = {
        jobCategories : [
            { id : 1, image : sbeans, title : "SportyBeans", jobs : "Multi-sports", link : "",age:"2.5 to 8 years" },
            { id : 2, image : roboclub, title : "Roboclub", jobs : "Robotics", link : "", age:"5 to 18 years" },
            { id : 3, image : scipie, title : "SciPie", jobs : "Practical Science", link : "", age:"2 to 10 years" },
            { id : 4, image : tgr, title : "The Golf Revolution", jobs : "Golf", link : "", age:"8 to 18 years" },
            { id : 5, image : influent, title : "In-Fluent Learning", jobs : "Communication", link : "", age:"4 to 16 years" },
            { id : 6, image : coding, title : "CodingZen", jobs : "Programming", link : "", age:"5 to 16 years" }
        ]
    }
    render() {
        return (
            <React.Fragment>
                    <Container>

                        {/* Section title */}
                      <h3 className="section-title"> Our Currriculum Partners </h3>
                       <p>Choose from range of top content partners in the category</p>
                        <Row>
                            {/* render category box */}
                            <CategoryBox jobCategories={this.state.jobCategories} />
                        </Row>
                  
                    </Container>
            </React.Fragment>
        );
    }
}

export default Categories;