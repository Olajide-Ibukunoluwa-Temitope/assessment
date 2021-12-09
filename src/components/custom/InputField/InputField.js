import React from 'react';
import './InputField.styles.css'

const InputField = ({label, type, placeholder, name, handleChange}) => {
    return (
        <div>
            <label>{label}</label><br/>
            <input 
                type={type} 
                className='input' 
                name={name} 
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    )
}

export default InputField;
