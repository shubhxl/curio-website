// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container } from 'reactstrap';

//Import Components
import SectionTitle from "./SectionTitle";
import Feature from "./Feature";

// Import images;
import security from '../assets/icons/security.svg';
import location from '../assets/icons/location.svg';
import child from '../assets/icons/child.svg';
import target from '../assets/icons/target.svg';
import robot from '../assets/icons/robot.svg';
import best from '../assets/icons/best.svg';


class Features extends Component {

    constructor(props) {
        super(props);
        this.state = {
            features : [
                { id : 1, imgUrl : robot, title : "MULTI-ACTIVITY", description : "Multiple Activities under One Roof" },
                { id : 2, imgUrl : best, title : "BEST CONTENT PARTNERS", description : "Handpicked the best Activity Partners in their own fields" },
                { id : 3, imgUrl : location, title : "PROXIMITY", description : "Bringing Curio to many neighbourhoods!" },
                { id : 4, imgUrl : security, title : "SAFE & SECURE", description : "Completely safe premises – housed inside a school/preschool." },
                { id : 5, imgUrl : child, title : "CHILD-FRIENDLY ENVIRONMENT", description : "Child-friendly spaces and staff" },
                { id : 6, imgUrl : target, title : "LEARNING-FOCUSSED", description : "Our motto is to always further learning of the children" },
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <Container>
                        {/* section title */}
                        <SectionTitle title="Why Use Us?" desc="with numbers of skill development programs " />

                        {/* feature box */}
                        <Feature featureArray={this.state.features}/>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Features;