import WidgetListItem from "../widgetListItem/WidgetListItem";

import "./smallWidget.scss";

const SmallWidget = ({ title }) => {
	return (
		<div className="small-widget">
			<h3 className="small-widget__title">{title}</h3>
			<div className="small-widget__content">
				<WidgetListItem />
				<WidgetListItem />
				<WidgetListItem />
				<WidgetListItem />
			</div>
		</div>
	);
};

export default SmallWidget;
