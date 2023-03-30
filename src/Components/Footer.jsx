import React from "react";

function Footer() {
	const thisYear = new Date().getFullYear().toString();

	return (
		<footer>
			<p style={{ fontSize: "0.8rem", padding: "1rem", margin: "0 -5rem" }}>
				{thisYear}{" "}
				<a style={{ color: "currentColor" }} href="https://github.com/HAYVENO" target="_blank">
					HAYVENODE
				</a>{" "}
				&copy; All Rights Reserved
			</p>
		</footer>
	);
}

export default Footer;
