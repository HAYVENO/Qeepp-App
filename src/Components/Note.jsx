import React from "react";

function Note(props) {
	return (
		<div className="note">
			<h1>{props.title}</h1>
			<p>{props.content}</p>
			<div className="card-btn-wrap">
				<button onClick={() => props.onClick(props.id)}>
					<span style={{ color: "#956e00", cursor: "pointer" }} className="material-symbols-outlined">
						delete
					</span>
				</button>
			</div>
		</div>
	);
}

export default Note;
