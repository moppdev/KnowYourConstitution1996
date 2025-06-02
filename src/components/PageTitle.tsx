// Use the prop-types npm library to check prop types
import PropTypes from "prop-types";

// Component that returns the h1 title for a page
export default function PageTitle({title})
{
    const titleClasses: string[] = ["text-2xl", "text-center", "md:text-left", "py-10", "md:pl-14 text-3xl"];
    const titleClassString: string = titleClasses.join(" ");

    return (
        <h1 className={titleClassString}>{title}</h1>
    )
}

// Check the propTypes with the prop-types library
PageTitle.PropTypes = {
    title: PropTypes.string.isRequired
}