import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';

import sportybeans from '../assets/images/sportybeans.jpg'
import sports from '../assets/images/sports.jpg'

const items = [
    {
      src: sportybeans,
      altText: 'Sport activities near you',
    //   caption: 'Sport activities near you'
    },
    {
      src: sports,
      altText: 'Fitness classes for kids',
    //   caption: 'Slide 2'
    }
  ];
  
  const SectionSporty = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img src={item.src} loading="lazy" alt={item.altText} className="sbeans"/>
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });
  
    return (
    
        <React.Fragment>
             <section className="hh d-table w-100" id="home">
                     <Container>
                         <Row className="align-items-center">
                             <Col lg={5} md={5}>
                                    <div className="title-heading mt-4">
                                         <h1 className="heading mb-3">Multi Sports Classes <br />for Children </h1>
                                     <p className="para-desc text-muted">Sports classes and physical activities for kids across all age groups. Sportybeans offers classes in a number of sports like cricket, badminton, football and many more. Indulge  your child in these sports to keep them fit and healthy. </p>
                                         <div className="watch-video mt-4 pt-2">
                                            <a href="https://forms.gle/U2ikRkbCJwMSYzcC7" target="_blank" rel="noreferrer" className="btn btn-primary mb-2 mr-2">Explore more</a>
                                        </div>
                                     </div>
                                </Col>
                        
                      

        <Col lg={7} md={5} className="mt-sm-0 pt-sm-0">
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
         </Col>

         </Row>
        </Container>
        </section>
      </React.Fragment>
    );
  }
  
  export default SectionSporty;