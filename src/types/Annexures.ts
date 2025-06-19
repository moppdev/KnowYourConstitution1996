// Types for return objects related to the Amendments controller of the API

// Type for the return object for Amendments
export interface Annexure
{
    annexureID: string,
    annexureTitle: string
}

// Type for the return object for full annexures returned from the API
export interface FullAnnexure
{
  annexureID: string,
  annexureTitle: string,
  annexureSections: AnnexureSections[],
  annexureSubsections: AnnexureSubsections[]
}

export interface AnnexureSubsections
{
    sectionID: number,
    subsectionID: string,
    sectionText: string
}

export interface AnnexureSections
{
    annexureID: string,
    sectionID: number,
    sectionTitle: string,
    sectionText: string
}