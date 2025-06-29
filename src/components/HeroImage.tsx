// This component returns a hero image for all pages except those that handle api DOCS
export default function HeroImage({imgInfo, overlaidText}: {imgInfo: {src: string, alt: string}, overlaidText: string})
{
    // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // More readable

    // Classes for the hero image
    const heroClasses: string[] = [ "md:max-h-130", "overflow-hidden", "relative"];
    const heroClassString = heroClasses.join(" "); 

    // Classes for the text overlaid on the hero image
    const textClasses: string[] = ["text-(--background-color)", "text-center", "max-[445px]:text-[0.7em]", "text-xs", "sm:text-s", "md:text-xl", "mx-7", "md:mx-10"];
    const textClassString = textClasses.join(" "); 

    // Classes for the image itself
    const imgClasses: string[] = ["object-cover",  "lg:object-fill", "xl:object-scale-down", "2xl:object-fill", "2xl:object-bottom-right", "min-[1700px]:object-[55%_255%]", "md:object-right"];
    const imgClassString = imgClasses.join(" "); 

    // Classes for the overlay div that contains the text
    const overlayClasses: string[] = ["absolute", "inset-0", "bg-black/70", "flex", "justify-center", "items-center"];
    const overlayClassString = overlayClasses.join(" "); 

    // return the component
    return (
        <div id="hero" className={heroClassString}>
            <img src={imgInfo.src} alt={imgInfo.alt} className={imgClassString}/>
            <div className={overlayClassString}>
                {overlaidText != "" && <p className={textClassString}>{overlaidText}</p>}
            </div>
        </div>
    )
}