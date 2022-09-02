import React, { useState } from 'react';
import { validateEmail, capitalizeFirstLetter } from '../../utils/helpers';

function Contact() {

    // hook to mange the data and syn the form data with the component's state
    const [formState, setFormState] = useState(
        // clear input field on the component loading
        {
            name: '',
            email: '',
            message: ''
        }
    );

    // hook to define error messages
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    // submit the form data
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            //console.log('>> formState in handleSubmit >> ', formState)
        }
        //TODO: project scope is only for frontend. Add backend for functionality ;; consider emailjs
        alert('Message not sent. Please email cmaher1120@gmail.com directly or click the email icon in the footer.')
    };

    // sync internal state of comopnent formState with the user input from the vdom
    const handleChange = (e) => {
        // validate email before syncing
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log('>> email isValid ? >>', isValid);
            if (!isValid) {
                setErrorMessage('Invalid email address.');
            } else {
                setErrorMessage('');
            }
        } else {
            // validate lengths of all fields
            if (!e.target.value.length) {
                setErrorMessage(capitalizeFirstLetter(`${e.target.name} is required.`));
            } else {
                setErrorMessage('');
            }
        }
        // spreadoperator to retain the other key-value pairs in the object only IF validations are success
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            //console.log('>> handleForm formState >> ', formState)
        }
    };
    //console.log('>> errorMessage if exists >> ', errorMessage)

    // display the form on the vdom
    return (
        <section>

            <h2>CONTACT</h2>

            <form id='contact-form' onSubmit={handleSubmit}>
                {/* name input, required */}
                <div>
                    <label htmlFor='name'>Name: </label><br />
                    <input type='text' name='name' defaultValue={name} onBlur={handleChange}></input>
                </div><br />
                {/* email input, required, validation */}
                <div>
                    <label htmlFor='email'>Email address: </label><br />
                    <input type='email' name='email' defaultValue={email} onBlur={handleChange}></input>
                </div><br />
                {/* message text area, required */}
                <div>
                    <label htmlFor='message'>Message: </label><br />
                    <textarea name='message' rows='2' defaultValue={message} onBlur={handleChange}></textarea>
                </div><br />
                {/* error message only IF validations fail */}
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                {/* button */}
                <button type='submit'>Send</button>
            </form>

        </section>
    );
};

export default Contact;