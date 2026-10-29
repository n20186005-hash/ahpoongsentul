// English topic content for Ah Poong Sentul guide.
// Honesty rule: only location facts are stated as verified. Operating details
// (prices, menus, hours per vendor, zoo/boat status) are framed as "confirm on site"
// and linked to dated public sources. Do not invent current operating facts.

import type { TopicContent } from "./topics.id";

export const enContent: Record<string, TopicContent> = {
  "jam-buka": {
    title: "Opening hours",
    metaTitle: "Ah Poong Sentul Opening Hours: Map Note & How to Check Today",
    metaDescription:
      "Ah Poong Sentul hours per Google Maps (19 Oct 2026): Mon–Fri 10:00–21:00, Sat–Sun 08:00–22:00. Dated sources differ; confirm before you travel.",
    h1: "Ah Poong Sentul opening hours",
    lead: "The map shows different hours for weekdays and weekends, but two dated sources disagree—clarify before you come.",
    updated: "Updated: 28 October 2026",
    facts: [
      ["Map 19 Oct 2026", "Mon–Fri 10:00–21:00"],
      ["Map 19 Oct 2026", "Sat–Sun 08:00–22:00"],
      ["Older source", "Sentul City article 17 Apr 2024 says weekday close 22:00"],
    ],
    sections: [
      {
        heading: "What the map records",
        body: "Google Maps, checked 19 October 2026, lists Monday–Friday 10:00–21:00 and Saturday–Sunday 08:00–22:00. This is a place-level summary, not a guarantee that every vendor or ride follows the same listing.",
      },
      {
        heading: "Why two numbers differ",
        body: "A Sentul City developer article dated 17 April 2024 says the weekday close is 22:00, which differs from the 2026 map snapshot. Operating hours can change; do not assume one number applies to all services.",
      },
      {
        heading: "How to check today",
        body: "Open the Ah Poong Sentul Google Maps listing and the @ahpoongfoodmarket account that Sentul City links for updates before you leave. If unsure, arrive during a safer midday window (11:00–18:00).",
      },
    ],
    faqs: [
      {
        q: "What time does Ah Poong Sentul open today?",
        a: "The 19 October 2026 map snapshot lists Mon–Fri 10:00–21:00 and Sat–Sun 08:00–22:00. Confirm your visit day via the map or official channels, as hours can change.",
      },
      {
        q: "Does it open earlier on weekends?",
        a: "The 2026 map snapshot shows Saturday–Sunday from 08:00, earlier than weekdays (10:00). This may not apply to every tenant; check each one.",
      },
      {
        q: "Do all stalls close at the same time?",
        a: "Not guaranteed. The map listing is a summary; food stalls, cafés, and activities may keep their own hours. Coming at midday reduces the risk of finding things closed.",
      },
    ],
  },

  "biaya-masuk": {
    title: "Admission",
    metaTitle: "Ah Poong Sentul Entry Fee: Area Admission vs Food, Parking & Rides",
    metaDescription:
      "Ah Poong Sentul admission is unverified. Learn the difference between area entry, food and drink, parking, boats, and children's activities before you pay.",
    h1: "Admission & other costs",
    lead: "This guide does not hold an official price list. What helps is separating cost types so you don't assume one purchase covers everything.",
    updated: "Updated: 28 October 2026",
    facts: [
      ["Status", "Area admission unverified"],
      ["Separate", "Food, parking, boats, kids' play"],
      ["Tip", "Ask prices before paying"],
    ],
    sections: [
      {
        heading: "What is unverified",
        body: "Area admission, tickets, and any package are not verified from a current official source. Do not assume the visit is free, and do not assume old article prices still apply.",
      },
      {
        heading: "Costs that are usually separate",
        body: "In a riverside food complex like this, food and drink, parking, boats, and children's activities are typically charged separately. Ask what is included before paying to avoid surprises.",
      },
      {
        heading: "How to avoid confusion",
        body: "Ask the vendor or counter directly: is there an area entry fee, what is parking, and are kids' rides or boats charged separately? Note the price before ordering.",
      },
    ],
    faqs: [
      {
        q: "Does Ah Poong Sentul charge entry?",
        a: "Current admission charges are unverified. Food, parking, boats, and play activities may have separate terms; ask what each price includes before buying.",
      },
      {
        q: "How much is the Ah Poong Sentul ticket?",
        a: "We do not hold a current official price list. Confirm on site or via official channels before travelling, and don't rely on figures from old articles.",
      },
      {
        q: "Does food include the ticket?",
        a: "Not guaranteed. A food purchase should not be assumed to cover area entry or other activities. Ask what each price covers directly.",
      },
    ],
  },

  "apakah-buka": {
    title: "Is it open?",
    metaTitle: "Is Ah Poong Sentul Open Today? How to Check Before You Go",
    metaDescription:
      "How to confirm Ah Poong Sentul is open before you travel: check Google Maps, official social media, and weather. Independent non-commercial guide.",
    h1: "Is Ah Poong Sentul open today?",
    lead: "We cannot guarantee a real-time open/closed status. This page gives self-check steps so you don't make a wasted trip.",
    updated: "Updated: 28 October 2026",
    facts: [
      ["Step 1", "Open the Ah Poong Sentul Google Maps listing"],
      ["Step 2", "Check @ahpoongfoodmarket (linked by Sentul City)"],
      ["Step 3", "Watch weather & public holidays"],
    ],
    sections: [
      {
        heading: "Check the map and socials",
        body: "Open the Ah Poong Sentul Google Maps listing for current hours and status, then check the @ahpoongfoodmarket Instagram account that Sentul City links as the update source.",
      },
      {
        heading: "Why no live 'open now' button",
        body: "We are an independent guide, not the operator, so we have no direct status access. Showing an unverified status could mislead visitors.",
      },
      {
        heading: "The safest window",
        body: "If unsure, come during a midday window (about 11:00–18:00) on a regular day. Avoid arriving very early or near closing without checking first.",
      },
    ],
    faqs: [
      {
        q: "How do I know if Ah Poong is open today?",
        a: "Check Google Maps for hours and status, then the official social account linked by Sentul City. We don't show live status because we are not the operator.",
      },
      {
        q: "Does Ah Poong close when it rains?",
        a: "No official rain policy is confirmed. Much of the experience is outdoors, so rain can affect comfort; check directly before coming.",
      },
      {
        q: "Is it open on public holidays?",
        a: "Holiday hours may differ from regular days. Confirm via the map or official channels; this guide does not hold a holiday schedule.",
      },
    ],
  },

  "waktu-terbaik": {
    title: "Best time",
    metaTitle: "Best Time & Visit Length at Ah Poong Sentul",
    metaDescription:
      "Best time to visit Ah Poong Sentul: late morning to afternoon gives soft light, weekends are busier. Allow 1–2 hours, more if combining with Sentul.",
    h1: "When is the best time to come?",
    lead: "There is no single right answer, but common patterns of light, crowds, and duration can help you plan.",
    updated: "Updated: 28 October 2026",
    facts: [
      ["Suggested length", "1–2 hours for a meal & walk"],
      ["Soft light", "Late morning to afternoon"],
      ["Crowds", "Weekends & holidays busier"],
    ],
    sections: [
      {
        heading: "Late morning to afternoon",
        body: "A waterside space is usually most comfortable when the light is softer, around late morning to afternoon. You can eat calmly and walk without harsh sun.",
      },
      {
        heading: "Weekends need more time",
        body: "Saturdays, Sundays, and holidays tend to be busier. Leave extra buffer for parking, food queues, and moving between areas.",
      },
      {
        heading: "How long is enough",
        body: "As a planning suggestion, allow 1–2 hours for a meal and relaxed walk. Add time if you combine it with green space or another Sentul destination.",
      },
    ],
    faqs: [
      {
        q: "What time is nicest at Ah Poong?",
        a: "Late morning to afternoon gives softer light for the waterside setting. Avoid coming too early if you want all stalls open.",
      },
      {
        q: "How long should I plan for?",
        a: "Planning suggestion: 1–2 hours for a meal and light walk. Longer if combined with other parts of Sentul.",
      },
      {
        q: "Is the evening better?",
        a: "A waterside space can feel different at night, but evening operating hours are not verified. Check the map before planning a night visit.",
      },
    ],
  },

  "parkir": {
    title: "Parking",
    metaTitle: "Parking at Ah Poong Sentul: Location, Capacity & Weekend Tips",
    metaDescription:
      "Ah Poong Sentul parking: use official areas, check capacity on arrival, allow extra time weekends. Parking fee unverified—ask on site.",
    h1: "Parking & vehicles",
    lead: "There is no guarantee of a spot right at the entrance. Use official parking and confirm terms on arrival.",
    updated: "Updated: 28 October 2026",
    facts: [
      ["Use", "Designated official parking"],
      ["Fee", "Unverified—ask on site"],
      ["Weekends", "Arrive earlier & expect queues"],
    ],
    sections: [
      {
        heading: "Official areas",
        body: "Follow local signage and use the parking areas designated by the operator. Don't rely on a spot right at the entrance, as capacity is limited.",
      },
      {
        heading: "Fee & capacity",
        body: "Parking fee and capacity are not verified. Check directly on arrival and keep any payment receipt if provided.",
      },
      {
        heading: "Weekend tips",
        body: "Saturdays–Sundays and holidays are busier. Arrive earlier, allow extra time, and consider app-based transport if parking is full.",
      },
    ],
    faqs: [
      {
        q: "Is there parking at Ah Poong Sentul?",
        a: "Use the official parking areas designated on site. Capacity and availability can change when busy, so check on arrival.",
      },
      {
        q: "What is the parking fee?",
        a: "Parking fee is unverified. Ask and note the price on site before leaving your vehicle.",
      },
      {
        q: "Can I drop off at the entrance?",
        a: "A spot right at the door isn't guaranteed. Use a drop-off that doesn't block traffic and follow on-site staff directions.",
      },
    ],
  },

  "fasilitas": {
    title: "Facilities",
    metaTitle: "Ah Poong Sentul Facilities: Toilets, Prayer Room, Seating & More",
    metaDescription:
      "Ah Poong Sentul facilities like toilets and prayer room should be checked on arrival. Bring basics and ask for active facilities on site.",
    h1: "On-site facilities",
    lead: "This guide does not hold an official facility map. The key: ask for what is active and bring your own basics.",
    updated: "Updated: 28 October 2026",
    facts: [
      ["Check on site", "Toilets & prayer room in use"],
      ["Bring", "Personal hygiene & protection"],
      ["Open air", "Temperature & weather affect comfort"],
    ],
    sections: [
      {
        heading: "Toilets & hygiene",
        body: "Ask for the location of facilities currently in use on site. Bring basic personal needs because public facility availability can vary by time.",
      },
      {
        heading: "Prayer space",
        body: "If you need a prayer room, ask staff or vendors on site. We do not verify the presence or hours of a prayer room.",
      },
      {
        heading: "Seating & rest",
        body: "The space is oriented around waterside seating, but the number and availability of seats follows the day's conditions. Arriving earlier helps get a comfortable spot.",
      },
    ],
    faqs: [
      {
        q: "Are toilets available at Ah Poong?",
        a: "Facilities like this should be asked for or seen on arrival. Use official areas and follow on-site signage.",
      },
      {
        q: "Is there a prayer room?",
        a: "We do not verify a prayer room's presence. Ask staff on site if you need one.",
      },
      {
        q: "Can I sit by the river?",
        a: "The area is designed for waterside seating, but availability follows the day's conditions. Arriving earlier helps.",
      },
    ],
  },

  "dari-jakarta": {
    title: "From Jakarta",
    metaTitle: "From Jakarta to Ah Poong Sentul: Route, Time & Transport",
    metaDescription:
      "Getting to Ah Poong Sentul from Jakarta: via Bogor/Sentul roads, licensed hire, or apps. Travel time is heavily affected by traffic.",
    h1: "From Jakarta to Ah Poong Sentul",
    lead: "The Jakarta–Sentul road distance isn't the issue; traffic decides. Plan a large buffer at peak hours.",
    updated: "Updated: 28 October 2026",
    facts: [
      ["Direction", "Toward Bogor / Sentul"],
      ["Time", "Heavily traffic-dependent"],
      ["Options", "Hire, app, or train + connection"],
    ],
    sections: [
      {
        heading: "Via Bogor–Sentul roads",
        body: "From Jakarta, continue overland toward Bogor/Sentul via the active road network. Travel time can shift sharply at morning and evening peaks.",
      },
      {
        heading: "Vehicle options",
        body: "Use a licensed vehicle, rental service, or app-based transport according to your pickup point. Enter 'Ah Poong Sentul' as the destination and check the estimate before boarding.",
      },
      {
        heading: "Train as an option",
        body: "Some visitors combine a train toward Bogor/Sentul then continue by licensed taxi or app from a safe drop-off. Routes and stops need checking on the travel day.",
      },
    ],
    faqs: [
      {
        q: "How long from Jakarta to Ah Poong Sentul?",
        a: "It depends heavily on traffic; we don't promise a fixed number. Allow a buffer especially at peak hours.",
      },
      {
        q: "Which way from Jakarta?",
        a: "Through the road network toward Bogor/Sentul. Use the map for the route and current traffic before leaving.",
      },
      {
        q: "Can I use Grab or Gojek from Jakarta?",
        a: "Yes if your pickup allows it and the estimate is reasonable. For long distances many choose a daily rental; compare before booking.",
      },
    ],
  },

  "dari-bogor": {
    title: "From Bogor",
    metaTitle: "From Bogor to Ah Poong Sentul: Shorter Route & Transport",
    metaDescription:
      "Getting to Ah Poong Sentul from Bogor city: closer via the Sentul side. Check route, public transport, and app connection on your travel day.",
    h1: "From Bogor to Ah Poong Sentul",
    lead: "From Bogor city, Ah Poong is relatively closer because it sits on the Sentul side. Time still depends on local traffic.",
    updated: "Updated: 28 October 2026",
    facts: [
      ["Position", "Sentul side, Bogor Regency"],
      ["Closer", "From Bogor city than Jakarta"],
      ["Options", "App, taxi, or public transport"],
    ],
    sections: [
      {
        heading: "Toward Sentul",
        body: "Ah Poong is in the Sentul area, Bogor Regency. From central Bogor, take the road network toward Sentul and follow the map to Jl. Ir H. Juanda, Cipambuan.",
      },
      {
        heading: "Public transport",
        body: "Look for active transport toward Sentul on your travel day, then connect by licensed taxi or app from a safe drop-off. Routes can change.",
      },
      {
        heading: "Apps are simpler",
        body: "For in-city distance, app-based transport is often easiest. Enter 'Ah Poong Sentul' and check the estimate and pickup before boarding.",
      },
    ],
    faqs: [
      {
        q: "How far is Bogor to Ah Poong Sentul?",
        a: "Closer than from Jakarta because of its Sentul-side position, but exact distance and time depend on route and that day's traffic.",
      },
      {
        q: "Is there direct public transport?",
        a: "We don't verify a direct route. Check active services to Sentul then connect by app or taxi from a safe drop-off.",
      },
      {
        q: "Better to use Grab or a private car?",
        a: "Depends on availability and comfort. A private car needs parking; an app needs a suitable pickup. Compare on the travel day.",
      },
    ],
  },

  "kendaraan-pribadi": {
    title: "By car",
    metaTitle: "Driving to Ah Poong Sentul & Nearest Toll Exit",
    metaDescription:
      "Driving to Ah Poong Sentul via Sentul roads. Use the map for the nearest toll exit; this guide doesn't list a verified toll name.",
    h1: "Private vehicle route",
    lead: "The general direction is easy: toward Sentul then Jl. Ir H. Juanda. The nearest toll exit should be checked on the map as it can change.",
    updated: "Updated: 28 October 2026",
    facts: [
      ["Destination", "Jl. Ir H. Juanda, Cipambuan, Sentul"],
      ["Navigation", "Map + 'Ah Poong Sentul'"],
      ["Toll", "Check nearest exit on map today"],
    ],
    sections: [
      {
        heading: "Direction to Sentul",
        body: "Use navigation to 'Ah Poong Sentul' and follow to Jl. Ir H. Juanda, Cipambuan, Babakan Madang. The area is within Ecoart Park Sentul City.",
      },
      {
        heading: "Nearest toll exit",
        body: "The name and distance of the nearest toll exit can change; check the map app on your travel day. We don't list a specific toll to avoid misleading if the route changes.",
      },
      {
        heading: "On arrival",
        body: "Follow area signage and use official parking. Don't rely on a spot at the door, as capacity is limited, especially weekends.",
      },
    ],
    faqs: [
      {
        q: "Which toll exit to Ah Poong?",
        a: "Check the map on your travel day; the nearest exit can change. The general direction is toward Sentul, then Jl. Ir H. Juanda, Cipambuan.",
      },
      {
        q: "Is it easy by car?",
        a: "Yes, via Sentul roads. Follow navigation to 'Ah Poong Sentul' and use official parking on arrival.",
      },
      {
        q: "Can I park at the entrance?",
        a: "Not guaranteed. Use a drop-off that doesn't block traffic and follow on-site staff directions.",
      },
    ],
  },

  "grab-gojek": {
    title: "Grab & Gojek",
    metaTitle: "Grab, Gojek & Taxi to Ah Poong Sentul: Pickup & Drop-off Tips",
    metaDescription:
      "Take Grab/Gojek or taxi to Ah Poong Sentul: enter 'Ah Poong Sentul', check estimate & pickup, drop at a safe point. Works from Jakarta or Bogor.",
    h1: "Ride-hailing & taxi",
    lead: "App-based transport is often the simplest option, as long as pickup and drop-off are confirmed from the start.",
    updated: "Updated: 28 October 2026",
    facts: [
      ["Destination", "Type 'Ah Poong Sentul'"],
      ["Check", "Estimate & pickup before boarding"],
      ["Drop-off", "At a safe point, follow staff"],
    ],
    sections: [
      {
        heading: "Enter the destination correctly",
        body: "Type 'Ah Poong Sentul' as the destination in the app. Check whether your pickup is allowed and compare estimates before booking.",
      },
      {
        heading: "Drop-off point",
        body: "Use a drop-off that doesn't block traffic. Follow on-site staff directions if there is an adjusted drop-off.",
      },
      {
        heading: "Getting back",
        body: "For the return, find a safe pickup point and make sure the app can reach the area. Wait times can be longer when busy.",
      },
    ],
    faqs: [
      {
        q: "Can I get to Ah Poong by Grab or Gojek?",
        a: "Yes. Type 'Ah Poong Sentul', check the estimate and pickup, then drop at a point that doesn't block traffic.",
      },
      {
        q: "About how much from Bogor?",
        a: "The estimate shows in the app based on pickup and traffic. We don't promise a fixed number.",
      },
      {
        q: "Easy to get a taxi back?",
        a: "Depends on time and availability. Wait times tend to be longer on weekends or at night; plan the return earlier.",
      },
    ],
  },

  "transport-umum": {
    title: "Public transport",
    metaTitle: "Public Transport to Ah Poong Sentul: Bus, KRL & Connection",
    metaDescription:
      "Public transport to Ah Poong Sentul: train toward Bogor/Sentul then app connection. Direct bus route unverified—check on travel day.",
    h1: "Public transport",
    lead: "There is no single route we verify. The common pattern: connection to Sentul then app from a safe drop-off.",
    updated: "Updated: 28 October 2026",
    facts: [
      ["Pattern", "Sentul then app connection"],
      ["Train", "Check route toward Bogor/Sentul"],
      ["Direct bus", "Unverified"],
    ],
    sections: [
      {
        heading: "Train as backbone",
        body: "Some visitors combine a train toward Bogor/Sentul, then continue by licensed taxi or app from a safe station/drop-off.",
      },
      {
        heading: "Bus & local transport",
        body: "We don't verify a direct bus route to Ah Poong. Look for active services toward Sentul on your travel day and check stop points.",
      },
      {
        heading: "Last segment",
        body: "The final segment is often done by app because the location is inside a complex. Ensure a safe pickup and reasonable estimate before boarding.",
      },
    ],
    faqs: [
      {
        q: "Is there a KRL or direct bus to Ah Poong?",
        a: "We don't verify a direct route. The common pattern is a train toward Bogor/Sentul then an app connection from a safe drop-off.",
      },
      {
        q: "Where is the nearest station?",
        a: "Check the map and train schedule toward Sentul/Bogor on your travel day. Distance from station to Ah Poong should be confirmed via app.",
      },
      {
        q: "Possible without any app?",
        a: "Maybe, but the last segment inside the complex is easier by app. Consider comfort and wait time.",
      },
    ],
  },

  "menu-makanan": {
    title: "Menu & food",
    metaTitle: "Ah Poong Sentul Menu: How to Choose Riverside Food & Drink",
    metaDescription:
      "Ah Poong Sentul menu varies by vendor. The guide holds no official menu—ask dishes, prices, and payment directly from the seller.",
    h1: "Menu & how to choose food",
    lead: "Food comes from many vendors, so there is no single official menu. Ask before you order.",
    updated: "Updated: 28 October 2026",
    facts: [
      ["Source", "Many different vendors"],
      ["Official menu", "Not held by us"],
      ["How", "Ask dishes & price on site"],
    ],
    sections: [
      {
        heading: "Why no menu list",
        body: "Ah Poong is a riverside food space with various vendors. Menus, prices, and availability can change daily, so a static list could mislead.",
      },
      {
        heading: "How to choose",
        body: "Look at the food on display, ask about dishes, portions, ingredients, prices, tax, and payment from the vendor. Compare a few vendors before deciding.",
      },
      {
        heading: "Match your needs",
        body: "For special needs (halal, vegetarian, allergies), don't assume a category automatically fits. Confirm ingredients and preparation directly with the vendor.",
      },
    ],
    faqs: [
      {
        q: "Where is the current menu and food price?",
        a: "This guide has no verified menu. Ask the seller about dishes, portions, ingredients, prices, and payment before ordering.",
      },
      {
        q: "What kinds of food are at Ah Poong?",
        a: "It varies by vendor; the Sentul City article mentions regional cuisine. We don't detail the list because it can change daily.",
      },
      {
        q: "Can I look first before ordering?",
        a: "Yes, the area is open so you can see vendor options. Ask the price before buying to avoid surprises.",
      },
    ],
  },

  "warung-temon": {
    title: "Warung Temon",
    metaTitle: "Warung Temon Ah Poong: Yogyakarta Cuisine & How to Find It",
    metaDescription:
      "Warung Temon at Ah Poong Sentul per Sentul City 2024 article serves Yogyakarta cuisine. Check presence & hours on site.",
    h1: "Warung Temon at Ah Poong",
    lead: "Sentul City once wrote about Warung Temon as a Yogyakarta-cuisine vendor at Ah Poong. Today's status should be checked on site.",
    updated: "Updated: 28 October 2026",
    facts: [
      ["Source", "Sentul City article 17 Apr 2024"],
      ["Cuisine", "Yogyakarta style"],
      ["Status", "Check presence & hours on site"],
    ],
    sections: [
      {
        heading: "What is known",
        body: "A Sentul City developer article dated 17 April 2024 mentions Warung Temon at Ah Poong serving Yogyakarta cuisine. That is historical information, not a guarantee it is still there today.",
      },
      {
        heading: "How to find it",
        body: "If interested, ask staff or other vendors on arrival, or check official social updates. Don't assume its location is unchanged.",
      },
      {
        heading: "Honest note",
        body: "We don't verify Warung Temon's current menu, price, or hours. Treat it as a search idea, not a guaranteed available place.",
      },
    ],
    faqs: [
      {
        q: "What is Warung Temon?",
        a: "Per the Sentul City 2024 article, Warung Temon at Ah Poong serves Yogyakarta cuisine. That info is historical; check status on site.",
      },
      {
        q: "Is Warung Temon still there?",
        a: "We don't verify its current presence. Ask on site or check official social media before coming specifically for it.",
      },
      {
        q: "Where is Warung Temon located?",
        a: "We don't hold the exact position. Ask staff in the Ah Poong complex on arrival.",
      },
    ],
  },

  "kuliner-halal": {
    title: "Halal food",
    metaTitle: "Halal Food at Ah Poong Sentul: How to Confirm per Vendor",
    metaDescription:
      "How to ensure halal food at Ah Poong Sentul: ask certification, ingredients, and preparation per vendor. Don't assume the whole complex is halal.",
    h1: "Halal food: how to confirm",
    lead: "Because of many different vendors, halal status must be checked per vendor, not per complex.",
    updated: "Updated: 28 October 2026",
    facts: [
      ["Check per vendor", "Not per complex"],
      ["Ask", "Certification, ingredients, prep"],
      ["Avoid", "Assuming automatically halal"],
    ],
    sections: [
      {
        heading: "Why per vendor",
        body: "This food space is filled with independent vendors. One certified vendor doesn't mean all are halal. Confirm each one.",
      },
      {
        heading: "Questions to ask",
        body: "Ask about halal certification, flavouring ingredients, any alcohol in cooking, and whether cookware is separate. A clear vendor will explain.",
      },
      {
        heading: "If unsure",
        body: "If information is unclear, choose a vendor with a visible halal label or plant-based dishes you recognise. The decision stays with you.",
      },
    ],
    faqs: [
      {
        q: "Is all food at Ah Poong halal?",
        a: "Not guaranteed. Many independent vendors; check certification and ingredients per vendor, not assuming the whole complex is automatically halal.",
      },
      {
        q: "How do I check halal?",
        a: "Ask about certification, ingredients, and preparation directly from the vendor. Choose a vendor with a visible halal label if unsure.",
      },
      {
        q: "Is plant-based safe?",
        a: "Plant-based can be a safer choice if cooked separately, but still ask about flavouring and cookware before ordering.",
      },
    ],
  },

  "makanan-vegetarian": {
    title: "Vegetarian",
    metaTitle: "Vegetarian Options at Ah Poong Sentul: Tips for Ordering Without Meat",
    metaDescription:
      "Vegetarian options at Ah Poong Sentul: ask ingredients & stock per vendor. No official vegetarian list—confirm preparation before ordering.",
    h1: "Vegetarian options",
    lead: "Without an official menu, vegetarian choices must be confirmed per vendor, including stock and cookware.",
    updated: "Updated: 28 October 2026",
    facts: [
      ["Ask", "Ingredients, stock, cookware"],
      ["Official list", "Not held by us"],
      ["Check", "Preparation per vendor"],
    ],
    sections: [
      {
        heading: "Confirm ingredients",
        body: "Ask whether a dish uses meat stock, mixed flour, or shared cookware. An understanding vendor usually answers openly.",
      },
      {
        heading: "Options often present",
        body: "A riverside food space often has plant-based or tofu/tempeh dishes, but availability depends on the vendor that day. Look first before ordering.",
      },
      {
        heading: "Avoid assumptions",
        body: "Don't assume 'vegetable' is strictly vegetarian. Make sure it's without meat stock or animal additives per your need.",
      },
    ],
    faqs: [
      {
        q: "Is there vegetarian food at Ah Poong?",
        a: "Plant-based dishes are possible, but we don't hold an official list. Ask about ingredients and stock per vendor before ordering.",
      },
      {
        q: "Safe for strict vegetarian?",
        a: "Depends on the vendor. Confirm no meat stock and separate cookware; if unsure, choose dishes you recognise.",
      },
      {
        q: "How to order without meat?",
        a: "State your need clearly to the vendor, then ask about flavouring and cooking method before paying.",
      },
    ],
  },

  "kafe-tepi-sungai": {
    title: "Riverside cafés",
    metaTitle: "Riverside Cafés & Restaurants at Ah Poong: How to Choose a Seat",
    metaDescription:
      "Riverside cafés and restaurants at Ah Poong: choose from layout & seating. Hours and availability check on site; no official list held.",
    h1: "Riverside cafés & restaurants",
    lead: "The waterside atmosphere is the main draw. Pick a place by seating position and the type of dish you want.",
    updated: "Updated: 28 October 2026",
    facts: [
      ["Draw", "Waterside seating position"],
      ["Choose", "From layout & dish type"],
      ["Hours", "Check on site"],
    ],
    sections: [
      {
        heading: "Choose from the view",
        body: "Because there is no official list, walk the area and see the waterside seating layout, then pick what matches the atmosphere you want.",
      },
      {
        heading: "Best time to sit waterside",
        body: "Late morning to afternoon often gives the most comfortable light for sitting toward the river landscape. Arriving earlier helps get a strategic spot.",
      },
      {
        heading: "Match your budget",
        body: "Compare a few vendors for price and portion. Ask before sitting if there is a minimum order or time limit per table.",
      },
    ],
    faqs: [
      {
        q: "Where are the riverside cafés at Ah Poong?",
        a: "The area is designed with waterside seating. Walk around and choose from the view; we don't hold an official name list.",
      },
      {
        q: "How to get a nice seat?",
        a: "Come earlier, especially weekends. Waterside positions are most sought after in the afternoon.",
      },
      {
        q: "Is there a table time limit?",
        a: "We don't verify a table policy. Ask the vendor if you plan to sit long.",
      },
    ],
  },

  "makan-keluarga": {
    title: "Family dining",
    metaTitle: "Family Dining at Ah Poong Sentul: Seating & Kids Tips",
    metaDescription:
      "Family dining at Ah Poong Sentul: pick a wide waterside table, check availability, prepare for kids. Open area; watch weather & crowds.",
    h1: "Family dining",
    lead: "The waterside space suits a gathering, as long as tables and availability are prepared, especially with children.",
    updated: "Updated: 28 October 2026",
    facts: [
      ["Pick", "Wide table by the water"],
      ["Kids", "Prepare needs & supervision"],
      ["Weather", "Open area; watch rain/heat"],
    ],
    sections: [
      {
        heading: "Find the right table",
        body: "For a family group, pick a wider table near the waterside seating. Arriving earlier helps get a spot before it gets busy.",
      },
      {
        heading: "Kids' needs",
        body: "Prepare children's basics; don't assume child seats or kids' utensils are available. Supervise them in the open area near water.",
      },
      {
        heading: "Weather & comfort",
        body: "Part of the experience is outdoors. Bring rain or sun protection, and choose comfortable light for the family.",
      },
    ],
    faqs: [
      {
        q: "Is it suitable for a family with kids?",
        a: "The waterside area suits family gatherings. Prepare children's needs and supervise them in the open area near water.",
      },
      {
        q: "Are there kids' seats/utensils?",
        a: "We don't verify child seats or utensils. Bring them if needed.",
      },
      {
        q: "When is most comfortable for families?",
        a: "Late morning to afternoon is usually most comfortable. Avoid peak crowds if kids tire easily.",
      },
    ],
  },

  "jadwal-makan": {
    title: "Breakfast–Lunch–Dinner",
    metaTitle: "Breakfast, Lunch & Dinner at Ah Poong Sentul",
    metaDescription:
      "When to eat at Ah Poong Sentul: early breakfast may not be open, lunch safest, dinner check hours. All depends on vendor hours that day.",
    h1: "Breakfast, lunch, or dinner?",
    lead: "The best eating time follows vendor hours, not one rule. Lunchtime is the safest for full variety.",
    updated: "Updated: 28 October 2026",
    facts: [
      ["Breakfast", "May not be widely open"],
      ["Lunch", "Safest & fullest"],
      ["Dinner", "Check hours per vendor"],
    ],
    sections: [
      {
        heading: "Early breakfast",
        body: "Because the map shows opening from 08:00–10:00 depending on day, early breakfast options may be limited. Arriving too early risks many stalls still closed.",
      },
      {
        heading: "Lunch",
        body: "Lunchtime is usually safest for the fullest vendor variety and comfortable light. This is the time we suggest for a first visit.",
      },
      {
        heading: "Dinner",
        body: "A waterside space can feel different at night, but evening operating hours are not verified. Check the map and vendors before planning dinner.",
      },
    ],
    faqs: [
      {
        q: "Can I have breakfast at Ah Poong?",
        a: "Possibly limited because hours depend on the day. Arriving too early risks stalls still closed; lunch is safer.",
      },
      {
        q: "When is best for lunch?",
        a: "Lunchtime gives full vendor variety and comfortable light. The time we suggest for a first visit.",
      },
      {
        q: "Is it open for dinner?",
        a: "Evening hours are not verified. Check the map and ask vendors before planning a dinner visit.",
      },
    ],
  },

  "bersama-anak": {
    title: "With children",
    metaTitle: "Visiting Ah Poong Sentul with Children: Tips & Prep",
    metaDescription:
      "Ah Poong Sentul with children: open waterside area needs supervision, bring basics, check facilities on arrival. Not a verified playground.",
    h1: "Visiting with children",
    lead: "The waterside complex can be fun for families, as long as supervision and preparation start early.",
    updated: "Updated: 28 October 2026",
    facts: [
      ["Supervise", "Near water & crowds"],
      ["Bring", "Children's basics"],
      ["Facilities", "Check on arrival"],
    ],
    sections: [
      {
        heading: "Safety near water",
        body: "The area borders a water landscape. Supervise children directly; don't let them play near the edge without supervision.",
      },
      {
        heading: "Basic prep",
        body: "Bring children's basics (change of clothes, sun/rain protection, snacks). Don't assume they're available on site.",
      },
      {
        heading: "Facilities & rest",
        body: "Check toilet locations and seating on arrival. Build in rest breaks so children don't tire in the open area.",
      },
    ],
    faqs: [
      {
        q: "Is it safe for children?",
        a: "Safe with supervision, especially near water and crowds. This is not an enclosed playground; parental supervision matters.",
      },
      {
        q: "What to bring for kids?",
        a: "Change of clothes, weather protection, and snacks. Don't assume child facilities are available on site.",
      },
      {
        q: "Is there a dedicated play area?",
        a: "We don't verify a dedicated play area. Look on site; don't promise rides to children before checking.",
      },
    ],
  },

  "permainan-anak": {
    title: "Kids' play",
    metaTitle: "Children's Play at Ah Poong Sentul: Status & How to Check",
    metaDescription:
      "Sentul City 2024 article mentions kids' activities at Ah Poong, but today's status is unverified. Confirm operation & age on site.",
    h1: "Children's play & activities",
    lead: "An old source mentions children's activities, but that is not a guarantee of current service. Confirm before relying on rides.",
    updated: "Updated: 28 October 2026",
    facts: [
      ["Old source", "Sentul City article 2024"],
      ["Status", "Unverified today"],
      ["Check", "Operation, age, fee, weather"],
    ],
    sections: [
      {
        heading: "What is known",
        body: "The Sentul City 17 April 2024 article mentions children's activities at Ah Poong. That is historical information, not confirmation of current service.",
      },
      {
        heading: "Confirm before relying",
        body: "Ask about operation, age limits, supervision, fee, and weather terms directly on site. Don't assume it's included with food or area access.",
      },
      {
        heading: "Safe alternative",
        body: "If rides aren't available, enjoy a relaxed waterside walk with supervision. Don't disappoint kids with unconfirmed ride promises.",
      },
    ],
    faqs: [
      {
        q: "Is there kids' play at Ah Poong?",
        a: "The 2024 article mentions children's activities, but today's status is unverified. Confirm operation and age on site.",
      },
      {
        q: "What is the age limit for rides?",
        a: "We don't hold current age rules. Ask the provider directly on site.",
      },
      {
        q: "Is play included in admission?",
        a: "Not guaranteed. Ask whether it's charged separately and what's included before paying.",
      },
    ],
  },

  "mini-zoo": {
    title: "Mini zoo",
    metaTitle: "Ah Poong Sentul Mini Zoo: Status & How to Confirm",
    metaDescription:
      "Ah Poong Sentul mini zoo is often searched, but current operating status is unverified. Confirm presence & hours on site before coming.",
    h1: "Mini zoo: status & how to check",
    lead: "Many visitors search for a mini zoo, but we don't verify its presence or operating hours currently.",
    updated: "Updated: 28 October 2026",
    facts: [
      ["Search", "Often appears in queries"],
      ["Status", "Unverified"],
      ["Check", "Presence & hours on site"],
    ],
    sections: [
      {
        heading: "Why this page exists",
        body: "The term 'mini zoo' is often searched alongside Ah Poong. We made this page so visitors don't rely on unconfirmed information.",
      },
      {
        heading: "What we don't know",
        body: "We don't verify whether a mini zoo exists, where it is, its hours, price, or animal types. Don't plan a trip based only on this assumption.",
      },
      {
        heading: "How to confirm",
        body: "Check the Google Maps listing, ask staff on site, or look at official social updates before coming specifically for a mini zoo.",
      },
    ],
    faqs: [
      {
        q: "Does Ah Poong have a mini zoo?",
        a: "We don't verify its presence currently. Check the map or ask staff on site before coming specifically for it.",
      },
      {
        q: "Where is the mini zoo at Ah Poong?",
        a: "We don't hold the exact position. Ask staff on arrival; don't assume the location is fixed.",
      },
      {
        q: "What is the mini zoo ticket price?",
        a: "We don't hold a price. Confirm on site if it is indeed available.",
      },
    ],
  },

  "perahu-aktivitas-air": {
    title: "Boats & water",
    metaTitle: "Boats & Water Activities at Ah Poong Sentul: Status & How to Check",
    metaDescription:
      "Boats & water activities at Ah Poong: 2024 article mentions them, but current operation is unverified. Confirm before relying.",
    h1: "Boats & water activities",
    lead: "An old source mentions water activities, but that is not a guarantee of current service. Confirm operation, age, and weather on site.",
    updated: "Updated: 28 October 2026",
    facts: [
      ["Old source", "Sentul City article 2024"],
      ["Status", "Unverified"],
      ["Check", "Operation, age, weather"],
    ],
    sections: [
      {
        heading: "What is known",
        body: "The Sentul City 17 April 2024 article mentions water/boat activities at Ah Poong. That info is historical, not a confirmation for today.",
      },
      {
        heading: "Confirm before boarding",
        body: "Ask about operation, age limits, supervision, fee, and weather terms directly. Don't assume it's included with food or area access.",
      },
      {
        heading: "Water safety",
        body: "If available, follow the provider's safety guidance. Supervise children and don't approach the water edge without supervision.",
      },
    ],
    faqs: [
      {
        q: "Are there boats at Ah Poong?",
        a: "The 2024 article mentions water activities, but today's status is unverified. Confirm operation on site.",
      },
      {
        q: "What is the boat price?",
        a: "We don't hold a price. Ask the provider directly if the service is available.",
      },
      {
        q: "Is it safe for children?",
        a: "Depends on the provider and weather. Supervise children and follow safety guidance; don't assume safety without confirmation.",
      },
    ],
  },

  "hari-hujan": {
    title: "Rainy day",
    metaTitle: "Visiting Ah Poong Sentul in the Rain: Tips & Alternatives",
    metaDescription:
      "Ah Poong Sentul is partly open; in rain bring protection and check weather. No verified indoor list—plan flexibly.",
    h1: "Visiting in the rain",
    lead: "Part of the experience is outdoors, so rain changes comfort. Prepare a flexible plan.",
    updated: "Updated: 28 October 2026",
    facts: [
      ["Condition", "Partly open air"],
      ["Bring", "Rain protection"],
      ["Indoor", "Unverified"],
    ],
    sections: [
      {
        heading: "Check weather first",
        body: "Check the forecast before leaving. Rain can make open surfaces slippery and reduce waterside seating comfort.",
      },
      {
        heading: "Bring preparation",
        body: "Prepare an umbrella or raincoat, comfortable shoes, and a change of clothes. The area doesn't guarantee fully covered space.",
      },
      {
        heading: "Flexible alternative",
        body: "If rain is heavy, consider shifting the schedule or combining with an indoor destination in Sentul City that you verify yourself via the map.",
      },
    ],
    faqs: [
      {
        q: "Does Ah Poong close when it rains?",
        a: "No official confirmation. Part of the space is open; rain can reduce comfort. Check directly before coming.",
      },
      {
        q: "Is there an indoor area?",
        a: "We don't verify a dedicated covered area. Bring protection and plan flexibly if it rains.",
      },
      {
        q: "When should I avoid?",
        a: "Avoid coming during forecast heavy rain if you want comfortable waterside seating. Check weather on the travel day.",
      },
    ],
  },

  "akses-kursi-roda": {
    title: "Wheelchair access",
    metaTitle: "Accessibility & Strollers at Ah Poong Sentul",
    metaDescription:
      "Wheelchair & stroller access at Ah Poong: outdoor paths with changing surfaces. Check comfort on site; guide doesn't guarantee full access.",
    h1: "Accessibility & strollers",
    lead: "The complex has outdoor paths with changing surfaces; wheelchair comfort needs checking on site.",
    updated: "Updated: 28 October 2026",
    facts: [
      ["Paths", "Outdoor, changing surfaces"],
      ["Check", "Comfort & access signage"],
      ["Babies", "Bring your own needs"],
    ],
    sections: [
      {
        heading: "Surfaces & paths",
        body: "Outdoor paths, changing surfaces, and crowd levels can affect wheelchair users and stroller pushing comfort.",
      },
      {
        heading: "Check on site",
        body: "Ask staff about access ramps, flat paths, and nearest parking. We don't guarantee full access because day conditions differ.",
      },
      {
        heading: "Strollers",
        body: "Bring baby basics yourself. Test path comfort on arrival before moving far from the drop-off.",
      },
    ],
    faqs: [
      {
        q: "Is it wheelchair friendly?",
        a: "Outdoor paths with changing surfaces can be challenging. Check access on site; we don't guarantee full access.",
      },
      {
        q: "Can I bring a stroller?",
        a: "Yes, but test path comfort on arrival. Bring baby needs yourself.",
      },
      {
        q: "Where is nearest parking for access?",
        a: "Use official parking and ask staff for the point nearest the entrance.",
      },
    ],
  },

  "cara-bayar": {
    title: "Payment",
    metaTitle: "Payment Methods at Ah Poong Sentul: Cash, Card & QRIS",
    metaDescription:
      "Payment at Ah Poong Sentul varies per vendor. Ask cash, card, or QRIS directly; carry cash backup for safety.",
    h1: "Payment on site",
    lead: "Because of many independent vendors, payment methods can differ. Prepare more than one option.",
    updated: "Updated: 28 October 2026",
    facts: [
      ["Varies", "Per vendor"],
      ["Ask", "Cash, card, QRIS"],
      ["Backup", "Carry cash"],
    ],
    sections: [
      {
        heading: "Ask each vendor",
        body: "Some vendors may accept cash, card, or QRIS; others cash only. Ask before ordering so you're not stuck at payment.",
      },
      {
        heading: "Carry cash",
        body: "Bring cash backup even if you usually pay digitally. Signal and payment machines can fail in open areas.",
      },
      {
        heading: "QRIS common in Indonesia",
        body: "Many Indonesian merchants use QRIS, but not every vendor at Ah Poong is guaranteed to support it. Confirm per vendor.",
      },
    ],
    faqs: [
      {
        q: "Does Ah Poong accept QRIS?",
        a: "Possibly some vendors, but we don't guarantee all support QRIS. Ask per vendor before ordering.",
      },
      {
        q: "Should I bring cash?",
        a: "Strongly advised. Carry cash backup because signal and machines can fail in open areas.",
      },
      {
        q: "Are debit/credit cards accepted?",
        a: "Depends on the vendor. Ask before ordering; don't assume all accept cards.",
      },
    ],
  },

  "eco-art-park": {
    title: "Eco Art Park",
    metaTitle: "Eco Art Park Sentul & Its Relation to Ah Poong",
    metaDescription:
      "Ah Poong Sentul is inside Ecoart Park Sentul City. Learn its position as a waterside complex and how to plan a visit within it.",
    h1: "Eco Art Park & Ah Poong",
    lead: "Ah Poong is part of the Ecoart Park Sentul City complex—not a separate place. Understanding this helps navigation.",
    updated: "Updated: 28 October 2026",
    facts: [
      ["Position", "Inside Ecoart Park Sentul City"],
      ["Address", "Jl. Ir H. Juanda, Cipambuan"],
      ["Context", "Sentul waterside complex"],
    ],
    sections: [
      {
        heading: "One complex",
        body: "Ah Poong Sentul is listed as being inside Ecoart Park Sentul City, on Jl. Ir H. Juanda, Cipambuan. This helps you understand navigation within the complex.",
      },
      {
        heading: "How to use it",
        body: "Use the map to see Ah Poong's position in the complex, then plan parking and the walk from the parking point to the waterside seating.",
      },
      {
        heading: "Don't assume the whole complex is the same",
        body: "The 'Eco Art Park' name covers a wider area; facilities outside Ah Poong are not verified by us. Focus on Ah Poong unless you check other parts via the map.",
      },
    ],
    faqs: [
      {
        q: "Is Ah Poong part of Eco Art Park?",
        a: "Yes, Ah Poong is inside Ecoart Park Sentul City on Jl. Ir H. Juanda, Cipambuan.",
      },
      {
        q: "Is complex admission the same as Ah Poong?",
        a: "We don't verify a complex ticket scheme. Ask on site about area entry fees.",
      },
      {
        q: "What's the difference between Eco Art Park and Ah Poong?",
        a: "Ah Poong is the riverside food space within the Ecoart Park complex. Other parts of the complex are not verified by us.",
      },
    ],
  },

  "taman-budaya": {
    title: "Taman Budaya",
    metaTitle: "Ah Poong + Taman Budaya Sentul: Combined Plan",
    metaDescription:
      "Combine Ah Poong and Taman Budaya Sentul: plan as a half day. Distance & travel time between them check on the map before leaving.",
    h1: "Ah Poong & Taman Budaya",
    lead: "If you want a culture-and-food day, combine Ah Poong with a Taman Budaya space in Sentul. Verify distance via map.",
    updated: "Updated: 28 October 2026",
    facts: [
      ["Idea", "Half day culture + food"],
      ["Distance", "Check on Sentul map"],
      ["Check", "Hours & access each"],
    ],
    sections: [
      {
        heading: "Combination logic",
        body: "A cultural space in Sentul can pair with a daytime Ah Poong visit before or after eating. Build it from the map position, not a recommendation list.",
      },
      {
        heading: "Verify distance",
        body: "We don't hold the exact distance and travel time between Ah Poong and Taman Budaya. Check the map on your travel day before locking the plan.",
      },
      {
        heading: "A sensible order",
        body: "Visit the cultural space during comfortable light, then end with waterside food at Ah Poong. Slot in transport time between them.",
      },
    ],
    faqs: [
      {
        q: "Can I combine Ah Poong and Taman Budaya?",
        a: "Yes as a half-day plan, as long as distance and travel time are verified on the map before leaving.",
      },
      {
        q: "How long total?",
        a: "Depends on distance between destinations. Allow at least half a day so you're not rushed.",
      },
      {
        q: "Which first, Ah Poong or Taman Budaya?",
        a: "Suggestion: cultural space during comfortable light, then food at Ah Poong. Match each one's hours.",
      },
    ],
  },

  "jungleland": {
    title: "JungleLand",
    metaTitle: "Ah Poong + JungleLand Sentul: One-Day Family Plan",
    metaDescription:
      "Combine Ah Poong and JungleLand Adventure in Sentul: a full family day. Distance & travel time check on map; slot in rest time.",
    h1: "Ah Poong & JungleLand",
    lead: "JungleLand is an adventure park in the Sentul area. Combine it with Ah Poong for a full family day, once distance is verified.",
    updated: "Updated: 28 October 2026",
    facts: [
      ["Idea", "Full family day"],
      ["Distance", "Check on Sentul map"],
      ["Rest", "Slot time between goals"],
    ],
    sections: [
      {
        heading: "Why combine",
        body: "JungleLand offers adventure rides, while Ah Poong gives a waterside food break. Both are in the Sentul area, so combining is logical.",
      },
      {
        heading: "Verify distance & tickets",
        body: "We don't hold the exact distance, travel time, or JungleLand ticket price. Check the map and JungleLand's official site before planning.",
      },
      {
        heading: "Daily order",
        body: "Many start at the adventure park in the morning, then eat at Ah Poong midday/afternoon. Add a break so kids don't tire.",
      },
    ],
    faqs: [
      {
        q: "Can I do Ah Poong and JungleLand in one day?",
        a: "Yes as a family day, as long as the distance and travel time between them are verified on the map.",
      },
      {
        q: "How far is Ah Poong from JungleLand?",
        a: "We don't hold the exact distance. Check the Sentul map on your travel day.",
      },
      {
        q: "Need to buy JungleLand tickets first?",
        a: "Yes, JungleLand has its own tickets. Check their official site; this guide doesn't sell or guarantee availability.",
      },
    ],
  },

  "mal-terdekat": {
    title: "Nearest mall",
    metaTitle: "Malls & Indoor Places Near Ah Poong for Rainy Days",
    metaDescription:
      "Indoor alternatives near Ah Poong when raining: find malls in Sentul City via map. We list no specific name to avoid misleading.",
    h1: "Indoor alternatives when it rains",
    lead: "If rain is heavy, shift to an indoor destination. We don't verify a specific mall, so search the current map.",
    updated: "Updated: 28 October 2026",
    facts: [
      ["Search", "Malls in Sentul City via map"],
      ["Hours", "Check each"],
      ["Rain", "Shift plan to indoor"],
    ],
    sections: [
      {
        heading: "Search from the map",
        body: "Use the map to find a shopping centre or mall in the Sentul City area. We deliberately list no specific name to avoid misleading if it has closed or moved.",
      },
      {
        heading: "Check hours & access",
        body: "Verify opening hours, distance, and how to get there from Ah Poong before leaving. Make it a backup if weather turns bad.",
      },
      {
        heading: "Pair with food",
        body: "Some malls have a food court as a rainy-day substitute for waterside seating. Adjust expectations accordingly.",
      },
    ],
    faqs: [
      {
        q: "Where is the nearest mall to Ah Poong?",
        a: "Search the map for shopping centres in Sentul City. We list no specific name to avoid misleading if it changes.",
      },
      {
        q: "Can I shift to a mall when it rains?",
        a: "Yes. Make it an indoor backup if rain is heavy, and check its hours and access first.",
      },
      {
        q: "Does the mall have similar food?",
        a: "Usually a food court, but type and price differ from Ah Poong. Adjust your expectations.",
      },
    ],
  },

  "rencana-setengah-hari": {
    title: "Half-day plan",
    metaTitle: "Half-Day Plan at Ah Poong Sentul",
    metaDescription:
      "Half-day plan at Ah Poong Sentul: come midday, eat waterside, walk slowly, then continue to another Sentul spot. Flexible with weather.",
    h1: "Half-day plan",
    lead: "For a first visit, half a day is enough: eat, walk, and explore the waterside a little.",
    updated: "Updated: 28 October 2026",
    facts: [
      ["Time", "About 3–4 hours"],
      ["Focus", "Eat + slow walk"],
      ["Continue", "Another Sentul spot"],
    ],
    sections: [
      {
        heading: "Suggested flow",
        body: "Arrive late morning to afternoon, order waterside food, then walk slowly enjoying the landscape. Slot in time for parking and queues.",
      },
      {
        heading: "Don't overpack",
        body: "Half a day is more comfortable than rushing. Leave room for unexpected weather or crowds.",
      },
      {
        heading: "Optional extension",
        body: "If time remains, combine with green space or another Sentul destination you verify via the map.",
      },
    ],
    faqs: [
      {
        q: "Is half a day enough at Ah Poong?",
        a: "For a first visit, yes. Allow 3–4 hours for a meal and relaxed walk.",
      },
      {
        q: "When to start best?",
        a: "Late morning to afternoon gives comfortable light and full vendor variety.",
      },
      {
        q: "Can I add another destination?",
        a: "Yes if time allows. Verify the distance of other Sentul spots on the map first.",
      },
    ],
  },

  "rencana-sehari-keluarga": {
    title: "Family day",
    metaTitle: "Full Family Day: Ah Poong + Sentul",
    metaDescription:
      "Full family day from Ah Poong: morning rides, midday waterside food, afternoon relax. Verify distance & tickets per spot on map.",
    h1: "Full family day",
    lead: "A full day in Sentul: pair Ah Poong with one other verified destination, with enough rest breaks.",
    updated: "Updated: 28 October 2026",
    facts: [
      ["Pattern", "Rides morning + Ah Poong midday"],
      ["Rest", "Enough breaks for kids"],
      ["Verify", "Distance & tickets per spot"],
    ],
    sections: [
      {
        heading: "Daily pattern",
        body: "Start at an adventure park or cultural space in Sentul in the morning, then eat midday/afternoon at Ah Poong, and close with a relaxed waterside walk.",
      },
      {
        heading: "Keep kids' rhythm",
        body: "Slot in rest and food between destinations. Don't stack too many rides in one day.",
      },
      {
        heading: "Verify before leaving",
        body: "Check distance, travel time, and tickets per destination on the map. Don't lock the plan before everything is verified.",
      },
    ],
    faqs: [
      {
        q: "How to plan a family day?",
        a: "Rides in the morning, food at Ah Poong midday, relax in the afternoon. Verify each spot's distance on the map.",
      },
      {
        q: "Tiring for kids?",
        a: "Can be if too packed. Add rest breaks and don't stack many rides.",
      },
      {
        q: "Need more than one ticket?",
        a: "Yes, if combining a paid park. Check each official site; this guide doesn't sell tickets.",
      },
    ],
  },

  "akhir-pekan-hemat": {
    title: "Budget weekend",
    metaTitle: "Budget Weekend Plan at Ah Poong Sentul",
    metaDescription:
      "Budget weekend at Ah Poong: arrive earlier to avoid queues, compare vendors, bring water & basics. Parking & food costs check on site.",
    h1: "Budget weekend",
    lead: "A cheap visit is still possible if you come earlier, compare prices, and prepare your own basics.",
    updated: "Updated: 28 October 2026",
    facts: [
      ["Arrive", "Earlier avoids queues"],
      ["Compare", "Prices across vendors"],
      ["Bring", "Water & basics"],
    ],
    sections: [
      {
        heading: "Avoid the peak",
        body: "Saturdays–Sundays are busier. Arriving earlier reduces food queues and improves the chance of a waterside seat.",
      },
      {
        heading: "Compare prices",
        body: "With many vendors, compare price and portion before deciding. Ask before ordering to fit your budget.",
      },
      {
        heading: "Prepare yourself",
        body: "Bring drinking water, weather protection, and basics to reduce unexpected spending on site.",
      },
    ],
    faqs: [
      {
        q: "Can I visit Ah Poong on a budget?",
        a: "Yes by arriving earlier, comparing vendors, and bringing your own basics.",
      },
      {
        q: "More expensive on weekends?",
        a: "Per-vendor prices can differ, not automatically higher. Compare and ask before buying.",
      },
      {
        q: "Tips to avoid queues?",
        a: "Arrive earlier and avoid peak meal times. Allow extra time for parking.",
      },
    ],
  },

  "sore-dan-malam": {
    title: "Evening & night",
    metaTitle: "Afternoon, Dinner & Night Activities at Ah Poong Sentul",
    metaDescription:
      "Afternoon & night at Ah Poong: calm waterside light, but night hours unverified. Check map before planning a night visit.",
    h1: "Afternoon, dinner & night",
    lead: "Afternoon often gives the calmest atmosphere, but night operating hours are not verified by us.",
    updated: "Updated: 28 October 2026",
    facts: [
      ["Afternoon", "Calm waterside light"],
      ["Night", "Hours unverified"],
      ["Check", "Map before night plan"],
    ],
    sections: [
      {
        heading: "Afternoon is calmest",
        body: "Toward afternoon, the light softens and the waterside atmosphere is often calmest. This is many visitors' favourite time to sit and relax.",
      },
      {
        heading: "Night needs verification",
        body: "Night operating hours are not verified. Check the map and ask vendors before planning dinner or night activities.",
      },
      {
        heading: "Safe return",
        body: "If you do come at night, arrange transport early because apps can be slower when busy.",
      },
    ],
    faqs: [
      {
        q: "How is the afternoon at Ah Poong?",
        a: "Calmest with softening light by the water. A favourite time for many visitors to sit and relax.",
      },
      {
        q: "Is it open for dinner?",
        a: "Night hours are unverified. Check the map and ask vendors before planning a night visit.",
      },
      {
        q: "Safe to return at night?",
        a: "Arrange transport early. App wait times tend to be longer when busy or at night.",
      },
    ],
  },
};
