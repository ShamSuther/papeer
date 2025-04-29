import { Card, CardContent } from "./ui/card";

export default function Preview() {
  const skills = [
    {
      skill_name: "JavaScript",
      proficiency: "expert",
    },
    {
      skill_name: "Python",
      proficiency: "intermediate",
    },
    {
      skill_name: "React",
      proficiency: "expert",
    },
    {
      skill_name: "Node.js",
      proficiency: "intermediate",
    },
    {
      skill_name: "SQL",
      proficiency: "expert",
    },
    {
      skill_name: "Docker",
      proficiency: "beginner",
    },
    {
      skill_name: "AWS",
      proficiency: "intermediate",
    },
    {
      skill_name: "Figma",
      proficiency: "beginner",
    },
    {
      skill_name: "Tailwind CSS",
      proficiency: "expert",
    },
    {
      skill_name: "Git & GitHub",
      proficiency: "expert",
    },
  ];

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

  const certifications = [
    {
      title: "Certified Web Developer",
      issuer: "FreeCodeCamp",
      credential_url:
        "https://www.freecodecamp.org/certification/username/responsive-web-design",
    },
    {
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      credential_url:
        "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
    },
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google via Coursera",
      credential_url: "https://coursera.org/verify/your-certificate-id",
    },
  ];

  const jobs = [
    {
      job_title: "Software Engineer",
      employment_type: "Full-time",
      company: "Tech Innovations Inc.",
      description: "Developing web applications using React and Node.js.",
      location: "New York, NY",
      location_type: "Hybrid",
    },
    {
      job_title: "Data Scientist",
      employment_type: "Contract",
      company: "Data Insights Ltd.",
      description:
        "Analyzing large datasets to provide actionable insights for clients.",
      location: "San Francisco, CA",
      location_type: "Remote",
    },
    {
      job_title: "UX/UI Designer",
      employment_type: "Part-time",
      company: "Creative Solutions",
      description:
        "Designing user interfaces and enhancing user experiences for mobile apps.",
      location: "Chicago, IL",
      location_type: "On-site",
    },
    {
      job_title: "Project Manager",
      employment_type: "Full-time",
      company: "Global Enterprises",
      description:
        "Managing projects and ensuring timely delivery of product features.",
      location: "Austin, TX",
      location_type: "Hybrid",
    },
  ];

  return (
    <Card className="preview max-w-4xl mx-auto p-6 bg-background text-foreground rounded-3xl">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-[1.8rem] leading-none mt-4 mb-3">John Doe</h1>
        <p className="text-muted-foreground text-[0.9rem]">
          +1 123 456 7890 |{" "}
          <a href="mailto:johndoe@example.com" className="link">
            johndoe@example.com
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/johndoe"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          | New York, USA
        </p>
      </div>

      {/* Professional Summary */}
      <div>
        <h2 className="section-title">Professional Summary</h2>
        <p className="text-[0.9rem] leading-none">
          I am a final-year BSCS student with a strong academic record, having
          made the Dean's List four times and earned a bronze medal for my
          achievements. Looking for roles in Game development, App development,
          and similar fields.
        </p>
      </div>

      {/* Education */}
      <div className="w-full ">
        <h2 className="section-title">Education</h2>
        <div className="flex flex-row justify-between">
          <div>
            <h3 className="text-[1.1669rem] leading-none">
              BS Computer Science
            </h3>
            <p className="text-[0.9rem] leading-none italic">
              FAST National University of Computer and Emerging Sciences (NUCES)
            </p>
          </div>
          <div className="text-[0.9rem] leading-none text-right">
            <p className="text-sm">2020–2024</p>
            <p className="italic">CGPA: 3.55/4</p>
          </div>
        </div>
      </div>

      {/* Technical Skills */}
      <div>
        <h2 className="section-title">Skills</h2>
        <ul className="list-disc list-outside pl-5 whitespace-normal mb-2 grid grid-cols-3">
          {skills.map((item, i) => (
            <li key={`skill-${i}`} className="text-base leading-[1.15]">
              {item.skill_name} ({item.proficiency})
            </li>
          ))}
        </ul>
      </div>

      {/* Experience */}
      <div>
        <h2 className="section-title">Experience</h2>
        {jobs.map((item, i) => {
          return (
            <div key={`project-${i}`}>
              <h3 className="text-lg font-normal">{`${item.job_title}:`}</h3>
              {item.description ? (
                <ul className="text-[#424141] list-disc list-outside pl-5 whitespace-normal mb-2 leading-none">
                  <li className="text-base leading-[1.15]">
                    {item.description}
                  </li>
                  <li className="text-base leading-[1.15]">
                    {`${item.company} (${item.employment_type})`}
                  </li>
                  <li className="text-base leading-[1.15]">{item.location}</li>
                </ul>
              ) : (
                <ul className="text-[#424141] list-disc list-outside pl-5 whitespace-normal mb-2 leading-none">
                  <li className="text-base leading-[1.15]">
                    {`${item.company} ${item.employment_type}`}
                  </li>
                  <li className="text-base leading-[1.15]">{item.location}</li>
                </ul>
              )}
            </div>
          );
        })}
      </div>

      {/* Projects */}
      <div>
        <h2 className="section-title">Projects</h2>
        {projects.map((item, i) => (
          <div key={`project-${i}`}>
            <p className="text-[1.1669rem] mb-[0.1669rem] leading-none">
              {item.name}
              &nbsp;
              {item.project_url ? (
                <a className="link" href={item.project_url}>
                  (view)
                </a>
              ) : (
                ""
              )}
              :
            </p>
            <ul className="list-disc list-outside pl-5 whitespace-normal mb-2">
              <li className="text-base leading-[1.15]">{item.description}</li>
            </ul>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="mb-4">
        <h2 className="section-title">Certifications</h2>
        <ul className="list-disc list-outside pl-5 whitespace-normal mb-2">
          {certifications.map((item, i) => (
            <li key={`cert-${i}`} className="text-base leading-[1.15]">
              <a href={item.credential_url} className="link">
                {item.title}{" "}
                <span className="text-[#424141] italic">({item.issuer})</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

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
