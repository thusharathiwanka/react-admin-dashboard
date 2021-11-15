import UserAvatar from "../../../assets/images/top-avatar.jpg";

import "./tableRowItem.scss";

const TableRowItem = () => {
	return (
		<tr className="table-item">
			<td className="table-item__user-info">
				<img src={UserAvatar} alt="user-avatar" className="table-item__avatar" />
				<p>John Doe</p>
			</td>
			<td>{new Date().toLocaleDateString()}</td>
			<td>$ 200.00</td>
			<td>Pending</td>
		</tr>
	);
};

export default TableRowItem;
