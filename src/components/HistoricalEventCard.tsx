import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { HistoricalEvent } from "../types/History";

// this component displays a card with a specific historical event as its contents - used for ShortHistory.tsx
export default function HistoricalEventCard({historicalEvent}: {historicalEvent: HistoricalEvent})
{
    const attributionClasses: string[] = ["text-center", "italic", "text-xs"];
    const attributionClassString: string = attributionClasses.join(" ");

    const cardClasses: string[] = ["my-4", "border-(--border-link-button) border-2", "rounded-md", "md:max-w-1/2", 
        "even:justify-self-end-safe", "lg:max-w-55/100", "lg:even:float-right", "lg:odd:float-left", historicalEvent.title === "The Interim Constitution is Adopted" ? "" : "observe" ];
        // the observe class is only added to all cards except the first one with the title "The Interim Constitution is Adopted" to try and keep CLS low
    const cardClassString: string = cardClasses.join(" ");

    return (
        <div className={cardClassString}>
            <div className="aspect-[16/5] relative">
                <img className="" src={historicalEvent.imgInfo.src} alt={historicalEvent.imgInfo.alt} loading="lazy" decoding="async"/>
                <p className={attributionClassString}><FontAwesomeIcon icon={faCopyright} /> {historicalEvent.imgInfo.attribution}</p>
            </div>
            <div className="mx-4 py-4">
                <h2 className="pb-5">{historicalEvent.title} - {historicalEvent.date.toString()}</h2>
                <p className="whitespace-pre-line">{historicalEvent.content}</p>
            </div>
        </div>
    )
}