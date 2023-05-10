import React from "react";

interface LinkPreviewProps {
	imageUrl: string;
}

const LinkPreview = ({ imageUrl }: LinkPreviewProps) => {
	return (
		<div className="footer__image-preview">
			<img
				style={{ objectFit: "cover" }}
				src={imageUrl}
				alt="Yusuf Abdulhafeez link preview"
				width={150}
				height={116}
				loading="lazy"
			/>
		</div>
	);
};

export default LinkPreview;
