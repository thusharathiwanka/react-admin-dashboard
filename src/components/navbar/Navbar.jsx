import { RiSettings4Fill, RiNotification3Fill, RiGlobalFill } from "react-icons/ri";

import TopAvatar from "../../assets/images/top-avatar.jpg";

import "./navbar.scss";

const Navbar = () => {
	return (
		<nav>
			<div className="nav-container">
				<div className="nav-container__left">
					<div className="nav-container__logo">
						<h2>LOGO</h2>
					</div>
				</div>
				<div className="nav-container__right">
					<div className="nav-container__icon-container">
						<RiGlobalFill />
					</div>
					<div className="nav-container__icon-container">
						<RiSettings4Fill />
					</div>
					<div className="nav-container__icon-container">
						<RiNotification3Fill />
					</div>
					<img src={TopAvatar} alt="top-avatar" className="nav-container__avatar" />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
