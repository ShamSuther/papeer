export const personalInfoInputs = [
  {
    name: "name",
    label: "Full Name",
    placeholder: "John Doe",
    type: "text",
  },
  {
    name: "mobile_number",
    label: "Mobile Number",
    placeholder: "+923333333333",
    type: "text",
  },
  {
    name: "email",
    label: "Email Address",
    placeholder: "example@gmail.com",
    type: "email",
  },
  {
    name: "linkedin_url",
    label: "Linkedin",
    placeholder: "linkedin.com/in/johndoe",
    type: "text",
  },
  {
    name: "location",
    label: "Current Location",
    placeholder: "e.g., Address, Karachi, Sindh, Pakistan",
    type: "text",
  },
  {
    name: "summary",
    label: "Professional Summary",
    placeholder: "Tell us a little bit about yourself",
    type: "textarea",
  },
];

export const educationInputs = [
  {
    name: "school",
    label: "School / University",
    placeholder: "Harvard University",
    type: "text",
  },
  {
    name: "degree",
    label: "Degree",
    placeholder: "Bachelor's",
    type: "text",
  },
  {
    name: "start_year",
    label: "Start Year",
    placeholder: "1993",
    type: "text",
  },
  { name: "end_year", label: "End Year", placeholder: "2027", type: "text" },
  {
    name: "grade",
    label: "Grade",
    placeholder: "CGPA",
    type: "text",
  },
  {
    name: "description",
    label: "Description",
    placeholder: "Tell us about your studies...",
    type: "textarea",
  },
];

export const skillInputs = [
  {
    name: "skill_name",
    label: "Name",
    placeholder: "JavaScript",
    type: "text",
  },
  {
    name: "proficiency",
    label: "Proficiency Level",
    placeholder: "Select you skill level",
    type: "select",
    data: ["beginner", "intermediate", "expert"],
  },
];

export const experienceInputs = [
  {
    name: "job_title",
    label: "Job Title",
    placeholder: "Sales Manager",
    type: "text",
  },
  {
    name: "employment_type",
    label: "Employment Type",
    placeholder: "Full-time, Part-time, Contract, etc.",
    type: "text",
  },
  {
    name: "company",
    label: "Company Name",
    placeholder: "Google",
    type: "text",
  },
  {
    name: "description",
    label: "Role Description",
    placeholder: "Tell us about your responsibilities...",
    type: "textarea",
  },
  {
    name: "location",
    label: "Work Location",
    placeholder: "e.g., Address, Karachi, Sindh, Pakistan",
    type: "text",
  },
];

export const projectInputs = [
  {
    name: "project_name",
    label: "Project Name",
    placeholder: "John Doe",
    type: "text",
  },
  {
    name: "description",
    label: "Project Description",
    placeholder: "John Doe is a ...",
    type: "textarea",
  },
  {
    name: "project_url",
    label: "Project URL",
    placeholder: "https://johndoe.com",
    type: "text",
  },
];

export const certInputs = [
  {
    name: "title",
    label: "Title",
    placeholder: "AWS Certified Solutions Architect",
    type: "text",
  },
  {
    name: "issuer",
    label: "Issuing Organization",
    placeholder: "Amazon Web Services (AWS)",
    type: "text",
  },
  {
    name: "credential_url",
    label: "Credential URL",
    placeholder: "https://www.certifications.com/verify/12345",
    type: "text",
  },
];

export const initials = {
  name: "",
  mobile_number: "",
  email: "",
  linkedin_url: "",
  location: "",
  summary: "",
  education: [
    {
      school: "",
      degree: "",
      start_year: null,
      end_year: null,
      grade: "",
      description: "",
    },
  ],
  skills: [{ skill_name: "", proficiency: "" }],
  experience: [
    {
      job_title: "",
      employment_type: "",
      company: "",
      description: "",
      location: "",
      location_type: "",
    },
  ],
  projects: [
    {
      project_name: "",
      description: "",
      project_url: "",
    },
  ],
  certifications: [
    {
      title: "",
      issuer: "",
      credential_url: "",
    },
  ],
};
