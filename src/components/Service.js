import React from 'react'
import { Link } from 'react-router-dom'
import "../landing_page.css"

const Service = () => {
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
                            <li><Link to="/service">Services</Link></li>
                            <li><Link to="/login">
                                Login
                            </Link></li>
                            <li><Link to="/register">
                                Signup
                            </Link></li>
                            <li><a href="#footer">Contact</a></li>
                        </ul>
                    </div>
                </div>

            </nav>
                <div id="carouselReview" className="carousel-slide" data-bs-ride="carousel">
                <h3>Services for you & your family</h3>
                <div className="carousel-inner">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="single-box">
                                <div className="img-area"><img src="images/services/nutrient.webp" alt="Person 1" />
                                </div>
                                <div className="img-text">
                                    <h4>Nutritional Advice</h4>
                                    <p>Proper Nutrition advice plays a crucial role in health and agree that providing
                                        nutrition advice is
                                        part of Doctors role.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-box">
                                <div className="img-area"><img src="images/services/aged_assessment.jpg" alt="Person2" />
                                </div>
                                <div className="img-text">
                                    <h4>Aged Assessments and care</h4>
                                    <p>Assessors visit the older person's home or hospital to: understand the person's care
                                        needs. Create a support plan based on their care needs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-box">
                                <div className="img-area"><img src="images/services/travel_medicine.avif" alt="Person3" />
                                </div>
                                <div className="img-text">
                                    <h4>Travel Medicine</h4>
                                    <p>Taking correct medicine while travelling helps to prevent disease early without any
                                        futher problems.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-box">
                                <div className="img-area"><img src="images/services/weight_control.png" alt="Person4" />
                                </div>
                                <div className="img-text">
                                    <h4>Weight Control Management</h4>
                                    <p>Weight management strategies most often focus on achieving healthy weights through slow
                                        but steady weight loss, followed
                                        by maintenance of an ideal body</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-box">
                                <div className="img-area"><img src="images/services/annual_health_checkup.png" alt="Person 5" />
                                </div>
                                <div className="img-text">
                                    <h4>Health Insurance</h4>
                                    <p>Health insurance that covers medical expenses that arise due to an
                                        illness. These expenses could
                                        be related to hospitalisation costs, cost of medicines or doctor consultation fees.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-box">
                                <div className="img-area"><img src="images/services/Diabielties.png" alt="Person 6" />
                                </div>
                                <div className="img-text">
                                    <h4>Diabetes Management</h4>
                                    <p>Managing diabetes means managing blood glucose, blood pressure, and cholesterol.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Service
