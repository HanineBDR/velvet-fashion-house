/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from '../constants';

const getSystemInstruction = () => {
  const productContext = PRODUCTS.map(p => 
    `- ${p.name} ($${p.price}): ${p.description}. Features: ${p.features.join(', ')}`
  ).join('\n');

  return `You are the AI Stylist for "Velvet", a high-end luxury fashion brand. 
  Your tone is professional, chic, knowledgeable, and elegant. 
  Use fashion terminology like "silhouette", "drape", "textile", "palette", and "structure".
  
  Here is our current collection:
  ${productContext}
  
  Answer customer questions about styling advice, size recommendations, and fabric care.
  Keep answers concise (under 3 sentences usually) to fit the chat UI.
  If asked about items we don't carry, suggest how our existing pieces could be styled to achieve a similar look.`;
};

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    let apiKey: string | undefined;
    
    try {
      apiKey = process.env.API_KEY;
    } catch (e) {
      console.warn("Accessing process.env failed");
    }
    
    if (!apiKey) {
      return "I'm sorry, I cannot connect to the server right now. (Missing API Key)";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: getSystemInstruction(),
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I seem to be having trouble consulting the lookbook at the moment.";
  }
};