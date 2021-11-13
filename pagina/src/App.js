import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Layout
import Header from './components/Menu';

//Pages
import Description from './pages/Description';
import Developing from './pages/Developing';
import Experience from './pages/Experience';
import Team from './pages/Team';
import Home from './pages/Home';



function App() {
  return (
    <Router>
		<div className="app-container">
			<Header />
			<Switch>
				<Route path="/descripcion-del-juego" component={Description} />
				<Route path="/experiencia-del-juego" component={Experience} />
				<Route path="/desarrollo-del-juego" component={Developing} />
				<Route path="/equipo-de-trabajo" component={Team} />
				<Route path="/" component={Home} />
			</Switch>
		</div>
	</Router>
  );
}

export default App;
