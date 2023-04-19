import React from "react";
import { AiFillDelete } from "react-icons/ai";
import dayjs from "dayjs";

function Note({ id, title, content, date, onDelete }) {
	return (
		<div className="note" style={{ backgroundColor: "" }}>
			<h1>{title}</h1>
			<p>{content}</p>
			<div className="card-btn-wrap">
				<div className="note-date">
					<span>
						{/* Thur, 24, September */}
						{dayjs(date).format("MMMM D, YYYY h:mm A")}
					</span>
				</div>
				<AiFillDelete
					style={{ color: "#45133c", fontSize: "1.5rem", cursor: "pointer" }}
					onClick={() => onDelete(id)}
				/>
			</div>
		</div>
	);
}

export default Note;
