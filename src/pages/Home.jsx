import Chart from "../components/charts/Chart";
import Featured from "../components/featured/Featured";
import LargeWidget from "../components/widgets/large/LargeWidget";
import SmallWidget from "../components/widgets/small/SmallWidget";

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
			<div className="widgets">
				<SmallWidget title="New Join Members" />
				<LargeWidget title="Latest Transactions" />
			</div>
		</>
	);
};

export default Home;
