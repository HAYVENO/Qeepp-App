import React from "react";

function Footer() {
	const thisYear = new Date().getFullYear().toString();

	return (
		<footer>
			<p>
				{thisYear}{" "}
				<a
					style={{ color: "currentColor" }}
					href="https://github.com/HAYVENO"
					target="_blank"
					rel="noopener noreferrer"
				>
					HAYVENODE
				</a>{" "}
				&copy; All Rights Reserved
			</p>
		</footer>
	);
}

export default Footer;
