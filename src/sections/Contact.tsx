"use client";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ContactSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    // You would typically send this data to your backend or email service
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div
      className="py-16 pt-12 lg:py-24"
      id="contact"
      style={{ position: "relative", zIndex: 1 }}
    >
      <div className="container">
        {/* Gradient Card */}
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0 mb-8 pointer-events-auto">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Lets Create Something Amazing Together
              </h2>
              <p className="text-sm md:text-base mt-2">
                If you have a project in mind or just want to chat, feel free to
                reach out!
              </p>
            </div>
            <div>
              <button
                onClick={() => setShowForm(!showForm)}
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8 w-max border border-gray-900 hover:bg-gray-800 transition-colors pointer-events-auto relative z-10"
              >
                <span className="font-semibold">
                  {showForm ? "Hide Form" : "Contact Me"}
                </span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-white/5 backdrop-blur-sm border border-white/15 rounded-3xl p-8 md:p-10 mt-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-300/50"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-300/50"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-300/50"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 px-6 h-12 rounded-xl font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    Send Message
                    <ArrowUpRightIcon className="size-4" />
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
