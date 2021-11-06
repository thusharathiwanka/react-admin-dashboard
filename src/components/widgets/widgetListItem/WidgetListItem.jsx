import { RiEyeLine } from "react-icons/ri";

import "./widgetListItem.scss";

import Avatar from "../../../assets/images/top-avatar.jpg";

const WidgetListItem = () => {
	return (
		<div className="list-item">
			<img src={Avatar} alt="avatar" className="list-item__avatar" />
			<div className="list-item__text">
				<p className="list-item__name">John Doe</p>
				<p className="list-item__position">Engineer</p>
			</div>
			<button className="list-item__view color-purple">
				<RiEyeLine className="list-item__icon" />
				View
			</button>
		</div>
	);
};

export default WidgetListItem;
