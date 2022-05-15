import { useState } from 'react';

import { nanoid } from '@reduxjs/toolkit';

import { useDispatch } from 'react-redux';
import { addContact } from '../../../redux/contactsSlice';

const initialFormValues = { fullname: '', phone_number: '' };

function Form() {
	const [form, setForm] = useState(initialFormValues);

	const dispatch = useDispatch();
	const onChangeInput = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSumit = (e) => {
		e.preventDefault();
		if (form.phone_number === '' && form.fullname === '') return false;
		const newContact = {
			id: nanoid(),
			...form,
		};
		dispatch(addContact(newContact));
		console.log('form', form);
		setForm(initialFormValues);
	};

	return (
		<div onSubmit={handleSumit}>
			<form>
				<div>
					<input name="fullname" placeholder="Full-name" onChange={onChangeInput} value={form.fullname} />
				</div>
				<div>
					<input name="phone_number" placeholder="Phone Number" onChange={onChangeInput} value={form.phone_number} />
				</div>
				<div className="btn">
					<button>Add</button>
				</div>
			</form>
		</div>
	);
}

export default Form;
