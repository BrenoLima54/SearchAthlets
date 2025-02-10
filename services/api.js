import axios from "axios";

const API_URL = process.env.EXPO_PUBLIC_API_URL || "https://v1.mma.api-sports.io";
const API_KEY = "2165239fd0477aa6447448dcd51a3aa5"; 

export async function fetchAthletes(search = "") {
  try {
    const response = await axios.get(`${API_URL}/fights`, {
      headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": "https://v1.mma.api-sports.io"
      },
      params: { search },
    });

    console.log("API Response:", response.data);
    return response.data.response || [];
  } catch (error) {
    console.error("Erro na busca de atletas:", error);
    return [];
  }
}
