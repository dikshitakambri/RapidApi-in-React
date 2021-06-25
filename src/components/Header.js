import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {NavbarToggler,Navbar,Collapse,Nav,NavItem,UncontrolledDropdown,DropdownMenu,DropdownItem,DropdownToggle} from 'reactstrap';

export default class Header extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
        return(
            <div className="homepage">
                <div className="box1">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2 col-6">
                                <select className="dropdown1">
                                    <option href="/" selected value="1">EN</option>
                                    <option href="/" value="2">GR</option>
                                    <option href="/" value="3">FR</option>
                                </select>
                                |
                                <select className="dropdown1">
                                    <option href="/" selected value="1">USD</option>
                                    <option href="/" value="2">EURO</option>
                                    <option href="/" value="3">JYP</option>
                                </select>
                            </div>
                            <div className="col-md-3 col-sm-12">
                                <p>Call Us at : +1 123-456-789</p>
                            </div> 
                            <div className="col-md-4 col-12">
                                <p className="d-none d-sm-block">Send us email : contact@gmail.com</p>
                            </div> 
                            <div className="col-md-2 col-6">
                                <p><i class="fas fa-truck"></i> Order Tracking</p>
                            </div>
                            <div className="col-md-1 col-6">
                                <p><i class="far fa-heart"></i> Wishlist</p>
                            </div>  
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="container">
                    <div className="row">
                        <div className="box2">
                            <div className="col-md-3 col-12">
                                <Link to={"/"}>
                                    <img src="assets/images/logo.png" alt="Ibid" height="37" width="90"></img>
                                </Link>
                            </div>
                            <div className="col-md-6 col-12" >
                                <form>
                                    <div className="search">
                                        <select className="dropdown-top">
                                            <option selected value="1">Option 1</option>
                                            <option  value="2">Option 2</option>
                                            <option value="3">Option3</option>
                                        </select>
                                        <input className="search-txt" placeholder="Search Products" />
                                        <Link className="search-btn" to={"#"} >
                                            <i class="fas fa-search"></i>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-3 col-12 mycart">
                                <h6>My Cart <i class="fas fa-shopping-basket"></i></h6>
                                <p>0 items -$0.0</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Navbar className="navbar" expand="lg">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.isNavOpen} navbar>
                            <Nav className="mr-auto ml-auto" navbar>
                                <UncontrolledDropdown className="nav-dropdown" nav inNavbar>
                                    <DropdownToggle style={{ color: '#000000' }} nav caret>
                                        CATEGORIES
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                        Option 1
                                        </DropdownItem>
                                        <DropdownItem>
                                        Option 2
                                        </DropdownItem>
                                        <DropdownItem>
                                        Reset
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem className=" links">
                                    <Link className="nav-link" style={{ color: '#FFF' }} to={"#Home"}>Home</Link>
                                </NavItem>
                                <NavItem className=" links">
                                    <Link className="nav-link" style={{ color: '#FFF' }} to={"#auction"}>Auctions</Link>
                                </NavItem>
                                <NavItem className=" links"> 
                                    <Link className="nav-link" style={{ color: '#FFF' }} to={"#vendors"}>Vendors</Link>
                                </NavItem>
                                <NavItem className=" links">
                                    <Link className="nav-link" style={{ color: '#FFF' }} to={"#shortcodes"}>Shortcodes</Link>
                                </NavItem>
                                <NavItem className=" links">
                                    <Link className="nav-link" style={{ color: '#FFF' }} to={"#blog"}>Blog</Link>
                                </NavItem>
                                <NavItem className=" links">
                                    <Link className="nav-link" style={{ color: '#FFF' }} to={"#media"}>Media</Link>
                                </NavItem>
                                <NavItem className=" links">
                                    <Link className="nav-link" style={{ color: '#FFF' }} to={"/"}>About</Link>
                                </NavItem>
                                <NavItem className=" links">
                                    <Link className="nav-link" style={{ color: '#FFF' }} to={"/"}>Contact</Link>
                                </NavItem>
                                <NavItem className=" links">
                                    <Link className="nav-link" style={{ color: '#FFF' }} to={"/"}>Pages</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        <button type="button" style={{ color: '#FFF',textDecoration: 'none' }} className="btn btn-link"><b>Sign-in</b></button>
                    </div>
                </Navbar>

                <div className="herosection">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <h1>Audi Q5 Premium</h1>
                                <p>Capitalize on low hanging fruit to identify a ballpark.</p>
                                <p>Current bid: $5550</p>
                                <button className="btn-blue"><Link style={{ color: '#FFF',textDecoration: 'none' }} className="btn-link" type="btn">Place Bid Now</Link></button>
                            </div>
                            <div className="col-md-4 col-12">
                                <img src="assets/images/car.png" alt="car" height="80%"></img>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="container" data-aos="fade-up">
                        <div class="row">
                            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <h4 className="title" ><i class="fas fa-headphones-alt"></i><Link to="/" style={{textDecoration: 'none',color: '#000000' }}> Call Center</Link></h4>
                                <p className="description">Completely Synegize</p>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <h4 className="title" ><i class="fas fa-globe-asia"></i><Link to="/" style={{textDecoration: 'none',color: '#000000' }}> Order Tracking</Link></h4>
                                <p className="description">Objectively empowered</p>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <h4 className="title" ><i class="fas fa-truck"></i><Link to="/" style={{textDecoration: 'none',color: '#000000' }}> Fastest delivery</Link></h4>
                                <p className="description">Efficiently unleash media</p>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <h4 className="title" ><i class="fas fa-hand-holding-usd"></i><Link to="/" style={{textDecoration: 'none',color: '#000000' }}> Instant Buying</Link></h4>
                                <p className="description">Podacasting operational</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>

                <div>
                    <div className="container">
                        <h2 class="text-center">LATEST AUCTIONS </h2>
                        <hr></hr>
                    </div>
                </div>
            </div>
        );
    }
}

