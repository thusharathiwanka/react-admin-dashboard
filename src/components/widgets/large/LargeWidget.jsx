import TableRowItem from "../tableRowItem/TableRowItem";

import "./largeWidget.scss";

const LargeWidget = ({ title }) => {
	return (
		<div className="large-widget">
			<h3 className="small-widget__title">{title}</h3>
			<table className="large-widget__table">
				<thead className="large-widget__table-head">
					<th>Customer</th>
					<th>Date</th>
					<th>Amount</th>
					<th>Status</th>
				</thead>
				<tbody>
					<TableRowItem />
					<TableRowItem />
					<TableRowItem />
					<TableRowItem />
				</tbody>
			</table>
		</div>
	);
};

export default LargeWidget;
