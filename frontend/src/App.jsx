import { useState } from "react";
import { MainForm } from "./components/MainForm";
import { initials } from "./constants";
import Preview from "./components/Preview";
import { stripArrayDefaults } from "./lib/utils";

// name: "",
// email: "",
// mobile_number: "",
// location: "",
// summary: "",
// education: [],
// skills: [],
// experience: [],
// projects: [],
// certifications: [],

function App() {
  const defaultValues = stripArrayDefaults(initials);
  const [resumeData, setResumeData] = useState(defaultValues);
  return (
    <>
      <main className="bg-slate-100">
        <div>
          <div className="flex min-h-svh w-full justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
              <MainForm defaults={defaultValues} setData={setResumeData} />
            </div>
            <Preview data={resumeData} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
