"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    whatsapp: "",
    businessName: "",
    businessType: "",
    notes: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedPlan === null) {
      alert("Please select a plan before submitting.");
      return;
    }

    const message = `
*New Order Request*
Package: ${plans[selectedPlan].name}
Price: ${plans[selectedPlan].price}

*Customer Details*
Name: ${formData.fullName}
WhatsApp: ${formData.whatsapp}
Business: ${formData.businessName}
Business Type: ${formData.businessType}
Notes: ${formData.notes || "None"}
`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/628953240735?text=${encodedMessage}`, '_blank');
  };

  const plans = [
    {
      name: "Simple",
      price: "$42",
      description: "Perfect for side projects and experiments",
      features: [
        "Modern & Responsive Design",
        "On-Page SEO Optimisation",
        "Contact Form & WhatsApp",
        "Google Analytics Integration",
        "Social Media Integration",
        "SSL Security (HTTPS)",
        "Speed Optimisation",
        "Free .com Domain",
        "Free 1 Year Hosting",
        "3x Revision",
      ],
      maintenance: "1 Month"
    },
    {
      name: "Pro",
      price: "$117",
      description: "For professional developers and small teams",
      features: [
        "Premium & Responsive Design",
        "Full SEO Optimisation",
        "CMS Admin Panel",
        "Blog/News System",
        "Contact Form & WhatsApp",
        "Google Maps Integration",
        "Google Analytics & Search Console",
        "Social Media Integration",
        "SSL Security (HTTPS)",
        "Advanced Speed Optimisation",
        "Free .com Domain",
        "Free 1 Year Hosting",
        "Free Business Email",
        "Free 6 Months Maintenance",
        "5x Revisions"
      ],
      maintenance: "6 Months"
    },
    {
      name: "Custom",
      price: "$176",
      description: "For large teams and organizations",
      features: [
        "Business Needs Analysis",
        "Premium Custom Design",
        "Custom Development",
        "Database Design",
        "API Integration",
        "Payment Gateway",
        "Advanced Security",
        "High Performance Setup",
        "Premium SEO Settings",
        "Server Optimisation",
        "Free .com Domain",
        "Free 1 Year Hosting",
        "Free Business Email",
        "Free 1 Year Maintenance",
        "Unlimited Revisions"
      ],
      maintenance: "1 Year"
    }
  ];

  const businessTypes = [
    "E-commerce",
    "Service Business",
    "Restaurant/Cafe",
    "Education",
    "Healthcare",
    "Real Estate",
    "Technology",
    "Finance",
    "Travel & Tourism",
    "Entertainment",
    "Non-profit",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600">
            Choose the plan that best fits your needs
          </p>
        </motion.div>

        {selectedPlan === null ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">{plan.price}</div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <Button 
                  className="w-full mb-8"
                  onClick={() => setSelectedPlan(index)}
                >
                  Get Started
                </Button>
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Order Form</h2>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setSelectedPlan(null)}
                className="rounded-full"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Package Details */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">{plans[selectedPlan].name} Package</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Price:</p>
                    <p className="text-lg font-semibold text-blue-600">{plans[selectedPlan].price}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Maintenance:</p>
                    <p className="font-medium">{plans[selectedPlan].maintenance}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Revision:</p>
                    <p className="font-medium">
                      {plans[selectedPlan].name === "Enterprise" ? "Unlimited" : 
                       plans[selectedPlan].name === "Pro" ? "5x" : "Unlimited"}

                    </p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {plans[selectedPlan].features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Order Form */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Order Details</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">
                      WhatsApp No.
                    </label>
                    <input
                      type="text"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Example: 081234567890"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
                      Business/ Company Name
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Name of business or company"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">
                      Business Type
                    </label>
                    <select
                      id="businessType"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="" disabled>Select the type of business</option>
                      {businessTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                      Notes (Optional)
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Write down your special needs or questions"
                    ></textarea>
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="w-full"
                      onClick={() => setSelectedPlan(null)}
                    >
                      Cancel
                    </Button>
                    <Button 
                      type="submit" 
                      className="w-full"
                    >
                      Send via WhatsApp
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}