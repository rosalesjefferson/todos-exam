import React from 'react'

import './reusable-input.style.scss'

const ReusableInput = ({ handleChange, ...otherProps }) =>{
	return(
		<div className='form-input__container'>
			<input 
				className='form-input' 
				onChange={ handleChange }
				type='text'
				{ ...otherProps }
			/>
		</div>
	)
}

export default ReusableInput