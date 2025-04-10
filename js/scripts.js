// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

import { GoogleGenerativeAI } from "https://cdn.jsdelivr.net/npm/@google/generative-ai@0.23.0/+esm";

// Important: get your own API key. Do not use mine.
// You can do that here: https://aistudio.google.com/app/apikey
const API_KEY = "AIzaSyAV-3hLuYJT984YqygzT8fXTb7wFcVwJoE";

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const petNameInput = document.querySelector('#petname');
const generateButton = document.querySelector('#generate-story');
const storySection = document.querySelector('#story-result');

async function generateStory() {
	const prompt = `Generate a backstory for the pet named ${petNameInput.value}.`;
	await model.generateContent(prompt)
		.then(result => storySection.innerHTML = `<p>${result.response.text()}</p>`);
}

// ? is same as checking if generateButton is null
generateButton?.addEventListener("click", generateStory);

// Write some new code to generate a random pet

const randomPetButton = document.querySelector('#random-pet');

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}


function showRandomPet() {
	fetch("js/pets.json")
		.then(response => response.json())
		.then(data => {
			const totalPets = data.length;
			const randomNumber = Math.round(getRandomArbitrary(0, totalPets - 1));
			const randomPet = data[randomNumber];
			storySection.innerHTML = `<em>${randomPet.name}</em> <img src=${randomPet.image} />`;
		});
}

randomPetButton?.addEventListener("click", showRandomPet);
