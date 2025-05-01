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

        {/* content */}
        <div className="flex flex-col md:flex-row w-full justify-between gap-6 md:gap-8 p-6 md:p-10">
          {/* form */}
          <div className="w-full md:max-w-sm">
            <MainForm defaults={defaultValues} setData={setResumeData} />
          </div>

          {/* preview */}
          <div className="w-full flex justify-center md:justify-end">
            <div className="preview-wrapper">
              <Preview data={resumeData} />
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="w-full flex items-center justify-center p-4 px-8">
          <div className="break-keep">@{new Date().getFullYear()} Papeer.,</div>
        </div>
      </main>
    </>
  );
}

export default App;
