import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Note, { NoteProps } from "./Components/Note";
import InputNote from "./Components/InputNote";
import Footer from "./Components/Footer";
import dummyNotes, { dummyNotesProps } from "./util/dummyNotes";
import getRandomWallpaper from "./util/getRandomWallpaper";

const App: React.FC = () => {
	const now = new Date().toISOString();

	const [time, setTime] = useState(now);
	const [notesArray, setNotes] = useState<NoteProps[]>([]);

	useEffect(() => {
		const persistedNotesJson = localStorage.getItem("notes");
		const persistedNotes = persistedNotesJson ? JSON.parse(persistedNotesJson) : null;

		if (persistedNotes) {
			setNotes(persistedNotes);
		} else {
			setNotes([...dummyNotes]);
		}

		getRandomWallpaper();
	}, []);

	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notesArray));
	}, [notesArray]);

	function updateTime() {
		const newNow = new Date().toLocaleTimeString();
		setTime(newNow);
	}
	setInterval(updateTime, 1000);

	function handleClick(input: any) {
		// If there is no Note title, do nothing
		console.log(input);
		if (!input.title) return;

		console.log(input);
		// Push the current Note to the array
		setNotes([input, ...notesArray]);
	}

	function deleteItem(id?: number) {
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
};

export default App;
