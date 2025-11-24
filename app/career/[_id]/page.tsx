"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { jobs } from "@/data/CommonData";

/**
 * Page: /app/jobs/[id]/page.jsx
 *
 * - App Router (client component)
 * - Tabs: Overview / Application (toggle)
 * - Application form:
 *    - First name, Last name
 *    - Are you graduated? (Yes / No)
 *      - If No -> show Current Semester input
 *    - University
 *    - Resume upload (file input + filename shown)
 * - Grabs job by _id from useParams()
 * - Share button (copies current URL to clipboard). Uses uploaded image as icon.
 *
 * Note: Adjust paths/imports to fit your project (especially the jobs data import).
 */

export default function Page() {
  const params = useParams();
  console.log("Hello from ", params._id);
  // useParams returns an object like { id: '1' } in app router
  const idParam = params?.id ?? params?.jobId ?? null;
  console.log("Hello from2 ", idParam);

  const job =
    jobs.find((j) => 
      j._id === params._id;
    ) ?? null;
  console.log("Hello from jobs", jobs._id);
  // Tab state: "overview" | "application"
  const [activeTab, setActiveTab] = useState("overview");

  // Form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isGraduated, setIsGraduated] = useState("yes");
  const [currentSemester, setCurrentSemester] = useState("");
  const [university, setUniversity] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Share feedback
  const [shareMsg, setShareMsg] = useState("");

  useEffect(() => {
    // Clear submission message when switching tabs
    setSubmitStatus(null);
  }, [activeTab]);

  function onResumeChange(e) {
    const file = e.target.files?.[0] ?? null;
    setResumeFile(file);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Basic validation
    if (!firstName.trim() || !lastName.trim() || !university.trim()) {
      setSubmitStatus({ ok: false, message: "Please fill required fields." });
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
      setSubmitStatus({ ok: false, message: "Please upload your resume." });
      return;
    }

    // Compose a simple payload (you'll replace this with real API call)
    const payload = {
      jobId,
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      isGraduated: isGraduated === "yes",
      currentSemester: isGraduated === "no" ? currentSemester.trim() : null,
      university: university.trim(),
      resumeName: resumeFile.name,
      submittedAt: new Date().toISOString(),
    };

    // Simulate upload / API call
    setSubmitStatus({ ok: null, message: "Submitting..." });
    setTimeout(() => {
      console.log("APPLICATION SUBMITTED (simulate):", payload);
      setSubmitStatus({
        ok: true,
        message: "Application submitted successfully.",
      });

      // reset form (optional)
      setFirstName("");
      setLastName("");
      setIsGraduated("yes");
      setCurrentSemester("");
      setUniversity("");
      setResumeFile(null);
    }, 900);
  }

  async function handleShare() {
    try {
      const url = typeof window !== "undefined" ? window.location.href : "";
      if (navigator.clipboard && url) {
        await navigator.clipboard.writeText(url);
        setShareMsg("Link copied to clipboard");
        setTimeout(() => setShareMsg(""), 2500);
      } else {
        setShareMsg("Unable to copy (clipboard not available)");
        setTimeout(() => setShareMsg(""), 2500);
      }
    } catch (err) {
      setShareMsg("Copy failed");
      setTimeout(() => setShareMsg(""), 2500);
    }
  }

  // Fallback UI if job not found
  if (!job) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center p-8">
        <div className="max-w-2xl text-center">
          <h2 className="text-2xl font-semibold mb-2">Job not found</h2>
          <p className="text-gray-600">
            We couldn't find the job you are looking for. Please check the link
            or go back to the jobs list.
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
            <div className="text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold">{job.job}</h1>
              <div className="text-sm text-gray-500 mt-2">
                <span className="mr-3">{job.date}</span>
                <span className="mr-3">• {job.status}</span>
                <span>{job.city}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Share button with uploaded image as icon (developer-provided file) */}
              <button
                onClick={handleShare}
                className="flex items-center gap-2 bg-white border rounded px-4 py-2 shadow-sm hover:shadow-md transition"
                title="Share this job"
                type="button"
              >
                <img
                  src="/mnt/data/Screenshot 2025-11-24 172230.png"
                  alt="share"
                  className="w-6 h-6 object-contain"
                />
                <span className="text-sm">Share</span>
              </button>

              <div className="text-sm text-green-600 min-w-[160px]">
                {shareMsg && <span>{shareMsg}</span>}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs (Overview / Application) */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-white rounded-md shadow-sm">
          {/* Tab headers */}
          <div className="border-b px-6">
            <nav className="flex items-center gap-6">
              <button
                className={`py-4 text-sm uppercase tracking-wider ${
                  activeTab === "overview"
                    ? "border-b-4 border-teal-600 pb-3 text-teal-700 font-semibold"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                onClick={() => setActiveTab("overview")}
              >
                Overview
              </button>

              <button
                className={`py-4 text-sm uppercase tracking-wider ${
                  activeTab === "application"
                    ? "border-b-4 border-teal-600 pb-3 text-teal-700 font-semibold"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                onClick={() => setActiveTab("application")}
              >
                Application
              </button>
            </nav>
          </div>

          <div className="p-8">
            {activeTab === "overview" ? (
              // Overview content
              <section className="space-y-6">
                <h2 className="text-xl font-semibold">About the role</h2>
                <p className="text-gray-700 leading-relaxed">
                  {job.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
              </section>
            ) : (
              // Application form
              <section>
                <div className="mb-6">
                  <div className="bg-white border rounded p-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Autofill application</h3>
                      <p className="text-sm text-gray-500">
                        Save time by importing your resume (.pdf, .doc, .docx,
                        .odt, or .rtf)
                      </p>
                    </div>
                    <div>
                      <button
                        onClick={() =>
                          document.getElementById("resumeFileInput")?.click()
                        }
                        className="bg-teal-700 text-white px-4 py-2 rounded hover:opacity-95"
                        type="button"
                      >
                        Import resume from ▾
                      </button>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
                  <input type="hidden" name="jobId" value={jobId ?? ""} />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        First name <span className="text-red-500">*</span>
                      </label>
                      <input
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="mt-2 block w-full rounded-md border-gray-300 shadow-sm p-3"
                        placeholder="First name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Last name <span className="text-red-500">*</span>
                      </label>
                      <input
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="mt-2 block w-full rounded-md border-gray-300 shadow-sm p-3"
                        placeholder="Last name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Are you graduated? <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2 flex items-center gap-6">
                      <label className="inline-flex items-center gap-2">
                        <input
                          type="radio"
                          name="graduated"
                          value="yes"
                          checked={isGraduated === "yes"}
                          onChange={() => setIsGraduated("yes")}
                          className="form-radio"
                        />
                        <span className="text-sm">Yes</span>
                      </label>

                      <label className="inline-flex items-center gap-2">
                        <input
                          type="radio"
                          name="graduated"
                          value="no"
                          checked={isGraduated === "no"}
                          onChange={() => setIsGraduated("no")}
                          className="form-radio"
                        />
                        <span className="text-sm">No</span>
                      </label>
                    </div>
                  </div>

                  {/* Conditional semester */}
                  {isGraduated === "no" && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Current semester <span className="text-red-500">*</span>
                      </label>
                      <input
                        value={currentSemester}
                        onChange={(e) => setCurrentSemester(e.target.value)}
                        className="mt-2 block w-full rounded-md border-gray-300 shadow-sm p-3"
                        placeholder="e.g. Semester 6 / 3rd year"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      University <span className="text-red-500">*</span>
                    </label>
                    <input
                      value={university}
                      onChange={(e) => setUniversity(e.target.value)}
                      className="mt-2 block w-full rounded-md border-gray-300 shadow-sm p-3"
                      placeholder="University name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Upload your resume <span className="text-red-500">*</span>
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
                        className="bg-white border px-4 py-2 rounded shadow-sm hover:shadow-md transition"
                      >
                        Select file
                      </button>

                      <div className="text-sm text-gray-600">
                        {resumeFile ? resumeFile.name : "No file selected"}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      type="submit"
                      className="bg-teal-700 text-white px-5 py-3 rounded hover:opacity-95 transition"
                    >
                      Submit application
                    </button>

                    <button
                      type="button"
                      className="bg-white border px-4 py-2 rounded shadow-sm"
                      onClick={() => {
                        // clear form
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
                      <div
                        className={`text-sm ${
                          submitStatus.ok === true
                            ? "text-green-600"
                            : submitStatus.ok === false
                            ? "text-red-600"
                            : "text-gray-600"
                        }`}
                      >
                        {submitStatus.message}
                      </div>
                    )}
                  </div>
                </form>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
