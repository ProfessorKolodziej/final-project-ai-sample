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

const prompt = "Tell me a joke.";

const result = await model.generateContent(prompt);
console.log(result.response.text());
