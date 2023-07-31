import { FormInputField } from "./form-input-field/form-input-field.component.";
import { FormTextArea } from "./form-text-area-field/form-text-area.component";
import { Button } from "../button/button.component"
import { useState } from "react";

import './contact-form.style.scss'

const contactInfo = {
    name: '',
    company: '',
    phonenumber: '',
    email: '',
    message: ''
}
interface FieldsRegex {
    [key: string]: RegExp;
}

const fieldsRegex: FieldsRegex = {
    name: /^[A-Za-z\u0400-\u04FF\s]{0,35}$/,
    company: /^[A-Za-z\u0400-\u04FF\s\d-]{0,35}$/,
    email: /^[A-Za-z\u0400-\u04FF0-9._%+-@]{0,40}$/,
    phonenumber: /^[0-9+\-()\s]{0,20}$/,
    message: /^[\s\S]{0,400}$/,
    fullPhoneNumber: /^\+?\d{1,3}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/,
    fullEmailAddress: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

type Props = {
    isContactActive: boolean,
    setIsContactActive: (newValue: boolean) => void;
}

export const ContactForm = ({ isContactActive, setIsContactActive }: Props) => {

    const [formValues, setFormValues] = useState(contactInfo);
    const [isFormValid, setIsFormValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const clearFormFields = () => {
        setFormValues(contactInfo);
    }

    const validateField = (regex: RegExp, value: string) => {
        return regex.test(value);
    }

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = event.target;
        setIsFormValid(true);
        const isValidFieldValue = validateField(fieldsRegex[name], value);
        if (!isValidFieldValue) {
            return
        }
        setFormValues({
            ...formValues,
            [name]: value,
        });
    }

    const encode = (data: any) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { name, email, message, phonenumber } = formValues;

        if (!name || !email || !phonenumber || !message) {
            setIsFormValid(false);
            setErrorMessage("Please, fill in all nessesery fields!");
            return;
        }
        if (!validateField(fieldsRegex.fullEmailAddress, email)) {
            setIsFormValid(false);
            setErrorMessage('Not a proper email address!');
            return
        }
        if (!validateField(fieldsRegex.fullPhoneNumber, phonenumber)) {
            setIsFormValid(false);
            setErrorMessage('Not a correct phone number!');
            return
        }

        alert('Your response is accepted!!!')

        // fetch(`/`, {
        //     method: `POST`,
        //     headers: { 'Content-Type': `application/x-www-form-urlencoded` },
        //     body: encode({
        //         'form-name': 'contact-form__v1',
        //         ...formValues,
        //     }),
        // })
        //     .then((response) => {
        //         console.log(response);
        //         alert('Your response is accepted')
        //     })
        //     .catch(error => alert(`Error: ${error}`))
        clearFormFields();
        setIsContactActive(false);
    }

    return (
        <div id='contact-form-container' className="contact-form-container">
            <h2>Contact me: </h2>
            {/* <p>ако имате въпрос относно някой от нашите продукти или имате нужда от съдействие в Нидерландия за закупуване на земеделска техника</p> */}
            <form
                name='contact-form'
                method='post'
                data-netlify='true'
                onSubmit={(e) => { return handleSubmit(e) }}
            >
                <input type="hidden" name="form-name" value='contact-form' />
                <FormInputField
                    label='First and Familiy Names '
                    type='text'
                    name='name'
                    autoComplete='off'
                    onChange={handleChange}
                    value={formValues.name}
                />

                {/* <FormInputField
                    label='Company'
                    type='text'
                    name='company'
                    autoComplete='off'
                    onChange={handleChange}
                    value={formValues.company}
                /> */}

                <FormInputField
                    label='Phone number:'
                    type='text'
                    name='phonenumber'
                    autoComplete='off'
                    onChange={handleChange}
                    value={formValues.phonenumber}
                />

                <FormInputField
                    label='Email'
                    type='email'
                    name='email'
                    autoComplete='off'
                    onChange={handleChange}
                    value={formValues.email}
                />

                <FormTextArea
                    label='Message:'
                    type='text'
                    rows='8'
                    cols='100'
                    name='message'
                    onChange={handleChange}
                    value={formValues.message}
                />

                <div className="buttons-container">
                    <Button type='submit'>Send</Button>
                </div>
                {!isFormValid && <div className="form-error-message">{errorMessage}</div>}
            </form>
        </div>
    )
}