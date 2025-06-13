// this file handles everything related to the Annexures of the Constitution
import axios from "axios";
import type { Annexure, FullAnnexure } from "../types/Annexures";

// Declare a new base Axios instance
const apiBase = axios.create({
    baseURL: "https://constitution1996.runasp.net/api/v1/annexures",
    timeout: 6000
});

// Get a list of all annexures from the API
export async function getAnnexures(): Promise<Annexure[] | null>
{
    try {
        const response = await apiBase.get("");
        return response.data;
    } catch (error) {
        console.error(`Error in getting annexures: ${error}`)
        return null;
    }
}

// Get a specific annexure by letter from the API
export async function getAnnexureByLetter(letter: "A" | "B" | "C" | "D"): Promise<FullAnnexure | null>
{
    try {
        const response = await apiBase.get(`/${letter}/full`);
        return response.data;
    } catch (error) {
        console.error(`Error in getting annexure ${letter}: ${error}`);
        return null;
    }
}