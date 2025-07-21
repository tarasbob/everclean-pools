"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import { CheckCircle, AlertCircle } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  poolType: string;
  serviceType: string;
  message: string;
  preferredContact: string;
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
  } = useForm<FormData>({
    mode: "onChange",
  });

  const watchedFields = watch();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      console.log("Form submitted:", data);
      setSubmitStatus("success");
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (error?: any) => `
    w-full px-4 py-3 rounded-md border transition-all duration-200
    ${error 
      ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" 
      : "border-gray-300 focus:border-pool-blue focus:ring-2 focus:ring-pool-blue/20"
    }
    focus:outline-none
  `;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {/* Success/Error Messages */}
      {submitStatus === "success" && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-md flex items-start space-x-3 animate-fade-in">
          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-green-800 font-medium">Thank you for your request!</p>
            <p className="text-green-700 text-sm mt-1">
              We'll contact you within 24 hours with your free quote.
            </p>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md flex items-start space-x-3 animate-fade-in">
          <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-red-800 font-medium">Something went wrong</p>
            <p className="text-red-700 text-sm mt-1">
              Please try again or call us at (123) 456-7890.
            </p>
          </div>
        </div>
      )}

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register("name", {
              required: "Name is required",
              minLength: { value: 2, message: "Name must be at least 2 characters" },
            })}
            type="text"
            id="name"
            className={inputClasses(errors.name)}
            placeholder="John Doe"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-600 animate-fade-in">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            type="email"
            id="email"
            className={inputClasses(errors.email)}
            placeholder="john@example.com"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600 animate-fade-in">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[\d\s\-\(\)]+$/,
                message: "Invalid phone number",
              },
            })}
            type="tel"
            id="phone"
            className={inputClasses(errors.phone)}
            placeholder="(555) 123-4567"
            aria-invalid={errors.phone ? "true" : "false"}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-sm text-red-600 animate-fade-in">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
            Service Address <span className="text-red-500">*</span>
          </label>
          <input
            {...register("address", {
              required: "Address is required",
            })}
            type="text"
            id="address"
            className={inputClasses(errors.address)}
            placeholder="123 Main St, City, State"
            aria-invalid={errors.address ? "true" : "false"}
            aria-describedby={errors.address ? "address-error" : undefined}
          />
          {errors.address && (
            <p id="address-error" className="mt-1 text-sm text-red-600 animate-fade-in">
              {errors.address.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="poolType" className="block text-sm font-medium text-gray-700 mb-2">
            Pool Type <span className="text-red-500">*</span>
          </label>
          <select
            {...register("poolType", {
              required: "Please select a pool type",
            })}
            id="poolType"
            className={inputClasses(errors.poolType)}
            aria-invalid={errors.poolType ? "true" : "false"}
            aria-describedby={errors.poolType ? "poolType-error" : undefined}
          >
            <option value="">Select pool type</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="community">Community/HOA</option>
            <option value="spa">Spa/Hot Tub</option>
          </select>
          {errors.poolType && (
            <p id="poolType-error" className="mt-1 text-sm text-red-600 animate-fade-in">
              {errors.poolType.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
            Service Needed <span className="text-red-500">*</span>
          </label>
          <select
            {...register("serviceType", {
              required: "Please select a service type",
            })}
            id="serviceType"
            className={inputClasses(errors.serviceType)}
            aria-invalid={errors.serviceType ? "true" : "false"}
            aria-describedby={errors.serviceType ? "serviceType-error" : undefined}
          >
            <option value="">Select service</option>
            <option value="cleaning">Regular Cleaning</option>
            <option value="maintenance">Maintenance Plan</option>
            <option value="repair">Repair Service</option>
            <option value="green-pool">Green Pool Recovery</option>
            <option value="one-time">One-Time Service</option>
            <option value="other">Other</option>
          </select>
          {errors.serviceType && (
            <p id="serviceType-error" className="mt-1 text-sm text-red-600 animate-fade-in">
              {errors.serviceType.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Additional Details
        </label>
        <textarea
          {...register("message")}
          id="message"
          rows={4}
          className={inputClasses()}
          placeholder="Tell us more about your pool service needs..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Preferred Contact Method
        </label>
        <div className="flex space-x-6">
          <label className="flex items-center">
            <input
              {...register("preferredContact")}
              type="radio"
              value="phone"
              defaultChecked
              className="mr-2 text-pool-blue focus:ring-pool-blue"
            />
            <span className="text-sm text-gray-700">Phone</span>
          </label>
          <label className="flex items-center">
            <input
              {...register("preferredContact")}
              type="radio"
              value="email"
              className="mr-2 text-pool-blue focus:ring-pool-blue"
            />
            <span className="text-sm text-gray-700">Email</span>
          </label>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="bg-gray-100 rounded-md p-4">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Form Progress</span>
          <span>{Object.keys(watchedFields).filter(key => watchedFields[key as keyof FormData]).length} of 7 fields completed</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-pool-blue h-2 rounded-full transition-all duration-300"
            style={{ 
              width: `${(Object.keys(watchedFields).filter(key => watchedFields[key as keyof FormData]).length / 7) * 100}%` 
            }}
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          type="submit"
          size="lg"
          disabled={!isValid || isSubmitting}
          loading={isSubmitting}
          fullWidth
          className="hover-scale"
        >
          {isSubmitting ? "Submitting..." : "Get Your Free Quote"}
        </Button>
        
        <Button
          type="button"
          variant="ghost"
          size="lg"
          onClick={() => reset()}
          disabled={isSubmitting}
        >
          Clear Form
        </Button>
      </div>

      <p className="text-sm text-gray-500 text-center">
        By submitting this form, you agree to our{" "}
        <a href="/privacy" className="text-pool-blue hover:underline">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="/terms" className="text-pool-blue hover:underline">
          Terms of Service
        </a>
        .
      </p>
    </form>
  );
} 