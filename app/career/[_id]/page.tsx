"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { jobs } from "@/data/CommonData";

export default function Page() {
  const params = useParams();

  // Correct jobId extraction
  const jobId = Number(params._id);

  // Correct job lookup
  const job = jobs.find((j) => Number(j._id) === jobId) ?? null;

  console.log("Job ID =", jobId);
  console.log("Job found =", job);

  // Tabs
  const [activeTab, setActiveTab] = useState("overview");

  // Form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isGraduated, setIsGraduated] = useState("yes");
  const [currentSemester, setCurrentSemester] = useState("");
  const [university, setUniversity] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [submitStatus, setSubmitStatus] = useState<{
    ok: boolean | null;
    message: string;
  } | null>(null);

  // Share link
  const [shareMsg, setShareMsg] = useState("");

  useEffect(() => {
    setSubmitStatus(null);
  }, [activeTab]);

  // Resume upload
  function onResumeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    setResumeFile(file);
  }

  // Submit handler
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!firstName.trim() || !lastName.trim() || !university.trim()) {
      setSubmitStatus({
        ok: false,
        message: "Please fill required fields.",
      });
      return;
    }

    if (isGraduated === "no" && !currentSemester.trim()) {
      setSubmitStatus({
        ok: false,
        message: "Please enter your current semester.",
      });
      return;
    }

    if (!resumeFile) {
      setSubmitStatus({
        ok: false,
        message: "Please upload your resume.",
      });
      return;
    }

    const payload = {
      jobId,
      firstName,
      lastName,
      isGraduated: isGraduated === "yes",
      currentSemester: isGraduated === "no" ? currentSemester : null,
      university,
      resumeName: resumeFile.name,
      submittedAt: new Date().toISOString(),
    };

    setSubmitStatus({ ok: null, message: "Submitting..." });

    setTimeout(() => {
      console.log("APPLICATION SUBMITTED:", payload);
      setSubmitStatus({
        ok: true,
        message: "Application submitted successfully.",
      });

      setFirstName("");
      setLastName("");
      setIsGraduated("yes");
      setCurrentSemester("");
      setUniversity("");
      setResumeFile(null);
    }, 900);
  }

  // Share job link
  async function handleShare() {
    try {
      const url = window.location.href;
      await navigator.clipboard.writeText(url);
      setShareMsg("Link copied to clipboard");
      setTimeout(() => setShareMsg(""), 2500);
    } catch {
      setShareMsg("Unable to copy");
      setTimeout(() => setShareMsg(""), 2500);
    }
  }

  // Job not found
  if (!job) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center p-8">
        <div className="max-w-2xl text-center">
          <h2 className="text-2xl font-semibold mb-2">Job not found</h2>
          <p className="text-gray-600">
            We couldn’t find the job you are looking for. Please check the link.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white py-8 border-b">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{job.job}</h1>
              <div className="text-sm text-gray-500 mt-2">
                <span className="mr-3">{job.date}</span>
                <span className="mr-3">• {job.status}</span>
                <span>{job.city}</span>
              </div>
            </div>

            {/* Share Button */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleShare}
                className="flex items-center gap-2 bg-white border rounded px-4 py-2 shadow-sm hover:shadow-md transition"
                type="button"
              >
                <img
                  src="/BackgroundPictures/BlogPageBG.jpg"
                  alt="share"
                  className="w-12 h-12 object-contain"
                />
                <span className="text-sm">Share</span>
              </button>

              <div className="text-sm text-green-600 min-w-[160px]">
                {shareMsg}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-white rounded-md shadow-sm">
          {/* Tab Headers */}
          <div className="border-b px-6">
            <nav className="flex items-center justify-center gap-6">
              <button
                className={`py-4 text-sm uppercase ${
                  activeTab === "overview"
                    ? "border-b-4 border-[#007BFF] pb-3 text-[#007BFF] font-semibold"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                onClick={() => setActiveTab("overview")}
              >
                Overview
              </button>

              <button
                className={`py-4 text-sm uppercase ${
                  activeTab === "application"
                    ? "border-b-4 border-[#007BFF] pb-3 text-[#007BFF] font-semibold"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                onClick={() => setActiveTab("application")}
              >
                Application
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === "overview" ? (
              <>
                <h2 className="text-xl font-semibold">About the role</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-gray-50 p-4 rounded border">
                    <h4 className="text-xs text-gray-500 uppercase">Type</h4>
                    <p className="mt-1 text-sm font-medium">{job.status}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded border">
                    <h4 className="text-xs text-gray-500 uppercase">
                      Location
                    </h4>
                    <p className="mt-1 text-sm font-medium">{job.city}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded border">
                    <h4 className="text-xs text-gray-500 uppercase">Mode</h4>
                    <p className="mt-1 text-sm font-medium">
                      {job.mode.join(" • ")}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mt-10">
                  {job.description}
                </p>
                <div className="flex items-center justify-center gap-4 mt-4 ">
                  <button
                    onClick={() => {
                      setActiveTab("application");
                    }}
                    className="bg-[#007BFF]  hover:bg-[#007bffda] text-white px-5 py-3 rounded-full hover:opacity-95"
                  >
                    Apply For this Job
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* <div className="mb-6">
                  <div className="bg-white border rounded p-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Autofill application</h3>
                      <p className="text-sm text-gray-500">
                        Upload resume (.pdf, .doc, .docx, .odt, .rtf)
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        document.getElementById("resumeFileInput")?.click()
                      }
                      className="bg-teal-700 text-white px-4 py-2 rounded hover:opacity-95"
                      type="button"
                    >
                      Import resume
                    </button>
                  </div>
                </div> */}

                {/* Form */}
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 max-w-3xl mx-auto"
                >
                  <input type="hidden" name="jobId" value={jobId} />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">
                        First name <span className="text-red-500">*</span>
                      </label>
                      <input
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="mt-2 w-full rounded-md border-gray-300 shadow-sm p-3"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium">
                        Last name <span className="text-red-500">*</span>
                      </label>
                      <input
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="mt-2 w-full rounded-md border-gray-300 shadow-sm p-3"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium">
                      Are you graduated?
                    </label>
                    <div className="mt-2 flex items-center gap-6">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="graduated"
                          value="yes"
                          checked={isGraduated === "yes"}
                          onChange={() => setIsGraduated("yes")}
                        />
                        <span className="text-sm">Yes</span>
                      </label>

                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="graduated"
                          value="no"
                          checked={isGraduated === "no"}
                          onChange={() => setIsGraduated("no")}
                        />
                        <span className="text-sm">No</span>
                      </label>
                    </div>
                  </div>

                  {isGraduated === "no" && (
                    <div>
                      <label className="text-sm font-medium">
                        Current semester
                      </label>
                      <input
                        value={currentSemester}
                        onChange={(e) => setCurrentSemester(e.target.value)}
                        className="mt-2 w-full rounded-md border-gray-300 shadow-sm p-3"
                        placeholder="e.g. Semester 6"
                      />
                    </div>
                  )}

                  <div>
                    <label className="text-sm font-medium">
                      University <span className="text-red-500">*</span>
                    </label>
                    <input
                      value={university}
                      onChange={(e) => setUniversity(e.target.value)}
                      className="mt-2 w-full rounded-md border-gray-300 shadow-sm p-3"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">
                      Upload resume <span className="text-red-500">*</span>
                    </label>

                    <div className="mt-2 flex items-center gap-3">
                      <input
                        id="resumeFileInput"
                        type="file"
                        accept=".pdf,.doc,.docx,.odt,.rtf"
                        onChange={onResumeChange}
                        className="hidden"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          document.getElementById("resumeFileInput")?.click()
                        }
                        className="bg-white border px-4 py-2 rounded shadow-sm hover:shadow-md"
                      >
                        Select file
                      </button>

                      <span className="text-sm text-gray-600">
                        {resumeFile ? resumeFile.name : "No file selected"}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-4">
                    <button
                      type="submit"
                      className="bg-[#007BFF] text-white px-5 py-3 rounded hover:opacity-95"
                    >
                      Submit application
                    </button>

                    <button
                      type="button"
                      className="bg-white border px-4 py-2 rounded shadow-sm"
                      onClick={() => {
                        setFirstName("");
                        setLastName("");
                        setIsGraduated("yes");
                        setCurrentSemester("");
                        setUniversity("");
                        setResumeFile(null);
                        setSubmitStatus(null);
                      }}
                    >
                      Clear
                    </button>

                    {submitStatus && (
                      <span
                        className={`text-sm ${
                          submitStatus.ok
                            ? "text-green-600"
                            : submitStatus.ok === false
                            ? "text-red-600"
                            : "text-gray-600"
                        }`}
                      >
                        {submitStatus.message}
                      </span>
                    )}
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
