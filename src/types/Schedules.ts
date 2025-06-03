// Types for return objects related to the Schedules controller of the API

// Type for a list of the Schedules declared in ContentsLanding - NOT FROM API
export interface Schedule
{
    title: string,
    scheduleNumber: string
}

// Type for the return object of the contents of Schedule 1
export interface ScheduleOne
{
    sectionID: number,
    sectionText: string
}

// Type for the return object of the contents of Schedule 1A
export interface ScheduleOneA
{
    province: string,
    mapCSV: string
}

// Type for the return object of the contents of Schedule 2
export interface ScheduleTwo
{
    scheduleTwo_Oaths: [
      {
        sectionID: number,
        sectionTitle: string,
        sectionText: string
      }
    ],
    subsections: [
      [
        {
          sectionID: number,
          subsectionID: string,
          subsectionText: string
        }
      ]
    ]
}

// Type for the return object of the contents of Schedule 3
export interface ScheduleThree
{
    parts: [
      {
        partID: string,
        partName: string
      }
    ],
    electionProcedures: [
      {
        sectionID: number,
        sectionThreePart: string,
        sectionTitle: string,
        sectionText: string
      }
    ],
    subsections: [
      {
        sectionID: number,
        sectionThreePart: string,
        subsectionID: string,
        sectionText: string
      }
    ]
}

// Type for the return object of the contents of Schedule 4 and the contents of Schedule 5
export interface ScheduleFourFive
{
    partID: string,
    partCSV: string
}

// Type for the return object of the contents of Schedule 6
export interface ScheduleSix
{
    transitionalArrangements: [
      {
        sectionID: number,
        sectionTitle: string,
        sectionText: string
      }
    ],
    subsections: [
      {
        sectionID: number,
        subsectionID: string,
        subsectionText: string
      }
    ],
    clauses: [
      {
        sectionID: number,
        subsectionID: string,
        clauseID: string,
        clauseText: string
      }
    ]
}

// Type for the return object of the contents of Schedule 7
export interface ScheduleSeven
{
    actNum: string,
    title: string
}