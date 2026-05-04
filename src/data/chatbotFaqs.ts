export type ChatbotFAQ = {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
};

export type ChatbotFAQCategory = {
  id: string;
  label: string;
  prompt: string;
  questions: ChatbotFAQ[];
};

export const chatbotFaqCategories: ChatbotFAQCategory[] = [
  {
    id: "getting-started",
    label: "Getting started",
    prompt: "Common questions before booking",
    questions: [
      {
        id: "free-estimates",
        question: "Do you offer free estimates?",
        answer:
          "Yes. In-home estimates for replacement or installation projects are free, and Green Core will provide clear pricing and options before any work begins.",
        keywords: ["estimate", "quote", "pricing", "cost", "free"],
      },
      {
        id: "licensed-insured",
        question: "Are you licensed and insured?",
        answer:
          "Yes. Green Core Heating & Air is a licensed, bonded, and insured California HVAC contractor. The license number is listed in the website footer.",
        keywords: ["license", "licensed", "insured", "bonded", "contractor"],
      },
      {
        id: "response-time",
        question: "How quickly can you come out?",
        answer:
          "For urgent service calls, Green Core aims to respond same-day or next-day depending on the season. The team will give you an honest timeline when you book.",
        keywords: ["schedule", "appointment", "urgent", "emergency", "same day", "next day"],
      },
    ],
  },
  {
    id: "services",
    label: "Services",
    prompt: "Heating, cooling, and airflow",
    questions: [
      {
        id: "services-offered",
        question: "What HVAC services do you provide?",
        answer:
          "Green Core works on heat pumps, air conditioning, furnaces, mini splits, ductwork, and Harvest Thermal systems for homeowners in Sonoma and Marin counties.",
        keywords: ["services", "hvac", "repair", "replacement", "installation"],
      },
      {
        id: "heat-pumps",
        question: "Do you install heat pumps?",
        answer:
          "Yes. Green Core installs, repairs, and replaces heat pumps, including all-electric systems that provide both heating and cooling in one unit.",
        keywords: ["heat pump", "heat pumps", "electric", "heating", "cooling"],
      },
      {
        id: "mini-splits",
        question: "Can you help with mini splits?",
        answer:
          "Yes. Green Core installs, repairs, and replaces ductless mini split systems for additions, garages, older homes, and rooms with uneven temperatures.",
        keywords: ["mini split", "ductless", "zone", "garage", "addition"],
      },
      {
        id: "ductwork",
        question: "Do you repair or replace ductwork?",
        answer:
          "Yes. Green Core provides ductwork installation, repair, and replacement to improve airflow, reduce inefficiency, and help rooms feel more even.",
        keywords: ["duct", "ducts", "ductwork", "airflow", "uneven"],
      },
    ],
  },
  {
    id: "areas-rebates",
    label: "Areas & rebates",
    prompt: "Where Green Core works and incentives",
    questions: [
      {
        id: "service-areas",
        question: "What areas do you serve?",
        answer:
          "Green Core serves homeowners throughout Sonoma and Marin counties, including Petaluma, Rohnert Park, Santa Rosa, Novato, San Rafael, Mill Valley, Tiburon, and Sebastopol.",
        keywords: ["area", "areas", "serve", "city", "location", "sonoma", "marin"],
      },
      {
        id: "rebates",
        question: "Do you help with rebates?",
        answer:
          "Yes. Green Core helps homeowners identify and claim BayREN, TECH Clean California, federal tax credit, and utility incentives that may apply to a project.",
        keywords: ["rebate", "rebates", "incentive", "tax credit", "bayren", "tech"],
      },
      {
        id: "contact",
        question: "How do I contact Green Core?",
        answer:
          "You can call Green Core at (707) 988-5858 or send a message through the contact form. The team usually follows up the same business day.",
        keywords: ["contact", "phone", "call", "email", "message", "form"],
      },
    ],
  },
];

