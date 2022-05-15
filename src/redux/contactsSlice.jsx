import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export const contactAdapter = createEntityAdapter();
const initialState = contactAdapter.getInitialState();

export const contactSelector = contactAdapter.getSelectors((state) => state.contacts);

const contactSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		addContact: contactAdapter.addOne,
		addContacts: contactAdapter.addMany,
		removeContact: contactAdapter.removeOne,
		removeAllContacts: contactAdapter.removeAll,
		updateContact: contactAdapter.updateOne,
	},
});

export const { addContact, addContacts, removeContact, updateContact, removeAllContacts } = contactSlice.actions;
export default contactSlice.reducer;
