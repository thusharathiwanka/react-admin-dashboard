import Featured from "../components/featured/Featured";
import Chart from "../components/charts/Chart";

import { salesData, usersData } from "../helpers/chartData";

const Home = () => {
	return (
		<>
			<Featured />
			<div className="charts-container">
				<Chart
					data={salesData}
					dataKeys={["name", "sales"]}
					color="#6c61b0"
					title="Sales Analytics"
				/>
				<Chart
					data={usersData}
					dataKeys={["name", "users"]}
					color="#5eba68"
					title="Users Analytics"
				/>
			</div>
		</>
	);
};

export default Home;
