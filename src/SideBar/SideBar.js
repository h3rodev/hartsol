import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Logo from '../logo.svg'

import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
    <div id="hartsol-sidebar" className="hartsol-aside">
    	<div className="logo-holder">
    		<a href="/" className="hartsol-logo">
                <img src={ Logo } />
    		</a>
    	</div>
    	<section className="main-navigation">
    		<ul>
    			<li>
    				<Link to='/'><i className="fa fa-home" aria-hidden="true"></i> <span>Home</span></Link>
    			</li>
    			<li>
    				<Link to='/about'><i className="fa fa-user-o" aria-hidden="true"></i> <span>About</span></Link>
    			</li>
    			<li>
    				<Link to='/skills'><i className="fa fa-cogs" aria-hidden="true"></i> <span>Skills</span></Link>
    			</li>
    			<li>
    				<Link to='/work'><i className="fa fa-eye" aria-hidden="true"></i> <span>Work</span></Link>
    			</li>
    			<li>
    				<Link to='/contact'><i className="fa fa-envelope" aria-hidden="true"></i> <span>Contact</span></Link>
    			</li>
    		</ul>
    	</section>
    	<section className="social-media-icons">
    		<ul>
    			<li><a href="https://www.facebook.com/ronald.tolentino2011/" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i> <span>Facebook</span></a></li>
    			<li><a href="https://www.linkedin.com/in/h3rodev/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i> <span>Linkedin</span></a></li>
    			<li><a href="https://www.instagram.com/ronaldtolentino/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i> <span>Instagram</span></a></li>
    		</ul>
    	</section>
    </div>
    );
  }
}

export default Sidebar;
