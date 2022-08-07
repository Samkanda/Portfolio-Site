import React, {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import envelope from "../img/img-02.png"
import "../util.css"
import "../main.css"
import Alert from 'react-bootstrap/Alert';


const ContactForm = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => {setShow(false); setAlertShow(false)};
	const handleShow = () => setShow(true);
	const [alertShow, setAlertShow] = useState(false);
	const form = useRef();


	const sendEmail = (e) => {
		e.preventDefault();
	
		emailjs.sendForm('service_r3en8bj', 'template_rpkw2ov', form.current, 'qcjAL58W9Gap4UT9y')
		  .then((result) => {
			setAlertShow(true)
		  }, (error) => {
			alert("A error occured")
		  });
	  };
	  


  return (
    <div className="">
		<Button  onClick={handleShow}>
        Contact Me
      </Button>
		<Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered 
		 show={show}
		 onHide={handleClose}
		 backdrop="static"
		 keyboard={false}>
			 {alertShow == true ? 
			 	<Alert variant={"success"}>
					The message has been sent :)
				</Alert>
			: ""}
		<div className="contact1" >
		<div className="container-contact1">
			<div className="contact1-pic js-tilt" data-tilt>
				<img src={envelope} alt="dd"/>
			</div>

			<form ref={form} onSubmit={sendEmail} className="contact1-form validate-form">
				<span className="contact1-form-title">
					Get in touch
				</span>

				<div className="wrap-input1 validate-input" data-validate = "Name is required" >
					<input
						type="text"
						className="form-control input1"
						placeholder="Enter Name"
						name="from_name"
						required
					/>
					<span className="shadow-input1"></span>
				</div>

				<div className="wrap-input1 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<input
						type="email"
						className="form-control input1"
						placeholder="Enter Email"
						name="user_email"
						required
					/>
					<span className="shadow-input1"></span>
				</div>

				<div className="wrap-input1 validate-input" data-validate = "Subject is required">
					<input className="input1" type="text" name="subject" placeholder="Subject" name="subject" required/>
					<span className="shadow-input1"></span>
				</div>

				<div className="wrap-input1 validate-input" data-validate = "Message is required">
					<textarea className="input1" name="message" placeholder="Message" required></textarea>
					<span className="shadow-input1"></span>
				</div>

				<div className="container-contact1-form-btn">
					<button className="contact1-form-btn" type="submit" value="Send">
						<span>
							Send Email
							<i className="fa fa-long-arrow-right" aria-hidden="true" ></i>
						</span>
					</button>
					<Button className="contact1-form-btn-grey" onClick={handleClose}>
						Close
					</Button>
				</div>
			</form>
		</div>
		</div>
		</Modal>
	</div>
  )
}

export default ContactForm