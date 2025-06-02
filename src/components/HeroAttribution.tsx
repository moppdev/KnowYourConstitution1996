// Use the prop-types npm library to check prop types
import PropTypes from "prop-types";

// Other imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

/// This compoment adds the attribution of the hero image used on certain pages
export default function HeroAttribution({description, attribution})
{
    // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // More readable

    const attrClasses: string[] = ["text-[0.75em]", "md:text-l", "dyk-paragraphs", "italic", "text-center"];
    const attrClassString = attrClasses.join(" "); 

    // return the component
    return (
        <p id="attribution" className={attrClassString}>
            {description} - <FontAwesomeIcon icon={faCopyright} /> {attribution}
        </p>
    )
}

// Check the propTypes with the prop-types library
HeroAttribution.propTypes = {
    description: PropTypes.string.isRequired,
    attribution: PropTypes.string.isRequired
}