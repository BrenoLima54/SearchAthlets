import axios from "axios";

const API_URL = "https://v1.mma.api-sports.io";
const API_KEY = "2165239fd0477aa6447448dcd51a3aa5";  

export async function fetchAthletes(search = "") {
  try {
    const response = await axios.get(`${API_URL}/fighters`, {
      headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": "v1.mma.api-sports.io"
      },
      params: search ? { search } : {},
    });

    console.log("API Response:", response.data);
    return response.data.response || [];
  } catch (error) {
    console.error("Erro na busca de lutadores:", error.response?.data || error.message);
    return [];
  }
}
