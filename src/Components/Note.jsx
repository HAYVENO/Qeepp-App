import React from "react";
import { AiFillDelete } from "react-icons/ai";

function Note(props) {
	return (
		<div className="note">
			<h1>{props.title}</h1>
			<p>{props.content}</p>
			<div className="card-btn-wrap">
				<AiFillDelete
					style={{ color: "#45133c", fontSize: "1.5rem", cursor: "pointer" }}
					onClick={() => props.onClick(props.id)}
				/>
			</div>
		</div>
	);
}

export default Note;
