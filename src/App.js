import './App.css';
import { Routes, Route } from 'react-router-dom';
import Contacts from './components/Contacts';
import Detail from './components/Detail';
import Edit from './components/Edit';

function App() {
	return (
		<div className="app-container">
			<Routes>
				<Route path="/" element={<Contacts />} />
				<Route path="detail/:id" element={<Detail />} />
				<Route path="edit/:id" element={<Edit />} />
			</Routes>
		</div>
	);
}

export default App;
