import { Link } from "react-router-dom";
import {
	RiBarChartFill,
	RiChat1Fill,
	RiFeedbackFill,
	RiHomeFill,
	RiMailFill,
	RiMoneyDollarCircleFill,
	RiPulseFill,
	RiStackFill,
	RiStore2Fill,
	RiUser3Fill,
} from "react-icons/ri";

import "./sidebar.scss";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar__container">
				<div className="sidebar__menu">
					<h3 className="sidebar__title">Dashboard</h3>
					<ul className="sidebar__links">
						<li className="sidebar__item active">
							<RiHomeFill className="sidebar__icon" />
							<Link to="/">Home</Link>
						</li>
						<li className="sidebar__item">
							<RiPulseFill className="sidebar__icon" />
							<Link to="/">Analytics</Link>
						</li>
						<li className="sidebar__item">
							<RiStackFill className="sidebar__icon" />
							<Link to="/">Sales</Link>
						</li>
					</ul>
					<h3 className="sidebar__title">Quick Menu</h3>
					<ul className="sidebar__links">
						<li className="sidebar__item">
							<RiUser3Fill className="sidebar__icon" />
							<Link to="/">Users</Link>
						</li>
						<li className="sidebar__item">
							<RiStore2Fill className="sidebar__icon" />
							<Link to="/">Products</Link>
						</li>
						<li className="sidebar__item">
							<RiMoneyDollarCircleFill className="sidebar__icon" />
							<Link to="/">Transactions</Link>
						</li>
						<li className="sidebar__item">
							<RiBarChartFill className="sidebar__icon" />
							<Link to="/">Reports</Link>
						</li>
					</ul>
					<h3 className="sidebar__title">Notifications</h3>
					<ul className="sidebar__links">
						<li className="sidebar__item">
							<RiMailFill className="sidebar__icon" />
							<Link to="/">Mail</Link>
						</li>
						<li className="sidebar__item">
							<RiFeedbackFill className="sidebar__icon" />
							<Link to="/">Feedback</Link>
						</li>
						<li className="sidebar__item">
							<RiChat1Fill className="sidebar__icon" />
							<Link to="/">Messages</Link>
						</li>
					</ul>
					<h3 className="sidebar__title">Staff</h3>
					<ul className="sidebar__links">
						<li className="sidebar__item">
							<RiUser3Fill className="sidebar__icon" />
							<Link to="/">Manage</Link>
						</li>
						<li className="sidebar__item">
							<RiPulseFill className="sidebar__icon" />
							<Link to="/">Analytics</Link>
						</li>
						<li className="sidebar__item">
							<RiBarChartFill className="sidebar__icon" />
							<Link to="/">Reports</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
