import { z } from "zod";

const educationSchema = z.object({
  school: z
    .string()
    .nonempty("School is required")
    .min(10, "School must be at least 10 characters.")
    .trim(),
  degree: z
    .string()
    .nonempty("Degree is required")
    .min(10, "Degree must be at least 10 characters.")
    .trim(),
  field_of_study: z.string().optional(),
  start_year: z
    .string()
    .regex(/^\d{4}$/, { message: "Start year must be a 4-digit number" }),
  end_year: z
    .string()
    .regex(/^\d{4}$/, { message: "End year must be a 4-digit number" }),
  grade: z.string().trim().optional(),
  description: z.string().trim().optional(),
});

const skillsSchema = z.object({
  skill_name: z.string().nonempty("Skill name is required").trim(),
  proficiency: z.string().nonempty("Proficiency is required").trim(),
});

const experienceSchema = z.object({
  job_title: z.string().nonempty("Job title is required").trim(),
  employment_type: z.string().trim().optional(),
  company: z.string().nonempty("Company name is required").trim(),
  description: z.string().trim().optional(),
  location: z
    .string()
    .nonempty("Location is required")
    .min(10, "Location must be at least 10 characters.")
    .trim(),
  location_type: z.string().trim().optional(),
});

const projectsSchema = z.object({
  project_name: z.string().nonempty("Project name is required").trim(),
  description: z.string().nonempty("Project description is required").trim(),
  project_url: z
    .string()
    .url("Must be a valid URL")
    .nonempty("Project URL is required")
    .trim(),
});

const certificationsSchema = z.object({
  title: z.string().nonempty("Title is required").trim(),
  issuer: z.string().nonempty("Issuer is required").trim(),
  credential_url: z
    .string()
    .url("Must be a valid URL")
    .nonempty("Credential URL is required")
    .trim(),
});

export const formSchema = z.object({
  name: z
    .string()
    .nonempty("Full name is required")
    .min(4, {
      message: "Name must be at least 4 characters.",
    })
    .trim(),
  linkedin_url: z.string().trim().optional(),
  mobile_number: z
    .string()
    .nonempty("Mobile number is required")
    .min(10, {
      message: "Mobile number must be at least 10 digits.",
    })
    .max(15, {
      message: "Mobile number must be at maximum 15 digits.",
    })
    .refine((val) => /^[0-9+]*$/.test(val), {
      message: "Mobile number can only contain digits and the '+' sign.",
    }),
  email: z
    .string()
    .nonempty("Email is required")
    .email()
    .min(5, {
      message: "Email must be at least 5 characters.",
    })
    .trim(),
  location: z
    .string()
    .nonempty("Location is required")
    .min(10, {
      message: "Location must be at least 10 characters.",
    })
    .trim(),
  summary: z
    .string()
    .nonempty("Summary is required")
    .min(100, {
      message: "Summary must be at least 100 characters.",
    })
    .trim()
    .optional(),
  education: z
    .array(educationSchema)
    .min(1, "At least one education entry is required!")
    .optional(),
  skills: z
    .array(skillsSchema)
    .min(1, "At least one skills entry is required!")
    .optional(),
  experience: z
    .array(experienceSchema)
    .min(1, "At least one experience entry is required!")
    .optional(),
  projects: z.array(projectsSchema).optional(),
  certifications: z.array(certificationsSchema).optional(),
});
