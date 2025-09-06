// Map each step to the fields it contains
export const stepFields = {
  1: ["fullName", "email", "phone", "dob", "profilePicture"],
  2: [
    "department",
    "positionTitle",
    "startDate",
    "jobType",
    "salary",
    "manager",
  ],
  3: [
    "primarySkills",
    "skillExperience",
    "preferredHours",
    "remotePreference",
    "extraNotes",
  ],
  4: [
    "emergencyName",
    "relationship",
    "emergencyPhone",
    "guardianName",
    "guardianPhone",
  ],
  5: ["confirmInfo"],
};

export const managerOptions = ["Sarah Johnson", "Mike Chen"];

export const availableSkills = [
  "JavaScript",
  "Python",
  "Java",
  "React",
  "Node.js",
  "SQL",
  "AWS",
  "Docker",
  "Git",
  "Project Management",
  "Data Analysis",
  "Machine Learning",
  "UI/UX Design",
  "Marketing",
  "Sales",
  "Customer Service",
  "Leadership",
  "Communication",
];

export const experienceLevels = [
  { value: "beginner", label: "Beginner (0-1 years)" },
  { value: "intermediate", label: "Intermediate (2-4 years)" },
  { value: "advanced", label: "Advanced (5-7 years)" },
  { value: "expert", label: "Expert (8+ years)" },
];

export const workingHoursOptions = [
  { value: "standard", label: "Standard (9 AM - 5 PM)" },
  { value: "early", label: "Early (7 AM - 3 PM)" },
  { value: "late", label: "Late (11 AM - 7 PM)" },
  { value: "flexible", label: "Flexible Hours" },
];

export const remoteOptions = [
  { value: "onsite", label: "On-site only" },
  { value: "hybrid", label: "Hybrid (2-3 days remote)" },
  { value: "remote", label: "Fully remote" },
  { value: "no-preference", label: "No preference" },
];

export const relationshipOptions = [
  "Spouse",
  "Parent",
  "Sibling",
  "Child",
  "Friend",
  "Colleague",
  "Other",
];
