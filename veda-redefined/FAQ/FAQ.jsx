import React from "react";
import "./faq.css"; // Assuming faq.css is in the same directory

function FAQ() {
  return (
    <div>

      <div className="faq-container">
        <div className="faq-item">
          <div className="faq-question">
            <h2>Q: What is Ayu?</h2>
          </div>
          <div className="faq-answer">
            <p>A: Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
        {/* Repeat faq-item structure for other FAQs */}
      </div>
    </div>
  );
}

export default FAQ;
