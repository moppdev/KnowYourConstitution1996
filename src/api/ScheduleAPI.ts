// this file handles everything related to the Schedules of the Constitution

import axios from "axios";

// Declare a new base Axios instance
const apiBase = axios.create({
    baseURL: "https://constitution1996.runasp.net/api/v1",
    timeout: 5000
});

// This function gets all schedules from the API
export default async function getSchedules()
{
    try {
        const response = await apiBase.get("/schedules");
        return response.data;
    } catch (error) {
        console.error(`Error getting schedules: ${error}`);
        return null;
    }
}