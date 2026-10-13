import type { ContentSection, ComparisonTable, FAQ, ShowcaseProject } from "@/types";

/** Extra depth for service pages: answer-first summary, install/repair/maintenance sections, comparison table, real projects, FAQs. */
export type ServiceDetails = {
  answer: string;
  sections: ContentSection[];
  table?: ComparisonTable;
  projects?: ShowcaseProject[];
  faqs?: FAQ[];
};

export const serviceDetails: Record<string, ServiceDetails> = {
  "heat-pumps": {
    "answer": "A heat pump is a single all-electric system that heats your home in winter and cools it in summer by moving heat instead of burning gas. Green Core Heating & Air designs, installs, repairs, and maintains ducted heat pumps for homes across Sonoma and Marin counties, starting every install with a load calculation so the system fits your home.",
    "sections": [
      {
        "heading": "Heat pump installation",
        "body": [
          "Most of our heat pump installs replace an aging gas furnace and air conditioner with one system. We size it with a room-by-room load calculation, check your ductwork, and review your electrical panel before recommending equipment, because a heat pump that's too big or fed by leaky ducts won't deliver the comfort or savings it should.",
          "New systems use the newer, lower-impact A2L refrigerants (like R-454B), and we handle the permit, inspection, and any energy code testing your job requires."
        ],
        "bullets": [
          "Load calculation and duct inspection on every job",
          "Electrical panel review when you're switching from gas",
          "Permits, inspection, and rebate paperwork handled"
        ]
      },
      {
        "heading": "Heat pump repair",
        "body": [
          "Common heat pump problems include a system blowing lukewarm air, ice on the outdoor unit that doesn't clear, short cycling, error codes, and refrigerant leaks. Some frost in winter is normal, because the system runs a defrost cycle, but a unit that stays iced over needs a look.",
          "We test the whole system, including refrigerant pressures, electrical parts, defrost controls, and airflow, and give you a written price before any repair."
        ]
      },
      {
        "heading": "Heat pump maintenance",
        "body": [
          "Because a heat pump heats and cools, it runs most of the year. A check before summer and another before winter keeps it efficient: we clean the coils, test capacitors and contactors, confirm the refrigerant charge, check the defrost cycle, and clear the condensate drain."
        ]
      },
      {
        "heading": "Costs and rebates",
        "body": [
          "Heat pump systems are priced to your home, since ductwork, electrical upgrades, and equipment size vary. Your written estimate is free. Depending on where you live and current funding, heat pumps may qualify for rebates through TECH Clean California, BayREN, Sonoma Clean Power (Sonoma County), or MCE (Marin County). We check what's available and file the paperwork. The federal 25C tax credit ended for systems installed after December 31, 2025."
        ]
      }
    ],
    "table": {
      "caption": "Heat pump vs. gas furnace and air conditioner",
      "columns": [
        "",
        "Heat pump",
        "Gas furnace + AC"
      ],
      "rows": [
        [
          "Heating and cooling",
          "One system does both",
          "Two separate systems"
        ],
        [
          "Fuel",
          "All-electric",
          "Gas for heat, electric for cooling"
        ],
        [
          "Efficiency",
          "Moves heat, so it uses far less energy to heat",
          "Burns gas to make heat"
        ],
        [
          "Rebates",
          "Often available",
          "Rarely"
        ],
        [
          "Best fit",
          "Most North Bay homes, especially with solar",
          "Homes not ready for electrical upgrades"
        ]
      ]
    },
    "projects": [
      {
        "title": "Heat pump replaces an attic gas furnace in Petaluma",
        "date": "July 2026",
        "summary": "We removed an aging gas furnace from the attic and installed a high-efficiency Carrier heat pump, sized for the home, so it now heats and cools on one all-electric system.",
        "url": "https://trusty.app/projects/318467"
      },
      {
        "title": "Carrier heat pump and air handler installation in Santa Rosa",
        "date": "August 2026",
        "summary": "We replaced dated equipment with a high-efficiency Carrier heat pump and a new air handler, with new refrigerant lines, condensate drainage, and an upgraded electrical disconnect.",
        "url": "https://trusty.app/projects/337703"
      }
    ],
    "faqs": [
      {
        "question": "How does a heat pump work?",
        "answer": "A heat pump moves heat instead of making it. In winter it pulls heat from the outdoor air and brings it inside; in summer it reverses and moves heat out of your home, just like an air conditioner."
      },
      {
        "question": "Do heat pumps work in cold weather?",
        "answer": "Yes. Modern heat pumps are built for climates much colder than Sonoma and Marin, where winter nights usually stay above the mid-20s. Proper sizing is what keeps you comfortable on the coldest mornings."
      },
      {
        "question": "Is a heat pump better than a furnace and AC?",
        "answer": "For most North Bay homes, yes. One system handles heating and cooling, it runs on electricity instead of gas, it's more efficient, and it often qualifies for rebates. Homes that need a big electrical upgrade may want to plan for that first."
      },
      {
        "question": "How much does a heat pump cost?",
        "answer": "It depends on the size of your home, your ductwork, and whether you need electrical upgrades. We give you a free in-home estimate with clear written pricing, and we factor in any rebates you qualify for."
      },
      {
        "question": "Will I need a new electrical panel?",
        "answer": "Sometimes. Many homes can add a heat pump without a panel upgrade, but some older homes need one. We check your panel during the estimate so there are no surprises."
      },
      {
        "question": "How long does a heat pump last?",
        "answer": "Typically 12 to 15 years with proper installation and regular maintenance."
      },
      {
        "question": "Why is there ice on my heat pump?",
        "answer": "A light layer of frost on cold mornings is normal; the system melts it with a defrost cycle. If the outdoor unit stays covered in ice, or ice builds up in summer, call us for a repair."
      },
      {
        "question": "Are there rebates for heat pumps in Sonoma and Marin?",
        "answer": "Depending on where you live and current funding, heat pumps may qualify for rebates through TECH Clean California, BayREN, Sonoma Clean Power (Sonoma County), or MCE (Marin County). We check what's available and file the paperwork. The federal 25C tax credit ended for systems installed after December 31, 2025."
      }
    ]
  },
  "air-conditioning": {
    "answer": "Green Core Heating & Air installs, repairs, and maintains central air conditioning for homes across Sonoma and Marin counties, including adding AC to an existing furnace and replacing worn-out systems. We size every system to your home and fix the airflow and duct problems that cause hot rooms and high summer bills.",
    "sections": [
      {
        "heading": "AC installation and replacement",
        "body": [
          "If your home already has a furnace and ducts, adding a matched air conditioner and coil is often the simplest way to get cooling. If you're replacing both, it's worth comparing a heat pump, which cools exactly like an AC but also heats.",
          "We size the system with a load calculation, not the old unit's label, and check the ducts, since undersized or leaky ducts are a common reason a new AC still can't keep up."
        ],
        "bullets": [
          "Cooling added to existing furnaces",
          "Full system replacements, including rooftop units",
          "Heat pump options priced side by side"
        ]
      },
      {
        "heading": "AC repair",
        "body": [
          "The most common AC calls we get are warm air from the vents, a system that won't turn on, ice on the indoor coil or refrigerant lines, water leaking near the furnace, and loud or rattling outdoor units. Often the cause is a failed capacitor or contactor, a refrigerant leak, a clogged drain, or a dirty coil.",
          "We find the actual cause and give you a written price first. If the system is older and the repair is major, we'll show you replacement options too."
        ]
      },
      {
        "heading": "AC maintenance",
        "body": [
          "A spring tune-up before the first heat wave includes cleaning the outdoor coil, testing electrical parts, checking refrigerant and airflow, and clearing the condensate drain. That's what keeps an AC from quitting on the hottest day of the year."
        ]
      },
      {
        "heading": "AC or heat pump?",
        "body": [
          "A heat pump is an air conditioner that can also heat. If your furnace is near the end of its life too, replacing both with a heat pump often costs less to run and may qualify for rebates. If your furnace is newer, adding an AC can make more sense. We'll price both."
        ]
      }
    ],
    "projects": [
      {
        "title": "Air conditioning added to an existing furnace in Santa Rosa",
        "date": "April 2026",
        "summary": "We added central air conditioning to the home's existing furnace so the homeowners can stay cool through Santa Rosa summers.",
        "url": "https://trusty.app/projects/321571"
      },
      {
        "title": "Rooftop AC replacement in Petaluma",
        "date": "July 2026",
        "summary": "We replaced an aging, unreliable rooftop air conditioner, handling the permit, crane lift, and inspection from start to finish.",
        "url": "https://trusty.app/projects/321569"
      },
      {
        "title": "AC repair and refrigerant service in Santa Rosa",
        "date": "August 2026",
        "summary": "We diagnosed the system with digital gauges, sealed leaking refrigerant line joints, and verified electrical connections to restore steady cooling.",
        "url": "https://trusty.app/projects/321570"
      }
    ],
    "faqs": [
      {
        "question": "Can you add air conditioning to my existing furnace?",
        "answer": "Usually, yes. We add a matched outdoor unit and indoor coil to your furnace and check that your ducts can handle the airflow. We'll also price a heat pump so you can compare."
      },
      {
        "question": "Why is my AC blowing warm air?",
        "answer": "Common causes are a failed capacitor, a dirty outdoor coil, low refrigerant from a leak, a frozen indoor coil, or a thermostat issue. Call us and we'll diagnose it and give you a written price before any repair."
      },
      {
        "question": "Why is my AC freezing up?",
        "answer": "Ice on the coil or lines usually means restricted airflow, like a dirty filter or blocked return, or low refrigerant. Turn the system off to let it thaw and call us."
      },
      {
        "question": "What size air conditioner do I need?",
        "answer": "It depends on your home's size, insulation, windows, and sun exposure. We do a load calculation instead of guessing from square footage or the old unit's size."
      },
      {
        "question": "Should I replace my AC with a heat pump?",
        "answer": "If your furnace is also aging, a heat pump is often the better choice: it cools the same way and replaces your furnace too. If your furnace is newer, adding AC may make more sense. We'll price both."
      },
      {
        "question": "How often should my AC be serviced?",
        "answer": "Once a year, ideally in spring before the first heat wave."
      },
      {
        "question": "How long does an air conditioner last?",
        "answer": "Typically 12 to 15 years with regular maintenance."
      }
    ]
  },
  "furnaces": {
    "answer": "Green Core Heating & Air installs, repairs, and maintains gas furnaces for homes across Sonoma and Marin counties. We fix no-heat calls, replace aging furnaces with right-sized high-efficiency models, and help homeowners compare a furnace with an all-electric heat pump when it's time to replace.",
    "sections": [
      {
        "heading": "Furnace repair",
        "body": [
          "The most common furnace calls are no heat, a furnace that starts and then shuts off, ignition or flame sensor problems, a blower that won't run, and strange noises or smells. Many of these come down to a dirty flame sensor, a failed igniter, a bad inducer or blower motor, or a clogged filter.",
          "We test the safety controls and combustion, explain what we found, and give you a written price before any repair."
        ]
      },
      {
        "heading": "Furnace installation and replacement",
        "body": [
          "If your furnace is 15 to 20 years old, needs a major repair, or can't keep the house comfortable, replacement usually makes sense. We size the new furnace with a load calculation, check the ducts and venting, and install to code with a permit.",
          "It's also the right moment to consider a heat pump, which replaces the furnace and adds cooling, and often qualifies for rebates. We'll price both options so you can decide."
        ],
        "bullets": [
          "High-efficiency furnace replacements",
          "Heat pump options priced side by side",
          "Permits and inspection handled"
        ]
      },
      {
        "heading": "Furnace maintenance",
        "body": [
          "A fall tune-up before the cold sets in keeps a furnace safe and reliable. We clean and check the burners, igniter, and flame sensor, test safety and limit switches, inspect the heat exchanger and venting, check the blower, and replace the filter."
        ]
      }
    ],
    "table": {
      "caption": "Replacing a furnace: your two main options",
      "columns": [
        "",
        "New gas furnace",
        "Heat pump"
      ],
      "rows": [
        [
          "Heating",
          "Yes",
          "Yes"
        ],
        [
          "Cooling",
          "Needs a separate AC",
          "Built in"
        ],
        [
          "Fuel",
          "Natural gas",
          "Electric"
        ],
        [
          "Rebates",
          "Rarely",
          "Often available"
        ],
        [
          "Electrical work",
          "Usually none",
          "Sometimes a panel upgrade"
        ]
      ]
    },
    "projects": [
      {
        "title": "Heat pump replaces an attic gas furnace in Petaluma",
        "date": "July 2026",
        "summary": "We removed an aging gas furnace from the attic and installed a high-efficiency Carrier heat pump, sized for the home, so it now heats and cools on one all-electric system.",
        "url": "https://trusty.app/projects/318467"
      },
      {
        "title": "Furnace and AC tune-up with duct repair in Sonoma",
        "date": "July 2026",
        "summary": "We serviced an American Standard furnace and outdoor unit, tested the electrical components, cleaned the condenser coil, and replaced damaged duct sections.",
        "url": "https://trusty.app/projects/324623"
      }
    ],
    "faqs": [
      {
        "question": "Why won't my furnace turn on?",
        "answer": "Common causes include a tripped breaker or switch, a dirty filter, a failed igniter, a dirty flame sensor, or a thermostat problem. If basic checks don't fix it, call us for a repair."
      },
      {
        "question": "Why does my furnace turn on and then shut off?",
        "answer": "This short cycling is often caused by a dirty flame sensor, an overheating furnace from a clogged filter or blocked vents, or an oversized system. We'll find the cause."
      },
      {
        "question": "Should I repair or replace my furnace?",
        "answer": "If your furnace is over about 15 years old and needs a major repair, replacement is usually the better investment. Newer furnaces are almost always worth repairing."
      },
      {
        "question": "Should I replace my furnace with a heat pump?",
        "answer": "Often, yes. A heat pump heats and cools, runs on electricity, and may qualify for rebates. If your home needs a large electrical upgrade, a new furnace may still be the better short-term choice. We'll price both."
      },
      {
        "question": "How often should a furnace be serviced?",
        "answer": "Once a year, ideally in the fall before heating season."
      },
      {
        "question": "How long does a furnace last?",
        "answer": "Typically 15 to 20 years with regular maintenance."
      }
    ]
  },
  "mini-splits": {
    "answer": "A ductless mini split is a heat pump that heats and cools individual rooms without ductwork, using a quiet outdoor unit and compact indoor units on the wall or ceiling. Green Core Heating & Air installs, repairs, and maintains mini splits, including Mitsubishi systems, for homes, additions, ADUs, and garages across Sonoma and Marin.",
    "sections": [
      {
        "heading": "Mini split installation",
        "body": [
          "Mini splits are a great fit for homes without ducts, older homes with wall heaters or baseboard heat, additions and ADUs, converted garages, and rooms that never get comfortable on the main system. A single-zone system serves one room; a multi-zone system connects several indoor units to one outdoor unit.",
          "We size each zone, plan clean line set routes with covers, install a dedicated electrical circuit and disconnect, and weigh in the refrigerant charge to the manufacturer's spec."
        ],
        "bullets": [
          "Single-zone and multi-zone systems",
          "Wall, ceiling, and ducted indoor units",
          "Clean line set routing and covers"
        ]
      },
      {
        "heading": "Mini split repair",
        "body": [
          "Common mini split problems include an indoor unit that won't heat or cool, water dripping from the indoor head, flashing error lights, and remote or sensor issues. Clogged drains and dirty indoor coils cause a lot of these calls."
        ]
      },
      {
        "heading": "Mini split maintenance",
        "body": [
          "Mini splits move a lot of air across small coils, so they need regular cleaning. Clean the filters every month or two, and have the indoor coil, blower wheel, and drain professionally cleaned once a year, more often in kitchens or with pets."
        ]
      }
    ],
    "projects": [
      {
        "title": "Mitsubishi ductless mini split installation in Novato",
        "date": "September 2026",
        "summary": "We installed a Mitsubishi ductless mini split with new line sets, a dedicated electrical disconnect, and a precisely weighed refrigerant charge.",
        "url": "https://trusty.app/projects/349319"
      }
    ],
    "faqs": [
      {
        "question": "Can a mini split heat my whole house?",
        "answer": "It can, with a multi-zone system or a few well-placed units, especially in smaller or open homes. For larger homes with good ductwork, a ducted heat pump is often the better choice."
      },
      {
        "question": "Are mini splits efficient?",
        "answer": "Yes. They're heat pumps, so they move heat instead of making it, and because there are no ducts, there's no duct loss."
      },
      {
        "question": "Where do mini splits work best?",
        "answer": "Homes without ductwork, additions and ADUs, converted garages, and rooms that are always too hot or too cold."
      },
      {
        "question": "How often should I clean my mini split?",
        "answer": "Clean or rinse the filters every month or two, and have the indoor coil, blower, and drain professionally cleaned once a year."
      },
      {
        "question": "Why is my mini split dripping water?",
        "answer": "Usually the condensate drain is clogged or the unit isn't level. Turn it off and call us so the water doesn't damage your wall."
      },
      {
        "question": "What brands of mini split do you install?",
        "answer": "We install Mitsubishi ductless systems, among others, and recommend equipment based on your home and budget."
      },
      {
        "question": "Do mini splits qualify for rebates?",
        "answer": "They often do, since they're heat pumps. Availability depends on where you live and current program funding, and we check for you."
      }
    ]
  },
  "duct-work": {
    "answer": "Green Core Heating & Air designs, repairs, and replaces ductwork for homes across Sonoma and Marin counties. Leaky, crushed, or undersized ducts are one of the biggest causes of hot and cold rooms, weak airflow, and high energy bills, and fixing them often matters as much as the equipment itself.",
    "sections": [
      {
        "heading": "Signs your ducts need work",
        "body": [
          "Ductwork is out of sight, so problems often show up as comfort issues instead."
        ],
        "bullets": [
          "Rooms that are always hotter or colder than the rest of the house",
          "Weak airflow from some vents",
          "Dusty rooms or a dusty attic near the ducts",
          "High bills even with newer equipment",
          "Ducts that are crushed, disconnected, or missing insulation"
        ]
      },
      {
        "heading": "Duct repair and sealing",
        "body": [
          "Many duct problems can be fixed without a full replacement: reconnecting and supporting loose runs, replacing crushed or damaged sections, and sealing joints with mastic so conditioned air ends up in your rooms instead of the attic or crawlspace."
        ]
      },
      {
        "heading": "Duct replacement and design",
        "body": [
          "When ducts are old, uninsulated, or poorly laid out, replacement is the better fix. We size new ducts for the airflow your system needs, insulate them (for example with R-8 insulated duct), and seal every joint. When equipment is replaced, California's energy code can also require duct leakage testing and third-party verification, and we take care of that when your job needs it."
        ]
      }
    ],
    "projects": [
      {
        "title": "Duct replacement in Novato",
        "date": "July 2026",
        "summary": "We replaced the home's duct system with new R-8 insulated duct for better airflow and efficiency.",
        "url": "https://trusty.app/projects/320370"
      },
      {
        "title": "Carrier system and crawlspace duct upgrade in Petaluma",
        "date": "April 2026",
        "summary": "We installed a Carrier fan coil and outdoor unit and rebuilt the crawlspace ducts with new insulated duct, sealing every joint with mastic.",
        "url": "https://trusty.app/projects/321572"
      },
      {
        "title": "Furnace and AC tune-up with duct repair in Sonoma",
        "date": "July 2026",
        "summary": "We serviced an American Standard furnace and outdoor unit, tested the electrical components, cleaned the condenser coil, and replaced damaged duct sections.",
        "url": "https://trusty.app/projects/324623"
      }
    ],
    "faqs": [
      {
        "question": "How do I know if my ducts are leaking?",
        "answer": "Hot or cold rooms, weak airflow at some vents, dusty rooms, and high bills are common signs. We inspect the ducts and can test for leakage."
      },
      {
        "question": "Should I replace my ducts when I replace my system?",
        "answer": "Often, yes. A new heat pump or furnace connected to old, leaky ducts won't perform as designed. We check your ducts during the estimate and tell you what they need."
      },
      {
        "question": "Can ducts be repaired instead of replaced?",
        "answer": "Many can. Reconnecting, supporting, sealing, and replacing damaged sections fixes a lot of problems for less than a full replacement."
      },
      {
        "question": "What kind of duct do you install?",
        "answer": "We use insulated duct sized for your system, such as R-8 insulated flex duct, and seal every joint with mastic."
      },
      {
        "question": "Will new ducts lower my energy bills?",
        "answer": "Sealed, insulated, properly sized ducts deliver more of the air you pay to heat and cool, which usually means better comfort and lower bills."
      }
    ]
  },
  "harvest-thermal": {
    "answer": "Harvest Thermal is an all-electric system that uses one high-efficiency heat pump to provide your home's heating, hot water, and cooling. Green Core Heating & Air designs and installs Harvest Thermal systems in Sonoma and Marin, often replacing both an old gas furnace and a gas water heater in one project.",
    "sections": [
      {
        "heading": "How Harvest Thermal works",
        "body": [
          "A heat pump heats water and stores it in an insulated tank. That stored hot water supplies your faucets and showers, and it also feeds an air handler that heats your home through your ducts. Smart controls run the heat pump when electricity is cheapest and cleanest on time-of-use rates, so you're storing heat ahead of time instead of paying peak prices.",
          "Because one system replaces two gas appliances, it's one of the most complete ways to take a home off gas."
        ]
      },
      {
        "heading": "Is Harvest Thermal right for my home?",
        "body": [
          "It's a strong fit for homes with existing ductwork, homeowners replacing both a furnace and a water heater, and households on time-of-use rates or with solar. We evaluate space for the tank and outdoor unit, your ducts, and your electrical panel before recommending it, and we'll tell you if a standard heat pump plus a heat pump water heater would serve you better."
        ],
        "bullets": [
          "Replaces a gas furnace and gas water heater",
          "Heating, hot water, and cooling from one heat pump",
          "Smart, time-of-use-aware controls"
        ]
      },
      {
        "heading": "Rebates",
        "body": [
          "Depending on where you live and current funding, heat pumps may qualify for rebates through TECH Clean California, BayREN, Sonoma Clean Power (Sonoma County), or MCE (Marin County). We check what's available and file the paperwork. The federal 25C tax credit ended for systems installed after December 31, 2025."
        ]
      }
    ],
    "projects": [
      {
        "title": "Harvest Thermal installation in Petaluma",
        "date": "July 2026",
        "summary": "We replaced an aging furnace and water heater with a Harvest Thermal system that handles heating, hot water, and cooling from one high-efficiency heat pump.",
        "url": "https://trusty.app/projects/318485"
      },
      {
        "title": "Harvest Thermal installation in San Rafael",
        "date": "April 2026",
        "summary": "We replaced an old Rheem water heater and York furnace with a Harvest Thermal system and a Carrier air handler.",
        "url": "https://trusty.app/projects/318463"
      }
    ],
    "faqs": [
      {
        "question": "What is a Harvest Thermal system?",
        "answer": "An all-electric system that uses one heat pump to provide heating, hot water, and cooling, with stored hot water and smart controls that shift energy use to cheaper times of day."
      },
      {
        "question": "What does Harvest Thermal replace?",
        "answer": "Usually your gas furnace and gas water heater, and it can provide cooling too."
      },
      {
        "question": "How does Harvest Thermal save money?",
        "answer": "It's very efficient, and its controls heat water when electricity is cheapest on time-of-use rates, then use that stored heat later."
      },
      {
        "question": "Does Harvest Thermal work with my existing ducts?",
        "answer": "In most homes, yes. Heat is delivered through an air handler connected to your ductwork. We check your ducts during the estimate."
      },
      {
        "question": "Is Harvest Thermal right for every home?",
        "answer": "Not always. Space for the tank and outdoor unit, ductwork, and your electrical panel all matter. We'll recommend it only if it's the right fit."
      },
      {
        "question": "Do you install Harvest Thermal near me?",
        "answer": "Yes. We've installed Harvest Thermal systems in homes in Petaluma and San Rafael and serve homeowners across Sonoma and Marin counties."
      }
    ]
  }
};

/** CompanyCam showcase jobs, reused on the Repair / Installation / Maintenance pages. */
export const showcaseProjects: Record<string, ShowcaseProject> = {
  "hp_petaluma": {
    "title": "Heat pump replaces an attic gas furnace in Petaluma",
    "date": "July 2026",
    "summary": "We removed an aging gas furnace from the attic and installed a high-efficiency Carrier heat pump, sized for the home, so it now heats and cools on one all-electric system.",
    "url": "https://trusty.app/projects/318467"
  },
  "hp_santarosa": {
    "title": "Carrier heat pump and air handler installation in Santa Rosa",
    "date": "August 2026",
    "summary": "We replaced dated equipment with a high-efficiency Carrier heat pump and a new air handler, with new refrigerant lines, condensate drainage, and an upgraded electrical disconnect.",
    "url": "https://trusty.app/projects/337703"
  },
  "ht_petaluma": {
    "title": "Harvest Thermal installation in Petaluma",
    "date": "July 2026",
    "summary": "We replaced an aging furnace and water heater with a Harvest Thermal system that handles heating, hot water, and cooling from one high-efficiency heat pump.",
    "url": "https://trusty.app/projects/318485"
  },
  "ht_sanrafael": {
    "title": "Harvest Thermal installation in San Rafael",
    "date": "April 2026",
    "summary": "We replaced an old Rheem water heater and York furnace with a Harvest Thermal system and a Carrier air handler.",
    "url": "https://trusty.app/projects/318463"
  },
  "ms_novato": {
    "title": "Mitsubishi ductless mini split installation in Novato",
    "date": "September 2026",
    "summary": "We installed a Mitsubishi ductless mini split with new line sets, a dedicated electrical disconnect, and a precisely weighed refrigerant charge.",
    "url": "https://trusty.app/projects/349319"
  },
  "ac_santarosa": {
    "title": "Air conditioning added to an existing furnace in Santa Rosa",
    "date": "April 2026",
    "summary": "We added central air conditioning to the home's existing furnace so the homeowners can stay cool through Santa Rosa summers.",
    "url": "https://trusty.app/projects/321571"
  },
  "ac_petaluma_roof": {
    "title": "Rooftop AC replacement in Petaluma",
    "date": "July 2026",
    "summary": "We replaced an aging, unreliable rooftop air conditioner, handling the permit, crane lift, and inspection from start to finish.",
    "url": "https://trusty.app/projects/321569"
  },
  "ac_santarosa_repair": {
    "title": "AC repair and refrigerant service in Santa Rosa",
    "date": "August 2026",
    "summary": "We diagnosed the system with digital gauges, sealed leaking refrigerant line joints, and verified electrical connections to restore steady cooling.",
    "url": "https://trusty.app/projects/321570"
  },
  "duct_novato": {
    "title": "Duct replacement in Novato",
    "date": "July 2026",
    "summary": "We replaced the home's duct system with new R-8 insulated duct for better airflow and efficiency.",
    "url": "https://trusty.app/projects/320370"
  },
  "duct_petaluma": {
    "title": "Carrier system and crawlspace duct upgrade in Petaluma",
    "date": "April 2026",
    "summary": "We installed a Carrier fan coil and outdoor unit and rebuilt the crawlspace ducts with new insulated duct, sealing every joint with mastic.",
    "url": "https://trusty.app/projects/321572"
  },
  "sonoma_tuneup": {
    "title": "Furnace and AC tune-up with duct repair in Sonoma",
    "date": "July 2026",
    "summary": "We serviced an American Standard furnace and outdoor unit, tested the electrical components, cleaned the condenser coil, and replaced damaged duct sections.",
    "url": "https://trusty.app/projects/324623"
  },
  "rp_maint": {
    "title": "HVAC maintenance and electrical diagnostics in Rohnert Park",
    "date": "July 2026",
    "summary": "We inspected the outdoor unit, attic air handler, and furnace, tested capacitors, contactors, and controls, checked refrigerant pressures, and cleared the condensate drain.",
    "url": "https://trusty.app/projects/326283"
  },
  "pet_maint": {
    "title": "Condenser tune-up and cleaning in Petaluma",
    "date": "July 2026",
    "summary": "We cleaned and serviced the outdoor condenser units and checked the electrical disconnects to keep the cooling system running reliably through summer.",
    "url": "https://trusty.app/projects/324617"
  }
};

/** Extra depth for the Repair, Installation, and Maintenance pages. Projects are keys into showcaseProjects. */
export type ServiceTypeDetails = Omit<ServiceDetails, "projects"> & { projects?: string[] };

export const serviceTypeDetails: Record<string, ServiceTypeDetails> = {
  "hvac-repair": {
    "answer": "Green Core Heating & Air repairs heat pumps, air conditioners, furnaces, ductless mini splits, ductwork, Harvest Thermal systems, and heat pump, tankless, gas, and electric water heaters across Sonoma and Marin counties. Our phones are answered 24/7, we aim to get out same-day or next-day for urgent calls depending on the season, and you get a written price before any work starts.",
    "sections": [
      {
        "heading": "Signs you need a repair",
        "body": [
          "Most breakdowns give some warning first. Calling early usually means a smaller, less expensive fix."
        ],
        "bullets": [
          "No heat, no cooling, or no hot water",
          "Air from the vents that's lukewarm or the wrong temperature",
          "A system that turns on and off every few minutes",
          "Ice on a heat pump, AC coil, or refrigerant line that doesn't clear",
          "Water leaking around the furnace, indoor unit, or water heater",
          "New banging, grinding, squealing, or buzzing noises",
          "A burning smell, or bills that jump for no clear reason"
        ]
      },
      {
        "heading": "Quick checks before you call",
        "body": [
          "A few simple checks can save you a service call. If none of these fix it, call us at (707) 988-5858."
        ],
        "bullets": [
          "Make sure the thermostat is set to heat or cool and has fresh batteries",
          "Check the breaker for the system or water heater",
          "Replace a dirty air filter",
          "Clear leaves and debris from around the outdoor unit",
          "For a gas water heater, check that the pilot or burner is lit"
        ]
      },
      {
        "heading": "Safety first",
        "body": [
          "If you smell gas, don't use switches or flames. Leave the house and call PG&E or 911 from outside. If you see scorch marks, smell burning, or a breaker keeps tripping, turn the system off and call us."
        ]
      },
      {
        "heading": "Repair or replace?",
        "body": [
          "We'll always tell you whether a repair makes sense. As a rule of thumb, repairs are usually worth it on newer equipment. Replacement is worth a look when a system is near the end of its typical lifespan, needs a major part like a compressor or heat exchanger, or keeps breaking down. We'll price both options so you can decide, and if you choose to replace, we can usually apply what we learned during the repair visit to the new design."
        ]
      }
    ],
    "table": {
      "caption": "Typical lifespan and when to consider replacing",
      "columns": [
        "System",
        "Typical lifespan",
        "Consider replacing when"
      ],
      "rows": [
        [
          "Heat pump",
          "12 to 15 years",
          "It needs a compressor or major repair past about 10 years"
        ],
        [
          "Air conditioner",
          "12 to 15 years",
          "It needs a major repair and your furnace is aging too"
        ],
        [
          "Gas furnace",
          "15 to 20 years",
          "It has a cracked heat exchanger or keeps failing"
        ],
        [
          "Ductless mini split",
          "12 to 20 years",
          "Repairs are frequent or parts are hard to get"
        ],
        [
          "Gas or electric tank water heater",
          "8 to 12 years",
          "The tank itself is leaking"
        ],
        [
          "Tankless water heater",
          "15 to 20 years",
          "The heat exchanger fails on an older unit"
        ],
        [
          "Heat pump water heater",
          "10 to 15 years",
          "The compressor or sealed system fails out of warranty"
        ]
      ]
    },
    "projects": [
      "ac_santarosa_repair",
      "sonoma_tuneup",
      "rp_maint"
    ],
    "faqs": [
      {
        "question": "What should I do if I smell gas?",
        "answer": "Don't use light switches, appliances, or flames. Leave the house right away and call PG&E or 911 from outside. Once the gas utility has made it safe, we can repair the appliance."
      },
      {
        "question": "Why is my water heater leaking?",
        "answer": "A leak from a valve or fitting can often be repaired. A leak from the tank itself means the tank has failed and needs to be replaced. Turn off the water supply and power or gas to the heater and call us."
      },
      {
        "question": "Do you repair systems in Petaluma, Santa Rosa, and Marin?",
        "answer": "Yes. We repair heating, cooling, and water heaters in Petaluma, Santa Rosa, Rohnert Park, Cotati, Sonoma, Windsor, Sebastopol, Novato, San Rafael, Mill Valley, San Anselmo, Fairfax, and Corte Madera."
      }
    ]
  },
  "hvac-installation": {
    "answer": "Green Core Heating & Air designs and installs heat pumps, air conditioning, furnaces, ductless mini splits, ductwork, Harvest Thermal systems, and water heaters for homes across Sonoma and Marin counties. Every install starts with a free in-home estimate and a load calculation, and we handle the permit, inspection, and rebate paperwork.",
    "sections": [
      {
        "heading": "How we design your system",
        "body": [
          "A new system is only as good as its design. Before we recommend equipment, we look at your whole home, not just the old unit's label."
        ],
        "bullets": [
          "A room-by-room load calculation to size the system correctly",
          "A duct inspection, since leaky or undersized ducts undercut new equipment",
          "An electrical panel review if you're switching from gas to electric",
          "Written options, so you can compare a heat pump, furnace and AC, or mini split side by side"
        ]
      },
      {
        "heading": "Permits, code, and inspections",
        "body": [
          "We pull the permit and schedule the inspection for every job that needs one. When equipment is replaced, California's energy code can also require duct leakage testing and third-party HERS verification, and we coordinate that when your job needs it. New heat pumps and air conditioners use the newer, lower-impact A2L refrigerants (like R-454B), installed to the manufacturer's requirements."
        ]
      },
      {
        "heading": "Rebates and incentives",
        "body": [
          "Depending on where you live and current funding, heat pumps and heat pump water heaters may qualify for rebates through TECH Clean California, BayREN, Sonoma Clean Power (Sonoma County), or MCE (Marin County). We check what's available and file the paperwork. The federal 25C tax credit ended for systems installed after December 31, 2025."
        ]
      },
      {
        "heading": "Installs from start to finish",
        "body": [
          "Most water heater replacements take part of a day, and gas and electric tank installs start at $2,850, with same-day replacement when our schedule allows. Heat pump, furnace, and AC replacements typically take one to a few days depending on ductwork and electrical work. We protect your floors, clean up every day, and walk you through the new system when we're done."
        ]
      }
    ],
    "table": {
      "caption": "Which system is right for your home?",
      "columns": [
        "System",
        "Best for",
        "Needs ducts?",
        "Provides"
      ],
      "rows": [
        [
          "Ducted heat pump",
          "Most homes with ducts replacing a furnace and AC",
          "Yes",
          "Heating and cooling"
        ],
        [
          "Gas furnace + AC",
          "Homes staying on gas for now",
          "Yes",
          "Heating and cooling"
        ],
        [
          "Ductless mini split",
          "Homes without ducts, additions, ADUs, problem rooms",
          "No",
          "Heating and cooling"
        ],
        [
          "Harvest Thermal",
          "Replacing a gas furnace and gas water heater together",
          "Yes",
          "Heating, cooling, and hot water"
        ],
        [
          "Heat pump water heater",
          "Replacing a water heater and going electric",
          "No",
          "Hot water"
        ]
      ]
    },
    "projects": [
      "hp_santarosa",
      "ht_petaluma",
      "ms_novato"
    ],
    "faqs": [
      {
        "question": "Should I replace my furnace and AC with a heat pump?",
        "answer": "For most North Bay homes, a heat pump is worth considering: it heats and cools on one all-electric system and often qualifies for rebates. If your home needs a large electrical upgrade, a new furnace and AC may make more sense for now. We'll price both."
      },
      {
        "question": "What size system does my home need?",
        "answer": "We size every system with a room-by-room load calculation that accounts for your insulation, windows, and sun exposure, instead of guessing from square footage or the old unit's size."
      },
      {
        "question": "Do I need to replace my ductwork with a new system?",
        "answer": "Not always. We inspect your ducts during the estimate. If they're leaky, crushed, or undersized, we'll recommend repairs or replacement so the new system performs as designed."
      }
    ]
  },
  "hvac-maintenance": {
    "answer": "Green Core Heating & Air provides tune-ups and maintenance for heat pumps, air conditioners, furnaces, ductless mini splits, Harvest Thermal systems, and water heaters across Sonoma and Marin counties. Most systems need a tune-up once a year; heat pumps that heat and cool do best with a check before summer and again before winter.",
    "sections": [
      {
        "heading": "What a tune-up includes",
        "body": [
          "Every tune-up is tailored to the equipment, but most include:"
        ],
        "bullets": [
          "Testing capacitors, contactors, and electrical connections",
          "Checking refrigerant pressures and temperature split",
          "Cleaning the outdoor coil and checking the indoor coil",
          "Clearing the condensate drain and checking for leaks",
          "Inspecting burners, igniter, flame sensor, and venting on gas furnaces",
          "Checking the blower, airflow, filter, and thermostat",
          "A written summary of what we found, with no-pressure recommendations"
        ]
      },
      {
        "heading": "Signs it's time for a tune-up",
        "body": [
          "If it's been more than a year since your last service, it's time. Other signs include rising energy bills, weaker airflow, longer run times, a system that's louder than it used to be, or a heat pump or AC that struggles on the first hot day."
        ]
      },
      {
        "heading": "What you can do between visits",
        "body": [
          "A little homeowner care goes a long way."
        ],
        "bullets": [
          "Replace or clean your air filter every one to three months",
          "Keep about two feet of clear space around the outdoor unit",
          "Rinse ductless mini split filters every month or two",
          "Keep supply and return vents open and unblocked",
          "Test your water heater's temperature and pressure relief valve once a year, if you're comfortable doing it"
        ]
      },
      {
        "heading": "More than a quick check",
        "body": [
          "Most no-cooling and no-heat calls we see start small: a weak capacitor, a clogged drain, a dirty flame sensor, or a slow refrigerant leak. A tune-up is our chance to catch those before they leave you without heat on a cold night. It also gives you an honest read on how much life your equipment has left, so a replacement never catches you by surprise."
        ]
      }
    ],
    "table": {
      "caption": "When to schedule maintenance",
      "columns": [
        "System",
        "When",
        "What we focus on"
      ],
      "rows": [
        [
          "Heat pump",
          "Spring and fall",
          "Coils, refrigerant, defrost cycle, electrical parts, drain"
        ],
        [
          "Air conditioner",
          "Spring",
          "Outdoor coil, refrigerant, capacitor and contactor, drain"
        ],
        [
          "Gas furnace",
          "Fall",
          "Burners, igniter, flame sensor, safeties, venting, blower"
        ],
        [
          "Ductless mini split",
          "Once a year",
          "Indoor coil, blower wheel, drain, outdoor unit"
        ],
        [
          "Tank water heater",
          "Once a year",
          "Sediment flush, anode rod, relief valve, venting"
        ],
        [
          "Tankless water heater",
          "Once a year",
          "Descaling, inlet filter, venting, error history"
        ],
        [
          "Heat pump water heater",
          "Once a year",
          "Air filter, condensate drain, anode rod, relief valve"
        ]
      ]
    },
    "projects": [
      "rp_maint",
      "pet_maint",
      "sonoma_tuneup"
    ],
    "faqs": [
      {
        "question": "When is the best time to schedule a tune-up?",
        "answer": "Spring for air conditioners and heat pumps, before the first heat wave, and fall for furnaces and heat pumps, before the cold sets in. Booking ahead of the busy season also makes scheduling easier."
      },
      {
        "question": "How often should I change my air filter?",
        "answer": "Every one to three months, depending on the filter, pets, and dust. Check it monthly during heavy heating or cooling."
      },
      {
        "question": "Does a tankless water heater need maintenance?",
        "answer": "Yes. Tankless water heaters should be descaled once a year, or more often with hard water, and the inlet filter should be cleaned so the unit keeps running efficiently."
      }
    ]
  }
};
