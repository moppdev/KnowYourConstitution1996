
// Types for return objects related to the Main controller of the Constitution API (handles Chapter 1-14 contents)


// Non-derogable right from Chapter 2: Bill of Rights
export interface NonDerogableRight {
    sectionNumber: number;
    sectionTitle: string;
    protectionExtent: string;
}

//  Type for return objects of Constitution preamble content
export interface Preamble {
    title: string;
    preambleContents: string;
}

// Type for return objects of basic chapter information
export interface Chapter {
    chapterID: number;
    chapterTitle: string;
}

// Type for return objects of basic section information within a chapter
export interface Section {
    sectionID: number;
    chapterID: number;
    sectionTitle: string;
    sectionText: string;
}

// Type for return objects of a collection of sections within a specific chapter
export interface SectionsPerChapter {
    sectionID: number;
    sectionTitle: string;
    sectionText: string;
}

// Type for return objects of subsection definition
export interface Subsection {
    subsectionID: string;
    subsectionText: string;
}

// Type for return objects of clause definition
export interface Clause {
    sectionID: number;
    subsectionID: string;
    clauseID: string;
    clauseText: string;
}

// Type for return objects of a complete section with all nested content
export interface FullSection {
    sectionID: number;
    sectionTitle: string;
    sectionText: string;
    subSections: Subsection[];
    clauses: Clause[];
}

// Complete chapter with all sections and nested content
export interface FullChapter {
    chapterID: number;
    chapterTitle: string;
    fullSections: [
        sectionID: number,
        sectionTitle: string,
        sectionText: string,
        subSections: Subsection[],
        clauses: Clause[]
    ];
}