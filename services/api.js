import axios from "axios";

// eslint-disable-next-line no-undef
const dotenv = process.env;
export async function fetchAthletes(search = "") {
  try {
    const response = await axios.get(
      `${dotenv.EXPO_PUBLIC_API_URL}/fighters?search=${search}`,
      {
        headers: {
          "x-rapidapi-key": dotenv.EXPO_PUBLIC_API_KEY,
          "x-rapidapi-host": "v1.mma.api-sports.io",
        },
        params: search ? { search } : {},
      }
    );

    console.log("API Response:", response.data);
    return response.data.response || [];
  } catch (error) {
    console.error(
      "Erro na busca de lutadores:",
      error.response?.data || error.message
    );
    return [];
  }
}
