export type StateLicense = {
  state: string;
  slug: string;
  stateAbbr: string;
  agencyName: string;
  agencyUrl: string;
  residentAnnual: string;
  nonResidentAnnual: string;
  residentShortTerm?: string;
  nonResidentShortTerm?: string;
  saltwater?: string;
  youthAge: number;
  seniorDiscount?: string;
  endorsements: string[];
  buyOnline: string;
  notes: string;
};

export const stateLicenses: StateLicense[] = [
  {
    state: "Florida",
    slug: "florida",
    stateAbbr: "FL",
    agencyName: "Florida Fish and Wildlife Conservation Commission",
    agencyUrl: "https://myfwc.com/license",
    residentAnnual: "$17.00",
    nonResidentAnnual: "$47.00",
    nonResidentShortTerm: "3-day: $17.00, 7-day: $30.00",
    saltwater: "Included in resident and non-resident fishing license",
    youthAge: 16,
    seniorDiscount: "65+ residents are exempt from the fishing license requirement",
    endorsements: [
      "Snook stamp: $10.00",
      "Lobster stamp: $5.00",
      "Tarpon tag: $51.50",
    ],
    buyOnline: "https://myfwc.com/license/recreational/buy-a-license/",
    notes:
      "Florida combines freshwater and saltwater fishing into a single recreational fishing license. Saltwater-only licenses are also available. Children under 16 are exempt from all license requirements.",
  },
  {
    state: "Texas",
    slug: "texas",
    stateAbbr: "TX",
    agencyName: "Texas Parks and Wildlife Department",
    agencyUrl: "https://tpwd.texas.gov",
    residentAnnual: "$30.00",
    nonResidentAnnual: "$58.00",
    nonResidentShortTerm: "1-day: $16.00, 5-day: $36.00",
    saltwater:
      "Combo fresh+salt package license: Resident $35.00, Non-resident $63.00",
    youthAge: 17,
    seniorDiscount: "65+ residents: reduced fee of $12.00 annually",
    endorsements: [
      "Alligator gar tag required to keep alligator gar (varies by season)",
    ],
    buyOnline: "https://tpwd.texas.gov/business/licenses/online_sales/",
    notes:
      "Children under 17 are exempt from freshwater fishing license requirements. Saltwater fishing requires a separate license at any age. The combo package is often the best value for anglers fishing both fresh and salt water.",
  },
  {
    state: "Minnesota",
    slug: "minnesota",
    stateAbbr: "MN",
    agencyName: "Minnesota Department of Natural Resources",
    agencyUrl: "https://dnr.state.mn.us",
    residentAnnual: "$25.00",
    nonResidentAnnual: "$51.00",
    nonResidentShortTerm:
      "1-day: $12.50, 3-day: $26.00, 7-day: $38.50, 14-day: $45.00",
    saltwater: "Not applicable — landlocked state",
    youthAge: 16,
    seniorDiscount: "65+ residents: lifetime license for a one-time fee of $12.50",
    endorsements: [
      "Trout and salmon stamp: $12.00 (required to fish designated trout streams and lakes)",
    ],
    buyOnline: "https://dnr.state.mn.us/licenses/",
    notes:
      "Minnesota offers one of the most complete short-term license options for visiting anglers. The lifetime senior license is a one-time purchase — no annual renewal required for qualifying residents.",
  },
  {
    state: "Wisconsin",
    slug: "wisconsin",
    stateAbbr: "WI",
    agencyName: "Wisconsin Department of Natural Resources",
    agencyUrl: "https://dnr.wisconsin.gov",
    residentAnnual: "$20.00",
    nonResidentAnnual: "$50.00",
    nonResidentShortTerm: "4-day: $23.00, 15-day: $33.00",
    saltwater: "Not applicable",
    youthAge: 16,
    seniorDiscount: "65+ residents receive a $5.00 discount on the annual license",
    endorsements: [
      "Great Lakes salmon and trout stamp: $10.00",
      "Inland trout stamp: $10.00",
    ],
    buyOnline: "https://gomerchant.com/go-wild/wisconsin",
    notes:
      "Wisconsin sells licenses through the GoWild system. Both stamps are required for fishing their respective waters — Great Lakes stamp for Lake Michigan and Lake Superior tributaries, inland trout stamp for designated inland trout streams.",
  },
  {
    state: "Michigan",
    slug: "michigan",
    stateAbbr: "MI",
    agencyName: "Michigan Department of Natural Resources",
    agencyUrl: "https://michigan.gov/dnr",
    residentAnnual: "$26.00",
    nonResidentAnnual: "$76.00",
    nonResidentShortTerm: "24-hour: $10.00, 72-hour: $20.00",
    saltwater: "Not applicable",
    youthAge: 17,
    seniorDiscount: "65+ residents: reduced annual license of $11.00",
    endorsements: [
      "All-species inland trout and salmon license: $12.00",
      "Lake Michigan or Lake Superior charter: fees vary by vessel",
    ],
    buyOnline: "https://michigan.gov/dnr/licenses-permits/fishing/license-info",
    notes:
      "Children under 17 do not need a fishing license in Michigan. The trout and salmon endorsement is required to fish for those species in designated inland waters. Michigan's non-resident annual license is among the higher-priced in the Midwest.",
  },
  {
    state: "New York",
    slug: "new-york",
    stateAbbr: "NY",
    agencyName: "New York State Department of Environmental Conservation",
    agencyUrl: "https://dec.ny.gov",
    residentAnnual: "$25.00",
    nonResidentAnnual: "$50.00",
    nonResidentShortTerm: "1-day: $5.00, 7-day: $28.00",
    saltwater:
      "Marine fishing registry required but free — separate from freshwater license",
    youthAge: 16,
    seniorDiscount: "70+ residents: free lifetime fishing license",
    endorsements: [],
    buyOnline: "https://licensing.com",
    notes:
      "New York issues its licenses through the DEC's online licensing system. Anglers fishing saltwater must register for the free Marine Angler Registration in addition to, or instead of, a freshwater license. No stamps or endorsements are required for most freshwater species.",
  },
  {
    state: "Montana",
    slug: "montana",
    stateAbbr: "MT",
    agencyName: "Montana Fish Wildlife & Parks",
    agencyUrl: "https://fwp.mt.gov",
    residentAnnual: "$21.00",
    nonResidentAnnual: "$86.00",
    nonResidentShortTerm: "2-day: $15.00, 10-day: $50.00",
    saltwater: "Not applicable",
    youthAge: 15,
    seniorDiscount: "62+ residents: $10.50 annual fishing license",
    endorsements: [
      "Conservation license: $8.00 (required before purchasing any other Montana license)",
      "Paddlefish tag: $6.00 resident, $111.00 non-resident",
    ],
    buyOnline: "https://fwp.mt.gov/licenses",
    notes:
      "The Montana conservation license must be purchased before a fishing license can be issued — budget for both. Children under 15 fish free. Non-resident annual licenses are priced higher than most western states due to demand from destination anglers.",
  },
  {
    state: "Colorado",
    slug: "colorado",
    stateAbbr: "CO",
    agencyName: "Colorado Parks and Wildlife",
    agencyUrl: "https://cpw.state.co.us",
    residentAnnual: "$35.34",
    nonResidentAnnual: "$98.40",
    nonResidentShortTerm: "1-day: $19.31, 5-day: $61.11",
    saltwater: "Not applicable",
    youthAge: 16,
    seniorDiscount: "64+ residents: $14.92 annual fishing license",
    endorsements: [
      "Annual habitat stamp: $10.45 (required for all license holders)",
      "Second rod stamp: $12.50 (allows use of a second rod simultaneously)",
    ],
    buyOnline:
      "https://cpw.state.co.us/learn/pages/licensesandapplications.aspx",
    notes:
      "The habitat stamp is required for all anglers in Colorado and is purchased at the same time as the fishing license. Colorado's fees are among the higher-priced in the Mountain West, reflecting high demand for blue-ribbon trout fisheries.",
  },
  {
    state: "Arkansas",
    slug: "arkansas",
    stateAbbr: "AR",
    agencyName: "Arkansas Game and Fish Commission",
    agencyUrl: "https://agfc.com",
    residentAnnual: "$10.50",
    nonResidentAnnual: "$50.00",
    nonResidentShortTerm: "3-day: $10.00, 7-day: $15.00",
    saltwater: "Not applicable",
    youthAge: 16,
    seniorDiscount: "65+ residents: free annual fishing license",
    endorsements: ["Trout permit: $10.50 (required to fish trout-stocked waters)"],
    buyOnline: "https://agfc.com/en/licenses-permits/",
    notes:
      "Arkansas has one of the lowest resident license fees in the country at $10.50. The trout permit is required separately for waters stocked with trout, including the famous tailwater fisheries below Bull Shoals and Norfork dams.",
  },
  {
    state: "Louisiana",
    slug: "louisiana",
    stateAbbr: "LA",
    agencyName: "Louisiana Department of Wildlife and Fisheries",
    agencyUrl: "https://wlf.louisiana.gov",
    residentAnnual: "$9.50",
    nonResidentAnnual: "$60.00",
    nonResidentShortTerm: "1-day: $10.00, 7-day: $30.00",
    saltwater:
      "Saltwater fishing license required in addition to basic license: Resident $13.00, Non-resident $30.00",
    youthAge: 16,
    seniorDiscount: "60+ residents: free fishing license",
    endorsements: [],
    buyOnline: "https://wlf.louisiana.gov/licenses",
    notes:
      "Louisiana separates freshwater and saltwater licenses — anglers fishing both need both. Resident freshwater-only licenses at $9.50 are among the lowest-priced in the country. Senior exemption kicks in at 60, earlier than most states.",
  },
];
