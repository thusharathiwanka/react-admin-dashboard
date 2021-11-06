import "./featured.scss";
import "./../../utils/utils.scss";

import { featuredData } from "../../helpers/featuredData";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
	return (
		<div className="featured">
			<div className="featured__container">
				{featuredData.map(featured => (
					<FeaturedCard
						id={featured.id}
						color={featured.color}
						title={featured.title}
						value={featured.value}
						percentage={featured.percentage}
					/>
				))}
			</div>
		</div>
	);
};

export default Featured;
