import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
    const [fromData, setFromData] = useState({
        name : '',
        email : '',
        feedback : '',
        rating: ''
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFromData ({
            ...fromData,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const confirmationMessage = `
            Name: ${fromData.name}
            Email: ${fromData.email}
            Feedback: ${fromData.feedback}
            Rating: ${fromData.rating}
        `

        const isConfirmed = window.confirm(`Please confirm your details: \n\n ${confirmationMessage}`)
        if (isConfirmed){
            console.log('Submitting Feedback', fromData);
            setFromData({
                name: '',
                email: '',
                feedback: '',
                rating: ''
            })

            alert('Thank you for your valuable feedback!');
        }
    }

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input 
            type = 'text'
            name = 'name'
            placeholder='Your Name'
            value={fromData.name}
            onChange = {handleChange}
        />
        <input
            type = 'email'
            name = 'email'
            placeholder = 'Your Email'
            value={fromData.email}
            onChange = {handleChange}
        />

        <textarea 
            name='feedback'
            placeholder = 'Your Feedback'
            value={fromData.feedback}
            onChange = {handleChange}
        ></textarea>

    <div style={{display:'flex', gap: '10px', flexDirection: 'column'}}>
        <h3>Please Rate Us</h3>
        <p>
        <input 
            name = 'rating'
            type = 'radio'
            value = '1'
            onChange = {handleChange}
        />1
        </p>

        <p>
        <input 
            name = 'rating'
            type = 'radio'
            value = '2'
            onChange = {handleChange}
        />2
        </p>

        <p>
        <input 
            name = 'rating'
            type = 'radio'
            value = '3'
            onChange = {handleChange}
        />3
        </p>

        <p>
        <input 
            name = 'rating'
            type = 'radio'
            value = '4'
            onChange = {handleChange}
        />4
        </p>

        <p>
        <input 
            name = 'rating'
            type = 'radio'
            value = '5'
            onChange = {handleChange}
        />5
        </p>
    </div>

        <button type='submit'>Submit Feedback</button>

      </form>
    </>
  );
};

export default FeedbackForm;
