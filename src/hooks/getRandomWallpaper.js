import { useEffect } from "react";

const ACCESS_KEY = "Nr61Eg6wPGEYbkVpRwa8dDP9pNS7JDz7UxjwOo69z8c";
const SEARCH_TERM = "nature";
const IMAGE_WIDTH = 1920;
const IMAGE_HEIGHT = 1080;

function getRandomWallpaper(notesArray) {
	// const pageHeight = `${document.body.scrollHeight}px`;
	// console.log("Page height:", pageHeight);
	// const thresholdHeight = "1700";
	// console.log(
	// 	"🚀 ~ file: getRandomWallpaper.js:13 ~ useEffect ~ thresholdHeight:",
	// 	thresholdHeight
	// );

	// console.log(pageHeight < thresholdHeight);

	// if (pageHeight < thresholdHeight) return;

	console.log(notesArray.length);

	// Make a request to the Unsplash API to get a random nature photo if condition is met
	if (notesArray.length < 30) {
		fetch(
			`https://api.unsplash.com/photos/random?query=${SEARCH_TERM}&orientation=landscape&featured=true&width=${IMAGE_WIDTH}&height=${IMAGE_HEIGHT}`,
			{
				headers: {
					Authorization: `Client-ID ${ACCESS_KEY}`,
				},
			}
		)
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("Error fetching photo from Unsplash API");
				}
			})
			.then((photo) => {
				const imageUrl = photo.urls.full;

				// Set the image as the background using inline styles
				document.body.style.backgroundImage = `url(${imageUrl})`;

				document.body.style.backgroundPosition = "fixed";

				// document.body.style.backgroundRepeat = "no-repeat";
			})
			.catch((error) => {
				console.error(error);
			});
	}
}

export default getRandomWallpaper;
