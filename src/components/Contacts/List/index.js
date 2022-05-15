import { useState } from 'react';

import { useSelector } from 'react-redux';
import { contactSelector } from '../../../redux/contactsSlice';

import { useDispatch } from 'react-redux';
import { removeContact, removeAllContacts } from '../../../redux/contactsSlice';

import { Link } from 'react-router-dom';

function List() {
	const [filterText, setFilterText] = useState('');
	const contacts = useSelector(contactSelector.selectAll);

	const dispatch = useDispatch();

	const handleRemove = (id) => {
		if (window.confirm('Are you sure?')) {
			dispatch(removeContact(id));
		}
	};

	const handleRemoveAll = () => {
		if (window.confirm('Are you sure?')) {
			dispatch(removeAllContacts());
		}
	};

	const filtered = contacts.filter((item) => {
		return item.fullname.toLowerCase().includes(filterText.toLowerCase());
	});
	return (
		<div>
			<input placeholder="Filter Contact" value={filterText} onChange={(e) => setFilterText(e.target.value)} />
			<div className="deleteAllBtn" onClick={handleRemoveAll}>
				Delete All
			</div>
			<ul className="list">
				{filtered.map((contact, i) => (
					<li key={i}>
						<span>{contact.fullname}</span>
						<span>{contact.phone_number}</span>
						<Link className="detailBtn" to={`/detail/${contact.id}`}>
							Detail
						</Link>
						<Link className="detailBtn" to={`/edit/${contact.id}`}>
							Edit
						</Link>
						<span className="deleteBTN" onClick={() => handleRemove(contact.id)}>
							X
						</span>
					</li>
				))}
			</ul>
			<p>Total contacts ({filtered.length})</p>
		</div>
	);
}

export default List;
