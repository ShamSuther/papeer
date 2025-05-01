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
        {/* header */}
        <div className="w-full flex items-center justify-center p-4 px-8">
          <div className="barrio-regular text-[2rem] break-keep">Papeer.,</div>
        </div>
        <div>
          <div className="flex w-full justify-between p-6 md:p-10">
            <div className="w-full max-w-sm">
              <MainForm defaults={defaultValues} setData={setResumeData} />
            </div>
            <Preview data={resumeData} />
          </div>
        </div>
        {/* footer */}
        <div className="w-full flex items-center justify-center p-4 px-8">
          <div className="break-keep">
            @{new Date().getFullYear()} Papeer.,
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
