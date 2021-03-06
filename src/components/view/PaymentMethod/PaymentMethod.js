import React from 'react';
import paymentMethodImgData from '../../../constants/paymentMethodImg';
import { cardInputData } from '../../../constants/inputFieldData';
import mastercardImg from '../../../assets/master.jpeg';
import InputField from '../../../components/custom/InputField/InputField';
import './PaymentMethod.styles.css';

const PaymentMethod = () => {
    const [value, setValue] = React.useState({
        creditCardNo: '',
        expDate: '',
        securityCode: '',
        postalCode: ''
    })

    const handleChange = (event) => {
        const {name} = event.target;

        setValue({
            ...value,
            [name]: event.target.value
        });
    }

    return (
        <div>
            <div className='payment-title-container'>
                <div id='payment-title'>
                    <h3>Payment Information</h3>
                    <p>Choose your method of payment</p>
                </div>
                <div>
                    {paymentMethodImgData.map((src, idx) => (
                        <img src={src} key={idx} className='payment-method' alt='payment-method-img' />
                    ))}
                </div>
            </div>
            <div className='flex card-details-section'>
                <div className='half-width full-width'>
                    <img src={mastercardImg} id='payment-card' alt='payment-card-img' />
                </div>
                <div className='half-width full-width'>
                    <form>
                        <div className='flex input-field-container'>
                            {
                            cardInputData.map(({label, type, placeholder, name}, index) => (
                                <div className='half-width mb-2' key={index}>
                                    <InputField 
                                        label={label} 
                                        type={type} 
                                        placeholder={placeholder} 
                                        name={name}
                                        handleChange={handleChange}
                                    />
                                </div>
                            ))
                            }
                        </div>
                        <div className='mb'>
                            <input type="radio" id="save-card" name="save-card" value="save" />
            ??               <label htmlFor="save-card">Use this card for next time purchase</label><br/>
                        </div>
                        <button id='add-card-btn'>Add card</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PaymentMethod;
