// this file handles everything related to the Annexures of the Constitution
import axios from "axios";
import type { Annexure } from "../types/Annexures";

// Declare a new base Axios instance
const apiBase = axios.create({
    baseURL: "https://constitution1996.runasp.net/api/v1/annexures",
    timeout: 5000
});

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