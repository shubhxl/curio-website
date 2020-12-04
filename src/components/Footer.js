import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

//Import Icons
import FeatherIcon from 'feather-icons-react';


//Import Images
import logo from "../assets/images/logo.png";

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
        grid1 : [
            { title : "About us", link : "/about" },
            { title : "SportyBeans", link : "/partners/sportybeans-sports-for-kids" },
            { title : "Sports", link : "/sports-and-fitness" },
       
        ],
        grid2 : [
            { title : "Terms of Services", link : "/tos" },
            { title : "Privacy Policy", link : "/privacy" },
        ]
    };
  }

  render() {
    return (
      <React.Fragment>
        <footer className={this.props.isLight ? "footer bg-light" : "footer"}>
            <Container>
                <Row>
                    <Col lg="5" xs="12" className="mb-0 mb-md-4 pb-0 pb-md-2" name="footercolumn">
                        <a href="/" className="logo-footer">
                            <img src={logo} loading="lazy" width="100" height="44" alt=""/>
                        </a>
                        <p className={ this.props.isLight ? "mt-4 text-muted" : "mt-4"}>Curio provides you the opportunity to enroll your child in multiple activities and courses at a single location at a curio center near you. No more hassle of picking and dropping your kids at multiple locations.</p>
                        <ul className="list-unstyled social-icon social mb-0 mt-4">
                            <li className="list-inline-item mr-1"><a href="https://www.facebook.com/curioboat" className="rounded"><i><FeatherIcon icon="facebook" className="fea icon-sm fea-social" /></i></a></li>
                            <li className="list-inline-item mr-1"><a href="https://www.instagram.com/curioboat/" className="rounded"><i><FeatherIcon icon="instagram" className="fea icon-sm fea-social" /></i></a></li>
                            <li className="list-inline-item mr-1"><a href="https://www.linkedin.com/company/curioboat/" className="rounded"><i><FeatherIcon icon="linkedin" className="fea icon-sm fea-social" /></i></a></li>
                        </ul>
                    </Col>
                
                    <Col lg="3" md="4" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0" name="footercolumn">
                        <h4 className={this.props.isLight ? "text-dark footer-head" : "text-light footer-head"}>Company</h4>
                        <ul className="list-unstyled footer-list mt-4">
                            {
                                this.state.grid1.map((grid, key) =>
                                <li key={key}><a href={grid.link} className={this.props.isLight ? "text-muted" : "text-foot"}><i className="mdi mdi-chevron-right mr-1"></i> {grid.title}</a></li>
                                )
                            }
                        </ul>
                    </Col>
                    
                    <Col lg="4" md="4" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0" name="footercolumn">
                        <h4 className={this.props.isLight ? "text-dark footer-head" : "text-light footer-head"}>Usefull Links</h4>
                        <ul className="list-unstyled footer-list mt-4">
                            {
                                this.state.grid2.map((grid, key) =>
                                <li key={key}><a href={grid.link} className={this.props.isLight ? "text-muted" : "text-foot"}><i className="mdi mdi-chevron-right mr-1"></i> {grid.title}</a></li>
                                )
                            }
                        </ul>
                    </Col>

                </Row>
            </Container>
        </footer>
        <footer className="footer footer-bar">
            <Container className="text-center">
                <Row className="align-items-center">
                    <Col md="3"></Col>
                    <Col md="6">
                        <div>
                            <p className="mb-0">© 2020-21 CurioBoat. Developed with ❤️ by Curio Team</p>
                        </div>
                    </Col>
                    <Col md="3"></Col>            
                </Row>
            </Container>
        </footer>        
      </React.Fragment>
    );
  }
}

export default Footer;
