// this file handles everything related to the Main section (Chapter 1 - 14) of the Constitution

import axios from "axios";
import type { Chapter, FullChapter, NonDerogableRight, Preamble, SectionsPerChapter } from "../types/Main";

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
    console.error("Error fetching chapters:", error);
    return null;
  }
}

// Gets a specific chapter's content
export async function getChapterContents(id: number): Promise<FullChapter | null>
{
    try {
      const response = await apiBase.get(`/chapter/${id}/sections/full`);
      return response.data;
    } catch (error) {
      console.error("Error fetching chapters:", error);
      return null;
    }
}

// Gets all sections per chapter (only returns id, title (and text - not important))
export async function getSectionsByChapter(id: number): Promise<SectionsPerChapter[] | null>
{
  try {
    const response = await apiBase.get(`/chapter/${id}/sections`);
    return response.data;
  } catch (error) {
    console.error("Error fetching chapters:", error);
    return null;
  }
}

// Gets the contents of the NonDerogableRights table for Section 57c in the Bill of Rights
export async function getNonDerogableRights(): Promise<NonDerogableRight[] | null>
{
  try {
    const response = await apiBase.get(`/ndr`);
    return response.data;
  } catch (error) {
    console.error("Error fetching chapters:", error);
    return null;
  }
}