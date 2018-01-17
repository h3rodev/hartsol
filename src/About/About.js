import React, { Component } from 'react';

class About extends Component {

  render() {
    return (
      <section id="hartsol-about" className="hartsol-view">
      	<div className="hartsol-section-container">
	      	<h1 className="hartsol-section-title">
	      		About me <br/>
				<div className="slidingVertical">
					<span>a web developer.</span>
					<span>a graphic designer.</span>
					<span>a musician.</span>
					<span>a songwriter.</span>
					<span>a photographer.</span>
			    </div>
	      	</h1>
	      	<article className="content-half">
		      	<p>Everything started with passion to web technologies ( HTML, CSS, Javascript ). In 2008 I got my first commercial work as a graphic designer in <a href="#">GreenAdvertising LLC</a> located in Sharjah, UAE.</p>
				<p>Two years later I Joined <a href="#">Masterscrane LLC</a>, and I started to work as a graphic/web designer in one of the two offices.</p>
				<p>In March 2011 I joined <a href="#">Kingsgate Real Estate</a> in Dubai, UAE as Web developer.</p>
				<p>I can say that my skills matured more when I was hired as a Web Developer on a design agency <a href="#">BDB Advertising LLC</a> also in Dubai, UAE where in we handled big brands like Mercedes-Benz, AMG, gar gash Enterprices, Johnson’s, Chantelle, Chopard, Montegrappa, Medcare Hospital, Natixis and more..</p>
				<p>Then I joined <a href="#">Danube Building Materials FZCO</a> as UI/Front End Developer in June 2014. I was task to develop their online shop called danubedirect.com and manage all the company websites under danube umbrella.</p>
				<p>On December 2015 <a href="#">Leader Healthcare</a> hired me to manage their website, create landing pages for products to promote namely Hydrafacial, Zoll, Sam Medical, Heyer Medical, Morizne and more..</p>
				<p>Rest of my experience is successful cooperation as a freelancer with IT companies and professionals from Philippines and United Arab Emirates. </p>
				<p>Right now I work as senior web developer in ( OBG ) <a href="#">One Broker Group</a> a real estate based in Dubai, UAE.</p>
			</article>
			<div className="clearfix"></div>
	      	<a download="/pdf/cv.pdf" href="/pdf/cv.pdf" className="hartsol-btn-bordered hartsol-btn">Download CV</a>
      	</div>

      </section>
    );
  }
}

export default About;