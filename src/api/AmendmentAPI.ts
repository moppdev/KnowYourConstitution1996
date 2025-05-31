// this file handles everything related to the Amendments to the Constitution
// NB: Only the amendment name, the date it was effected and the reference is returned and 
// not the actual contents of every amendment

import axios from "axios";

// Declare a new base Axios instance
const apiBase = axios.create({
    baseURL: "https://constitution1996.runasp.net/api/v1",
    timeout: 1000
});

// This function gets all amendments from the API
export default async function getAmendments()
{
    try {
        const response = await apiBase.get("/amendments");
        return response.data;
    } catch (error) {
        console.error(`Error getting amendments: ${error}`);
        return null;
    }
}