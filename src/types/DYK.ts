// Type for each factoid to be shown in DidYouKnow
export interface Factoid
{
    title: string,
    content: string
}

// Factoids to display in the Did You Know section on Home.
// Generated with the help of ChatGPT
export const factoids: Factoid[] = [
    {
        title: "🔍 Rights You Probably Didn't Know You Have",
        content: "South Africa's Constitution doesn't just protect the right to free speech or vote, it also guarantees rights like access to housing, health care, food, water, and social security. These are called socio-economic rights, and you can take the government to court if it fails to realize them."
    },
    {
        title: "🧒🏾👶🏼 Kids Have Their Own Bill of Rights",
        content: "Section 28 is entirely devoted to children's rights, including the right to a name, nationality, shelter, basic nutrition, protection from abuse, and detention only as a last resort."
    },
    {
        title: "⚖️ The Constitution Can Overrule Parliament",
        content: "Even if Parliament passes a law with a majority vote, the Constitutional Court can strike it down if it violates the Constitution. This makes South Africa a constitutional democracy, not just a majoritarian one."
    },
    {
        title: "🏳️‍🌈 The First in the World to Protect LGBTQ+ Rights",
        content: "South Africa was the first country in the world to explicitly protect sexual orientation in its Bill of Rights, paving the way for same-sex marriage and anti-discrimination laws years ahead of others in 2006."
    },
    {
        title: "🛡️ You're Protected from the State AND Society",
        content: "The Constitution requires the government to protect you not just from state abuse, but also from violence by others, including in cases of gender-based violence, hate crimes, and xenophobia."
    },
    {
        title: "📱🧬 The Right to Privacy Covers Your Body, Your Data, and Your Devices",
        content: "Section 14 protects your right to privacy, which courts interpret to include your phone, your home, your communications, your DNA, and your online activity. Surveillance without court approval is unconstitutional."
    },
    {
        title: "🏛️ Institutions That Guard Democracy, Literally",
        content: "The Constitution created Chapter 9 Institutions like the Public Protector, IEC, and SAHRC. These are independent from government and meant to support democracy, human rights, and clean governance."
    },
    {
        title: "🤝 Traditional Law Is Protected, But Can't Override Constitutional Rights",
        content: "The Constitution respects customary law and traditional leaders, but only when it doesn't violate rights like gender equality or the rights of children. Tradition has a place, but not above justice."
    },
    {
        title: "⚠️ Not Even a State of Emergency Can Strip All Rights",
        content: "Even during war or national disasters, certain rights, like dignity, life, and freedom from torture, can't be taken away. Emergency powers are allowed, but with strict limits."
    },
    {
        title: "🧾 You Can Challenge Unfair Government Action, And Win",
        content: "Section 33 guarantees the right to just administrative action. That means government decisions must be lawful, fair, and give you a chance to respond. If they don't, you can take them to court."
    },
    {
        title: "🎨 Culture and Language Aren't Just Tolerated, They're Actively Protected",
        content: "You have the right to belong to a cultural, religious, or linguistic community, and to practice your traditions, as long as they don't infringe on anyone else's rights."
    },
    {
        title: "🧠 Freedom of Belief Includes Religion, Atheism, or Neither",
        content: "Freedom of conscience means you can believe in any faith, or none at all. No one can force you to participate in religious practices, even in public schools or government spaces."
    },
    {
        title: "💬 Freedom of Speech Is Strong, But Not Unlimited",
        content: "You can say what you want, protest, or challenge authority, but hate speech, incitement to violence, and war propaganda are explicitly banned under Section 16."
    },
    {
        title: "🏞️ You Have the Right to a Healthy Environment",
        content: "Section 24 gives everyone the right to an environment that is not harmful to their health or well-being. This includes clean air, water, and protection from pollution and harmful development."
    },
    {
        title: "🚸 You Can Live and Move Anywhere in the Country",
        content: "You have the right to live anywhere in South Africa, to leave the country, and to return. Internal passports and forced removals, like during Apartheid, are now unconstitutional."
    },
    {
        title: "🏚️ Eviction Without a Court Order Is Illegal",
        content: "You cannot be evicted from your home unless a court has ruled it just and fair, and the court must consider your situation, including the availability of alternative housing."
    },
    {
        title: "🫂 You Can't Be Discriminated Against Because of Who You Are",
        content: "The Constitution outlaws unfair discrimination based on race, gender, sex, age, religion, disability, sexual orientation, language, and more, whether it comes from the state or a private individual."
    },
    {
        title: "📚 You Have the Right to Learn in Your Language, Within Reason",
        content: "Section 29 says you have a right to basic education and, where reasonably practical, to receive it in the official language of your choice, which is why language policies in schools often go to court."
    },
    {
        title: "🌾 Land Reform Must Be Just, But Can't Be Arbitrary",
        content: "Section 25 protects private property, but also mandates land reform. The state must redistribute land, improve access to it, and address past injustices, while ensuring compensation is fair."
    },
    {
        title: "🔓 No One Can Just Take Your Property, Even the State",
        content: "Section 25 says property may only be expropriated for a public purpose or in the public interest, and only with compensation. It's a balance between ownership and transformation, not a free-for-all."
    },
    {
        title: "🔐 Your Body Is Yours, No One Can Experiment on You Without Consent",
        content: "Section 12 says you have the right to bodily integrity, including freedom from forced medical treatment or scientific experiments. This right is a direct rejection of past abuses during apartheid and in global history."
    },
    {
        title: "📜 You Can Use the Constitution in Court Without a Lawyer",
        content: "Section 38 allows anyone to approach a court to enforce a right, even if they're not directly affected. Public interest groups and ordinary citizens can go to court on behalf of others, making it one of the most accessible constitutions in the world."
    },
    {
        title: "🧭 The Constitution Starts with Its Soul, Chapter 1",
        content: "The very first chapter lays out the founding values of South Africa: human dignity, equality, non-racialism, non-sexism, supremacy of the Constitution, and the rule of law. Every law, action, and court ruling must reflect these values."
    },
    {
        title: "🗳️ Parliament Can Amend the Constitution, But Not Easily",
        content: "Chapter 4 explains that amending the Constitution needs at least two-thirds of the National Assembly and six out of nine provinces in the NCOP to agree. For changes to Chapter 1 or Section 74 even more stringent rules apply, such as 75% of the National Assembly needing to vote in favour."
    },
    {
        title: "🫡 The President Isn't Elected Directly, But by Parliament",
        content: "According to Chapter 5, South Africans don't vote directly for a president. Instead, the National Assembly elects one from among its members after each election. If they lose confidence in the President, they can remove them, through a special vote."
    },
    {
        title: "⏱️ A President Can Only Serve Two Terms, And That's Final",
        content: "The Constitution limits the President to two five-year terms. This safeguard, found in Chapter 5, ensures that no individual can hold executive power indefinitely, even during popular times."
    },
    {
        title: "🧮 Premiers Have Their Own Cabinets, They're Called Executive Councils",
        content: "Each province has its own version of a national Cabinet, called an Executive Council, led by the Premier. Chapter 6 outlines how provinces have real law-making and governance powers, especially in areas like education, health, and housing."
    },
    {
        title: "🗺️ Provinces Can't Just Do Whatever They Want",
        content: "Even though provinces have autonomy, they're bound by national norms and standards, and their laws must align with the Constitution. If a province acts unconstitutionally, the national government can intervene, temporarily."
    },
    {
        title: "🏘️ Municipalities Are a Sphere of Government, Not Just a Service",
        content: "Chapter 7 defines local government as its own sphere, not a subordinate tier. That means municipalities like Cape Town or eThekwini must have democratically elected councils, deliver services, and develop their communities, while also being financially accountable."
    },
    {
        title: "🧑🏾‍✈️ The Police Serve the People, Not the Government",
        content: "Chapter 11 says the South African Police Service (SAPS) must be non-partisan, professional, and work to protect and serve all people, not any political party. They're constitutionally mandated to uphold the rule of law and human rights."
    },
    {
        title: "🪖 The Army Can't Act on Its Own",
        content: "The Defence Force is bound by law and can't act independently or be used for political gain. The President is the Commander-in-Chief, but must report deployments to Parliament, and military actions must always respect the Constitution."
    },
    {
        title: "🛡️ Intelligence Structures Must Stay in Check",
        content: "Even secret services like intelligence agencies are regulated by the Constitution. Their powers and structure must be set out in national legislation, and they are subject to civilian oversight, making South Africa one of few democracies with this explicit safeguard."
    },
    {
        title: "💬 Public Participation Is a Constitutional Requirement, Not a Courtesy",
        content: "Chapter 4 compels Parliament and the NCOP to facilitate public involvement in the law-making process. If they fail to do so, laws passed can be declared invalid, and it's happened before."
    },
    {
        title: "🧾 You Can Petition Parliament Directly",
        content: "As a citizen, you can submit a petition to Parliament or your provincial legislature, even asking for new laws or amendments. The Constitution allows and encourages direct democratic engagement, not just voting every five years."
    }
];