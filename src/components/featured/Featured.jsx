import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

import "./featured.scss";
import "./../../utils/utils.scss";

const Featured = () => {
	return (
		<div className="featured">
			<div className="featured__container">
				<div className="featured__card color-green">
					<h2 className="featured__title">Revenue</h2>
					<div className="featured__stats">
						<h1 className="featured__value">$ 2,688</h1>
						<div className="featured__percentage">
							<span className="featured__percentage-value">-5.5%</span>
							<RiArrowDownSLine className="featured__indicator" />
						</div>
					</div>
				</div>
				<div className="featured__card color-purple">
					<h2 className="featured__title">Sales</h2>
					<div className="featured__stats">
						<h1 className="featured__value">$ 4,516</h1>
						<div className="featured__percentage">
							<span className="featured__percentage-value">-2.1%</span>
							<RiArrowDownSLine className="featured__indicator" />
						</div>
					</div>
				</div>
				<div className="featured__card color-brown">
					<h2 className="featured__title">Cost</h2>
					<div className="featured__stats">
						<h1 className="featured__value">$ 1,828</h1>
						<div className="featured__percentage">
							<span className="featured__percentage-value">+2.5%</span>
							<RiArrowUpSLine className="featured__indicator" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
