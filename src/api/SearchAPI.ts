import type { Annexure } from "../types/Annexures";
import type { Chapter, Section } from "../types/Main";
import type { Schedule } from "../types/Schedules";
import type { UnitedObject } from "../types/Search";
import { getAnnexures } from "./AnnexureAPI";
import { getAllSections, getChapters } from "./MainAPI";
import { getSchedules } from "./ScheduleAPI";

// function returns an array of titles of all relevant parts of the Constitution for Search.tsx
export async function getSearchAPIData()
{
    // call the API
    const schedules : Schedule[] | null = await getSchedules();
    const sections : Section[] | null = await getAllSections();
    const chapters : Chapter[] | null = await getChapters();
    const annexures : Annexure[] | null = await getAnnexures();

    // if any of the calls, return null, let this function return null as well
    if (!schedules || !sections || !chapters || !annexures)
    {
        console.error("Something went wrong with retrieving API info for Search.tsx");
        return null;
    }

    // put all the results in one object
    const unitedObject: UnitedObject = {
        "schedules": schedules,
        "sections": sections,
        "chapters": chapters,
        "annexures": annexures
    }
    return unitedObject;
}