import React from "react";

const Contact = () => {
  const handleSubmit = () => {
    // Show alert message when the submit button is clicked
    alert("Thank you for your suggestion!");
  };

  return (
    <div id="contact" className="contact-page-wrapper">
      <h1 className="primary-heading">Have A Suggestion In Mind?</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="Suggestion..." />
        {/* Call handleSubmit function when the submit button is clicked */}
        <button className="secondary-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
