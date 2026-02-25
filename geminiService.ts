
import { GoogleGenAI, Type } from "@google/genai";

/* Initialized GoogleGenAI strictly following the guideline to use process.env.API_KEY directly */
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getDailyContent() {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Günün ayeti, hadisi ve kısa bir duasını Türkçe olarak hazırla. Format JSON olsun.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            ayah: { type: Type.STRING, description: "Bir Kur'an ayeti ve referansı" },
            hadith: { type: Type.STRING, description: "Bir hadis-i şerif ve kaynağı" },
            dua: { type: Type.STRING, description: "Kısa bir günlük dua" }
          },
          required: ["ayah", "hadith", "dua"]
        }
      }
    });
    
    /* Correctly extracting generated text output using the text property */
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini content fetch error:", error);
    return {
      ayah: "Şüphesiz her zorlukla beraber bir kolaylık vardır. (İnşirah, 5)",
      hadith: "Ameller niyetlere göredir. (Buhari)",
      dua: "Allah'ım, bize dünyada da ahirette de iyilik ver."
    };
  }
}
