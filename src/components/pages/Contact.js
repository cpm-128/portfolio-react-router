import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function Contact() {

    // display the form on the vdom
    return (
        <section>

            <h1>CONTACT</h1>

            <form id='contact-form'>
                {/* name input, required */}
                <div>
                    <label htmlFor='name'>Name: </label>
                    <input type='text' name='name'></input>
                </div>
                {/* email input, required, validation */}
                <div>
                    <label htmlFor='email'>Email address: </label>
                    <input type='email' name='email'></input>
                </div>
                {/* message text area, required */}
                <div>
                    <label htmlFor='message'>Message: </label>
                    <textarea name='message' rows='2'></textarea>
                </div>
                {/* error message only IF validation fails */}
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