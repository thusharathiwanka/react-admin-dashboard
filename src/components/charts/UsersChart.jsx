import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const CostsChart = () => {
	const data = [
		{
			name: "Jan",
			users: 2300,
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
			users: 2880,
		},
		{
			name: "May",
			users: 4890,
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
			users: 5490,
		},
		{
			name: "Nov",
			users: 1590,
		},
		{
			name: "Dec",
			users: 1490,
		},
	];

	return (
		<div className="users-chart">
			<h3 className="users-chart__title">Users Analytics</h3>
			<ResponsiveContainer width="100%" aspect={4 / 1}>
				<LineChart data={data}>
					<XAxis dataKey="name" stroke="#c6c6c6" fontSize={15} />
					<Line type="monotone" dataKey="users" stroke="#5eba68" strokeWidth={2} />
					<Tooltip />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default CostsChart;
