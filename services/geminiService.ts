
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, SKILLS, PROJECTS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

const SYSTEM_INSTRUCTION = `
You are the personal AI Assistant for Pragadeeshwaran, a fresher web developer.
Your goal is to answer questions from recruiters or potential clients about Pragadeeshwaran.

Pragadeeshwaran's Profile:
- Name: ${PERSONAL_INFO.name}
- Role: ${PERSONAL_INFO.role}
- About: ${PERSONAL_INFO.about}
- Skills: ${SKILLS.map(s => s.name).join(', ')}
- Projects: ${PROJECTS.map(p => `${p.title}: ${p.description}`).join('; ')}

Be polite, professional, and enthusiastic. If you don't know an answer, suggest they contact him directly via his social links.
Keep answers concise and informative.
`;

export const getAIResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });

    return response.text || "I'm sorry, I couldn't generate a response right now. Please try again or reach out to Pragadeeshwaran directly!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Something went wrong with my circuits! Please reach out to Pragadeeshwaran via LinkedIn or GitHub.";
  }
};
