import React, { useEffect } from 'react';
import './FooterContent.css';

function FAQ() {
  useEffect(() => {
    // Function to handle accordion click
    const handleAccordionClick = (event) => {
      const clickedElement = event.target;
      clickedElement.classList.toggle('active');

      const parent = clickedElement.parentElement;
      const panel = clickedElement.nextElementSibling;

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
        parent.style.maxHeight = parseInt(parent.style.maxHeight) + panel.scrollHeight + 'px';
      }
    };

    // Attach event listeners to accordion buttons
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach((accordion) => {
      accordion.addEventListener('click', handleAccordionClick);
    });

    // Clean up event listeners on component unmount
    return () => {
      accordions.forEach((accordion) => {
        accordion.removeEventListener('click', handleAccordionClick);
      });
    };
  }, []); // Empty dependency array to run the effect only once on component mount

  // Function to handle hamburger menu click
//   const handleHamburgerClick = () => {
//     const navLinks = document.querySelector('.nav-links');
//     navLinks.classList.toggle('show');
//   };

  return (
    <div>
    
<div className="accordion-wrapper">

<h1>FAQs</h1>

<button className="accordion main-acc one">Website Usage</button>
<div className="panel main-panel">
  <button className="accordion sub-acc">What types of academic data are available on the website?</button>
  <div className="panel sub-panel">
    <p>Specify the range of academic information that users can access, such as grades, course schedules, attendance records, etc.</p>
  </div>
  <button className="accordion sub-acc">How do I submit assignments or coursework through the website?</button>
  <div className="panel sub-panel">
    <p>Provide guidance on the process for submitting assignments or coursework electronically through the website.</p>
  </div>
  <button className="accordion sub-acc">How is academic performance calculated on the website?</button>
  <div className="panel sub-panel">
    <p>Provide information on the grading system used and overall academic performance is calculated and displayed.
    </p>
  </div>
  <button className="accordion sub-acc">Can I share my academic achievements on social media through the website?</button>
  <div className="panel sub-panel">
    <p>No,It is not possible.</p>
  </div>
</div>




<button className="accordion main-acc two">Site Security and Privacy</button>
<div className="panel main-panel">
  <button className="accordion sub-acc">Is using on your site secure?</button>
  <div className="panel sub-panel">
    <p>Yes, our site is secure. We use the latest in encryption technology and security protocols to protect your personal information.</p>
  </div>

  <button className="accordion sub-acc">How do I know if my personal information is protected?</button>
  <div className="panel sub-panel">
    <p>We take the protection of your personal information very seriously, and we have strict privacy policies in place to ensure your information is secure. You can find more information on our privacy policies on our website.</p>
  </div>
</div>

<button className="accordion main-acc three">Account Management</button>
<div className="panel main-panel">
  <button className="accordion sub-acc">How do I create an account?</button>
  <div className="panel sub-panel">
    <p>To create an account, It can done only by your mentor.</p>
  </div>

  <button className="accordion sub-acc">How do I reset my password?</button>
  <div className="panel sub-panel">
    <p>To reset your password, contact your mentor</p>
  </div>

</div>
</div>
    
    </div>
  )
}

export default FAQ