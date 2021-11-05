import { Link } from "react-router-dom";
import {
	RiBarChartFill,
	RiChat1Line,
	RiFeedbackLine,
	RiHomeLine,
	RiMailLine,
	RiMoneyDollarCircleLine,
	RiPulseLine,
	RiStackLine,
	RiStore2Line,
	RiUser3Line,
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
							<RiHomeLine className="sidebar__icon" />
							<Link to="/">Home</Link>
						</li>
						<li className="sidebar__item">
							<RiPulseLine className="sidebar__icon" />
							<Link to="/">Analytics</Link>
						</li>
						<li className="sidebar__item">
							<RiStackLine className="sidebar__icon" />
							<Link to="/">Sales</Link>
						</li>
					</ul>
					<h3 className="sidebar__title">Quick Menu</h3>
					<ul className="sidebar__links">
						<li className="sidebar__item">
							<RiUser3Line className="sidebar__icon" />
							<Link to="/">Users</Link>
						</li>
						<li className="sidebar__item">
							<RiStore2Line className="sidebar__icon" />
							<Link to="/">Products</Link>
						</li>
						<li className="sidebar__item">
							<RiMoneyDollarCircleLine className="sidebar__icon" />
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
							<RiMailLine className="sidebar__icon" />
							<Link to="/">Mail</Link>
						</li>
						<li className="sidebar__item">
							<RiFeedbackLine className="sidebar__icon" />
							<Link to="/">Feedback</Link>
						</li>
						<li className="sidebar__item">
							<RiChat1Line className="sidebar__icon" />
							<Link to="/">Messages</Link>
						</li>
					</ul>
					<h3 className="sidebar__title">Staff</h3>
					<ul className="sidebar__links">
						<li className="sidebar__item">
							<RiUser3Line className="sidebar__icon" />
							<Link to="/">Manage</Link>
						</li>
						<li className="sidebar__item">
							<RiPulseLine className="sidebar__icon" />
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
