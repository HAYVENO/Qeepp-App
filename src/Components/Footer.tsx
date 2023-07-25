import React from "react";
import LinkPreview from "./util-components/LinkPreview";

const Footer: React.FC = () => {
	const thisYear = new Date().getFullYear().toString();

	return (
		<footer>
			<p>
				{thisYear}{" "}
				<a
					id="yusuf-copy"
					style={{ color: "currentColor" }}
					href="https://github.com/HAYVENO"
					target="_blank"
					rel="noopener noreferrer"
				>
					Yusuf Abdulhafeez
				</a>
				<LinkPreview imageUrl="https://res.cloudinary.com/detye5zx5/image/upload/v1683667680/hayveno-github-profile_nxslwy.png" />{" "}
				&copy; All Rights Reserved
			</p>
		</footer>
	);
};

export default Footer;
