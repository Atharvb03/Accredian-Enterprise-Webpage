"use client";

import { useState, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  company: string;
  domain: string;
  numberOfCandidates: string;
  modeOfDelivery: string;
  location: string;
}

interface FormErrors {
  [key: string]: string;
}

interface Country {
  code: string;
  name: string;
  flag: string;
  dialCode: string;
}

const COUNTRIES: Country[] = [
  { code: "IN", name: "India", flag: "🇮🇳", dialCode: "+91" },
  { code: "US", name: "United States", flag: "🇺🇸", dialCode: "+1" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧", dialCode: "+44" },
  { code: "CA", name: "Canada", flag: "🇨🇦", dialCode: "+1" },
  { code: "AU", name: "Australia", flag: "🇦🇺", dialCode: "+61" },
  { code: "AE", name: "UAE", flag: "🇦🇪", dialCode: "+971" },
  { code: "SG", name: "Singapore", flag: "🇸🇬", dialCode: "+65" },
  { code: "DE", name: "Germany", flag: "🇩🇪", dialCode: "+49" },
  { code: "FR", name: "France", flag: "🇫🇷", dialCode: "+33" },
  { code: "JP", name: "Japan", flag: "🇯🇵", dialCode: "+81" },
];

const DOMAINS = [
  "Product Management",
  "CFO",
  "Data Science",
  "Artificial Intelligence",
  "Human Resource",
  "Strategy & Leadership",
  "General Management",
  "Digital Transformation",
  "Business Management",
  "Finance",
  "Project Management",
  "Senior Management",
  "Cybersecurity",
];

export default function LeadForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    countryCode: "+91",
    phoneNumber: "",
    company: "",
    domain: "",
    numberOfCandidates: "",
    modeOfDelivery: "",
    location: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{7,15}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number (digits only)";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!formData.domain) {
      newErrors.domain = "Please select a domain";
    }

    if (!formData.numberOfCandidates.trim()) {
      newErrors.numberOfCandidates = "Number of candidates is required";
    } else if (!/^\d+$/.test(formData.numberOfCandidates) || parseInt(formData.numberOfCandidates) < 1) {
      newErrors.numberOfCandidates = "Please enter a valid number";
    }

    if (!formData.modeOfDelivery) {
      newErrors.modeOfDelivery = "Please select a mode of delivery";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleCountrySelect = (dialCode: string) => {
    setFormData((prev) => ({ ...prev, countryCode: dialCode }));
    setShowCountryDropdown(false);
  };

  const selectedCountry = COUNTRIES.find(c => c.dialCode === formData.countryCode) || COUNTRIES[0];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitMessage(data.message || "Thank you! We'll be in touch soon.");
        setFormData({
          name: "",
          email: "",
          countryCode: "+91",
          phoneNumber: "",
          company: "",
          domain: "",
          numberOfCandidates: "",
          modeOfDelivery: "",
          location: "",
        });
      } else {
        setSubmitStatus("error");
        setSubmitMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage("Failed to submit. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-primary mb-2">Contact Us</h3>
        <p className="text-gray-600">Fill out the form and we'll be in touch soon</p>
      </div>

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-bold text-primary mb-2 uppercase tracking-wider">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 border-b-2 ${
            errors.name ? "border-red-500" : "border-gray-300"
          } focus:border-accent outline-none transition-colors bg-surface`}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-2 text-sm text-red-600 flex items-center gap-2">
            <span>⚠</span> {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-bold text-primary mb-2 uppercase tracking-wider">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 border-b-2 ${
            errors.email ? "border-red-500" : "border-gray-300"
          } focus:border-accent outline-none transition-colors bg-surface`}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-2 text-sm text-red-600 flex items-center gap-2">
            <span>⚠</span> {errors.email}
          </p>
        )}
      </div>

      {/* Phone Number with Country Selector */}
      <div>
        <label htmlFor="phoneNumber" className="block text-sm font-bold text-primary mb-2 uppercase tracking-wider">
          Phone Number *
        </label>
        <div className="flex gap-2">
          {/* Country Code Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowCountryDropdown(!showCountryDropdown)}
              className="flex items-center gap-2 px-4 py-3 border-b-2 border-gray-300 hover:border-accent focus:border-accent outline-none transition-colors bg-surface min-w-[120px]"
            >
              <span className="text-xl">{selectedCountry.flag}</span>
              <span className="font-medium">{selectedCountry.dialCode}</span>
              <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {showCountryDropdown && (
              <div className="absolute z-10 mt-1 w-64 bg-white border-2 border-gray-300 max-h-60 overflow-y-auto shadow-lg">
                {COUNTRIES.map((country) => (
                  <button
                    key={country.code}
                    type="button"
                    onClick={() => handleCountrySelect(country.dialCode)}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-left transition-colors"
                  >
                    <span className="text-xl">{country.flag}</span>
                    <span className="flex-1">{country.name}</span>
                    <span className="font-medium text-gray-600">{country.dialCode}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Phone Number Input */}
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter phone number"
            className={`flex-1 px-4 py-3 border-b-2 ${
              errors.phoneNumber ? "border-red-500" : "border-gray-300"
            } focus:border-accent outline-none transition-colors bg-surface`}
            aria-invalid={!!errors.phoneNumber}
            aria-describedby={errors.phoneNumber ? "phoneNumber-error" : undefined}
          />
        </div>
        {errors.phoneNumber && (
          <p id="phoneNumber-error" className="mt-2 text-sm text-red-600 flex items-center gap-2">
            <span>⚠</span> {errors.phoneNumber}
          </p>
        )}
      </div>

      {/* Company Name */}
      <div>
        <label htmlFor="company" className="block text-sm font-bold text-primary mb-2 uppercase tracking-wider">
          Company Name *
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className={`w-full px-4 py-3 border-b-2 ${
            errors.company ? "border-red-500" : "border-gray-300"
          } focus:border-accent outline-none transition-colors bg-surface`}
          aria-invalid={!!errors.company}
          aria-describedby={errors.company ? "company-error" : undefined}
        />
        {errors.company && (
          <p id="company-error" className="mt-2 text-sm text-red-600 flex items-center gap-2">
            <span>⚠</span> {errors.company}
          </p>
        )}
      </div>

      {/* Domain Dropdown */}
      <div>
        <label htmlFor="domain" className="block text-sm font-bold text-primary mb-2 uppercase tracking-wider">
          Domain *
        </label>
        <select
          id="domain"
          name="domain"
          value={formData.domain}
          onChange={handleChange}
          className={`w-full px-4 py-3 border-b-2 ${
            errors.domain ? "border-red-500" : "border-gray-300"
          } focus:border-accent outline-none transition-colors bg-surface cursor-pointer`}
          aria-invalid={!!errors.domain}
          aria-describedby={errors.domain ? "domain-error" : undefined}
        >
          <option value="">Select a domain</option>
          {DOMAINS.map((domain) => (
            <option key={domain} value={domain}>
              {domain}
            </option>
          ))}
        </select>
        {errors.domain && (
          <p id="domain-error" className="mt-2 text-sm text-red-600 flex items-center gap-2">
            <span>⚠</span> {errors.domain}
          </p>
        )}
      </div>

      {/* Number of Candidates */}
      <div>
        <label htmlFor="numberOfCandidates" className="block text-sm font-bold text-primary mb-2 uppercase tracking-wider">
          Number of Candidates *
        </label>
        <input
          type="number"
          id="numberOfCandidates"
          name="numberOfCandidates"
          value={formData.numberOfCandidates}
          onChange={handleChange}
          min="1"
          placeholder="Enter number"
          className={`w-full px-4 py-3 border-b-2 ${
            errors.numberOfCandidates ? "border-red-500" : "border-gray-300"
          } focus:border-accent outline-none transition-colors bg-surface`}
          aria-invalid={!!errors.numberOfCandidates}
          aria-describedby={errors.numberOfCandidates ? "numberOfCandidates-error" : undefined}
        />
        {errors.numberOfCandidates && (
          <p id="numberOfCandidates-error" className="mt-2 text-sm text-red-600 flex items-center gap-2">
            <span>⚠</span> {errors.numberOfCandidates}
          </p>
        )}
      </div>

      {/* Mode of Delivery */}
      <div>
        <label className="block text-sm font-bold text-primary mb-3 uppercase tracking-wider">
          Mode of Delivery *
        </label>
        <div className="flex gap-6">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="modeOfDelivery"
              value="Online"
              checked={formData.modeOfDelivery === "Online"}
              onChange={handleChange}
              className="w-5 h-5 text-accent border-2 border-gray-300 focus:ring-2 focus:ring-accent cursor-pointer"
            />
            <span className="text-base group-hover:text-accent transition-colors">Online</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="modeOfDelivery"
              value="Offline"
              checked={formData.modeOfDelivery === "Offline"}
              onChange={handleChange}
              className="w-5 h-5 text-accent border-2 border-gray-300 focus:ring-2 focus:ring-accent cursor-pointer"
            />
            <span className="text-base group-hover:text-accent transition-colors">Offline</span>
          </label>
        </div>
        {errors.modeOfDelivery && (
          <p className="mt-2 text-sm text-red-600 flex items-center gap-2">
            <span>⚠</span> {errors.modeOfDelivery}
          </p>
        )}
      </div>

      {/* Location */}
      <div>
        <label htmlFor="location" className="block text-sm font-bold text-primary mb-2 uppercase tracking-wider">
          Location *
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Enter location"
          className={`w-full px-4 py-3 border-b-2 ${
            errors.location ? "border-red-500" : "border-gray-300"
          } focus:border-accent outline-none transition-colors bg-surface`}
          aria-invalid={!!errors.location}
          aria-describedby={errors.location ? "location-error" : undefined}
        />
        {errors.location && (
          <p id="location-error" className="mt-2 text-sm text-red-600 flex items-center gap-2">
            <span>⚠</span> {errors.location}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="group relative w-full inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 text-base font-bold uppercase tracking-wider overflow-hidden transition-all hover:gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="relative z-10">{isSubmitting ? "Submitting..." : "Submit"}</span>
        {!isSubmitting && (
          <svg className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        )}
        <div className="absolute inset-0 bg-accent-dark transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
      </button>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="p-4 bg-green-50 border-l-3 border-green-500">
          <p className="text-green-800 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {submitMessage}
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 bg-red-50 border-l-3 border-red-500">
          <p className="text-red-800 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            {submitMessage}
          </p>
        </div>
      )}
    </form>
  );
}
