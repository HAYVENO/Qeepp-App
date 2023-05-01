import React from "react";
import { AiFillDelete } from "react-icons/ai";
import dayjs from "dayjs";

export interface NoteProps {
	id?: number;
	title: string;
	content: string;
	date: Date | string;
	onDelete?: (id?: number) => void;
}

const Note: React.FC<NoteProps> = ({ id, title, content, date, onDelete }: NoteProps) => {
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
					onClick={() => (onDelete ? onDelete(id) : null)}
				/>
			</div>
		</div>
	);
};

export default Note;
