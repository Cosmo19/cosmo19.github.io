"use client";

import { useRef, useEffect, useState } from "react";
import { Navbar2 } from "@/components/Navbar2";
import AnimatedLogo from "@/components/DynamicLogo";

export default function Contact() {
  const navColor = "black";
  const carouselRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact - Coco Sato";
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value || "",
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value || "",
      subject: (form.elements.namedItem("subject") as HTMLInputElement)?.value || "",
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "",
    };

    // Log each field to the console
    console.log("Contact Form Submission:");
    console.log("Name:", data.name);
    console.log("Email:", data.email);
    console.log("Subject:", data.subject);
    console.log("Message:", data.message);

    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        if (!res.ok) {
          const { error } = await res.json();
          alert(error || "Failed to send.");
          return;
        }
        setSubmitted(true);
      })
      .catch(() => alert("Network error."));
  }

  return (
    <div className="bg-gray-100 min-h-screen">
    <div className="flex flex-col min-h-screen pb-10 pt-30">
      <Navbar2 textColor={navColor} carouselRef={carouselRef} />
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="max-w-3xl w-full bg-white rounded-lg shadow-xl p-8">
          <div className="flex justify-center mb-5">
            <AnimatedLogo className="w-20 h-20" speed={1000} />
          </div>
          <h1 className="text-xl font-light mb-6 text-center">
            Contact Coco.
          </h1>

          {submitted ? (
            <div className="text-green-600 text-center font-medium py-8">
              Thank you for your message! I'll get back to you soon.
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-700 mb-1"
                >
                  Name <span className="text-red-500">*required</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-700 mb-1"
                >
                  Email <span className="text-red-500">*required</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <label
                htmlFor="subject"
                className="block text-sm text-gray-700 mb-1"
                >
                Subject <span className="text-red-500">*required</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
            </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </main>
    </div>
    </div>
  );
}