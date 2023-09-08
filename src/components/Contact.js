import React, { useState } from 'react';
import './ContactForm.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';
import "../landing_page.css"

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [description, setDescription] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Reset error messages
    setNameError('');
    setEmailError('');
    setPhoneNumberError('');
    setDescriptionError('');

    // Validation checks
    // if (!name.match(/^[a-zA-Z\s]+$/)) {
    //   console.error('Invalid name');
    //   return;
    // }

    // if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    //   console.error('Invalid email');
    //   return;
    // }

    // if (!phoneNumber.match(/^\d{10}$/)) {
    //   console.error('Invalid phone number');
    //   return;
    // }

    // if (description.trim() === '') {
    //   console.error('Description is required');
    //   return;
    // }
    if (!name.match(/^[a-zA-Z\s]+$/)) {
      setNameError('Invalid name');
      return;
    }

    if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      setEmailError('Invalid email');
      return;
    }

    if (!phoneNumber.match(/^03\d{9}$/)) {
      setPhoneNumberError('Phone number must start with 03 and contain maximum 11 digits');
      return;
    }

    if (description.trim() === '') {
      setDescriptionError('Description is required');
      return;
    }

    // Send the form data to the backend server
    fetch('http://localhost:5000/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phoneNumber, description }),
    })
      .then((response) => response.text())
      .then((data) => {
        alert(data); // Success message from the backend
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <div className="logo">
            <h3>E-Clinic</h3>
          </div>
          <div>
            <ul>
            <li><Link to="/">Home</Link></li>
              <li>
                <Link to="/service">Services</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Signup</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Contact Us</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {nameError && <p className="error-message">{nameError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <p className="error-message">{emailError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          {phoneNumberError && (
            <p className="error-message">{phoneNumberError}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          {descriptionError && (
            <p className="error-message">{descriptionError}</p>
          )}
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      <footer>
                        <div class="footer-section">
                        <h2>About Us</h2>
                        <h3>We are a team of professionals dedicated to creating high-quality web content.</h3>
                        <h3>We are a team of professionals dedicated to creating high-quality web content.</h3>
                        </div>
                        <div class="footer-section">
                        <h2>Recent Blogs</h2>
                        <ul>
                            <li><a href="#">Boost Your Immunity: Essential Health Tips</a></li>
                            <li><a href="#">Weight Loss Strategies: Achieving Your Ideal Body</a></li>
                            <li><a href="#">Stress Management: Finding Balance in Life</a></li>
                            <li><a href="#">Superfoods for Optimal Health and Wellness</a></li>
                            <li><a href="#">The Power of Exercise: Fitness Benefits</a></li>
                        </ul>
                        </div>
                        <div class="footer-section">
                        <h2>Contact Us</h2>
                        <h3 style={{color:"white"}}>Ph: +923363504242</h3>
                        </div>
                    </footer>
    </>
  );
};

export default Contact;



// import React, { useState } from 'react';
// import './ContactForm.css'; // Import CSS file for styling
// import { Link } from 'react-router-dom';
// import { message } from 'antd';

// const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validation checks
//     if (!name.match(/^[a-zA-Z\s]+$/)) {
//       console.error('Invalid name');
//       return;
//     }

//     if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
//       console.error('Invalid email');
//       return;
//     }

//     if (!phoneNumber.match(/^\d{11}$/)) {
//       console.error('Invalid phone number');
//       return;
//     }

//     if (description.trim() === '') {
//       console.error('Description is required');
//       return;
//     }

//     // Send the form data to the backend server
//     fetch('/api/send-email', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ name, email, phoneNumber, description }),
//     })
//       .then((response) => response.text())
//       .then((data) => {
//         console.log(data); // Success message from the backend
//         message.success('Form submitted successfully');
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   };

//   return (
//     <>
//       <nav>
//         <div className="nav-wrapper">
//           <div className="logo">
//             <h3>E-Clinic</h3>
//           </div>
//           <div>
//             <ul>
//               <li>
//                 <Link to="/service">Services</Link>
//               </li>
//               <li>
//                 <Link to="/login">Login</Link>
//               </li>
//               <li>
//                 <Link to="/register">Signup</Link>
//               </li>
//               <li>
//                 <Link to="/contact">Contact</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       <form onSubmit={handleSubmit} className="contact-form">
//         <h2>Contact Us</h2>
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="phoneNumber">Phone Number:</label>
//           <input
//             type="text"
//             id="phoneNumber"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="description">Description:</label>
//           <textarea
//             id="description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           ></textarea>
//         </div>
//         <button type="submit" className="submit-button">
//           Submit
//         </button>
//       </form>
//     </>
//   );
// };

// export default ContactForm;

