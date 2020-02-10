import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPages from './OtherPages';
import Fib from './Fib';

function App() {
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<Link to="/">Home</Link>
					<Link to="/otherpage">Other Page</Link>
				</header>
				<div>
					<Route exact path="/" component={Fib} />
					<Route exact path="/otherpage" component={OtherPages} />
				</div>
			</div>
		</Router>
	);
}

export default App;
