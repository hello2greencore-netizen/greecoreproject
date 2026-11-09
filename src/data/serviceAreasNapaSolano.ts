import type { ServiceArea } from "@/types";

/**
 * Napa County and Solano County town pages (Napa/Solano expansion).
 * Kept in their own file so the expansion is easy to review; merged into
 * `serviceAreas` in serviceAreas.ts.
 *
 * Hero images are placeholders until licensed town photos or CompanyCam job
 * photos are added. No showcaseCity yet, so the job gallery stays hidden
 * until we have real jobs in each town.
 */

const noTripCharge = (city: string) => ({
  question: `Do you charge extra to come out to ${city}?`,
  answer: `No. There's no trip charge for ${city}. You get the same pricing, the same crew, and the same free estimates as our customers in Petaluma.`,
});

const militaryDiscount = {
  question: "Do you offer a military discount?",
  answer:
    "Yes. Military discounts are available. Just let us know when you book, and we'll take care of it on your estimate.",
};

export const napaSolanoAreas: ServiceArea[] = [
  {
    slug: "napa",
    city: "Napa",
    county: "Napa County",
    utility: "MCE",
    heroImage: "/images/hero/service-areas.jpg",
    heroTitle: "Heating, Cooling & Water Heater Services in Napa, CA",
    metaTitle: "HVAC, AC & Water Heaters in Napa, CA",
    metaDescription:
      "Green Core Heating & Air installs and repairs AC, furnaces, heat pumps, mini splits & water heaters in Napa, CA. No trip charge, free estimates.",
    intro:
      "Green Core Heating & Air installs, repairs, and maintains air conditioning, furnaces, heat pumps, ductless mini splits, and water heaters for homes in Napa, CA. Napa summer afternoons get hot, nights drop off fast, and a lot of homes here were built long before central air was standard, so comfort comes down to a system designed for the house you actually have.",
    lifestyleLine:
      "Whether you're grabbing lunch at the Oxbow, walking the Riverfront, or just getting home after a long day in the valley heat, your house should feel good the moment you walk in. Upstairs rooms that never cool off, a furnace that groans on cold mornings, or a water heater on its last legs are the calls we handle every week.",
    landmarks: [
      "Downtown Napa & the Riverfront",
      "Oxbow Public Market",
      "Fuller Park",
      "Alta Heights",
      "Browns Valley",
      "Westwood",
      "Silverado",
    ],
    sections: [
      {
        heading: "Comfort for Napa's Older Homes",
        body: [
          "Napa has everything from Victorians and Craftsman bungalows near Fuller Park to mid-century ranch homes in Westwood and newer builds out in Browns Valley. Older homes often have small or leaky ductwork, a single wall furnace, or no cooling at all. For those, a ductless mini split can add quiet heating and cooling room by room without opening up walls.",
          "Homes with existing ducts usually do best with a properly sized central AC and furnace, or a ducted heat pump, paired with duct sealing or repairs where needed. Either way, we start with a load calculation so the system fits the house, not a rule of thumb.",
        ],
      },
      {
        heading: "Hot Days, Cool Nights, and Smoke Season",
        body: [
          "Napa's big swing between hot afternoons and cool nights is hard on undersized or oversized equipment. A system that's sized right runs longer, quieter cycles and keeps the temperature even from room to room.",
          "Fire season matters here too. We can add better filtration to your system so you can keep the windows closed and the air inside clean when smoke rolls into the valley.",
        ],
      },
      {
        heading: "Rebates and Permits in Napa",
        body: [
          "Most Napa homes get their electricity through MCE, with PG&E handling delivery. Depending on current funding, that can mean rebates on heat pumps and heat pump water heaters through MCE, TECH Clean California, or BayREN. We check what you qualify for and handle the paperwork.",
          "Inside city limits, permits go through the City of Napa. In unincorporated areas like Silverado, they go through Napa County. We pull the permit and schedule the inspection either way.",
        ],
      },
    ],
    waterHeaterNote:
      "After the 2014 South Napa earthquake, seismic strapping got a lot more attention here. Every water heater we install in Napa is strapped, vented, and brought up to current code.",
    faqs: [
      noTripCharge("Napa"),
      {
        question: "Can you add air conditioning to an older Napa home without ductwork?",
        answer:
          "Yes. Ductless mini splits are made for homes without ducts. We mount compact indoor units in the rooms that need them and run small lines to one outdoor unit, so there's no need to open up walls.",
      },
      {
        question: "Do you need a permit to replace an AC, furnace, or water heater in Napa?",
        answer:
          "Yes. HVAC and water heater replacements need a permit from the City of Napa, or from Napa County outside city limits. We pull the permit and schedule the inspection for you.",
      },
      {
        question: "Do you serve Yountville, St. Helena, and Calistoga?",
        answer:
          "Yes. We work throughout Napa County, including up-valley towns. Call us at (707) 988-5858 and we'll get you on the schedule.",
      },
      {
        question: "Can you help with wildfire smoke inside my house?",
        answer:
          "Yes. We can upgrade the filtration on your existing system so it catches fine smoke particles, which helps a lot when you need to keep the house closed up during fire season.",
      },
    ],
  },
  {
    slug: "american-canyon",
    city: "American Canyon",
    county: "Napa County",
    utility: "MCE",
    heroImage: "/images/hero/service-areas.jpg",
    heroTitle: "AC, Heating & Water Heater Services in American Canyon, CA",
    metaTitle: "AC, Furnace & Water Heaters in American Canyon, CA",
    metaDescription:
      "AC and furnace replacement, repair, and water heaters in American Canyon, CA. Green Core Heating & Air: no trip charge, free estimates, family-owned.",
    intro:
      "Green Core Heating & Air installs, repairs, and maintains air conditioning, furnaces, heat pumps, ductless mini splits, and water heaters for homes in American Canyon, CA. A lot of American Canyon homes went up in the 1990s and 2000s, which means plenty of original AC units and furnaces are now reaching the end of their lives.",
    lifestyleLine:
      "From Vintage Ranch to the neighborhoods off Highway 29, American Canyon families want a home that stays comfortable on windy afternoons and warm afternoons alike. If your system is getting louder, costing more to run, or just can't keep the upstairs cool, we can help.",
    landmarks: [
      "Napa Junction",
      "Vintage Ranch",
      "Newell Open Space Preserve",
      "Wetlands Edge Trail",
      "Highway 29 corridor",
    ],
    sections: [
      {
        heading: "Is Your Original AC Due for Replacement?",
        body: [
          "Most air conditioners and furnaces last around 15 to 20 years. If your home was built in the late '90s or 2000s and still has its original equipment, you're likely in the window where repairs start adding up and efficiency drops off.",
          "We'll give you an honest look at what you have, whether a repair makes sense, and what a replacement would cost. If it's time, we'll show you options side by side: a new AC and furnace, a heat pump, or a mix, with upfront pricing and no pressure.",
        ],
      },
      {
        heading: "Two-Story Homes That Never Feel Even",
        body: [
          "A lot of American Canyon homes are two stories on one system, which often means a hot upstairs and a cold downstairs. The fix is usually a mix of right-sized equipment, duct repairs, and sometimes zoning or a mini split for the problem rooms.",
          "Before we recommend anything, we run a load calculation and check your ductwork so the new system actually solves the problem instead of just replacing the box.",
        ],
      },
      {
        heading: "Rebates and Permits in American Canyon",
        body: [
          "American Canyon homes get their electricity through MCE, with PG&E handling delivery. Depending on current funding, heat pumps and heat pump water heaters may qualify for rebates through MCE, TECH Clean California, or BayREN. We check what applies and handle the paperwork.",
          "Permits go through the City of American Canyon. We pull the permit and schedule the inspection.",
        ],
      },
    ],
    waterHeaterNote:
      "Many American Canyon homes have the original garage water heater from when the house was built. If yours is 10 years or older, it's worth a look before it fails.",
    faqs: [
      noTripCharge("American Canyon"),
      {
        question: "Should I repair or replace my AC in American Canyon?",
        answer:
          "If your system is 15 years or older and needs a major repair, replacement usually makes more sense. We'll give you both prices so you can decide.",
      },
      {
        question: "Why is my upstairs so much hotter than downstairs?",
        answer:
          "It's usually a mix of heat rising, undersized or leaky ducts, and a system that wasn't sized for the house. We check all three and recommend the fix that actually solves it.",
      },
      {
        question: "Do you need a permit to replace an AC or water heater in American Canyon?",
        answer:
          "Yes. Permits go through the City of American Canyon. We pull the permit and schedule the inspection for you.",
      },
    ],
  },
  {
    slug: "fairfield",
    city: "Fairfield",
    county: "Solano County",
    utility: "MCE",
    heroImage: "/images/hero/service-areas.jpg",
    heroTitle: "AC, Heating & Water Heater Services in Fairfield, CA",
    metaTitle: "AC Repair & Replacement in Fairfield & Green Valley, CA",
    metaDescription:
      "AC, furnace, heat pump & water heater service in Fairfield, Green Valley & Cordelia. No trip charge, free estimates, military discounts available.",
    intro:
      "Green Core Heating & Air installs, repairs, and maintains air conditioning, furnaces, heat pumps, ductless mini splits, and water heaters for homes in Fairfield, CA, including Green Valley and Cordelia. Fairfield summers get hot, so a cooling system that keeps up without running nonstop makes a real difference in comfort and your power bill.",
    lifestyleLine:
      "Whether you're in a newer home in Green Valley, an established neighborhood near downtown, or just moved in with orders to Travis, you deserve straight answers and a system that fits your house. We bring the same careful, clean installs we're known for in Sonoma and Marin.",
    landmarks: [
      "Green Valley",
      "Cordelia",
      "Rancho Solano",
      "Paradise Valley",
      "Downtown Fairfield",
      "Rockville Hills Regional Park",
      "Travis Air Force Base",
    ],
    sections: [
      {
        heading: "Cooling Built for Fairfield Summers",
        body: [
          "When it's pushing 100 degrees, an undersized AC runs all afternoon and never catches up, and an oversized one cools fast but leaves the house clammy and uneven. Both cost you money.",
          "We size every system with a load calculation and check the ductwork before recommending anything. Then we lay out your options, central AC and furnace, a heat pump, or a mini split for a problem room, with upfront pricing and no pressure.",
        ],
      },
      {
        heading: "Green Valley and Cordelia Homes",
        body: [
          "Larger homes in Green Valley and Cordelia often have two systems, long duct runs, or bonus rooms that never feel right. We look at the whole house, fix airflow problems at the source, and make sure each system is matched to the space it serves.",
          "For high-end homes, we also install quieter variable-speed equipment and smart controls so you get steady, even comfort without the noise.",
        ],
      },
      {
        heading: "Military Families Welcome",
        body: [
          "With Travis close by, a lot of our Fairfield customers are military families, whether you're buying, renting out, or just moved in. Military discounts are available. Just let us know when you book.",
          "Buying a home before a PCS move? We can check the HVAC and water heater so you know what you're getting before you close.",
        ],
      },
      {
        heading: "Rebates and Permits in Fairfield",
        body: [
          "Fairfield homes get their electricity through MCE, with PG&E handling delivery, and the same goes for most of unincorporated Green Valley. Depending on current funding, that can mean rebates on heat pumps and heat pump water heaters through MCE, TECH Clean California, or BayREN. We check what you qualify for and handle the paperwork.",
          "Inside city limits, permits go through the City of Fairfield. Homes outside city limits go through Solano County. We pull the permit and schedule the inspection either way.",
        ],
      },
    ],
    waterHeaterNote:
      "In Fairfield, we see a lot of water heaters in hot garages that work harder than they should. We size replacements to your household and bring strapping and venting up to code.",
    faqs: [
      noTripCharge("Fairfield"),
      militaryDiscount,
      {
        question: "Do you serve Green Valley, Cordelia, and Suisun City?",
        answer:
          "Yes. We work throughout Fairfield, Green Valley, Cordelia, and Suisun City. Permits outside Fairfield city limits go through Solano County, and we handle them.",
      },
      {
        question: "Will a new AC keep up with Fairfield's summer heat?",
        answer:
          "Yes, when it's sized correctly. We run a load calculation and check your ducts so the system can handle 100-degree afternoons without running nonstop.",
      },
      {
        question: "Do you need a permit to replace an AC or water heater in Fairfield?",
        answer:
          "Yes. Permits go through the City of Fairfield, or Solano County outside city limits. We pull the permit and schedule the inspection for you.",
      },
    ],
  },
  {
    slug: "vacaville",
    city: "Vacaville",
    county: "Solano County",
    utility: "PG&E",
    heroImage: "/images/hero/service-areas.jpg",
    heroTitle: "AC, Heating & Water Heater Services in Vacaville, CA",
    metaTitle: "AC Repair & Replacement in Vacaville, CA",
    metaDescription:
      "AC replacement and repair, furnaces, heat pumps & water heaters in Vacaville, CA. No trip charge, free estimates, military discounts available.",
    intro:
      "Green Core Heating & Air installs, repairs, and maintains air conditioning, furnaces, heat pumps, ductless mini splits, and water heaters for homes in Vacaville, CA. Vacaville summers regularly top 100 degrees, so your air conditioner is the most important system in the house from June to September.",
    lifestyleLine:
      "From the neighborhoods around Lagoon Valley and Alamo Creek to newer homes on the north side of town, Vacaville families want a system that keeps up on the hottest afternoons without a shocking power bill. That's exactly what we design for.",
    landmarks: [
      "Downtown Vacaville",
      "Lagoon Valley Park",
      "Nut Tree",
      "Alamo Creek",
      "Andrews Park",
      "English Hills",
    ],
    sections: [
      {
        heading: "Built for 100-Degree Summers",
        body: [
          "In Vacaville, an AC that's the wrong size or has tired ductwork will run all afternoon and still leave rooms warm. We start every job with a load calculation and a duct check, so the new system is sized for your home and the air actually reaches the rooms that need it.",
          "Then we give you clear options, a new central AC and furnace, a heat pump that cools and heats, or a mini split for that one room that never cools down, with upfront pricing and no pressure.",
        ],
      },
      {
        heading: "Repair or Replace?",
        body: [
          "If your AC is 15 years or older and needs a big repair, it's usually time to replace it. Newer equipment uses a lot less power, which matters when it's running every day all summer.",
          "We'll tell you honestly what we find. If a repair makes sense, we'll fix it. If replacement is the better deal, we'll show you why and give you both prices.",
        ],
      },
      {
        heading: "Military Families Welcome",
        body: [
          "Plenty of Vacaville homeowners serve at Travis or recently did. Military discounts are available. Just mention it when you book.",
        ],
      },
      {
        heading: "Rebates and Permits in Vacaville",
        body: [
          "Vacaville homes get their electricity from PG&E. Depending on current funding, heat pumps and heat pump water heaters may qualify for rebates through TECH Clean California or BayREN. We check what applies to your home and handle the paperwork.",
          "Permits go through the City of Vacaville. We pull the permit and schedule the inspection.",
        ],
      },
    ],
    waterHeaterNote:
      "Garage water heaters in Vacaville deal with serious summer heat. We size replacements to your household and bring strapping, venting, and expansion tanks up to code.",
    faqs: [
      noTripCharge("Vacaville"),
      militaryDiscount,
      {
        question: "How long does an AC replacement take in Vacaville?",
        answer:
          "Most AC or full system replacements take one to two days. In peak summer we work to get you cooling again as fast as possible, and we'll give you a clear schedule up front.",
      },
      {
        question: "Are there rebates for a new heat pump or water heater in Vacaville?",
        answer:
          "Vacaville is PG&E territory. Depending on current funding, heat pumps and heat pump water heaters may qualify for rebates through TECH Clean California or BayREN. We check what you qualify for and file the paperwork. The federal 25C tax credit ended for systems installed after December 31, 2025.",
      },
      {
        question: "Do you need a permit to replace an AC or water heater in Vacaville?",
        answer:
          "Yes. Permits go through the City of Vacaville. We pull the permit and schedule the inspection for you.",
      },
    ],
  },
  {
    slug: "benicia",
    city: "Benicia",
    county: "Solano County",
    utility: "MCE",
    heroImage: "/images/hero/service-areas.jpg",
    heroTitle: "Heating, Cooling & Water Heater Services in Benicia, CA",
    metaTitle: "HVAC & Water Heaters in Benicia, CA",
    metaDescription:
      "Furnaces, AC, heat pumps, mini splits & water heaters for Benicia homes, from historic houses to Southampton. No trip charge, free estimates.",
    intro:
      "Green Core Heating & Air installs, repairs, and maintains furnaces, air conditioning, heat pumps, ductless mini splits, and water heaters for homes in Benicia, CA. From historic homes near First Street to the neighborhoods in Southampton, Benicia houses come in every age and style, and each needs a system designed for it.",
    lifestyleLine:
      "Benicia gets cooling breezes off the Carquinez Strait, but summer heat still finds its way in, and older homes can be drafty in winter. Whether you're near the water or up in the hills, we'll make your home comfortable year-round.",
    landmarks: [
      "First Street",
      "Benicia State Capitol",
      "Benicia State Recreation Area",
      "Southampton",
      "Benicia Arsenal",
      "Lake Herman",
    ],
    sections: [
      {
        heading: "Respecting Benicia's Historic Homes",
        body: [
          "Older homes near downtown often have limited space for ductwork, plaster walls, and character worth protecting. Ductless mini splits are a great fit here: they add heating and cooling room by room with small indoor units and no new ducts.",
          "For homes with existing ducts, we size a new furnace, AC, or heat pump with a load calculation and fix the ductwork so the system actually delivers. We protect floors, keep the mess contained, and leave the house cleaner than we found it.",
        ],
      },
      {
        heading: "Rebates and Permits in Benicia",
        body: [
          "Benicia has been an MCE community since 2015, with PG&E handling delivery. Depending on current funding, heat pumps and heat pump water heaters may qualify for rebates through MCE, TECH Clean California, or BayREN. We check what you qualify for and handle the paperwork.",
          "Permits go through the City of Benicia. We pull the permit and schedule the inspection.",
        ],
      },
    ],
    waterHeaterNote:
      "In Benicia's older homes, water heaters are often in tight closets or basements. We size replacements to fit and bring venting and seismic strapping up to code.",
    faqs: [
      noTripCharge("Benicia"),
      {
        question: "Can you add heating and cooling to a historic Benicia home without ductwork?",
        answer:
          "Yes. Ductless mini splits use compact indoor units and small refrigerant lines, so there's no need to open walls or ceilings for ducts.",
      },
      {
        question: "Do you need a permit to replace a furnace or water heater in Benicia?",
        answer:
          "Yes. Permits go through the City of Benicia. We pull the permit and schedule the inspection for you.",
      },
    ],
  },
  {
    slug: "vallejo",
    city: "Vallejo",
    county: "Solano County",
    utility: "MCE",
    heroImage: "/images/hero/service-areas.jpg",
    heroTitle: "Heating, Cooling & Water Heater Services in North Vallejo",
    metaTitle: "HVAC & Water Heaters in North Vallejo, CA",
    metaDescription:
      "AC, furnaces, heat pumps & water heaters for Hiddenbrooke and north Vallejo homes. No trip charge, free estimates.",
    intro:
      "Green Core Heating & Air installs, repairs, and maintains air conditioning, furnaces, heat pumps, ductless mini splits, and water heaters for homes in north Vallejo, including Hiddenbrooke and the neighborhoods off Columbus Parkway. Many homes up here are newer two-story builds, where a well-sized system and good ductwork make all the difference.",
    lifestyleLine:
      "North Vallejo sits right between the bay and the hotter valleys to the north and east, so summer afternoons can heat up fast. If your upstairs bakes or your system is getting tired, we can help.",
    landmarks: [
      "Hiddenbrooke",
      "Blue Rock Springs Park",
      "Dan Foley Park",
      "Columbus Parkway",
    ],
    sections: [
      {
        heading: "Comfort for Hiddenbrooke and North Vallejo Homes",
        body: [
          "Larger two-story homes often have one system working too hard, or two systems that were never balanced. We check the whole house, fix airflow at the source, and size new equipment with a load calculation.",
          "You'll get clear options, a new AC and furnace, a heat pump, or a mini split for a problem room, with upfront pricing and no pressure.",
        ],
      },
      {
        heading: "Rebates and Permits in Vallejo",
        body: [
          "Vallejo homes get their electricity through MCE, with PG&E handling delivery. Depending on current funding, heat pumps and heat pump water heaters may qualify for rebates through MCE, TECH Clean California, or BayREN. We check what applies and handle the paperwork.",
          "Permits go through the City of Vallejo. We pull the permit and schedule the inspection.",
        ],
      },
    ],
    waterHeaterNote:
      "Most north Vallejo homes have a garage water heater. If yours is 10 years or older, we can check it before it fails and bring strapping and venting up to code.",
    faqs: [
      noTripCharge("north Vallejo"),
      {
        question: "Which parts of Vallejo do you serve?",
        answer:
          "We focus on north Vallejo, including Hiddenbrooke and the neighborhoods off Columbus Parkway. Not sure if you're in our area? Call (707) 988-5858 and we'll let you know.",
      },
      {
        question: "Do you need a permit to replace an AC or water heater in Vallejo?",
        answer:
          "Yes. Permits go through the City of Vallejo. We pull the permit and schedule the inspection for you.",
      },
    ],
  },
];
