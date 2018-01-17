import React, { Component } from 'react';

// import sgMail from '@sendgrid/mail';

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// const msg = {
//   to: 'ronald.tolentino27@gmail.com',
//   from: 'ronald.tolentino2013@live.com',
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// sgMail.send(msg);

class Contact extends Component {

  render() {
    return (
      <section id="hartsol-contact" className="hartsol-view">
      	<div className="hartsol-section-container">
	      	<h1 className="hartsol-section-title">
	      		Contact me <br/> <span>info@hartsol.com</span> <br /> <span>+971 50 855 7027</span>
	      	</h1>
	      	<article className="content-half">
	      		<p>If you have any questions, please don’t hesitate to contact me</p>

			</article>
			<div className="content-half" id="map">
				
			</div>
			<div className="clearfix"></div>

      	</div>

      </section>
    );
  }
}

export default Contact;