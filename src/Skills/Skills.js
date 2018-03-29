import React, { Component } from 'react';
import $ from 'jquery';

class Skills extends Component {
  componentDidMount(){

  }  
  render() {
    return (
      <section id="hartsol-skills" className="hartsol-view">
      	<div className="hartsol-section-container">
	      	<h1 className="hartsol-section-title">
	      		Skills &amp; Experience<br/>
				<div className="slidingVertical">
					<span>Python</span>
					<span>PHP</span>
					<span>PolymerJS</span>
					<span>ReactJS</span>
					<span>AngualrJS</span>
					<span>SEO</span>
					<span>Link Building</span>
					<span>Google Adword</span>
					<span>Cryptocurrency</span>
			    </div>
	      	</h1>
	      	<article className="content-half">
	      	<p>Main area of my expertise is front end development and everything related with this side of web. HTML, CSS, JS (ES5,ES6), building small & medium Web Apps, Landing Pages, Corporate Websites using ReactJS, AngularJS.</p>

			<p>Often I work as a full-stack developer - mainly in Lamp environment, PHP and open source CMS’s like (Wordpress, Drupal, Magento, Joomla etc…).</p>

			<p>I have also some experience with Node.js (ExpressJS), MongoDB (Mongoose), Python & Flask.</p>

			<p>Would like to know more?<br />
			Please check my <a href="https://linkedin.com" target="_blank">Linkedin</a> profile or just <a href="/contact">contact</a> me.</p>
			</article>

			<div id="myCanvasContainer" className="content-half">
			<canvas id="tagcanvas" width="560" height="400">
				<div id="taglist">
					<ul>
						<li><a href="#">ReactJS</a></li>
						<li><a href="#">React Native</a></li>
						<li><a href="#">AngularJS</a></li>
						<li><a href="#">PolymerJS</a></li>
						<li><a href="#">Python</a></li>
						<li><a href="#">PHP</a></li>
						<li><a href="#">HTML5</a></li>
						<li><a href="#">CSS3</a></li>
						<li><a href="#">NodeJS</a></li>
						<li><a href="#">ExpressJS</a></li>
						<li><a href="#">MongoDB</a></li>
						<li><a href="#">Mongoose</a></li>
						<li><a href="#">Flask</a></li>
						<li><a href="#">Restful</a></li>
						<li><a href="#">JSON</a></li>
						<li><a href="#">Wordpress</a></li>
						<li><a href="#">Keyword Research</a></li>
						<li><a href="#">SEO</a></li>

						<li><a href="#">Link Building</a></li>
						<li><a href="#">Google Analytics</a></li>

						<li><a href="#">Photoshop</a></li>
						<li><a href="#">Illustrator</a></li>
						
						<li><a href="#">Responsive</a></li>
					</ul>
				</div>
			</canvas>
            </div>
      	</div>

      </section>
    );
  }
}

export default Skills;
