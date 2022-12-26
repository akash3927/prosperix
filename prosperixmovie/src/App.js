/** @format */

import './App.css';
import Home from './components/Home/Home';
import SingleMovie from './components/SingleMovie/SingleMovie';

import { Route, Routes } from 'react-router-dom';
function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='movie/:id' element={<SingleMovie />} />
			</Routes>
		</div>
	);
}

export default App;
