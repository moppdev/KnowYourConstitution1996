// Use the prop-types npm library to check prop types
import PropTypes from "prop-types";

// This component returns a hero image for all pages except those that handle api DOCS
export default function HeroImage({imgInfo, overlaidText})
{
    // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // More readable

    const heroClasses: string[] = [ "md:max-h-130", "overflow-hidden", "relative"];
    const heroClassString = heroClasses.join(" "); 

    const textClasses: string[] = ["text-(--background-color)", "text-center", "max-[445px]:text-[0.545em]", "text-xs", "sm:text-s", "md:text-xl", "mx-7", "md:mx-10"];
    const textClassString = textClasses.join(" "); 

    const imgClasses: string[] = ["object-cover",  "lg:object-fill", "xl:object-scale-down", "2xl:object-fill", "2xl:object-bottom-right", "min-[1700px]:object-[55%_255%]", "md:object-right"];
    const imgClassString = imgClasses.join(" "); 

    const overlayClasses: string[] = ["absolute", "inset-0", "bg-black/70", "flex", "justify-center", "items-center"];
    const overlayClassString = overlayClasses.join(" "); 

    return (
        <div id="hero" className={heroClassString}>
            <img src={imgInfo.src} alt={imgInfo.alt} className={imgClassString}/>
            <div className={overlayClassString}>
                {overlaidText != "" && <p className={textClassString}>{overlaidText}</p>}
            </div>
        </div>
    )
}

// Check the propTypes with the prop-types library
HeroImage.propTypes = {
    overlaidText: PropTypes.string.isRequired,
    imgInfo: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
    })
}
