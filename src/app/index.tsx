import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from 'screens/Home';
import { HomeTemplate } from 'templates/HomeTemplate';

function App() {
	return (
		<BrowserRouter basename='/'>
			<HomeTemplate>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='employers' element={<div>Роботодавці</div>} />
					<Route path='candidates' element={<div>Кандидатам</div>} />
				</Routes>
			</HomeTemplate>
		</BrowserRouter>
	);
}

export default App;
