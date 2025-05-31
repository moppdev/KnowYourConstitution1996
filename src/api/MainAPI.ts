import axios from "axios";
import type { Preamble } from "../types/Main";

// Declare a new base Axios instance
const apiBase = axios.create({
    baseURL: "https://constitution1996.runasp.net/api/v1/main",
    timeout: 5000
});

// Gets the Preamble
export async function getPreamble(): Promise<Preamble | null>
{
  try {
    const response = await apiBase.get("/preamble");
    return response.data;
  } catch (error) {
    console.error("Error fetching preamble:", error);
    return null;
  }
}