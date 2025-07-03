import type { Annexure } from "./Annexures";
import type { Chapter, Section } from "./Main";
import type { Schedule } from "./Schedules";

// return object from SearchAPI.ts
export interface UnitedObject
{
    schedules: Schedule[],
    sections: Section[],
    chapters: Chapter[],
    annexures: Annexure[]
}

// a result for the All selection in Search.tsx
export interface UnitedResult
{
    navLink: string,
    title: string
}