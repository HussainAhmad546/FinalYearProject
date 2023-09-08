// import React, { useEffect, useState } from 'react';

// const Blogs = () => {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/blogs/');
//         const data = await response.json();
//         setBlogs(data);
//       } catch (error) {
//         console.error('Error fetching blogs:', error);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   return (
//     <div>
//       <h2>Blogs</h2>
//       {blogs.map(blog => (
//         <div key={blog._id}>
//           <h3>{blog.title}</h3>
//           <img src={blog.image} alt={blog.title} />
//           <p>{blog.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Blogs;

import React from 'react';
import './ContactForm.css';
import { Link } from 'react-router-dom';
import "../landing_page.css"

const Blogs= () => {
  const blogs = [
    {
      title: 'Boost Your Immunity: Essential Health Tips',
      image: 'https://images.unsplash.com/photo-1604480131833-5d7aea770e1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoJTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      description: 'Yoga is a holistic practice that encompasses physical, mental, and spiritual well-being. Health blogs dedicated to yoga provide a wealth of information on its numerous benefits. Through regular practice, yoga can improve flexibility, strength, and balance while promoting relaxation and stress reduction. It has been shown to enhance cardiovascular health, boost immune function, and increase mindfulness. Additionally, yoga can aid in weight management, improve posture, and alleviate chronic pain. Health blogs often feature expert advice, step-by-step guides, and personal stories to inspire readers to incorporate yoga into their daily lives and experience its transformative effects on their overall health and well-being',
    },
    {
      title: 'Weight Loss Strategies: Achieving Your Ideal Body',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhlYWx0aCUyMHRpcHMlMjByZWxhdGVkJTIwYm9keXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      description: 'A healthy diet plays a crucial role in maintaining overall well-being, and one important aspect is focusing on food choices that promote a healthy body. When it comes to food, incorporating health tips can significantly impact our well-being. Firstly, it is essential to prioritize a diverse range of fruits and vegetables in our meals. These colorful and nutrient-rich foods provide vital vitamins, minerals, and antioxidants that support our immune system and reduce the risk of chronic diseases. Secondly, opting for whole grains instead of refined grains is beneficial. ',
    },
    {
        title: 'Stress Management: Finding Balance in Life',
        image: 'https://images.unsplash.com/photo-1604480131833-5d7aea770e1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoJTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        description: 'Yoga is a holistic practice that encompasses physical, mental, and spiritual well-being. Health blogs dedicated to yoga provide a wealth of information on its numerous benefits. Through regular practice, yoga can improve flexibility, strength, and balance while promoting relaxation and stress reduction. It has been shown to enhance cardiovascular health, boost immune function, and increase mindfulness. Additionally, yoga can aid in weight management, improve posture, and alleviate chronic pain. Health blogs often feature expert advice, step-by-step guides, and personal stories to inspire readers to incorporate yoga into their daily lives and experience its transformative effects on their overall health and well-being',
      },
      {
        title: 'Superfoods for Optimal Health and Wellness',
        image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhlYWx0aCUyMHRpcHMlMjByZWxhdGVkJTIwYm9keXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        description: 'A healthy diet plays a crucial role in maintaining overall well-being, and one important aspect is focusing on food choices that promote a healthy body. When it comes to food, incorporating health tips can significantly impact our well-being. Firstly, it is essential to prioritize a diverse range of fruits and vegetables in our meals. These colorful and nutrient-rich foods provide vital vitamins, minerals, and antioxidants that support our immune system and reduce the risk of chronic diseases. Secondly, opting for whole grains instead of refined grains is beneficial. ',
      },
      {
        title: 'The Power of Exercise: Fitness Benefits',
        image: 'https://images.unsplash.com/photo-1604480131833-5d7aea770e1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoJTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        description: 'Yoga is a holistic practice that encompasses physical, mental, and spiritual well-being. Health blogs dedicated to yoga provide a wealth of information on its numerous benefits. Through regular practice, yoga can improve flexibility, strength, and balance while promoting relaxation and stress reduction. It has been shown to enhance cardiovascular health, boost immune function, and increase mindfulness. Additionally, yoga can aid in weight management, improve posture, and alleviate chronic pain. Health blogs often feature expert advice, step-by-step guides, and personal stories to inspire readers to incorporate yoga into their daily lives and experience its transformative effects on their overall health and well-being',
      },
      {
        title: 'Healthy Sleep Habits: Enhancing Your Wellbeing',
        image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhlYWx0aCUyMHRpcHMlMjByZWxhdGVkJTIwYm9keXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        description: 'A healthy diet plays a crucial role in maintaining overall well-being, and one important aspect is focusing on food choices that promote a healthy body. When it comes to food, incorporating health tips can significantly impact our well-being. Firstly, it is essential to prioritize a diverse range of fruits and vegetables in our meals. These colorful and nutrient-rich foods provide vital vitamins, minerals, and antioxidants that support our immune system and reduce the risk of chronic diseases. Secondly, opting for whole grains instead of refined grains is beneficial. ',
      },
    // Add more blogs here
  ];

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
    <div className="blogs-page">
      <h1 style={{textAlign:"center"}}>New Blog List</h1>
      <div className="blog-container">
        {blogs.map((blog, index) => (
          <div key={index} className="blog">
            <h2 className="blog-title">{blog.title}</h2>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <p className="blog-description">{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Blogs;
