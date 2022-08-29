import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

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

    // sync internal state of comopnent formState with the user input from the vdom
    function handleChange(e) {
        // validate email before syncing
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log('>> email isValid ? >>', isValid);
            if (!isValid) {
                setErrorMessage('Invalid email address.');
            } else {
                // require all fields after email validation and before syncing
                if (!e.target.value.length) {
                    setErrorMessage(`{e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
        }
        // spreadoperator to retain the other key-value pairs in the object only IF validations are success
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }
    // // TODO: comment out after testing
    // console.log('>> formState >> ', formState)
    // console.log('>> errorMessage if exists >> ', errorMessage)

    // submit the form data
    function handleSubmit(e) {
        e.preventDefault();
        console.log('>> formState in handleSubmit >> ', formState)
        //TODO: project scope is only for frontend. Add backend for functionality.
    }

    // display the form on the vdom
    return (
        <section>

            <h1>CONTACT</h1>

            <form id='contact-form' onSubmit={handleSubmit}>
                {/* name input, required */}
                <div>
                    <label htmlFor='name'>Name: </label>
                    <input type='text' name='name' defaultValue={formState.name} onBlur={handleChange}></input>
                </div>
                {/* email input, required, validation */}
                <div>
                    <label htmlFor='email'>Email address: </label>
                    <input type='email' name='email' defaultValue={formState.email} onBlur={handleChange}></input>
                </div>
                {/* message text area, required */}
                <div>
                    <label htmlFor='message'>Message: </label>
                    <textarea name='message' rows='2' defaultValue={formState.message} onBlur={handleChange}></textarea>
                </div>
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
        // Contact form with name, email, message
        // all fields required, notification if empty
        // email validation
    )
};

export default Contact;