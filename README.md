# KnowYourConstitution1996 (KYC1996)

![React](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black)
![React Router](https://img.shields.io/badge/React%20Router-CA4245.svg?style=for-the-badge&logo=React-Router&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=Vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4.svg?style=for-the-badge&logo=Tailwind-CSS&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white)

## Table of Contents

- [Description and Background](#description-and-background)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Description and Background

**KnowYourConstitution1996** is an open-source website that offers simple, intuitive access to the contents of South Africa's current Constitution. The aim of this project is to make the Constitution as accessible as possible to the general public.

**The inspiration for this** came from my own struggles to look up sections of the Constitution whenever they were mentioned in the news, whether about court cases or controversial Bills like the Expropriation Act. I often had to rely on my hard copy of the Constitution (which not everyone has) or find a government-hosted PDF version (which isn’t always reliable or easy to navigate).

I thought it was **quite the schlep** to do, so I wondered, "Isn't there an easier way to do this?". I searched GitHub and found a few Markdown versions of the Constitution, but they didn’t really solve the accessibility issue. So I decided to build this solution.

The core of this website is the [ZAConstitution1996 API](https://github.com/moppdev/ZAConstitution1996), an open-source API containing all the contents of the Constitution.

## Tech Stack

- Vite + React TypeScript
- React Router
- Shiki
- ESLint
- Axios
- Tailwind CSS
- Font Awesome

## Getting Started

First off, clone this repository via entering the following in your terminal of choice:

```bash
git clone https://github.com/moppdev/KnowYourConstitution1996.git
```

Navigate to the directory:

```bash
cd KnowYourConstitution1996
```

Install all dependencies and run:

```bash
npm install
npm run dev
```

Open a tab in your default browser on your local machine at ```http://localhost:5173``` to see the homepage.

## Contributing

Pull requests are welcome. Please check **[contribution.md](https://github.com/moppdev/KnowYourConstitution1996/blob/dev/CONTRIBUTING.md)** for more information.

## License

This project is licensed under the MIT License.
