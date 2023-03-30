import React, { useState } from "react";
import { BsPen } from "react-icons/bs";

function InputNote(props) {
	const [input, setInput] = useState({
		title: "",
		content: "",
	});

	function handleChange(event) {
		//not a state, handles ES6's event.target name and value
		const { name, value } = event.target;
		setInput({ ...input, [name]: value });
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
				/>
				<button
					className="submit-btn"
					onClick={() => {
						props.onClick(input);
						setInput({ title: "", content: "" });
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
