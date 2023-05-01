import React, { useState } from "react";
import { BsPen } from "react-icons/bs";
import { NoteProps } from "./Note";

interface InputNoteProps {
	onClick: (input: NoteProps) => void;
}

function InputNote(props: InputNoteProps) {
	const [input, setInput] = useState<any>({
		title: "",
		content: "",
		date: "",
	});

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		//handles changes of title, content, and date
		const { name, value } = event.target;
		setInput({ ...input, [name]: value, date: new Date().toISOString() });
	}

	return (
		<div className="input-container">
			<div className="input-card">
				<input
					name="title"
					value={input.title}
					onChange={handleChange}
					type="text"
					placeholder="Title"
				/>
				<input
					name="content"
					value={input.content}
					onChange={handleChange}
					type="text"
					placeholder="Take a note..."
					autoComplete="off"
				/>
				<button
					className="submit-btn"
					onClick={() => {
						console.log(input);
						props.onClick(input);
						setInput({ title: "", content: "", date: "" });
					}}
				>
					Add note &nbsp;
					<BsPen />
				</button>
			</div>
		</div>
	);
}

export default InputNote;
