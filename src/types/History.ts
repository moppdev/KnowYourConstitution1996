import type { ImgInfo } from "./ImgInfo";
import QueueImage from "../assets/voting.jpg";
import SigningImage from "../assets/mandela-signing-document.jpg"
import ConstitutionImage from "../assets/constitution-feature.jpg"
import AcceptImage from "../assets/ca-accept.png"
import CODESAImage from "../assets/codesa.png"
import SpeakImage from "../assets/ca.jpg";
import DraftImage from "../assets/draft.png"
import PublicDraftImage from "../assets/public.png"
import ProtestImage from "../assets/protest.png"

// Type for every card on Short History's contents
export interface HistoricalEvent
{
    imgInfo: ImgInfo,
    title: string,
    date: string | Date,
    content: string
}

// Content to be shown on ShortHistory
export const constitutionHistory: HistoricalEvent[] = [
  {
    imgInfo: {
      src: CODESAImage,
      alt: "FW De Klerk and Nelson Mandela shaking hands at CODESA",
      attribution: "South African History Online"
    },
    title: "The Interim Constitution is Adopted",
    date: "18 November 1993",
    content: `The Interim Constitution was passed by the outgoing apartheid-era Parliament led by the National Party, under FW De Klerk, as a negotiated, transitional measure.\n
    It was the outcome of years of intense negotiation between the African National Congress, National Party, Democratic Party, 
    and others during the Convention for a Democratic South Africa (CODESA) and Multi-Party Negotiating Process (MPNP).\n
    It established a Government of National Unity after future elections, enshrined fundamental rights, and tasked a newly elected Parliament with drafting a final constitution within two years. This constitution laid the foundations for the 1996 Constitution.`
  },
  {
    imgInfo: {
      src: QueueImage,
      alt: "Voters in 1994 queuing to vote in the first all-race democratic elections",
      attribution: "Denis Farrell/Associated Press"
    },
    title: "First Democratic Elections",
    date: "27 April 1994",
    content: `South Africa held its first ever non-racial elections. Millions voted in long lines, many for the first time.\n
    The ANC won 62.65% of the vote, and Nelson Mandela became president-elect. Parliament was reconstituted as the Constitutional Assembly, tasked with drafting the final Constitution according to the 34 agreed constitutional principles in the Interim Constitution.`
  },
  {
    imgInfo: {
      src: SpeakImage,
      alt: "Member of the Constitutional Assembly speaking",
      attribution: "Subash Jeram/Constitutional Assembly"
    },
    title: "Constitutional Assembly Begins Drafting",
    date: "May 1994",
    content: `Chaired by Cyril Ramaphosa (ANC) and Leon Wessels (NP), the Constitutional Assembly brought together elected representatives from multiple parties, including the African National Congress (ANC), National Party (NP), Inkatha Freedom Party (IFP), Democratic Party (DP), Pan Africanist Congress (PAC), and others.`
  },
  {
    imgInfo: {
      src: PublicDraftImage,
      alt: "Poster of the public participation campaign",
      attribution: "Constitutional Assembly"
    },
    title: "National Public Participation Campaign",
    date: "1995-1996",
    content: `To ensure the Constitution reflected the will of the people, the Constitutional Assembly launched one of the most ambitious civic education and public participation campaigns in history. It launched on 15 January 1995, with TV, radio, newspaper and billboard ads carrying slogans like “You've made your mark, now have your say” and “It's your right to decide your constitutional rights.”\n
    It aimed to inform, educate, stimulate interest, and create a forum for participation, particularly targeting disadvantaged and rural communities.\n\nDespite challenges, such as late staff appointments, tight budgets, high illiteracy, and an overloaded post-election agenda, the programme reached roughly 65% of adult South Africans in its first three months (January - April 1995).\n
    The Assembly received nearly 1.7 million submissions, mostly petitions, plus some 11,000 detailed submissions on issues ranging from abortion and animal rights to land reform and the role of religion, ensuring public views could not be ignored.`
  },
  {
    imgInfo: {
      src: ProtestImage,
      alt: "Zulu protester holding a placard during a protest",
      attribution: "Paul Weinberg / South Photos / Africa Media Online"
    },
    title: "Political Tensions and Party Walkouts",
    date: "1995-1996",
    content: `Despite progress, major disagreements emerged.\n\n The IFP boycotted CODESA and initially refused to participate fully, demanding greater provincial autonomy and recognition of traditional Zulu leadership. \n\nThe National Party pushed for stronger minority protections and provincial autonomy, and the Democratic Party advocated for limited government and non-racialism. 
    \nThere were threats of walkouts, but compromise prevailed after intense negotiations.`
  },
  {
    imgInfo: {
      src: DraftImage,
      alt: "Media campaign poster of the Constitutional Assembly",
      attribution: "Constitutional Assembly"
    },
    title: "First Full Draft Released",
    date: "22 November 1995",
    content: `The Constitutional Assembly published a full draft Constitution for public comment. It enshrined human rights, multi-party democracy, and the rule of law. \n\n While widely praised, the NP and IFP expressed concern that the ANC was pushing a centralist vision. The DP supported many rights-based provisions but warned about vague language on property and executive powers.`
  },
  {
    imgInfo: {
      src: AcceptImage,
      alt: "Celebrations as the final Constitution is passed by the Constitutional Assembly",
      attribution: "Subash Jeram/Constitutional Assembly"
    },
    title: "Final Constitution Passed by Parliament",
    date: "8 May 1996/11 October 1996",
    content: `After revisions and negotiations, the Assembly approved the first draft with a whopping 86% support from 490 delegates.\n\n The ANC and DP supported it despite some reservations. The NP did support the draft but withdrew from the Government of National Unity citing dissatisfaction with the final Constitution and the ANC's governance. The IFP boycotted the vote.
    \nBut the newly established Constitutional Court, to ensure it complied with the 34 constitutional principles in the Interim Constitution, refused to certify the first draft, due to concerns about: the right of employees to engage in collective bargaining, the independence of the Public Protector and Auditor General, constitutional review of ordinary statutes, and the entrenchment of rights and civil liberties.
    \nOn 11 October 1996, the Constitutional Assembly passed a second draft correcting the shortcomings of the first draft. The second draft was submitted and unanimously certified on 4 December 1996.`
  },
  {
    imgInfo: {
      src: SigningImage,
      alt: "Nelson Mandela signs the 1996 Constitution into law with Cyril Ramaphosa in the background",
      attribution: "Adil Bradlow/AFP"
    },
    title: "Mandela Signs Constitution Into Law",
    date: "10 December 1996",
    content: `President Nelson Mandela signed the final Constitution in Sharpeville on International Human Rights Day, 10 December 1996.\n 
    The location honored the victims of the 1960 massacre, and the date symbolized a commitment to human dignity, equality, and justice and the final victory over Apartheid. During the signing ceremony, Mandela said:\n
    "Today we cross a critical threshold. Let us now, drawing strength from the unity which we have forged, together grasp the opportunities and realise the vision enshrined in this constitution. \n\nLet us give practical recognition to the injustices of the past, by building a future based on equality and social justice.
    \nLet us nurture our national unity by recognising, with respect and joy, the languages, cultures and religions of South Africa in all their diversity.
    \nLet tolerance for one another's views create the peaceful conditions which give space for the best in all of us to find expression and to flourish.
    \nAbove all, let us work together in striving to banish homeless-ness; illiteracy; hunger and disease. In all sectors of our society - workers and employers; government and civil society; people of all religions; teachers and students; in our cities, towns and rural areas, from north to south and east to west - let us join hands for peace and prosperity.
    \nIn so doing we will redeem the faith which fired those whose blood drenched the soil of Sharpeville and elsewhere in our country and beyond. Today we humbly pay tribute to them in a special way. This is a monument to their heroism. 
    \nToday, together as South Africans from all walks of life and from virtually every school of political thought, we reclaim the unity that the Vereeniging of nine decades ago sought to deny."`
  },
  {
    imgInfo: {
        "src": ConstitutionImage,
        "alt": "The hard-copy version of the Constitution laid on a table",
        "attribution": "Corruption Watch"
    },
    title: "Constitution Comes Into Force",
    date: "4 February 1997",
    content: `The Constitution officially became law, replacing the Interim Constitution.\n
    It established Chapter 9 institutions, three spheres of government, and one of the most progressive Bills of Rights in the world. \n
    Despite several populist attempts over the years to undermine or repeal it, the Constitution still stands today as the supreme law of South Africa.`
  }
];
