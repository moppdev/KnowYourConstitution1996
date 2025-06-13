import { useState } from "react";
import type { Factoid } from "../types/DYK";

// This component returns the FAQs as a whole
export default function FAQ()
{
    // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // More readable

    // classes for faq-container
    const containerClasses: string[] = ["mx-5", "my-12", "md:mr-40", "lg:mr-60", "md:ml-12"];
    const containerClassString: string = containerClasses.join(" ");

    // return the FAQs
    return (
        <section id="faq-container" className={containerClassString}>
            <h3 className="text-xl">FAQs</h3>
            <FAQCard title="What is KnowYourConstitution1996?" 
                content={`KnowYourConstitution1996 is an open-source website that provides easy and intuitive access to South Africa's 1996 Constitution. 
                    It's designed for students, educators, developers, and anyone interested in the Constitution.`}/>

            <FAQCard title="Does this site accurately contain all contents of the Constitution?" 
                content={`Yes, it does. The API used on this website sources its contents
                    from the actual Constitution found on the Department of Justice and Constitutional Development's website. If you find something incorrect or out of date, feel
                    free to contribute via the "Contribute" section.`}/>

            <FAQCard title="Are Constitutional Amendments included in the contents?" 
                content={`Yes, but only the names of the Acts, their commencement dates and references are included in table form, 
                Juta's 14th edition Pocket Statutes version of the Constitution was used for this purpose.`}/>

            <FAQCard title="How do I use the search bar?" 
                content={`Type in any keyword, chapter name, or section number to begin searching. You can also use the dropdown to narrow your search to Chapters, Sections, Schedules, or Annexures.`}/>

            <FAQCard title="I don't want to use the search bar, where can I find the contents?" 
                content={`Navigate to the "Contents" link in the navigation menu. You'll find sections labeled Chapters, Schedules, Annexures and Amendments.`}/>
                
            <FAQCard title="Could I use content from this site?" 
                content={`Definitely! As long as you abide by the MIT license. Attribution is appreciated if you build on the site or use the API.`}/>

            <FAQCard title="I'm a developer, is there an API I could use?" 
                content={`Yes! In fact, this website does use an open-source API called ZAConstitution1996! Navigate to the "API" link in the navigation menu to find out how to use it for your own projects!`}/>

            <FAQCard title="How can I contribute?" 
                content={`Go to the "Contribute" link in the navigation menu. There you would be shown links to the website and API source code, each link would also contain contribution guidelines.`}/>

        </section>
    )
}

// This component returns every FAQ card
// Used factoid type since the type needed is the same as Factoid
function FAQCard({title, content}: Factoid)
{
    // state variable to check when card is clicked
    const [clicked, setClicked] = useState(false);

    // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // More readable
    // classes for each faq card
    const faqCardClasses: string[] = ["rounded-md", "border-1", "py-3", "mt-4", "mb-5"];
    const faqCardClassString: string = faqCardClasses.join(" ");

    // classes for each faq card
    const faqContentClasses: string[] = ["drop-card ml-4 mt-2 mr-2", clicked ? "show-card": ""];
    const faqContentClassString: string = faqContentClasses.join(" ");

    // function that handles the onclick event for the card
    function onFAQClick()
    {
        // set clicked to the opposite of its current value
        setClicked(!clicked);
    }

    // return the card
    return (
        <div className={faqCardClassString} onClick={onFAQClick}>
            <h4 className="ml-4 font-bold">
                {title}
            </h4>
            <div className={faqContentClassString}>
                {content}
            </div>
        </div>
    )
}