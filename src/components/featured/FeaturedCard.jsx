import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const FeaturedCard = ({ color, title, value, percentage }) => {
	return (
		<div className={`featured__card color-${color}`}>
			<h2 className="featured__title">{title}</h2>
			<div className="featured__stats">
				<h1 className="featured__value">$ {value}</h1>
				<div className="featured__percentage">
					<span className="featured__percentage-value">
						{percentage > 0 ? `+${percentage}` : percentage} %
					</span>
					{percentage > 0 ? (
						<RiArrowUpSLine className="featured__indicator" />
					) : (
						<RiArrowDownSLine className="featured__indicator" />
					)}
				</div>
			</div>
		</div>
	);
};

export default FeaturedCard;
