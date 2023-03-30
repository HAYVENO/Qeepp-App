import React, { useState, useEffect } from "react";
import Header from "./Header";
import Note from "./Note";
import InputNote from "./InputNote";
import Footer from "./Footer";

function App() {
	const now = new Date().toLocaleTimeString();

	const [time, setTime] = useState(now);
	const [notesArray, setNotes] = useState([]);

	useEffect(() => {
		const notes = JSON.parse(localStorage.getItem("notes"));
		if (notes) {
			setNotes(notes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notesArray));
	}, [notesArray]);

	function getMeTime() {
		const newNow = new Date().toLocaleTimeString();
		setTime(newNow);
	}
	setInterval(getMeTime, 1000);

	function handleClick(input) {
		// If there is no Note title, do nothing
		if (!input.title) return;

		// Push the current Note to the array
		setNotes([...notesArray, input]);
	}

	function deleteItem(id) {
		const filteredItems = notesArray.filter((x, index) => index !== id);
		setNotes(filteredItems);
	}

	return (
		<div className="page-container">
			<div className="content-wrap">
				<Header />
				<h1 className="timer">{time}</h1>
				<InputNote onClick={handleClick} />
				<div className="note-container">
					{notesArray.map((note, index) => (
						<Note
							key={index}
							id={index}
							title={note.title}
							content={note.content}
							onClick={deleteItem}
						/>
					))}
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
