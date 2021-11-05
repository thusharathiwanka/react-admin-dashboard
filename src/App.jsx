import Home from "./pages/Home";

import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

import "./App.scss";

const App = () => {
	return (
		<div className="app">
			<Navbar />
			<div className="app__body-container">
				<Sidebar />
				<div className="app__right-container">
					<Home />
				</div>
			</div>
		</div>
	);
};

export default App;
