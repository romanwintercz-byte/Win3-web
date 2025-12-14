import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateAppProposal = async (userProblem: string): Promise<string> => {
  try {
    const prompt = `
      Jsi zkušený softwarový architekt a vývojář (React, Supabase, Vercel).
      Potenciální klient má následující problém nebo nápad: "${userProblem}".
      
      Navrhni stručné, ale úderné řešení formou webové aplikace na míru.
      
      Struktura odpovědi:
      1. **Název řešení**: Vymyšli kreativní název.
      2. **Hlavní funkce**: 3 klíčové body.
      3. **Technologie**: Vysvětli, jak využijeme Supabase nebo React k řešení.
      
      Odpověz česky, profesionálně, ale srozumitelně. Formátuj jako Markdown.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Omlouvám se, ale momentálně nemohu vygenerovat návrh. Zkuste to prosím později.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Došlo k chybě při komunikaci s AI asistentem. Zkontrolujte prosím své připojení nebo API klíč.";
  }
};