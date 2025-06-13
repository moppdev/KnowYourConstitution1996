// this file handles everything related to the Main section (Chapter 1 - 14) of the Constitution

import axios from "axios";
import type { Chapter, Preamble } from "../types/Main";

// Declare a new base Axios instance
const apiBase = axios.create({
    baseURL: "https://constitution1996.runasp.net/api/v1/main",
    timeout: 6000
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

// Gets a list of the Chapters
export async function getChapters(): Promise<Chapter[] | null>
{
  try {
    const response = await apiBase.get("/chapters");
    return response.data;
  } catch (error) {
    console.error("Error fetching chapters:", error)
    return null;
  }
}