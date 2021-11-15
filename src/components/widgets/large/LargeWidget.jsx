import "./largeWidget.scss";

const LargeWidget = ({ title }) => {
	return (
		<div className="large-widget">
			<h3 className="small-widget__title">{title}</h3>
		</div>
	);
};

export default LargeWidget;
