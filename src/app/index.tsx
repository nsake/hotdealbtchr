import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Candidates } from 'screens/Candidates';
import { Employers } from 'screens/Employers';
import { Home } from 'screens/Home';
import { HomeTemplate } from 'templates/HomeTemplate';

function App() {
	return (
		<BrowserRouter basename='/'>
			<HomeTemplate>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='employers' element={<Employers />} />
					<Route path='candidates' element={<Candidates />} />
				</Routes>
			</HomeTemplate>
		</BrowserRouter>
	);
}

export default App;
