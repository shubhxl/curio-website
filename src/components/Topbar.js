import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import { Container } from "reactstrap";

//Import images
import whatsapp from '../assets/icons/whatsapp.svg'
import logodark from "../assets/images/logo.png";

class Topbar extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            isOpen : false, 
            navLinks : [
                //Note : each child and nested child must have unique id
                { id : 1, title : "Home", link : "/" },
                { id : 2, title : "Categories", link : "/#", isOpenSubMenu : false,
                    child : [
                        { id : 1, title : "Sports", link : "/sports-and-fitness" },
                    ],
                },
                { id : 3, title : "Partners",  isOpenSubMenu : false,
                    child : [
                    { id : 1, title : "SportyBeans", link : "/partners/sportybeans-sports-for-kids"}                       
                         ] 
                },

             ]
         };
        this.toggleLine = this.toggleLine.bind(this);
        this.openBlock.bind(this);
        this.openNestedBlock.bind(this);
        
    }

    toggleLine() {
        this.setState(prevState => ({  isOpen: !prevState.isOpen }));
    }
                
    componentDidMount() {
         var matchingMenuItem = null;
         var ul = document.getElementById("top-menu");
         var items = ul.getElementsByTagName("a");
         for (var i = 0; i < items.length; ++i) {
             if (this.props.location.pathname === items[i].pathname) {
                 matchingMenuItem = items[i];
                 break;
             }
         }
         if (matchingMenuItem) {
            this.activateParentDropdown(matchingMenuItem);
         }
     }
 
    activateParentDropdown = (item) => {
          const parent = item.parentElement;
          if (parent) {
              parent.classList.add('active'); // li
              const parent1 = parent.parentElement;
              parent1.classList.add('active'); // li
              if (parent1) {
                  const parent2 = parent1.parentElement;
                  parent2.classList.add('active'); // li
                  if (parent2) {
                    const parent3 = parent2.parentElement;
                    parent3.classList.add('active'); // li
                    if (parent3) {
                        const parent4 = parent3.parentElement;
                        parent4.classList.add('active'); // li
                 }
             }
         }
    }
    }

    openBlock = (level2_id) => {
        var tmpLinks = this.state.navLinks;
        tmpLinks.map((tmpLink) =>
        //Match level 2 id
           tmpLink.id === level2_id ?
                tmpLink.isOpenSubMenu = !tmpLink.isOpenSubMenu
            :
                false 
            
        )
        this.setState({navLinks : tmpLinks});
    }

    openNestedBlock = (level2_id, level3_id) => {
        var tmpLinks = this.state.navLinks;
        tmpLinks.map((tmpLink) =>
        //Match level 2 id
           tmpLink.id === level2_id ?
                tmpLink.child.map((tmpchild) =>
                    //if level1 id is matched then match level 3 id
                    tmpchild.id === level3_id ?
                        //if id is matched then update status(level 3 sub menu will be open)
                        tmpchild.isOpenNestedSubMenu = !tmpchild.isOpenNestedSubMenu
                    :
                        tmpchild.isOpenNestedSubMenu = false
                )
            :
                false 
            
        )
        this.setState({navLinks : tmpLinks});
    }

    render() {
        return (
            <React.Fragment>
                <header id="topnav" className="defaultscroll sticky">
                    <Container>
                        <div>
                            <a className="logo" href="/">
                                <img src={logodark} id="brandLogo" width="90" height="44" alt=""/>
                            </a>
                        </div> 
                        
                        <div className="menu-extras">
                            <div className="menu-item">
                                <Link to="#" onClick={ this.toggleLine } className={this.state.isOpen ? "navbar-toggle open" : "navbar-toggle" } >
                                    <div className="lines">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </Link>
                            </div>
                            
                        </div>
                        <div id="navigation" style={{ display : this.state.isOpen ? "block" : "none" }}>
                            <ul className="navigation-menu" id="top-menu">
                            <li> 
                                <a href="https://wa.me/919899968680">
                                <img src={whatsapp} className="whatsapp" alt="whatsapp icon"/>
                                <span className="num">98999 68680 </span>
                                </a>
                            </li>
                                {
                                    this.state.navLinks.map((navLink, key) => 
                                    navLink.child ?
                                        <li className="has-submenu" key={key}>
                                            {/* child item(menu Item) - Level 1 */}
                                            <a href={navLink.link}  onClick={(event) => {  event.preventDefault(); this.openBlock(navLink.id) } }>{navLink.title}</a>
                                            <span className="menu-arrow"></span>
                                                {
                                                    navLink.isMegaMenu ?
                                                    // if menu is mega menu(2 columns grid)
                                                    <ul className={ navLink.isOpenSubMenu ? "submenu megamenu open" : "submenu megamenu" }  >
                                                        <li>
                                                            <ul>
                                                                {
                                                                    navLink.child.map((item, childKey) =>
                                                                        item.id < 12 ?
                                                                        <li key={childKey}>
                                                                            <a href={item.link}>{item.title}</a>
                                                                        </li>
                                                                        : null
                                                                    )
                                                                }
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <ul>
                                                                {
                                                                    navLink.child.map((item, childKey) =>
                                                                    item.id < 22 && item.id > 11 ?
                                                                        <li key={childKey}>
                                                                            <a href={item.link}>{item.title}{item.isNew ? <span className="badge badge-danger rounded ml-2">v 2.2</span> : null}</a>
                                                                        </li>
                                                                        : null
                                                                    )
                                                                }
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <ul>
                                                                {
                                                                    navLink.child.map((item, childKey) =>
                                                                    item.id > 21 ?
                                                                        <li key={childKey}>
                                                                            <a href={item.link}>{item.title}{item.isOnePage ? <span className="badge badge-warning rounded ml-2">Onepage</span> : null}</a>
                                                                        </li>
                                                                        : null
                                                                    )
                                                                }
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                :
                                                    // if menu is not mega menu(1grid)
                                                    <ul  className={ navLink.isOpenSubMenu ? "submenu open" : "submenu" }  >
                                                            {
                                                                navLink.child.map((childArray, childKey) =>
                                                                    childArray.nestedChild ?
                                                                    // sub menu item - Level 2
                                                                        <li className="has-submenu" key={childKey}>
                                                                            <a href={childArray.link} onClick={(event) => {  event.preventDefault(); this.openNestedBlock(navLink.id, childArray.id) } }> {childArray.title}{" "}{childArray.isNew ? <span className="badge badge-danger rounded">V 2.2</span> : null }</a>
                                                                            <span className="submenu-arrow"></span>
                                                                            <ul className={ childArray.isOpenNestedSubMenu ? "submenu open" : "submenu" }>
                                                                                {
                                                                                    childArray.nestedChild.map((nestedChildArray, nestedKey) =>
                                                                                        // nested sub menu item - Level 3
                                                                                        <li key={nestedKey}><a href={nestedChildArray.link}>{nestedChildArray.title}{" "}{nestedChildArray.isNewPage ? <span className="badge badge-primary rounded">NEW</span> : null }</a></li>
                                                                                    )
                                                                                }
                                                                            </ul>
                                                                        </li>
                                                                    :
                                                                        <li key={childKey}><a href={childArray.link}>{childArray.title}</a></li>
                                                                )
                                                            }
                                                    </ul>
                                                }
                                                
                                        </li>
                                    :
                                        <li key={key}><a href={navLink.link}>{navLink.title}</a></li>
                                    )
                                }
                            </ul>
                        </div>
                    </Container>
                </header>
            </React.Fragment>
        );
    }
}

export default withRouter(Topbar);