import React, { useState, useEffect } from "react";
import Header from "./Header";
import Note from "./Note";
import InputNote from "./InputNote";
import Footer from "./Footer";
import dummyNotes from "../util/dummyNotes";
import getRandomWallpaper from "../hooks/getRandomWallpaper";

function App() {
	const now = new Date().toISOString();

	const [time, setTime] = useState(now);
	const [notesArray, setNotes] = useState([...dummyNotes]);

	useEffect(() => {
		// get wallpaper
		getRandomWallpaper(notesArray);

		const persistedNotes = JSON.parse(localStorage.getItem("notes"));
		console.log(persistedNotes);

		setNotes((prevNotes) => [...prevNotes, ...persistedNotes]);
	}, []);

	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notesArray));
	}, [notesArray]);

	function updateTime() {
		const newNow = new Date().toLocaleTimeString();
		setTime(newNow);
	}
	setInterval(updateTime, 1000);

	function handleClick(input) {
		// If there is no Note title, do nothing
		console.log(input);
		if (!input.title) return;

		console.log(input);
		// Push the current Note to the array
		setNotes([input, ...notesArray]);
	}

	function deleteItem(id) {
		const filteredItems = notesArray.filter((x, index) => index !== id);
		setNotes(filteredItems);
	}

	return (
		<div className="page-container overlay">
			<div className="content-wrap">
				<Header />
				<div className="main-wrap">
					<InputNote onClick={handleClick} />
					<div className="note-container">
						{notesArray.map((note, index) => (
							<Note
								key={index}
								id={index}
								title={note.title}
								content={note.content}
								date={note.date}
								onDelete={deleteItem}
							/>
						))}
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
