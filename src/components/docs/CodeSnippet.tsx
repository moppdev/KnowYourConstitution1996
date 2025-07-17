import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";

// this compoment display code snippets using Shiki library
export default function CodeSnippet({lines, lang, type}: {lines: string, lang: string, type?: string})
{
    const [code, setCode] = useState("");

    // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // More readable
    const snippetClasses: string[] = ["mx-5", "mb-6", "md:ml-14 lg:mr-65", "overflow-x-auto whitespace-pre"];
    const snippetClassString: string = snippetClasses.join(" ");

    useEffect(() => {
        async function shikiTransform()
        {
            // use Shiki's codeToHtml function to convert the code to a code snippet
            const html = await codeToHtml(lines, {
                lang: lang,
                theme: 'kanagawa-wave',
                transformers: [
                    {
                        pre(node)
                        {
                            // add classes to the code block itself
                            this.addClassToHast(node, `p-4 rounded-md text-xs max-[640px]:w-fit ${type === "code" ? "h-[270px]" : ""}`);
                        }
                    }
                ]
            })

            setCode(html)
        }

        shikiTransform();
    }, [lines, lang, type]);

    return (
        <div className={snippetClassString} id={`snippet-${lang}`} dangerouslySetInnerHTML={{ __html: code }} />
    )
}