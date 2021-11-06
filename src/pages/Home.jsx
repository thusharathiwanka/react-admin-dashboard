import Featured from "../components/featured/Featured";
import SalesChart from "../components/charts/SalesChart";
import UsersChart from "../components/charts/UsersChart";

const Home = () => {
	return (
		<>
			<Featured />
			<div className="charts-container">
				<SalesChart />
				<UsersChart />
			</div>
		</>
	);
};

export default Home;
