export default function DidYouKnow() 
{
    const dykClasses: string[] = ["bg-(--background-color)", "rounded-md", "p-4", "mb-4", "md:mr-40", "lg:mr-60", "md:ml-12", "border-(--border-link-button)", "border-2"];
    const dykClassString: string = dykClasses.join(" ");

    return (
        <div className={dykClassString}>
            <h2 className="text-xl underline italic">Did You Know?</h2>
        </div>
    )
}