import React, { useEffect } from "react";
import { Card, CardContent } from "./ui/card";

export default function Preview({ data }) {
  const {
    name,
    mobile_number,
    email,
    linkedin_url,
    location,
    summary,
    education,
    skills,
    experience,
    projects,
    certifications,
  } = data;

  // const skills = [
  //   {
  //     skill_name: "JavaScript",
  //     proficiency: "expert",
  //   },
  //   {
  //     skill_name: "Python",
  //     proficiency: "intermediate",
  //   },
  //   {
  //     skill_name: "React",
  //     proficiency: "expert",
  //   },
  //   {
  //     skill_name: "Node.js",
  //     proficiency: "intermediate",
  //   },
  //   {
  //     skill_name: "SQL",
  //     proficiency: "expert",
  //   },
  //   {
  //     skill_name: "Docker",
  //     proficiency: "beginner",
  //   },
  //   {
  //     skill_name: "AWS",
  //     proficiency: "intermediate",
  //   },
  //   {
  //     skill_name: "Figma",
  //     proficiency: "beginner",
  //   },
  //   {
  //     skill_name: "Tailwind CSS",
  //     proficiency: "expert",
  //   },
  //   {
  //     skill_name: "Git & GitHub",
  //     proficiency: "expert",
  //   },
  // ];

  const projects = [
    {
      name: "Smart Health Tracker",
      description:
        "A mobile app that monitors real-time health metrics like heart rate, steps, and sleep patterns using React Native and Firebase.",
      project_url: "https://www.google.com/",
    },
    {
      name: "AI-Powered Resume Builder",
      description:
        "A web platform that uses AI to automatically generate tailored resumes and cover letters based on user profiles.",
    },
    {
      name: "Eco-Friendly Marketplace",
      description:
        "An e-commerce website focused on eco-friendly products, integrating Stripe payments and a recommendation engine.",
    },
    {
      name: "Virtual Museum Tour",
      description:
        "A 3D virtual tour experience built with Unity, allowing users to explore historic museums from home using VR.",
    },
  ];

  // const certifications = [
  //   {
  //     title: "Certified Web Developer",
  //     issuer: "FreeCodeCamp",
  //     credential_url:
  //       "https://www.freecodecamp.org/certification/username/responsive-web-design",
  //   },
  //   {
  //     title: "AWS Certified Solutions Architect – Associate",
  //     issuer: "Amazon Web Services",
  //     credential_url:
  //       "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
  //   },
  //   {
  //     title: "Google Data Analytics Professional Certificate",
  //     issuer: "Google via Coursera",
  //     credential_url: "https://coursera.org/verify/your-certificate-id",
  //   },
  // ];

  // const jobs = [
  //   {
  //     job_title: "Software Engineer",
  //     employment_type: "Full-time",
  //     company: "Tech Innovations Inc.",
  //     description: "Developing web applications using React and Node.js.",
  //     location: "New York, NY",
  //     location_type: "Hybrid",
  //   },
  //   {
  //     job_title: "Data Scientist",
  //     employment_type: "Contract",
  //     company: "Data Insights Ltd.",
  //     description:
  //       "Analyzing large datasets to provide actionable insights for clients.",
  //     location: "San Francisco, CA",
  //     location_type: "Remote",
  //   },
  //   {
  //     job_title: "UX/UI Designer",
  //     employment_type: "Part-time",
  //     company: "Creative Solutions",
  //     description:
  //       "Designing user interfaces and enhancing user experiences for mobile apps.",
  //     location: "Chicago, IL",
  //     location_type: "On-site",
  //   },
  //   {
  //     job_title: "Project Manager",
  //     employment_type: "Full-time",
  //     company: "Global Enterprises",
  //     description:
  //       "Managing projects and ensuring timely delivery of product features.",
  //     location: "Austin, TX",
  //     location_type: "Hybrid",
  //   },
  // ];

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <Card className="preview mx-auto p-6 bg-background text-foreground rounded-3xl">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-[1.8rem] leading-none mt-4 mb-3">
          {name || "John Doe"}
        </h1>
        <p className="text-muted-foreground text-[0.9rem] space-x-1">
          <span>{mobile_number || "+1 123 4567890"}</span>
          <span>|</span>
          <a href={`mailto:${email || "johndoe@example.com"}`} className="link">
            {email || "johndoe@example.com"}
          </a>
          {linkedin_url && (
            <>
              <span>|</span>
              <a
                href={linkedin_url}
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </>
          )}
          <span>|</span>
          <span>{location || "New York, USA"}</span>
        </p>
      </div>

      {/* Professional Summary */}
      <div>
        <h2 className="section-title">Professional Summary</h2>
        <p className="text-[0.9rem] leading-none">{summary || "I am a ..."}</p>
      </div>

      {/* Education */}
      <div className="w-full ">
        <h2 className="section-title">Education</h2>
        <div>
          {education && education.length > 0 ? (
            education.map((item, i) => {
              const {
                school,
                degree,
                start_year,
                end_year,
                grade,
                description,
              } = item;

              return (
                <div
                  key={i}
                  className="flex flex-row justify-between gap-2 mb-2"
                >
                  <div className="max-w-[80%]">
                    <h3 className="text-[1.1669rem] leading-none">
                      {degree || "Degree"}{" "}
                    </h3>
                    <p className="text-[0.9rem] leading-none italic">
                      {school || "School"}
                    </p>
                    {description && (
                      <p className="text-[0.8331rem] leading-none">
                        {description}
                      </p>
                    )}
                  </div>
                  <div className="text-[0.9rem] leading-none text-right">
                    <p className="text-sm">{`${start_year || "from"}–${
                      end_year || "to"
                    }`}</p>
                    {grade && <p className="italic">CGPA: {grade}/4</p>}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="flex flex-row justify-between gap-2 mb-2">
              <div>
                <h3 className="text-[1.1669rem] leading-none">Degree</h3>
                <p className="text-[0.9rem] leading-none italic">School</p>
              </div>
              <div className="text-[0.9rem] leading-none text-right">
                <p className="text-sm">from–to</p>
                <p className="italic">CGPA: 3/4</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Technical Skills */}
      <div>
        <h2 className="section-title">Skills</h2>
        <ul className="list-disc list-outside pl-5 whitespace-normal mb-2 grid grid-cols-3">
          {skills && skills.length > 0 ? (
            skills.map((item, i) => (
              <li key={`skill-${i}`} className="text-base leading-[1.15]">
                {item &&
                  `${item.skill_name || "name"} (${
                    item.proficiency || "proficiency"
                  })`}
              </li>
            ))
          ) : (
            <li className="text-base leading-[1.15]">name (proficiency)</li>
          )}
        </ul>
      </div>

      {/* Experience */}
      <div>
        <h2 className="section-title">Experience</h2>
        <div>
          {experience && experience.length > 0 ? (
            experience.map((item, i) => {
              const {
                job_title,
                company,
                employment_type,
                location,
                description,
              } = item;

              return (
                <div key={`experience-${i}`} className="mb-2">
                  <h3 className="text-lg font-normal">
                    {job_title || "Job Title"}:
                  </h3>
                  <ul className="text-[#424141] list-disc list-outside pl-5 whitespace-normal leading-none">
                    {description && (
                      <li className="text-base leading-[1.15]">
                        {description}
                      </li>
                    )}
                    <li className="text-base leading-[1.15]">
                      {company || "Company"} ({employment_type || "Type"})
                    </li>
                    <li className="text-base leading-[1.15]">
                      {location || "Location"}
                    </li>
                  </ul>
                </div>
              );
            })
          ) : (
            <div className="mb-2">
              <h3 className="text-lg font-normal">Job Title:</h3>
              <ul className="text-[#424141] list-disc list-outside pl-5 whitespace-normal leading-none">
                <li className="text-base leading-[1.15]">
                  Company Employment Type
                </li>
                <li className="text-base leading-[1.15]">Location</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Projects */}
      {projects && projects.length > 0 ? (
        <div>
          <h2 className="section-title">Projects</h2>
          {projects.map((item, i) => (
            <div key={`project-${i}`}>
              <p className="text-[1.1669rem] mb-[0.1669rem] leading-none">
                {item.project_name || "Project title"}
                {item.project_url && (
                  <>
                    &nbsp;
                    <a className="link" href={item.project_url}>
                      (view)
                    </a>
                  </>
                )}
                :
              </p>
              <ul className="list-disc list-outside pl-5 whitespace-normal mb-2">
                <li className="text-base leading-[1.15]">
                  {item.description || "Description"}
                </li>
              </ul>
            </div>
          ))}
        </div>
      ) : null}

      {/* Certifications */}
      {certifications && certifications.length > 0 ? (
        <div className="mb-4">
          <h2 className="section-title">Certifications</h2>
          <ul className="list-disc list-outside pl-5 whitespace-normal mb-2">
            {certifications.map((item, i) => {
              const title = item.title || "Certification Title";
              const issuer = item.issuer || "Issuer";
              const url = item.credential_url || "https://www.google.com/";
              return (
                <li key={`cert-${i}`} className="text-base leading-[1.15]">
                  <a
                    href={url}
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {title}
                    <span className="text-[#424141] italic"> ({issuer})</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}

      {/* Internship */}
      {/* <div>
        <h2 className="section-title">Internships</h2>
        <p>
          <strong>MindStorm Studios (Game Developer):</strong> 3 months paid
          internship at MindStorm Studios, Lahore. Won the outstanding gameplay
          award in the Rookie Game Jam, Summer 2023.
        </p>
        <p className="text-sm text-muted-foreground mt-2">June 2023</p>
      </div> */}
    </Card>
  );
}
