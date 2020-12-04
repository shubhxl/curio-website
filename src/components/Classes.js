import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import robot from'../assets/icons/robot.svg';
import skills from'../assets/icons/skills.svg';
import notebook from'../assets/icons/notebook.svg';
import fitness from'../assets/icons/fitness.svg';

class Classes extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="container classesDiv">
                <h2> Classes@Curio </h2>
                <div className="mt-5">
                <Row>

                    <Col md={3} xs={12}> 
                    <img src={robot} loading="lazy" className="classesImg" alt="activity for kids"></img><br/>
                    <span className="p-2"><b> ACTIVITY-BASED LEARNING </b>
                    <p className="text-muted mt-2">Curio has carefully curated after-school programs that are both recreational and learning-based. 
                        Delivered by content experts in their fields, the list of activities is huge, because we want each 
                        child to learn anything they want! </p>
                    </span>
                    </Col>

                    <Col md={3} xs={12}> 
                    <img src={notebook} loading="lazy" className="classesImg" alt="tuition for kids"></img><br/>
                    <span className="p-2"><b> ACADEMIC SUPPORT </b>
                    <p className="text-muted mt-2">Looking to give your child that extra push in the evenings to study? Our academic support programs are designed to encourage the kids to self-study and clarify their doubts with peers (group learning) as well as a mentor present in the centre.</p>
                    </span>
                    </Col>

                    <Col md={3} xs={12} > 
                    <img src={fitness} loading="lazy" className="classesImg" alt="fitness for kids"></img><br/>
                    <span className="p-2"><b> SPORTS AND FITNESS </b>
                    <p className="text-muted mt-2">A child’s development is incomplete without regular fitness activities. Curio has tied up with some of the best curriculum partners so your child can experience complete physical and mental health – delivered in a structured manner!</p>
                    </span>
                    </Col>

                    <Col md={3} xs={12}> 
                    <img src={skills} loading="lazy" className="classesImg" alt="skills for kids"></img><br/>
                    <span className="p-2"><b>CAREER AND SKILL BUILDING  </b>
                    <p className="text-muted mt-2">Curio is coming up with interesting, unique short-term courses in different fields such as Design, Fashion, Sports, Entrepreneurship, Photography etc. to give the kids an exposure to as many career paths as we can. </p>
                    </span>
                    </Col>
        
                </Row>
                </div>
            </div>
        );
    }
}

export default Classes;