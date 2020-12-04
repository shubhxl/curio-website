// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container } from 'reactstrap';

//Import Components
import SectionTitle from "./SectionTitle";
import Feature from "./Feature";

// Import images;
import batches from '../assets/icons/batches.svg';
import location from '../assets/icons/location.svg';
import phyfitness from '../assets/icons/phyfitness.svg';
import skills from '../assets/icons/skills.svg';
import training from '../assets/icons/training.svg';
import user from '../assets/icons/user.svg';




class WhySports extends Component {

    constructor(props) {
        super(props);
        this.state = {
            features : [
                { id : 1, imgUrl : phyfitness, title : "Physical Fitness", description : " Fitness classes for kids help them to lead a healthy lifstyle and remain fit." },
                { id : 2, imgUrl : user, title : "Developing social skills", description : "Sports activities for kids teach them a lot of skills like teamwork and  discipline that cannot be taught inside classrooms." },
                { id : 3, imgUrl : training, title : "Professional sports training", description : "Sportybeans has  a specialised research based curriculum and professional trainers to conduct the program" },
                { id : 4, imgUrl : batches, title : "Different batches for different age groups", description : "We form batches  based on age groups to ensure that your child's progress happens in a sustainable manner" },
                { id : 5, imgUrl : skills, title : "Skill centric programs", description : "Curio and Sportybeans offer sports classes in nine different ball games - cricket, football, hockey, golf, volleyball, baseball, rugby, tennis and basketball." },
                { id : 6, imgUrl : location, title : "Centers that are near you", description : "Sportybeans have a number of neighbourhood centers across Delhi NCR." },
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

export default WhySports;