import type { Service, ServiceCategory } from "@/types";

export const services: Service[] = [
  {
    slug: "heat-pumps",
    category: "heating-cooling",
    related: ["heat-pump-water-heaters", "mini-splits", "harvest-thermal"],
    name: "Heat Pump Installation, Repair & Replacement",
    shortName: "Heat Pumps",
    tagline: "Energy-efficient heating and cooling in one system.",
    summary:
      "Heat pumps are one of the most energy-efficient ways to heat and cool your home — reliable year-round comfort in a single, all-electric system.",
    heroImage: "/images/services/heat-pumps.jpg",
    cardImage: "/images/services/cards/heat-pumps.jpg",
    cardImageAlt: "Heat pump outdoor unit — installation and service from Green Core Heating & Air",
    overview: [
      "A heat pump heats and cools your home with one all-electric system. The North Bay's mild winters are ideal for heat pumps, and inland summer afternoons that climb into the 90s are no problem for one sized correctly, which makes it one of the most efficient ways to stay comfortable year-round.",
      "Green Core Heating & Air installs, repairs, and maintains heat pumps in Petaluma, Santa Rosa, Novato, San Rafael, and across Sonoma and Marin counties. Most of our installs replace an aging gas furnace and AC, and we design each one around your home's layout, insulation, and ducts, because a well-designed system matters more than the brand on the box.",
    ],
    benefits: [
      {
        title: "One system, year-round",
        description:
          "Heating in winter, cooling in summer — all from a single, all-electric unit.",
      },
      {
        title: "Energy efficient",
        description:
          "Heat pumps move heat rather than create it, which uses far less energy.",
      },
      {
        title: "Properly sized",
        description:
          "We design around your home's layout, insulation, and airflow.",
      },
      {
        title: "Quiet, reliable operation",
        description:
          "Modern equipment runs quietly and delivers consistent comfort.",
      },
    ],
    faqs: [
      {
        question: "How does a heat pump work?",
        answer:
          "A heat pump transfers heat rather than generating it, providing both heating and cooling in one system.",
      },
      {
        question: "Are heat pumps efficient in colder weather?",
        answer:
          "Yes. Modern systems are designed to perform well even in lower temperatures.",
      },
      {
        question: "Is a heat pump better than a furnace and AC?",
        answer:
          "In many cases, yes — especially for energy efficiency and all-in-one performance.",
      },
      {
        question: "How long does a heat pump last?",
        answer:
          "Typically 12–15 years with proper installation and maintenance.",
      },
    ],
  },
  {
    slug: "air-conditioning",
    category: "heating-cooling",
    name: "Air Conditioning Installation, Repair & Replacement",
    shortName: "Air Conditioning",
    tagline: "Cool, comfortable, and efficient when the temperature rises.",
    summary:
      "A properly designed AC system keeps your home cool and efficient — professional installation, repair, and replacement tailored to your home.",
    heroImage: "/images/services/air-conditioning.jpg",
    cardImage: "/images/services/cards/air-conditioning.jpg",
    cardImageAlt: "Central air conditioner outdoor unit — installation and service from Green Core Heating & Air",
    overview: [
      "Summers in the North Bay can swing from foggy mornings to hot afternoons, especially inland in Santa Rosa, Windsor, and the Sonoma Valley. Green Core Heating & Air installs, repairs, and maintains central air conditioning for homes across Sonoma and Marin counties, from adding cooling to an existing furnace to replacing a worn-out rooftop unit.",
      "Many AC problems come from airflow and ductwork, not the equipment, so we look at the whole system. That's how we fix hot upstairs rooms and high summer bills instead of just swapping parts.",
    ],
    benefits: [
      {
        title: "Design-first sizing",
        description:
          "Right-sized equipment eliminates uneven cooling and high bills.",
      },
      {
        title: "Whole-system approach",
        description:
          "We address airflow and ductwork — not just the AC unit.",
      },
      {
        title: "Honest repair or replace",
        description:
          "Clear recommendations based on your system's age and condition.",
      },
      {
        title: "Built for efficiency",
        description:
          "Lower energy use without compromising comfort.",
      },
    ],
    faqs: [
      {
        question: "How do I know if I need a new air conditioner?",
        answer:
          "If your system is older, inefficient, or frequently breaking down, replacement may be the best option.",
      },
      {
        question: "Why is my AC not cooling evenly?",
        answer:
          "This is often caused by airflow or ductwork issues, not just the AC unit.",
      },
      {
        question: "What size air conditioner do I need?",
        answer:
          "Proper sizing depends on your home's layout, insulation, and airflow — not just square footage.",
      },
      {
        question: "How can I lower my cooling costs?",
        answer:
          "Upgrading your system and improving airflow can significantly reduce energy use.",
      },
    ],
  },
  {
    slug: "furnaces",
    category: "heating-cooling",
    name: "Furnace Installation, Repair & Replacement",
    shortName: "Furnaces",
    tagline: "Dependable heating when you need it most.",
    summary:
      "Expert furnace installation, repair, and replacement — consistent comfort, improved efficiency, and long-term reliability.",
    heroImage: "/images/services/furnaces.jpg",
    cardImage: "/images/services/cards/furnaces.jpg",
    cardImageAlt: "High-efficiency gas furnace — installation and service from Green Core Heating & Air",
    overview: [
      "Green Core Heating & Air repairs, maintains, and replaces gas furnaces for homes in Petaluma, Santa Rosa, Novato, San Rafael, and across Sonoma and Marin counties. Whether your furnace won't light on a cold morning or it has simply reached the end of its life, we'll find the real problem and give you honest options.",
      "When it's time to replace, we'll show you a high-efficiency furnace and an all-electric heat pump side by side, with written pricing for each, so you can choose what's right for your home and budget.",
    ],
    benefits: [
      {
        title: "Proper sizing",
        description:
          "Right-sized systems run longer, quieter, and more efficiently.",
      },
      {
        title: "Airflow first",
        description:
          "We address airflow issues that cause short cycling and hot/cold spots.",
      },
      {
        title: "Efficient upgrades",
        description:
          "High-efficiency furnaces and heat pump options when it's time to replace.",
      },
      {
        title: "Long-term reliability",
        description:
          "Installed right the first time, designed to last.",
      },
    ],
    faqs: [
      {
        question: "How long do furnaces typically last?",
        answer: "Most furnaces last 15–20 years.",
      },
      {
        question: "Why is my furnace turning on and off frequently?",
        answer:
          "This is called short cycling and is often caused by sizing or airflow issues.",
      },
      {
        question: "When should I replace my furnace?",
        answer:
          "If repairs are frequent or efficiency is low, replacement is often the better option.",
      },
      {
        question: "Can I upgrade to a more efficient system?",
        answer: "Yes, including high-efficiency furnaces or heat pump systems.",
      },
    ],
  },
  {
    slug: "mini-splits",
    category: "heating-cooling",
    name: "Mini Split (Ductless) Installation, Repair & Replacement",
    shortName: "Mini Splits",
    tagline: "Flexible, efficient comfort — without ductwork.",
    summary:
      "Ductless mini splits deliver targeted comfort with zoned control — ideal for additions, garages, older homes, and uneven-temperature spaces.",
    heroImage: "/images/services/mini-splits.jpg",
    cardImage: "/images/services/cards/mini-splits.jpg",
    cardImageAlt: "Ductless mini split indoor unit — installation and service from Green Core Heating & Air",
    overview: [
      "Ductless mini splits heat and cool individual rooms without any ductwork. Green Core Heating & Air installs, repairs, and maintains mini splits for homes across Sonoma and Marin counties, and they're especially popular in the area's older homes, additions, ADUs, and converted garages.",
      "Each indoor unit has its own temperature control, so you only heat or cool the rooms you're using. We plan the indoor and outdoor unit locations, line set routes, and electrical work up front so the finished install looks clean and runs quietly.",
    ],
    benefits: [
      {
        title: "No ductwork required",
        description:
          "Perfect for older homes, additions, and ADUs.",
      },
      {
        title: "Zoned control",
        description:
          "Heat or cool individual rooms for comfort and efficiency.",
      },
      {
        title: "Energy efficient",
        description:
          "Avoids the losses associated with traditional ducted systems.",
      },
      {
        title: "Designed for your home",
        description:
          "Placement and sizing based on your layout and needs.",
      },
    ],
    faqs: [
      {
        question: "What is a mini split system?",
        answer:
          "A ductless system that heats and cools individual rooms or zones.",
      },
      {
        question: "Are mini splits energy efficient?",
        answer:
          "Yes, especially because they allow zoned control and avoid duct losses.",
      },
      {
        question: "Where are mini splits best used?",
        answer: "Additions, garages, and homes without ductwork.",
      },
      {
        question: "How many units do I need?",
        answer:
          "It depends on your home layout and desired comfort zones.",
      },
    ],
  },
  {
    slug: "duct-work",
    category: "heating-cooling",
    name: "Ductwork Installation, Repair & Replacement",
    shortName: "Duct Work",
    tagline: "Your ductwork is half the system — we get it right.",
    summary:
      "Improve airflow, eliminate inefficiencies, and enhance comfort with ductwork installation, repair, and replacement done properly.",
    heroImage: "/images/services/duct-work.jpg",
    cardImage: "/images/services/cards/duct-work.jpg",
    cardImageAlt: "New metal and insulated ductwork — installation and service from Green Core Heating & Air",
    overview: [
      "Your ducts carry every bit of heated and cooled air through your home. In many North Bay homes they run through hot attics and damp crawlspaces, where leaks, crushed runs, and missing insulation waste energy and leave some rooms uncomfortable.",
      "Green Core Heating & Air inspects, repairs, seals, and replaces ductwork across Sonoma and Marin counties, often as part of a new heat pump or furnace install. Better ducts can make an existing system feel like a new one.",
    ],
    benefits: [
      {
        title: "Balanced airflow",
        description:
          "Every room gets the right amount of air.",
      },
      {
        title: "Lower energy bills",
        description:
          "Sealed, properly sized ducts deliver more conditioned air.",
      },
      {
        title: "Quieter operation",
        description:
          "Correctly sized ducts reduce noise and equipment strain.",
      },
      {
        title: "Cleaner indoor air",
        description:
          "Sealed ducts keep dust and attic air out of your home.",
      },
    ],
    faqs: [
      {
        question: "How do I know if my ductwork needs replacement?",
        answer:
          "Signs include uneven temperatures, poor airflow, and high energy bills.",
      },
      {
        question: "Can bad ductwork affect my system?",
        answer: "Yes, it can reduce efficiency and strain your equipment.",
      },
      {
        question: "Is duct sealing worth it?",
        answer:
          "In many cases, it improves airflow and reduces energy costs.",
      },
      {
        question: "How long does ductwork last?",
        answer:
          "Typically 15–25 years, depending on quality and installation.",
      },
    ],
  },
  {
    slug: "harvest-thermal",
    category: "heating-cooling",
    related: ["heat-pump-water-heaters", "heat-pumps", "water-heaters"],
    name: "Harvest Thermal Installation & Energy Solutions",
    shortName: "Harvest Thermal",
    tagline: "Smart water heating and energy management for the modern home.",
    summary:
      "Harvest Thermal uses one all-electric heat pump for heating, hot water, and cooling, with smart controls that shift energy use to cheaper hours.",
    heroImage: "/images/services/harvest-thermal.jpg",
    overview: [
      "Harvest Thermal combines your home's heating, hot water, and cooling into one all-electric heat pump system. Green Core Heating & Air installs Harvest Thermal systems in Sonoma and Marin counties, with completed projects in Petaluma and San Rafael.",
      "It's a smart choice when both your gas furnace and gas water heater are getting old. Instead of replacing two gas appliances, you replace them with one system that stores heat when electricity is cheapest and uses it when you need it.",
    ],
    benefits: [
      {
        title: "Smart energy management",
        description:
          "Optimizes when and how energy is used throughout the day.",
      },
      {
        title: "Lower operating costs",
        description:
          "Time-of-use optimization means meaningful savings.",
      },
      {
        title: "Integrates with heat pumps",
        description:
          "Works seamlessly with modern heat pump HVAC systems.",
      },
      {
        title: "Home-specific design",
        description:
          "We evaluate whether it's the right fit before we ever install.",
      },
    ],
    faqs: [
      {
        question: "What is a Harvest Thermal system?",
        answer:
          "A system that combines heat pump water heating with smart energy management.",
      },
      {
        question: "How does it save energy?",
        answer: "By optimizing when and how energy is used in your home.",
      },
      {
        question: "Is it right for every home?",
        answer: "Not always — proper evaluation is important.",
      },
      {
        question: "Can it work with other systems?",
        answer: "Yes, especially with heat pump HVAC systems.",
      },
    ],
  },
  {
    slug: "water-heaters",
    category: "water-heating",
    name: "Water Heater Installation, Repair & Replacement",
    shortName: "Water Heaters",
    tagline: "Heat pump, tankless, gas, and electric water heaters, installed right.",
    summary: "Heat pump, tankless, gas, and electric water heater installation, repair, and replacement across Sonoma and Marin. Gas and electric tank installs start at $2,850.",
    heroImage: "/images/services/water-heaters.jpg",
    overview: [
      "No hot water, a leaking tank, or a water heater that's simply getting old? Green Core Heating & Air installs, repairs, and replaces water heaters for homes in Petaluma, Santa Rosa, Rohnert Park, Novato, San Rafael, and across Sonoma and Marin counties.",
      "We work with every common type: heat pump water heaters, tankless water heaters, gas tank water heaters, and electric tank water heaters. The brands we install include SANCO2, GE GeoSpring, Navien, Bradford White, and American Standard.",
      "Not sure which type is right? A gas or electric tank is the simplest like-for-like swap. A tankless unit gives you endless hot water for a busy household. A heat pump water heater costs the least to run and usually qualifies for the biggest rebates. We'll walk you through the tradeoffs for your home, your budget, and how your family uses hot water.",
      "Gas and electric tank water heater installs start at $2,850. Heat pump and tankless systems are priced to your home. Your final price depends on the type, size, and what your home needs, like venting, gas line, or electrical work. You'll get a clear written price before any work starts. Same-day water heater replacement is available when our schedule allows.",
      "Depending on where you live and current program funding, you may qualify for rebates through TECH Clean California, Sonoma Clean Power (Sonoma County), MCE (Marin County), or BayREN. We check what's available for your home and handle the paperwork. Want one system for heating, cooling, and hot water? Ask us about Harvest Thermal."
    ],
    benefits: [
      {
        "title": "Every type, one team",
        "description": "Heat pump, tankless, gas, and electric. We'll recommend what fits, not what's easiest to sell."
      },
      {
        "title": "Same-day replacement",
        "description": "When your schedule and ours line up, we can replace a failed water heater the same day."
      },
      {
        "title": "Up-front pricing",
        "description": "Tank installs start at $2,850, with a clear written price before we begin."
      },
      {
        "title": "Rebates handled",
        "description": "We find the programs you qualify for and file the paperwork for you."
      }
    ],
    faqs: [
      {
        "question": "How much does a new water heater cost?",
        "answer": "Gas and electric tank water heater installs start at $2,850. Heat pump and tankless water heaters cost more up front and are priced to your home. The final price depends on the type, the size, and whether your home needs venting, gas line, or electrical updates. Rebates can bring the cost of a heat pump water heater down."
      },
      {
        "question": "Do you offer same-day water heater replacement?",
        "answer": "Yes, when our schedule allows. Call (707) 988-5858 and we'll tell you honestly how soon we can get there."
      },
      {
        "question": "How do I know if I should repair or replace my water heater?",
        "answer": "Most tank water heaters last about 8 to 12 years. If yours is in that range and leaking from the tank, rusting, or struggling to keep up, replacement usually makes more sense than repair. Newer units with a bad part are often worth fixing."
      },
      {
        "question": "Which type of water heater is best?",
        "answer": "It depends on your home. Heat pump water heaters are the cheapest to run and earn the biggest rebates. Tankless gives endless hot water. Gas and electric tanks are the lowest up-front cost and the simplest swap. We'll help you compare."
      },
      {
        "question": "What brands do you install?",
        "answer": "We install SANCO2 and GE GeoSpring heat pump water heaters, Navien tankless water heaters, and Bradford White and American Standard tank water heaters."
      },
      {
        "question": "Are there rebates for new water heaters?",
        "answer": "Heat pump water heaters often qualify for rebates through TECH Clean California, Sonoma Clean Power, MCE, or BayREN, depending on where you live and current funding. We check what's available and handle the paperwork. The federal 25C tax credit ended for systems installed after December 31, 2025."
      },
      {
        "question": "What areas do you serve?",
        "answer": "We install water heaters throughout Sonoma and Marin counties, including Petaluma, Rohnert Park, Cotati, Santa Rosa, Sebastopol, Novato, San Rafael, Mill Valley, and Tiburon."
      }
    ],
    related: [
      "heat-pump-water-heaters",
      "tankless-water-heaters",
      "gas-water-heaters",
      "electric-water-heaters",
      "harvest-thermal"
    ],
  },
  {
    slug: "heat-pump-water-heaters",
    category: "water-heating",
    name: "Heat Pump Water Heater Installation",
    shortName: "Heat Pump Water Heaters",
    tagline: "The most efficient way to heat water, with rebates that help cover the cost.",
    summary: "SANCO2 and GE GeoSpring heat pump water heaters installed across Sonoma and Marin. Lower bills, cleaner hot water, and help with rebates.",
    heroImage: "/images/services/heat-pump-water-heaters.jpg",
    cardImage: "/images/services/cards/heat-pump-water-heaters.jpg",
    cardImageAlt: "Heat pump water heater — installation and service from Green Core Heating & Air",
    overview: [
      "A heat pump water heater pulls heat from the air and moves it into your water instead of burning gas or running a heating element. That makes it up to three to four times more efficient than a standard electric tank, and a clean, all-electric replacement for a gas water heater.",
      "Green Core installs two kinds. SANCO2 is a split system: a quiet outdoor heat pump uses CO2, a natural refrigerant, to heat water stored in an indoor tank, and it keeps working well on cold mornings. GE GeoSpring is a hybrid, all-in-one tank that sits where your current water heater does, often in a garage, and pulls heat from the surrounding air.",
      "Every install starts with a site check. We look at where the unit will go, airflow and space, condensate drainage, and your electrical panel. Most heat pump water heaters need a dedicated circuit, and if you're switching from gas, we'll tell you up front whether your panel can handle it.",
      "Depending on where you live and current program funding, you may qualify for rebates through TECH Clean California, Sonoma Clean Power (Sonoma County), MCE (Marin County), or BayREN. We check what's available for your home and handle the paperwork. The federal 25C tax credit ended for systems installed after December 31, 2025.",
      "Heat pump water heaters are priced to your home, since cost depends on the model, size, location, and any electrical work. You'll get a clear written price before any work starts, and we'll factor in the rebates you qualify for. We install heat pump water heaters in Petaluma, Santa Rosa, Rohnert Park, Sebastopol, Novato, San Rafael, Mill Valley, and throughout Sonoma and Marin counties."
    ],
    benefits: [
      {
        "title": "Lowest operating cost",
        "description": "Moves heat instead of making it, so it uses far less energy than a standard tank."
      },
      {
        "title": "Rebate-eligible",
        "description": "Often qualifies for TECH Clean California, Sonoma Clean Power, MCE, or BayREN rebates."
      },
      {
        "title": "All-electric",
        "description": "No gas combustion or flue in your home. Pairs well with solar."
      },
      {
        "title": "Proven brands",
        "description": "SANCO2 split systems and GE GeoSpring hybrid tanks, sized for your household."
      }
    ],
    faqs: [
      {
        "question": "How does a heat pump water heater work?",
        "answer": "It works like a refrigerator in reverse. A small heat pump pulls heat from the surrounding air and transfers it into the water, which takes much less electricity than heating the water directly."
      },
      {
        "question": "What's the difference between SANCO2 and GE GeoSpring?",
        "answer": "SANCO2 is a split system with an outdoor heat pump and an indoor storage tank, using CO2 refrigerant. GE GeoSpring is a hybrid, all-in-one tank that installs in one spot, often a garage. We'll recommend the one that fits your space and hot water needs."
      },
      {
        "question": "Will I need an electrical panel upgrade?",
        "answer": "Not always. Most units need a dedicated circuit. During the estimate we check your panel and tell you if any electrical work is needed before you decide."
      },
      {
        "question": "Do heat pump water heaters work in cold weather?",
        "answer": "Yes. North Bay winters are mild, and SANCO2 systems are designed to keep heating water efficiently even on cold mornings."
      },
      {
        "question": "Are there rebates for heat pump water heaters?",
        "answer": "Often, yes. Depending on where you live and current funding, programs include TECH Clean California, Sonoma Clean Power, MCE, and BayREN. We check what you qualify for and file the paperwork. The federal 25C tax credit ended for systems installed after December 31, 2025."
      },
      {
        "question": "Where can a heat pump water heater go?",
        "answer": "A hybrid tank like GE GeoSpring needs some open space and airflow, so garages and basements work well. A SANCO2 system needs room for the outdoor unit and an indoor or garage spot for the tank."
      },
      {
        "question": "Are heat pump water heaters noisy?",
        "answer": "They make a low hum similar to a refrigerator. With SANCO2, the heat pump sits outside, so the indoor tank is nearly silent."
      }
    ],
    related: [
      "water-heaters",
      "harvest-thermal",
      "electric-water-heaters",
      "heat-pumps"
    ],
  },
  {
    slug: "tankless-water-heaters",
    category: "water-heating",
    name: "Tankless Water Heater Installation, Repair & Replacement",
    shortName: "Tankless Water Heaters",
    tagline: "Endless hot water, wall-mounted and space-saving.",
    summary: "Navien tankless water heater installation, repair, and yearly maintenance in Sonoma and Marin. Endless hot water in a compact, wall-mounted unit.",
    heroImage: "/images/services/tankless-water-heaters.jpg",
    cardImage: "/images/services/cards/tankless-water-heaters.jpg",
    cardImageAlt: "Tankless water heater — installation and service from Green Core Heating & Air",
    overview: [
      "A tankless water heater heats water only when you turn on the tap, so you don't run out halfway through the third shower. Green Core installs Navien tankless water heaters for homes across Sonoma and Marin counties.",
      "Tankless units mount on a wall and free up the floor space a tank used to take. Modern condensing models like Navien vent through PVC pipe and are very efficient with gas.",
      "Getting tankless right comes down to sizing and gas supply. A tankless unit needs more gas at once than a tank, so we check your gas line, meter, and venting route before recommending one. We size the unit to how many showers and appliances you run at the same time.",
      "Tankless water heaters need a yearly flush to clear mineral buildup and keep them running efficiently. We can take care of that maintenance, along with repairs on existing tankless units.",
      "Tankless installs are priced to your home, since cost depends on gas line and venting needs. You'll get a clear written price before we start. We serve Petaluma, Santa Rosa, Rohnert Park, Novato, San Rafael, Mill Valley, Tiburon, and the rest of Sonoma and Marin."
    ],
    benefits: [
      {
        "title": "Endless hot water",
        "description": "Heats on demand, so back-to-back showers aren't a problem."
      },
      {
        "title": "Saves space",
        "description": "Compact, wall-mounted unit instead of a 50-gallon tank."
      },
      {
        "title": "Long life",
        "description": "With yearly maintenance, tankless units often last well beyond a tank."
      },
      {
        "title": "Sized correctly",
        "description": "We check gas supply, venting, and peak demand before we install."
      }
    ],
    faqs: [
      {
        "question": "Is tankless worth it?",
        "answer": "For larger households, or anyone who runs out of hot water, it often is. You get endless hot water and a smaller footprint. The tradeoff is a higher up-front cost than a tank, especially if your gas line needs upgrading."
      },
      {
        "question": "Will I need a bigger gas line?",
        "answer": "Sometimes. Tankless units use more gas at once than a tank. We check your gas line and meter during the estimate and include any upgrade in your written price."
      },
      {
        "question": "How long do tankless water heaters last?",
        "answer": "With yearly maintenance, tankless water heaters commonly last 15 to 20 years, longer than most tank water heaters."
      },
      {
        "question": "Do tankless water heaters need maintenance?",
        "answer": "Yes. A yearly flush removes mineral buildup and keeps the unit efficient. We can handle that for you."
      },
      {
        "question": "What brand of tankless water heater do you install?",
        "answer": "We install Navien tankless water heaters."
      },
      {
        "question": "Can you repair my existing tankless water heater?",
        "answer": "Yes. We diagnose and repair tankless units, and we'll tell you honestly if replacement makes more sense."
      }
    ],
    related: [
      "water-heaters",
      "gas-water-heaters",
      "heat-pump-water-heaters"
    ],
  },
  {
    slug: "gas-water-heaters",
    category: "water-heating",
    name: "Gas Water Heater Installation, Repair & Replacement",
    shortName: "Gas Water Heaters",
    tagline: "Fast, code-compliant gas water heater replacement.",
    summary: "Gas tank water heater replacement and repair in Sonoma and Marin, with same-day replacement when our schedule allows. Tank installs start at $2,850.",
    heroImage: "/images/services/gas-water-heaters.jpg",
    cardImage: "/images/services/cards/gas-water-heaters.jpg",
    cardImageAlt: "Gas tank water heater — installation and service from Green Core Heating & Air",
    overview: [
      "When a gas water heater fails, you want hot water back fast. Green Core Heating & Air replaces and repairs gas tank water heaters for homes in Petaluma, Santa Rosa, Rohnert Park, Novato, San Rafael, and across Sonoma and Marin counties. Same-day water heater replacement is available when our schedule allows.",
      "We install Bradford White and American Standard gas water heaters, sized to your household. A typical home uses a 40- or 50-gallon tank, and we'll confirm the right size before we install.",
      "Every install is done to California code: seismic strapping, a properly piped temperature and pressure relief valve, correct venting, an expansion tank where required, and a permit. Those details matter for safety and for your home's resale.",
      "Thinking about going electric? A heat pump water heater can replace a gas tank, costs less to run, and usually qualifies for rebates. We're happy to price both options so you can compare.",
      "Gas tank water heater installs start at $2,850. You'll get a clear written price before any work starts."
    ],
    benefits: [
      {
        "title": "Same-day replacement",
        "description": "Available when our schedule allows. Call and we'll tell you honestly how soon."
      },
      {
        "title": "Done to code",
        "description": "Seismic straps, venting, relief valve, expansion tank, and permit, handled."
      },
      {
        "title": "Trusted brands",
        "description": "Bradford White and American Standard tanks, sized for your home."
      },
      {
        "title": "Clear pricing",
        "description": "Gas tank installs start at $2,850, with a clear written price before we begin."
      }
    ],
    faqs: [
      {
        "question": "How long does a gas water heater last?",
        "answer": "Most gas tank water heaters last about 8 to 12 years. Leaks from the tank, rust in the water, or popping and rumbling noises are signs it's near the end."
      },
      {
        "question": "Can you replace my water heater today?",
        "answer": "We offer same-day replacement when our schedule allows. Call (707) 988-5858 and we'll let you know the earliest we can be there."
      },
      {
        "question": "What size water heater do I need?",
        "answer": "Most homes use a 40- or 50-gallon tank. Larger households or big soaking tubs may need more. We'll confirm the right size before installing."
      },
      {
        "question": "Do I need a permit to replace a water heater?",
        "answer": "Yes. In California, water heater replacement requires a permit and seismic strapping. We pull the permit and install to code."
      },
      {
        "question": "Should I replace my gas water heater with a heat pump?",
        "answer": "It's worth considering. A heat pump water heater costs less to run and often qualifies for rebates. It does need an electrical circuit, so we check your panel and price both options."
      },
      {
        "question": "What brands do you install?",
        "answer": "We install Bradford White and American Standard gas water heaters."
      }
    ],
    related: [
      "water-heaters",
      "heat-pump-water-heaters",
      "tankless-water-heaters"
    ],
  },
  {
    slug: "electric-water-heaters",
    category: "water-heating",
    name: "Electric Water Heater Installation, Repair & Replacement",
    shortName: "Electric Water Heaters",
    tagline: "Reliable electric water heater replacement, with an upgrade path that saves.",
    summary: "Electric tank water heater replacement and repair in Sonoma and Marin, plus heat pump upgrades that can cut water heating costs.",
    heroImage: "/images/services/electric-water-heaters.jpg",
    cardImage: "/images/services/cards/electric-water-heaters.jpg",
    cardImageAlt: "Electric tank water heater — installation and service from Green Core Heating & Air",
    overview: [
      "Green Core Heating & Air repairs and replaces electric tank water heaters for homes in Petaluma, Santa Rosa, Rohnert Park, Novato, San Rafael, and across Sonoma and Marin counties. We install Bradford White and American Standard electric water heaters, sized to your household.",
      "Electric tanks are simple: no gas line and no venting. Common problems like a failed heating element or thermostat can often be repaired. If the tank itself is leaking or the unit is near the end of its life, replacement is the better call. Same-day water heater replacement is available when our schedule allows.",
      "If you're replacing an electric tank anyway, consider a heat pump water heater. It uses the same type of electrical circuit in many homes, often fits in a similar spot, and can use a fraction of the electricity. It also tends to qualify for rebates that a standard electric tank doesn't.",
      "Electric tank water heater installs start at $2,850. You'll get a clear written price before any work starts, and we'll show you the standard and heat pump options side by side if you'd like to compare."
    ],
    benefits: [
      {
        "title": "Simple swap",
        "description": "No gas line or venting needed for a like-for-like replacement."
      },
      {
        "title": "Repair when it makes sense",
        "description": "Elements and thermostats can often be fixed instead of replacing the tank."
      },
      {
        "title": "Upgrade option",
        "description": "A heat pump water heater can cut your water heating bill and earn rebates."
      },
      {
        "title": "Clear pricing",
        "description": "Electric tank installs start at $2,850, with a written price before we begin."
      }
    ],
    faqs: [
      {
        "question": "Why is my electric water heater running out of hot water?",
        "answer": "A failed upper or lower heating element, a bad thermostat, or sediment buildup are the most common causes. Many of these can be repaired."
      },
      {
        "question": "How long does an electric water heater last?",
        "answer": "Most electric tank water heaters last about 10 to 15 years, depending on water quality and maintenance."
      },
      {
        "question": "Should I replace my electric water heater with a heat pump?",
        "answer": "If you're replacing it anyway, it's often worth it. A heat pump water heater uses much less electricity and usually qualifies for rebates. We'll check your space and electrical and price both options."
      },
      {
        "question": "Can you replace my electric water heater the same day?",
        "answer": "Same-day replacement is available when our schedule allows. Call (707) 988-5858 to check."
      },
      {
        "question": "What brands do you install?",
        "answer": "We install Bradford White and American Standard electric water heaters, plus SANCO2 and GE GeoSpring heat pump water heaters."
      }
    ],
    related: [
      "water-heaters",
      "heat-pump-water-heaters",
      "gas-water-heaters"
    ],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);

export const serviceCategories: { id: ServiceCategory; label: string }[] = [
  { id: "heating-cooling", label: "Heating & cooling" },
  { id: "water-heating", label: "Water heating" },
];

export const getServicesByCategory = (category: ServiceCategory): Service[] =>
  services.filter((s) => s.category === category);
