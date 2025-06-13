// this file handles everything related to the Schedules of the Constitution

import axios from "axios";
import type { Schedule, ScheduleFourFive, ScheduleOne, ScheduleOneA, ScheduleSeven, ScheduleSix, ScheduleThree, ScheduleTwo } from "../types/Schedules";

// Declare a new base Axios instance
const apiBase = axios.create({
    baseURL: "https://constitution1996.runasp.net/api/v1/schedules",
    timeout: 6000
});

// This function gets all schedules from the API
export async function getSchedules(): Promise<Schedule[] | null>
{
    try {
        const response = await apiBase.get("");
        return response.data;
    } catch (error) {
        console.error(`Error getting schedules: ${error}`);
        return null;
    }
}

// This function gets a specific schedule by number from the API
export async function getScheduleByNumber(scheduleNumber: "one" | "one/a" | "two" | "three" | "four" | "five" | "six" | "seven"): Promise<ScheduleOne[] | ScheduleTwo | ScheduleOneA[] | 
ScheduleThree | ScheduleFourFive[] | ScheduleSix | ScheduleSeven[] | null>
{
    try {
        const response = await apiBase.get(`/${scheduleNumber}`);
        return response.data;
    } catch (error) {
        console.error(`Error getting schedule ${scheduleNumber}: ${error}`);
        return null;
    }
}