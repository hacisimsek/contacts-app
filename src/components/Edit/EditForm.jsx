import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contactsSlice';
import { useNavigate } from 'react-router-dom';

const EditForm = ({ contact }) => {
	const [form, setForm] = useState(contact);
	const dispatch = useDispatch();
	let navigate = useNavigate();

	const onChangeInput = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSumit = (e) => {
		e.preventDefault();
		if (form.phone_number === '' && form.fullname === '') return false;
		dispatch(
			updateContact({
				id: form.id,
				changes: form,
			})
		);

		navigate('/');
	};

	return (
		<div>
			<div onSubmit={handleSumit}>
				<form>
					<div>
						<input name="fullname" placeholder="Full-name" onChange={onChangeInput} value={form.fullname} />
					</div>
					<div>
						<input name="phone_number" placeholder="Phone Number" onChange={onChangeInput} value={form.phone_number} />
					</div>
					<div className="btn">
						<button>Edit</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default EditForm;
