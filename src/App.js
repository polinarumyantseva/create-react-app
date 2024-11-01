import logo from './logo.svg';
import './App.css';

// декларативный
export const App = () => {
	return (
		<div className="App">
			{/* декларативный */}
			<header className="App-header">
				{/* декларативный */}
				<img src={logo} className="App-logo" alt="logo" />
				{/* декларативный */}
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				{/* декларативный */}
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
				{/* декларативный */}
				<p>{new Date().getFullYear()}</p>
			</header>
		</div>
	);
};
