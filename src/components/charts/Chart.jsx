import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

import "./chart.scss";

const SalesChart = ({ data, dataKeys, title, color }) => {
	return (
		<div className="sales-chart">
			<h3 className="sales-chart__title">{title}</h3>
			<ResponsiveContainer width="100%" aspect={4 / 1}>
				<LineChart data={data}>
					<XAxis dataKey={dataKeys[0]} stroke="#c6c6c6" fontSize={15} />
					<Line type="monotone" dataKey={dataKeys[1]} stroke={color} strokeWidth={2} />
					<Tooltip />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default SalesChart;
