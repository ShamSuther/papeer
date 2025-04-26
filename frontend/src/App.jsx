import { useState } from "react";
import { MainForm } from "./components/MainForm";

function App() {
  return (
    <>
      <main className="bg-slate-100">
        <div>
          <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
              <MainForm />
            </div>
            <div className="preview">
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
