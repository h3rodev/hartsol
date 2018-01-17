import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Home.css';

class Home extends Component {

  render() {
    return (
      <section id="hartsol-home" className="hartsol-view">

      	<div className="hartsol-section-container">
	      	<h1 className="hartsol-section-title">
	      		Hi, I’m Ronald. I design and build <br/>
				<div className="slidingVertical">
					<span>landing pages.</span>
					<span>web applications.</span>
					<span>user interfaces.</span>
					<span>corporate websites.</span>
			    </div>
	      	</h1>
	      	<p>Using ReactJS, AngualJS, HTML5, CSS3, Python, PHP &amp; Wordpress</p>
	    <Link to='/contact'><span className="hartsol-btn-bordered hartsol-btn">Yes, I'm available for hire</span></Link>
	      	
      	</div>

      </section>
    );
  }
}

export default Home;
