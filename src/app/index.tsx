import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Candidates } from 'screens/Candidates';
import { Employers } from 'screens/Employers';
import { Home } from 'screens/Home';
import { Request } from 'screens/request';
import { Reviews } from 'screens/Reviews';
import { HomeTemplate } from 'templates/HomeTemplate';

function App() {
	return (
		<BrowserRouter basename='/'>
			<HomeTemplate>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='employers' element={<Employers />} />
					<Route path='job' element={<Candidates />} />
					<Route path='reviews' element={<Reviews />} />
					<Route path='apply-now' element={<Request />} />
				</Routes>
			</HomeTemplate>
		</BrowserRouter>
	);
}

export default App;
