import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

import "./chart.scss";

const SalesChart = () => {
	const data = [
		{
			name: "Jan",
			users: 4000,
		},
		{
			name: "Feb",
			users: 3000,
		},
		{
			name: "Mar",
			users: 2000,
		},
		{
			name: "Apr",
			users: 2780,
		},
		{
			name: "May",
			users: 1890,
		},
		{
			name: "Jun",
			users: 2390,
		},
		{
			name: "Jul",
			users: 3490,
		},
		{
			name: "Aug",
			users: 3400,
		},
		{
			name: "Sep",
			users: 2090,
		},
		{
			name: "Oct",
			users: 3490,
		},
		{
			name: "Nov",
			users: 4590,
		},
		{
			name: "Dec",
			users: 1490,
		},
	];

	return (
		<div className="sales-chart">
			<h3 className="sales-chart__title">Sales Analytics</h3>
			<ResponsiveContainer width="100%" aspect={4 / 1}>
				<LineChart data={data}>
					<XAxis dataKey="name" stroke="#c6c6c6" fontSize={15} />
					<Line type="monotone" dataKey="users" stroke="#6c61b0" strokeWidth={2} />
					<Tooltip />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default SalesChart;
