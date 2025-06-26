import { useEffect, useState } from "react";
import CodeSnippet from "./CodeSnippet";

// this component will show how to call a certain route endpoint in the API in multiple languages
export default function DocsAPICallTabs({link}: {link: string})
{
    // languages to be included: JS/TS, Python, C#, Go, Ruby, PHP, cURL
    // Shiki library is used here
    // "text" is used for cURL and fallback
    const [lang, setLang] = useState<"javascript" | "csharp" | "python" | "go" | "ruby" | "php" | "text">("text");

    const fullLink: string = `https://constitution1996.runasp.net${link}`;
    const [lines, setLines] = useState(`curl ${fullLink}`);

    // Get the TailwindCSS classes into a string array and join them as a space-separated string (use if two or more classes are needed)
    // More readable
    const divClasses: string[] = ["mx-5", "mb-6", "md:ml-14", "lg:mr-65", "rounded-md", "bg-[#ebe5dd]", " w-fit", "flex p-2 gap-5 pb-3", "border-2 border-(--border-link-button)"];
    const divClassString: string = divClasses.join(" ");

    useEffect(() => {
            // depending on language, change the lines (code)
    switch (lang)
    {
        case "javascript":
            setLines(`fetch('${fullLink}')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));`)
        break;
        case "csharp":
            setLines(`using System;
using System.Net.Http;
using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        using var client = new HttpClient();
        var response = await client.GetAsync("${fullLink}");
        var responseBody = await response.Content.ReadAsStringAsync();

        Console.WriteLine(responseBody);
    }
}`)
        break;
        case "python":
            setLines(`import requests

response = requests.get("${fullLink}")
print(response.json())`)
        break;
        case "go":
            setLines(`package main

import (
    "fmt"
    "io/ioutil"
    "net/http"
)

func main() {
    resp, _ := http.Get("${fullLink}")
    defer resp.Body.Close()

    body, _ := ioutil.ReadAll(resp.Body)
    fmt.Println(string(body))
}`)
        break;
        case "ruby":
            setLines(`require 'net/http'
require 'uri'

uri = URI.parse("${fullLink}")
response = Net::HTTP.get_response(uri)

puts response.body`)
        break;
        case "php":
            setLines(`<?php
    $url = "${fullLink}";
    $response = file_get_contents($url);

    $data = json_decode($response, true);
    print_r($data);
?>`)
        break;
        case "text":
            setLines(`curl ${fullLink}`);
        break;
    }
    }, [lang, link, fullLink])

    // on click event that changes the language of the snippet
    const changeLang = (event) => {
        setLang(event?.target.value)
    };

    return (
        <>
            <div id="route-call-snippet-selector" className={divClassString}>
                    <label htmlFor="selector">Select your language:</label>
                    <select name="selector" onChange={changeLang}>
                        <option value="text" selected className="text-(--text)">cURL</option>
                        <option value="javascript" className="text-(--text)">JavaScript</option>
                        <option value="csharp" className="text-(--text)">C#</option>
                        <option value="python" className="text-(--text)">Python</option>
                        <option value="go" className="text-(--text)">Go</option>
                        <option value="ruby" className="text-(--text)">Ruby</option>
                        <option value="php" className="text-(--text)">PHP</option>
                    </select>
            </div>
            <CodeSnippet lang={lang} lines={lines} />
        </>

    )
}