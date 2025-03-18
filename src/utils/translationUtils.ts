import axios from "axios";

export const translateText = async (text: string) => {
  try {
    const response = await axios.post(
      "https://libretranslate.de/translate",
      {
        q: text,
        source: "en",
        target: "uz",
        format: "text",
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    return response.data.translatedText;
  } catch (error) {
    console.error("Translation Error:", error);
  }
};
