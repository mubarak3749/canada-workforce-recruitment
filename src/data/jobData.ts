import { JobListing, FAQItem, ChecklistCategory } from '../types';
import fruitPackingImg from '../assets/images/fruit_packing_worker_1787988314170.jpg';
import foodProcessingImg from '../assets/images/food_processing_plant_1787988333794.jpg';
import warehouseLogisticsImg from '../assets/images/warehouse_logistics_1787988353736.jpg';
import supermarketRetailImg from '../assets/images/supermarket_retail_1787988370597.jpg';
import factoryAssemblyImg from '../assets/images/factory_assembly_1787988388775.jpg';
import seasonalAgricultureImg from '../assets/images/greenhouse_agriculture_1787988409555.jpg';

export const JOB_LISTINGS: JobListing[] = [
  {
    id: 'fruit-packing-worker',
    category: 'fruit_packing',
    title: 'Fruit Packing & Sorting Worker',
    imageUrl: fruitPackingImg,
    industry: 'Agriculture & Post-Harvest Packaging',
    badge: 'High Demand • Seasonal & Regular',
    locationPlaceholder: 'Ontario / British Columbia / Quebec (Location assigned upon employer placement)',
    employmentType: 'Full-Time / Seasonal (40–48 hrs/week during peak harvest)',
    summary: 'Perform systematic fruit grading, quality sorting, weighing, labeling, and protective packaging in modern Canadian packing houses and cold storage facilities.',
    fullDescription: 'Fruit Packing Workers play an essential role in Canada’s agricultural supply chain. Working within climate-controlled packing houses and distribution facilities, workers inspect freshly harvested fruits (such as apples, berries, cherries, and stone fruits), discard damaged produce, operate automated packing scales, and secure cartons for retail shipment across Canada.',
    duties: [
      'Inspect incoming produce on conveyor lines to grade quality, color, and size',
      'Sort out bruised, damaged, or unmarketable fruit according to quality standards',
      'Pack sorted fruit into cartons, crates, clamshells, or bulk bins with protective wrapping',
      'Weigh packed units and apply accurate barcode, batch, and origin labels',
      'Stack packed boxes onto wooden shipping pallets according to height and weight limits',
      'Maintain clean and sanitary conditions across workstations, trays, and sorting conveyors',
      'Assist warehouse crew with moving finished pallets to temperature-controlled cold rooms'
    ],
    requirements: [
      'Basic conversational English or French (sufficient for workplace safety instructions)',
      'Physical stamina to stand for extended periods and lift boxes (up to 15–20 kg / 35–45 lbs)',
      'Good hand-eye coordination, attention to detail, and ability to work in moderate paced lines',
      'Willingness to work morning or afternoon shifts, including peak harvest weekends when scheduled',
      'Previous experience in agriculture, food handling, or factory work is an asset but not strictly required (on-the-job orientation provided)'
    ],
    workingConditions: [
      'Environment: Clean, climate-controlled packing sheds (temperatures generally between 10°C to 18°C / 50°F to 64°F)',
      'Safety Gear Provided: Non-slip boots/footwear covers, gloves, hairnets, and high-visibility vests',
      'Schedule: Standard 8-hour shifts; seasonal overtime may be offered during harvest peaks in compliance with provincial labour laws'
    ],
    documentsRequired: [
      'Valid international passport with at least 12–18 months remaining validity',
      'Up-to-date Curriculum Vitae (CV / Resume) detailing any past work or practical experience',
      'Educational certificates or secondary school completion documents',
      'Police clearance / non-criminal background check (standard for international employment applications)',
      'Valid medical clearance (if requested by employer or immigration requirements)'
    ],
    salaryNote: 'Prevailing Canadian provincial wage standards (typically $16.55 – $18.50 CAD/hour, varying by province, overtime regulations, and specific employer contract)',
    shiftSchedule: 'Day & Evening shifts available; seasonal contracts typically 6 to 9 months with potential extension',
    isSeasonal: true,
  },
  {
    id: 'food-processing-worker',
    category: 'food_processing',
    title: 'Food Processing & Packaging Operator',
    imageUrl: foodProcessingImg,
    industry: 'Food & Beverage Manufacturing',
    badge: 'Year-Round • Essential Industry',
    locationPlaceholder: 'Alberta / Ontario / Manitoba / Nova Scotia (Employer specific)',
    employmentType: 'Full-Time Permanent / Contract (40 hrs/week)',
    summary: 'Support automated production lines, prepare ingredients, monitor food sanitation standards, and package finished goods in federally inspected food facilities.',
    fullDescription: 'Canadian food manufacturing plants supply supermarkets and institutional food networks nationwide. Food Processing Workers assist in measuring raw ingredients, operating packaging machinery, packaging meat, dairy, bakery, or vegetable products, and enforcing strict Hazard Analysis Critical Control Point (HACCP) hygiene guidelines.',
    duties: [
      'Feed raw ingredients into mixing, slicing, processing, and packaging machines',
      'Monitor production lines to ensure seamless flow and prevent product jams',
      'Package finished food items into vacuum pouches, cans, jars, or shipping cases',
      'Verify seal integrity, package dates, lot numbers, and nutritional labels',
      'Perform routine cleaning, sanitation, and chemical washing of stainless steel surfaces',
      'Conduct basic quality checks, temperature logging, and metal detection verifications',
      'Report mechanical malfunctions or sanitation irregularities immediately to line supervisors'
    ],
    requirements: [
      'Basic to intermediate English or French comprehension (written and spoken)',
      'Commitment to rigorous food safety, personal hygiene, and sanitary protocols',
      'Ability to perform repetitive tasks with precision in controlled environments',
      'Comfortable standing, bending, and handling chilled food products throughout the shift',
      'Prior food industry experience, food handler certificate, or manufacturing background is a strong plus'
    ],
    workingConditions: [
      'Environment: Modern food grade production rooms (refrigerated sections 4°C–8°C for perishable goods; ambient for dry goods)',
      'Safety Gear Provided: Thermal thermal innerwear, food-safe gloves, smocks, earplugs, and safety boots',
      'Schedule: Rotational 8-hour or 12-hour continental shift rotations (Day / Night)'
    ],
    documentsRequired: [
      'Valid international passport',
      'Updated Canadian-format CV / Resume',
      'Proof of highest education completed',
      'Reference letters or employment certificates from past employers (if applicable)',
      'Clear criminal record check'
    ],
    salaryNote: 'Standard Canadian manufacturing rates ($17.00 – $21.00 CAD/hour based on facility classification, shift premiums, and provincial standards)',
    shiftSchedule: 'Full-time rotational shifts (Morning, Afternoon, and Overnight options)',
    isSeasonal: false,
  },
  {
    id: 'warehouse-logistics-worker',
    category: 'warehouse_logistics',
    title: 'Warehouse & Logistics Associate',
    imageUrl: warehouseLogisticsImg,
    industry: 'Supply Chain & Distribution',
    badge: 'Year-Round • Fast-Paced',
    locationPlaceholder: 'Greater Toronto Area (ON) / Metro Vancouver (BC) / Calgary (AB) / Montreal (QC)',
    employmentType: 'Full-Time (40 hrs/week)',
    summary: 'Execute inventory receiving, electronic order picking, shipment staging, RF barcode scanning, and order dispatch in modern distribution hubs.',
    fullDescription: 'Warehouse Associates are the backbone of Canada’s logistics infrastructure. Utilizing RF handheld scanners, pallet jacks, and automated conveyor systems, workers pick retail merchandise, verify customer packing slips, assemble palletized loads, and load delivery trailers for distribution across provincial trade corridors.',
    duties: [
      'Receive inbound container shipments, inspect for damage, and verify bill of lading counts',
      'Use handheld RF scanners to locate merchandise in warehouse racking and pick orders accurately',
      'Wrap, strap, and label shipping pallets for secure road and rail transportation',
      'Operate manual or electric pallet jacks safely in designated pedestrian lanes',
      'Conduct regular cycle counts and inventory reconciliations to keep stock counts precise',
      'Load and unload logistics trailers using dock levelers and powered equipment',
      'Maintain clear aisles, discard packaging waste, and follow Canadian Occupational Health & Safety (OHS) rules'
    ],
    requirements: [
      'Good conversational English or French comprehension',
      'Physical capability to lift and move merchandise weighing up to 23 kg (50 lbs)',
      'Familiarity with digital scanners or willingness to learn warehouse management software',
      'Strong team orientation, punctuality, and commitment to workplace safety rules',
      'Warehouse, logistics, or retail stockroom experience is beneficial; forklift certification is an advantage'
    ],
    workingConditions: [
      'Environment: Large, dry distribution warehouses with racking heights up to 10 meters',
      'Safety Gear Provided: CSA-approved safety boots allowance / foot protection, high-visibility vest, grip gloves',
      'Schedule: Standard 5-day work week or 4-day condensed 10-hour shifts'
    ],
    documentsRequired: [
      'Valid international passport',
      'Structured CV / Resume highlighting logistics or manual work history',
      'Secondary school or vocational training completion certificates',
      'Background check clearance'
    ],
    salaryNote: 'Competitive logistics wages ($17.50 – $22.50 CAD/hour plus shift premiums for night and weekend shifts)',
    shiftSchedule: 'Day, Afternoon, or Weekend Night shifts available',
    isSeasonal: false,
  },
  {
    id: 'store-retail-worker',
    category: 'store_retail',
    title: 'Supermarket & Retail Store Operations Assistant',
    imageUrl: supermarketRetailImg,
    industry: 'Retail Grocery & Commercial Stores',
    badge: 'Customer Facing • Active',
    locationPlaceholder: 'Suburban & Urban Centres across Ontario, Alberta, and British Columbia',
    employmentType: 'Full-Time (37.5–40 hrs/week)',
    summary: 'Maintain supermarket merchandise displays, restock shelves, organize backroom storage, assist store shoppers, and manage checkout point-of-sale registers.',
    fullDescription: 'Supermarket and Store Operations Assistants ensure that Canadian retail food and consumer stores operate smoothly. Working closely with store team leads, associates restock dairy, produce, dry grocery, and household goods, verify price tags, assist shoppers in finding products, and maintain clean shopping environments.',
    duties: [
      'Unpack supplier shipments and organize stock in stockroom storage areas',
      'Replenish grocery shelves, end-cap displays, and refrigerated display cases systematically',
      'Rotate perishable goods according to FIFO (First-In, First-Out) expiry guidelines',
      'Ensure accurate electronic shelf labels, price tags, and promotional signage',
      'Provide courteous customer service by answering shopper inquiries and directing them to aisles',
      'Operate computerized point-of-sale checkout scanners and process payments accurately',
      'Maintain front-end cleanliness, sanitize shopping carts, and return misplaced items'
    ],
    requirements: [
      'Intermediate English or French communication skills (direct interaction with customers)',
      'Friendly, customer-centric attitude with strong interpersonal and teamwork skills',
      'Ability to stand, walk, and lift boxes of goods (up to 15–20 kg / 35–45 lbs) throughout the shift',
      'Basic arithmetic numeracy for cash register handling and inventory checks',
      'Prior retail, cashier, hospitality, or customer service experience is appreciated'
    ],
    workingConditions: [
      'Environment: Bright, climate-controlled modern retail grocery supermarket',
      'Dress Code: Company branded aprons/vests provided by the employer',
      'Schedule: Flexible operational shifts between 7:00 AM and 10:00 PM'
    ],
    documentsRequired: [
      'Valid passport',
      'Professional CV / Resume with retail or customer service background',
      'Secondary school or university education transcripts / certificates',
      'Police clearance check'
    ],
    salaryNote: 'Canadian retail sector wages ($16.55 – $19.00 CAD/hour according to provincial employment standards)',
    shiftSchedule: 'Morning, Midday, or Closing shifts with scheduled weekend rotations',
    isSeasonal: false,
  },
  {
    id: 'general-factory-worker',
    category: 'general_factory',
    title: 'General Factory & Production Assembly Worker',
    imageUrl: factoryAssemblyImg,
    industry: 'Manufacturing & Light Industrial Assembly',
    badge: 'Steady Hours • Skill Growth',
    locationPlaceholder: 'Southern Ontario / Quebec Industrial Corridors / Alberta',
    employmentType: 'Full-Time Permanent (40 hrs/week)',
    summary: 'Assemble manufactured components, operate packaging equipment, perform dimensional checks, and prepare finished industrial goods for delivery.',
    fullDescription: 'Canadian manufacturing and assembly plants produce a wide range of consumer goods, building supplies, packaging materials, and automotive components. General Factory Workers work on assembly lines, using hand and power tools to assemble parts, inspect finished items for flaws, and package products according to client specifications.',
    duties: [
      'Assemble component parts manually or using pneumatic and power hand tools',
      'Position raw materials and sub-assemblies on assembly fixtures and jigs',
      'Perform visual and caliper dimensional inspections to verify product quality',
      'Pack finished assemblies into protective cartons and apply identification labels',
      'Operate tape machines, banding tools, and pallet wrapping equipment',
      'Follow Canadian Workplace Hazardous Materials Information System (WHMIS) protocols',
      'Keep work cells orderly, sweep floor debris, and maintain tooling in safe condition'
    ],
    requirements: [
      'Basic to intermediate English or French comprehension',
      'Good manual dexterity and mechanical aptitude for handling small components and tools',
      'Ability to follow technical work instructions and safety checklists closely',
      'Reliability, good attendance record, and readiness to work in manufacturing teams',
      'General labour, construction, factory, or technical trade experience is advantageous'
    ],
    workingConditions: [
      'Environment: Indoor industrial facility with ventilation and dust control systems',
      'Safety Gear Provided: Safety glasses, ear protection, cut-resistant gloves, and steel-toe boot subsidies',
      'Schedule: Fixed 8-hour morning, afternoon, or night shift schedules'
    ],
    documentsRequired: [
      'Valid international passport',
      'Detailed CV / Resume with past work history and mechanical skills',
      'Educational or vocational certificates',
      'Clean background check'
    ],
    salaryNote: 'Standard manufacturing wage scale ($17.50 – $21.50 CAD/hour depending on plant specialty and shift)',
    shiftSchedule: 'Standard Monday to Friday production shifts (7:00 AM – 3:30 PM / 3:30 PM – 12:00 AM)',
    isSeasonal: false,
  },
  {
    id: 'seasonal-agriculture-worker',
    category: 'seasonal_agriculture',
    title: 'Seasonal Agricultural Field & Greenhouse Worker',
    imageUrl: seasonalAgricultureImg,
    industry: 'Agriculture & Commercial Greenhouses',
    badge: 'Seasonal Contracts • Outdoor & Indoor',
    locationPlaceholder: 'Niagara Region (ON) / Fraser Valley (BC) / Leamington Greenhouse Zone (ON)',
    employmentType: 'Seasonal Full-Time (40–50 hrs/week in peak season)',
    summary: 'Engage in crop planting, greenhouse plant care, manual harvesting, pruning, and field maintenance under established Canadian agricultural programs.',
    fullDescription: 'Canada’s agricultural sector encompasses vast orchards, berry farms, vegetable fields, and high-tech commercial hydroponic greenhouses. Agricultural Workers plant seedlings, prune vines, harvest ripe crops by hand, sort produce at field stations, and maintain irrigation systems during seasonal farming cycles.',
    duties: [
      'Plant seeds, transplant seedlings, and tie vines in commercial greenhouses or open fields',
      'Prune, de-leaf, and train vegetable crops (tomatoes, peppers, cucumbers) to maximize yield',
      'Harvest fruits, vegetables, and berries by hand carefully to avoid bruising',
      'Operate basic farm equipment, tractors, and irrigation watering systems under supervision',
      'Sort and crate freshly harvested produce at field side packing stations',
      'Weed, cultivate soil, and apply organic mulches according to farm supervisor instructions',
      'Clean greenhouse walkways, sterilize planting trays, and prepare soil beds for planting'
    ],
    requirements: [
      'Ability to work in outdoor field weather conditions or warm greenhouse environments',
      'Physical stamina for bending, crouching, walking, and carrying harvesting baskets (up to 20 kg)',
      'Hardworking attitude, strong work ethic, and ability to collaborate in multicultural farm teams',
      'Basic English or French understanding for farm safety procedures',
      'Previous farming, gardening, or rural physical labor experience is valued'
    ],
    workingConditions: [
      'Environment: Outdoor agricultural fields (sun, varying weather) or modern hydroponic greenhouses',
      'On-Site Amenities: Farm-provided or coordinated seasonal worker accommodation often available in rural regions per provincial housing standards',
      'Schedule: 6 to 8 month seasonal contracts (typically April through November)'
    ],
    documentsRequired: [
      'Valid passport with full seasonal validity',
      'CV / Resume detailing practical agricultural or outdoor work experience',
      'Standard medical examination certificate (if required by program)',
      'Clear police certificate'
    ],
    salaryNote: 'Agricultural wage standards ($16.55 – $18.50 CAD/hour conforming to provincial minimum farm wage rules)',
    shiftSchedule: 'Early morning starts to avoid midday heat (6:00 AM – 2:30 PM)',
    isSeasonal: true,
  }
];

export const APPLICATION_STEPS = [
  {
    step: 1,
    title: 'Explore & Choose Position',
    shortDesc: 'Review available job categories and verify qualification requirements.',
    detail: 'Browse through our open employment categories in agriculture, food packaging, warehouse logistics, retail, and manufacturing. Check the physical expectations, required language level, and job duties to identify positions that match your background.',
  },
  {
    step: 2,
    title: 'Submit Application & CV',
    shortDesc: 'Complete the candidate application form with your verified work history.',
    detail: 'Fill out our structured online candidate form, upload your chronological CV / Resume in PDF or Word format, and provide accurate contact and nationality details. Our recruitment team logs your application under a unique reference code.',
  },
  {
    step: 3,
    title: 'Profile Assessment & Employer Review',
    shortDesc: 'Our recruitment team screens profiles and presents qualified candidates to Canadian employers.',
    detail: 'Candidate profiles meeting employer criteria are reviewed for specific vacancies. When an employer expresses interest, a virtual interview or structured skills evaluation is scheduled.',
  },
  {
    step: 4,
    title: 'Selection & Employment Documentation',
    shortDesc: 'Selected candidates receive formal job offer details from the Canadian employer.',
    detail: 'Upon successful selection, the employer initiates standard employment agreements outlining wages, job duties, location, and statutory benefits. The employer handles required Canadian labour market approvals where applicable.',
  },
  {
    step: 5,
    title: 'Work Authorization & Arrival Preparation',
    shortDesc: 'Apply for official Canadian work authorization through IRCC if eligible.',
    detail: 'With valid employment documentation, the candidate applies for the appropriate work permit through official Government of Canada (IRCC) portals. Travel, accommodation orientation, and workplace onboarding commence upon official permit issuance.',
  }
];

export const DOCUMENT_CHECKLIST_DATA: ChecklistCategory[] = [
  {
    id: 'identity-travel',
    title: '1. Identity & Travel Documents',
    description: 'Essential government-issued documents needed to verify identity and enable international travel.',
    items: [
      {
        id: 'doc-passport',
        label: 'Valid International Passport',
        description: 'Machine-readable passport with at least 12–18 months validity remaining and empty visa pages.',
        required: true,
        tips: 'Ensure your passport details match your legal birth and educational records exactly.'
      },
      {
        id: 'doc-photos',
        label: 'Recent Passport-Sized Photographs',
        description: 'Clear, colour photographs meeting standard Canadian visa photo specifications (35mm x 45mm, white background).',
        required: true,
      },
      {
        id: 'doc-birth-cert',
        label: 'National Identity / Birth Certificate',
        description: 'Official birth certificate or national identity card with official English/French translation if in another language.',
        required: false,
      }
    ]
  },
  {
    id: 'employment-cv',
    title: '2. Professional Profile & Work Records',
    description: 'Documentation demonstrating your work experience and professional capabilities.',
    items: [
      {
        id: 'doc-resume',
        label: 'Canadian-Style CV / Resume',
        description: 'Clean, chronological resume outlining contact information, employment history, specific duties performed, and education.',
        required: true,
        tips: 'Avoid including personal details like marital status or religion, which are not standard in Canada.'
      },
      {
        id: 'doc-experience-letters',
        label: 'Past Employment Reference Letters',
        description: 'Letters on company letterhead from previous employers confirming job title, duration of employment, and key duties.',
        required: true,
        tips: 'Especially helpful for warehouse, manufacturing, and food handling positions.'
      },
      {
        id: 'doc-certificates',
        label: 'Trade / Skill Certificates (if any)',
        description: 'Certifications such as Forklift operator licence, Food Handler certificate, First Aid, or mechanical training.',
        required: false,
      }
    ]
  },
  {
    id: 'education-language',
    title: '3. Education & Language Records',
    description: 'Proof of completed schooling and functional language comprehension.',
    items: [
      {
        id: 'doc-education',
        label: 'Highest Educational Certificate / Diploma',
        description: 'Secondary school diploma, vocational certificate, college diploma, or university degree transcripts.',
        required: true,
      },
      {
        id: 'doc-language',
        label: 'Language Proficiency Assessment (Optional / Recommended)',
        description: 'IELTS General, CELPIP, TEF/TCF, or proof of education in English/French (helpful for workplace communication).',
        required: false,
        tips: 'Entry-level positions prioritize basic functional comprehension over high test scores.'
      }
    ]
  },
  {
    id: 'compliance-health',
    title: '4. Background & Health Clearances',
    description: 'Standard clearances required during formal hiring and visa processing.',
    items: [
      {
        id: 'doc-police',
        label: 'Police Clearance Certificate',
        description: 'Official non-criminal background certificate from your country of origin and any country where you lived for 6+ months.',
        required: true,
        tips: 'Must be recent (typically issued within the last 6 to 12 months).'
      },
      {
        id: 'doc-medical',
        label: 'Medical Examination (When Requested)',
        description: 'Immigration medical examination conducted by an IRCC-approved Panel Physician if requested by immigration authorities.',
        required: false,
      }
    ]
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What types of jobs does Canada Workforce Recruitment handle?',
    answer: 'We specialize in recruitment for essential sectors including fruit and agricultural packing, food processing and packaging, warehouse logistics, retail grocery operations, general factory assembly, and seasonal agricultural farm work. We connect candidates with legitimate Canadian employers who have approved hiring requirements.',
    category: 'Available Jobs'
  },
  {
    id: 'faq-2',
    question: 'Are job opportunities, work permits, or visas guaranteed?',
    answer: 'No. We strictly uphold Canadian and international recruitment ethics: NO job offer, work permit, visa, or immigration outcome can ever be guaranteed by any agency. Hiring decisions are made strictly by Canadian employers based on candidate qualifications, and all work authorization approvals are determined solely by Immigration, Refugees and Citizenship Canada (IRCC).',
    category: 'Fees & Transparency'
  },
  {
    id: 'faq-3',
    question: 'Do applicants have to pay recruitment or placement fees for a job?',
    answer: 'No. Under Canadian federal and provincial laws (such as Ontario’s Employment Standards Act and the Temporary Foreign Worker Program rules), employers and recruitment agencies are strictly prohibited from charging candidates recruitment fees for job offers or placements. Candidate expenses are limited to their own official government application fees, medical tests, and passport costs.',
    category: 'Fees & Transparency'
  },
  {
    id: 'faq-4',
    question: 'What level of English or French is required for packing and warehouse jobs?',
    answer: 'Most entry-level packing, agricultural, and warehouse positions require basic to intermediate conversational English or French so that you can understand workplace safety protocols, follow line supervisor instructions, and read equipment labels. Retail and customer-facing roles require intermediate to advanced communication skills.',
    category: 'Requirements'
  },
  {
    id: 'faq-5',
    question: 'How does the recruitment and hiring process work?',
    answer: 'The process consists of 5 clear steps: (1) You review job categories and submit your application with a CV; (2) Our team screens your profile; (3) We present qualified profiles to Canadian employers; (4) Successful candidates interview and receive formal employment documentation from the employer; (5) The candidate applies for official Canadian work authorization through IRCC.',
    category: 'Recruitment Process'
  },
  {
    id: 'faq-6',
    question: 'How long does the hiring and work permit process usually take?',
    answer: 'Timelines vary significantly depending on employer recruitment schedules, the specific province, whether an LMIA is required, and current IRCC visa processing times in the applicant’s country of residence. General timelines can range from 2 to 6 months. IRCC publishes updated processing time estimates on their official website.',
    category: 'Recruitment Process'
  },
  {
    id: 'faq-7',
    question: 'Is accommodation provided for workers in Canada?',
    answer: 'For seasonal agricultural and rural farming positions, employers often provide or coordinate approved housing at reasonable, regulated rates in compliance with provincial housing inspection guidelines. For urban warehouse, factory, and retail positions, employers or our team can provide relocation orientation and guidance, while workers arrange their own local living accommodations.',
    category: 'Housing & Support'
  },
  {
    id: 'faq-8',
    question: 'Can I apply if I do not currently have previous experience in Canada?',
    answer: 'Yes! Canadian employers frequently consider international candidates with relevant home country experience in agriculture, manufacturing, warehousing, retail, or physical labour. Having a clear, well-structured CV and showing reliable work ethics are key factors.',
    category: 'Requirements'
  },
  {
    id: 'faq-9',
    question: 'How do Canadian employers ensure worker safety and labour rights?',
    answer: 'All workers in Canada—regardless of whether they are Canadian citizens, permanent residents, or temporary foreign workers—are protected by Canadian provincial employment standards and Occupational Health and Safety (OHS) legislation. This guarantees fair minimum wages, safe working conditions, overtime compensation, and access to healthcare coverage.',
    category: 'Housing & Support'
  },
  {
    id: 'faq-10',
    question: 'How do I follow up on my submitted application?',
    answer: 'Once you submit the online application form, you will receive a unique Application Reference Code (e.g., CWR-XXXX). You can reach out directly to our recruitment team via our contact form or our official WhatsApp support channel quoting your reference number for status updates.',
    category: 'Recruitment Process'
  }
];
