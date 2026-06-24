export interface Project {
  id: string;
  index: string;
  title: string;
  category: string;
  location: string;
  university?: string;
  role: string;
  software: string;
  pages: string[];
  description: string;
  thumbnailPage?: string; // override pages[0] for the card thumbnail
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "port_city",
    index: "01",
    title: "A Port City - Coney Island",
    category: "Academic Work",
    location: "Coney Island, NY, USA",
    university: "University of Cincinnati",
    role: "Collaborative Design",
    software: "Revit, AutoCAD, Photoshop",
    pages: ["03.jpg","04.jpg","05.jpg","06.jpg","07.jpg","08.jpg","09.jpg"],
    description: "An equal collaborative design from the University of Cincinnati, this project designs a resilient Industrial Zone for the flood-prone landscape of Coney Island. The primary goal is to maintain full operationality by identifying high-risk zones within the 100-year flood line. The design implements a system of flood walls and a centralized elevated platform situated above the flood level, ensuring that even during peak flooding, movement between buildings remains uninterrupted.",
  },
  {
    id: "car_museum",
    index: "02",
    title: "Detroit Car Museum",
    category: "Academic Work",
    location: "Detroit, MI, USA",
    university: "University of Cincinnati (DAAP)",
    role: "Individual Studio Project (Fall 2024)",
    software: "Rhino, Grasshopper, 3ds Max, V-Ray",
    pages: ["10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg"],
    description: "This design envisions the Detroit Car Museum as a contemporary landmark that blends creativity with functionality — a vibrant space that celebrates the city's rich automotive heritage while fostering community interaction and cultural continuity. Developed as part of the Fall 2024 studio at the University of Cincinnati, DAAP.",
  },
  {
    id: "sports_complex",
    index: "03",
    title: "Sports Complex Academy",
    category: "Thesis Project",
    location: "Thiruporur, Chengalpattu, Tamil Nadu, India",
    university: "Anna University (10th Semester)",
    role: "Individual Thesis",
    software: "Revit, Lumion, Photoshop, Space Frame design",
    pages: ["16.jpg","17.jpg","18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.jpg","26.jpg","27.jpg"],
    description: "A thesis project designed during the 10th semester. Located in the Thiruporur panchayat town in Chengalpattu district, Tamil Nadu — a newly developing region. The brief was to design a Sports training academy with a capacity of 35,000–40,000 people providing full-time training facilities to young athletes, promoting a multi-sport culture as part of urban lifestyle.",
  },
  {
    id: "performing_arts",
    index: "04",
    title: "Performing Arts Center",
    category: "Academic Work",
    location: "Anna Salai, Triplicane, Chennai, India",
    university: "Anna University",
    role: "Individual Studio Project",
    software: "AutoCAD, SketchUp, V-Ray, Tensile Roof design",
    pages: ["28.jpg","29.jpg","30.jpg","31.jpg","32.jpg","33.jpg","34.jpg","35.jpg","36.jpg","37.jpg"],
    description: "The project aims to design a Performing Arts Center with a quality environment appropriate to promote classical performing arts. The center is an integrated complex offering an amalgamation of guru-shisya and modern teaching pedagogy, rejuvenating urban space for public interaction and promoting enhanced collaborative work among artists.",
  },
  {
    id: "freelance_work",
    index: "05",
    title: "Freelance Work & Interiors",
    category: "Freelance",
    location: "India & USA",
    role: "Lead Designer",
    software: "Illustrator, Photoshop, AutoCAD, 3ds Max",
    thumbnailPage: "40.jpg",
    pages: ["38.jpg","39.jpg","40.jpg","41.jpg"],
    description: "Selected freelance projects including the Whitehorse Global Venture Capital logo design (California, USA) and Casagrand interior design. The Whitehorse logo represents a constantly evolving unicorn for a cross-border startup investment platform. The Casagrand project focused on creating a contemporary interior space with carefully curated materials.",
  },
  {
    id: "office_work",
    index: "06",
    title: "Professional Work - Studio 7",
    category: "Professional Experience",
    location: "Chennai & Tirupati, India",
    role: "Project Architect (2023–2024)",
    software: "Revit, AutoCAD, On-site Coordination",
    thumbnailPage: "43.jpg",
    pages: ["42.jpg","43.jpg","44.jpg","45.jpg","46.jpg","47.jpg","48.jpg","49.jpg","50.jpg","51.jpg","52.jpg"],
    description: "During my time at Studio 7 Architects, I worked as a project architect taking the lead role in design and overseeing site work. Responsible for managing site activities, resolving on-site issues, coordinating the on-site team, detailed working drawings, documentation, and collaborating with structural consultants, contractors, and vendors.",
  },
  {
    id: "internship_work",
    index: "07",
    title: "Internship Work - Betweenlines",
    category: "Professional Experience",
    location: "Bangalore & Chennai, India",
    role: "Trainee Architect (2022)",
    software: "AutoCAD, SketchUp, V-Ray, Photoshop",
    thumbnailPage: "58.jpg",
    pages: ["53.jpg","54.jpg","55.jpg","56.jpg","57.jpg","58.jpg","59.jpg","60.jpg","61.jpg","62.jpg","63.jpg","64.jpg","65.jpg"],
    description: "A 5-month internship during my 4th academic year at a well-established firm in Bangalore, India. Selected projects include the Handloom & Handicraft Museum, Nalli Anna Nagar textile showroom facade, Maharishi Vedic Health facility, and Bengaluru North University Kolar.",
  },
  {
    id: "miscellaneous",
    index: "08",
    title: "Photography & Art",
    category: "Miscellaneous",
    location: "Global",
    role: "Wildlife Photographer",
    software: "Lightroom, DSLR Photography",
    pages: ["66.jpg"],
    description: "Wildlife and street photography work. Contest award winner in the Animals category — 19th place out of 100 photos in June 2020.",
  },
];
