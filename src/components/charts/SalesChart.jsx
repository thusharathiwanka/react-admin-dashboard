import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

import "./chart.scss";

const SalesChart = () => {
	const data = [
		{
			name: "Jan",
			sales: 4000,
		},
		{
			name: "Feb",
			sales: 3000,
		},
		{
			name: "Mar",
			sales: 2000,
		},
		{
			name: "Apr",
			sales: 2780,
		},
		{
			name: "May",
			sales: 1890,
		},
		{
			name: "Jun",
			sales: 2390,
		},
		{
			name: "Jul",
			sales: 3490,
		},
		{
			name: "Aug",
			sales: 3400,
		},
		{
			name: "Sep",
			sales: 2090,
		},
		{
			name: "Oct",
			sales: 3490,
		},
		{
			name: "Nov",
			sales: 4590,
		},
		{
			name: "Dec",
			sales: 1490,
		},
	];

	return (
		<div className="sales-chart">
			<h3 className="sales-chart__title">Sales Analytics</h3>
			<ResponsiveContainer width="100%" aspect={4 / 1}>
				<LineChart data={data}>
					<XAxis dataKey="name" stroke="#c6c6c6" fontSize={15} />
					<Line type="monotone" dataKey="sales" stroke="#6c61b0" strokeWidth={2} />
					<Tooltip />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default SalesChart;
