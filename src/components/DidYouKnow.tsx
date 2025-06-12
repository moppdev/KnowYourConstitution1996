import { factoids, type Factoid } from "../types/DYK";

// This component returns the DidYouKnow card for Home
export default function DidYouKnow() 
{
    // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    const dykClasses: string[] = ["bg-(--background-color)", "rounded-md", "p-4", "mx-5", "mb-4", "md:mr-40", "lg:mr-60", "md:ml-12", "border-(--border-link-button)", "border-2"];
    const dykClassString: string = dykClasses.join(" ");

    const titleClasses: string[] = ["my-3", "text-left", "ml-1"];
    const titleClassString: string = titleClasses.join(" ");

    const headingClasses: string[] = ["ml-2", "text-xl", "underline italic"];
    const headingClassString: string = headingClasses.join(" ");

    // Get the list of factoids to use from DYK.ts, pick a random factoid to use every time the card is shown
    const factoidArray: Factoid[] = factoids;
    const factoid: Factoid = factoidArray[Math.floor(Math.random() * factoidArray.length)]

    // return the component
    return (
        <div className={dykClassString}>
            <h2 className={headingClassString}>Did You Know?</h2>

            <h3 className={titleClassString}>{factoid.title}</h3>

            <p className="ml-2">{factoid.content}</p>
        </div>
    )
}