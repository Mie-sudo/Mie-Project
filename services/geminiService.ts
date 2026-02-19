
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getGeminiResponse = async (userMessage: string) => {
  if (!API_KEY) {
    throw new Error("API Key not found");
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  const systemInstruction = `
    Sei "Mie.AI", l'assistente virtuale di Maria Elena “Mie” Turcinovich. 
    Mie è una Ragioniera e Tecnico in Rilevamenti Marini e Costieri, appassionata di Copywriting e Intelligenza Artificiale.
    Il tuo tono deve essere professionale, creativo, caloroso ed elegante (oro e seta).
    Parla dei suoi interessi: mare, precisione tecnica, 3D, ospitalità alberghiera e AI.
    Rispondi in italiano. Se l'utente chiede di collaborare, indirizzalo al form di contatto o all'email mie.turcinovich@email.com.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
        topP: 0.9,
      },
    });

    return response.text || "Mi dispiace, c'è stato un piccolo intoppo tecnico. Riprova tra poco! 🌟";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ouch! Il mare è un po' agitato oggi. Non riesco a connettermi al mio cuore digitale. 🌊";
  }
};
