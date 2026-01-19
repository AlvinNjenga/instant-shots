
import { GoogleGenAI, Type } from "@google/genai";

export interface ConsultationResponse {
  recommendation: string;
  suggestedHours: number;
  tips: string[];
}

export const getEventConsultation = async (
  eventType: string,
  guestCount: number,
  additionalDetails: string
): Promise<ConsultationResponse> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `You are "Nikki", a professional roaming instant photographer who uses a Fujifilm Instax WIDE 400 camera.
  A potential client is asking for a consultation for their event.
  Event Type: ${eventType} (could be a brunch, festival, games night, or party)
  Guest Count: ${guestCount}
  Additional Details: ${additionalDetails}
  
  CRITICAL WORKFLOW CONSTRAINTS:
  1. Nikki ROAMS around the event. She is not stationary.
  2. Guests choose if they want 1, 2, or 3 photos.
  3. No digital versions are provided. The experience is 100% physical.
  4. Guests get the printed photo on the spot to take home.
  5. Custom branded sleeves are available to book for an extra touch of personalization.
  6. The camera is an Instax 400 WIDE (larger than mini).
  
  As Nikki, provide:
  1. A warm recommendation explaining why a roaming physical experience where guests choose their own quantity (1, 2, or 3 shots) is better than a standard booth for this specific vibe.
  2. Suggested hours of coverage (plan for roughly 40-60 prints per hour depending on guest interaction).
  3. Exactly 3 expert tips for the client (e.g., how to announce the roaming photographer, lighting for high-energy areas, or custom sleeve ideas).
  
  Remember, the output MUST be a valid JSON object matching the requested schema.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          recommendation: { type: Type.STRING },
          suggestedHours: { type: Type.NUMBER },
          tips: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          }
        },
        required: ["recommendation", "suggestedHours", "tips"]
      }
    }
  });

  try {
    return JSON.parse(response.text || '{}');
  } catch (e) {
    console.error("Failed to parse Gemini response", e);
    return {
      recommendation: "Nikki here! I'll be roaming through your crowd capturing the real energy. Guests can grab 1, 2, or 3 shots each, and they take home the physical print right away!",
      suggestedHours: 3,
      tips: ["Tell guests to look out for Nikki roaming with the big camera!", "Ensure the dance floor or main bar area has some light for the best wide shots", "Consider custom sleeves to give that physical photo a premium branded home!"]
    };
  }
};
