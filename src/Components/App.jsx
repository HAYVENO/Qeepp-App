import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import InputNote from "./InputNote";
import Footer from "./Footer";

function App() {
	const now = new Date().toLocaleTimeString();

	const [time, setTime] = useState(now);

	function getMeTime() {
		const newNow = new Date().toLocaleTimeString();
		setTime(newNow);
	}
	setInterval(getMeTime, 1000);

	// MY NOTE FUNCTIONS AND STATES

	const [notesArray, setNotes] = useState([]);

	function handleClick(input) {
		setNotes([...notesArray, input]);
		// console.log(input);
	}

	function deleteItem(id) {
		console.log(id);

		const filteredItems = notesArray.filter((x, index) => index !== id);
		setNotes(filteredItems);
		console.log(filteredItems);
	}

	return (
		<div className="page-container">
			<div className="content-wrap">
				<Header />
				<h1 className="timer">{time}</h1>
				<InputNote onClick={handleClick} />
				{notesArray.map((note, index) => (
					<Note key={index} id={index} title={note.title} content={note.content} onClick={deleteItem} />
				))}
				<Footer />
			</div>
		</div>
	);
}

export default App;

//
