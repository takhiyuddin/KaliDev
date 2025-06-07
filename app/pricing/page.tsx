"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Check, X, CreditCard, Shield, Lock, User, Phone, Building, Briefcase, FileText, Star, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const [currentStep, setCurrentStep] = useState<'form' | 'payment' | 'processing'>('form');
  const [formData, setFormData] = useState({
    fullName: "",
    whatsapp: "",
    businessName: "",
    businessType: "",
    notes: ""
  });
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePaymentInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Format card number with spaces
    if (name === 'cardNumber') {
      formattedValue = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
      if (formattedValue.length > 19) formattedValue = formattedValue.slice(0, 19);
    }

    // Format expiry date
    if (name === 'expiryDate') {
      formattedValue = value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2');
      if (formattedValue.length > 5) formattedValue = formattedValue.slice(0, 5);
    }

    // Format CVV
    if (name === 'cvv') {
      formattedValue = value.replace(/\D/g, '');
      if (formattedValue.length > 3) formattedValue = formattedValue.slice(0, 3);
    }

    setPaymentData(prev => ({
      ...prev,
      [name]: formattedValue
    }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedPlan === null) {
      alert("Please select a plan before submitting.");
      return;
    }

    // Validate form data
    if (!formData.fullName || !formData.whatsapp || !formData.businessName || !formData.businessType) {
      alert("Please fill in all required fields.");
      return;
    }

    // Move to payment step
    setCurrentStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate payment data
    if (!paymentData.cardNumber || !paymentData.expiryDate || !paymentData.cvv || !paymentData.cardholderName) {
      alert("Please fill in all payment details.");
      return;
    }

    // Show processing state
    setCurrentStep('processing');

    // Simulate payment processing
    setTimeout(() => {
      // After successful payment, send to WhatsApp
      const message = `
*New Order Request - PAYMENT CONFIRMED*
Package: ${plans[selectedPlan!].name}
Price: ${plans[selectedPlan!].price}

*Customer Details*
Name: ${formData.fullName}
WhatsApp: ${formData.whatsapp}
Business: ${formData.businessName}
Business Type: ${formData.businessType}
Notes: ${formData.notes || "None"}

*Payment Status: CONFIRMED*
Transaction ID: TXN${Date.now()}
`;

      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/62895324073524?text=${encodedMessage}`, '_blank');
      
      // Reset form
      setSelectedPlan(null);
      setCurrentStep('form');
      setFormData({
        fullName: "",
        whatsapp: "",
        businessName: "",
        businessType: "",
        notes: ""
      });
      setPaymentData({
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        cardholderName: ""
      });
    }, 3000);
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
      maintenance: "1 Month",
      badge: "Starter",
      color: "blue"
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
      maintenance: "6 Months",
      badge: "Most Popular",
      color: "purple"
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
      maintenance: "1 Year",
      badge: "Enterprise",
      color: "emerald"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Link href="/">
          <Button variant="ghost" className="mb-8 hover:bg-white/80 transition-all duration-200">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that best fits your needs and start building your dream project today
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
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-300"></div>
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      plan.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                      plan.color === 'purple' ? 'bg-purple-100 text-purple-800' :
                      'bg-emerald-100 text-emerald-800'
                    }`}>
                      {plan.badge}
                    </span>
                  </div>
                  
                  <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}</div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{plan.description}</p>
                  
                  <Button 
                    className="w-full mb-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-200 transform hover:scale-105"
                    onClick={() => setSelectedPlan(index)}
                  >
                    Get Started
                  </Button>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <Check className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            {/* Progress Steps */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-8 py-6">
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center space-x-4">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold transition-all duration-300 ${
                    currentStep === 'form' ? 'bg-blue-600 text-white shadow-lg' : 
                    currentStep === 'payment' || currentStep === 'processing' ? 'bg-emerald-500 text-white shadow-lg' : 
                    'bg-gray-200 text-gray-600'
                  }`}>
                    1
                  </div>
                  <div className={`w-20 h-1 rounded-full transition-all duration-300 ${
                    currentStep === 'payment' || currentStep === 'processing' ? 'bg-emerald-500' : 'bg-gray-300'
                  }`}></div>
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold transition-all duration-300 ${
                    currentStep === 'payment' ? 'bg-blue-600 text-white shadow-lg' : 
                    currentStep === 'processing' ? 'bg-emerald-500 text-white shadow-lg' : 
                    'bg-gray-200 text-gray-600'
                  }`}>
                    2
                  </div>
                  <div className={`w-20 h-1 rounded-full transition-all duration-300 ${
                    currentStep === 'processing' ? 'bg-emerald-500' : 'bg-gray-300'
                  }`}></div>
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold transition-all duration-300 ${
                    currentStep === 'processing' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-200 text-gray-600'
                  }`}>
                    3
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm font-medium text-gray-700">
                  {currentStep === 'form' && 'Step 1: Order Details'}
                  {currentStep === 'payment' && 'Step 2: Payment Information'}
                  {currentStep === 'processing' && 'Step 3: Processing Payment...'}
                </p>
              </div>
            </div>

            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                  {currentStep === 'form' && 'Order Configuration'}
                  {currentStep === 'payment' && 'Secure Payment'}
                  {currentStep === 'processing' && 'Processing Payment'}
                </h2>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => {
                    setSelectedPlan(null);
                    setCurrentStep('form');
                  }}
                  className="rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              
              {currentStep === 'form' && (
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                  {/* Package Details - Enhanced */}
                  <div className="lg:col-span-2">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                      <div className="flex items-center mb-6">
                        <div className={`p-3 rounded-xl mr-4 ${
                          plans[selectedPlan].color === 'blue' ? 'bg-blue-100 text-blue-600' :
                          plans[selectedPlan].color === 'purple' ? 'bg-purple-100 text-purple-600' :
                          'bg-emerald-100 text-emerald-600'
                        }`}>
                          <Award className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{plans[selectedPlan].name} Package</h3>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-1 ${
                            plans[selectedPlan].color === 'blue' ? 'bg-blue-100 text-blue-800' :
                            plans[selectedPlan].color === 'purple' ? 'bg-purple-100 text-purple-800' :
                            'bg-emerald-100 text-emerald-800'
                          }`}>
                            {plans[selectedPlan].badge}
                          </span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-4 mb-6">
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-600">Investment</span>
                            <span className="text-2xl font-bold text-blue-600">{plans[selectedPlan].price}</span>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 text-gray-500 mr-2" />
                              <span className="text-sm font-medium text-gray-600">Maintenance</span>
                            </div>
                            <span className="font-semibold text-gray-900">{plans[selectedPlan].maintenance}</span>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-gray-500 mr-2" />
                              <span className="text-sm font-medium text-gray-600">Revisions</span>
                            </div>
                            <span className="font-semibold text-gray-900">
                              {plans[selectedPlan].name === "Custom" 
                                ? "Unlimited" 
                                : plans[selectedPlan].name === "Pro" 
                                ? "5x" 
                                : "3x"}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Check className="w-4 h-4 text-emerald-500 mr-2" />
                          Included Features
                        </h4>
                        <div className="max-h-48 overflow-y-auto">
                          <ul className="space-y-2">
                            {plans[selectedPlan].features.map((feature, i) => (
                              <li key={i} className="flex items-start text-sm">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                <span className="text-gray-700 leading-relaxed">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Order Form - Enhanced */}
                  <div className="lg:col-span-3">
                    <div className="bg-white rounded-2xl border border-gray-100">
                      <div className="p-6 border-b border-gray-100">
                        <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                          <FileText className="w-5 h-5 text-blue-600 mr-2" />
                          Project Information
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">Please provide your details to get started</p>
                      </div>
                      
                      <form onSubmit={handleFormSubmit} className="p-6 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                              <User className="w-4 h-4 inline mr-2 text-gray-500" />
                              Full Name
                            </label>
                            <input
                              type="text"
                              id="fullName"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                              placeholder="Enter your full name"
                              required
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="whatsapp" className="block text-sm font-semibold text-gray-700 mb-2">
                              <Phone className="w-4 h-4 inline mr-2 text-gray-500" />
                              WhatsApp Number
                            </label>
                            <input
                              type="text"
                              id="whatsapp"
                              name="whatsapp"
                              value={formData.whatsapp}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                              placeholder="e.g., +62 812 3456 7890"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="businessName" className="block text-sm font-semibold text-gray-700 mb-2">
                              <Building className="w-4 h-4 inline mr-2 text-gray-500" />
                              Business Name
                            </label>
                            <input
                              type="text"
                              id="businessName"
                              name="businessName"
                              value={formData.businessName}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                              placeholder="Your company or business name"
                              required
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="businessType" className="block text-sm font-semibold text-gray-700 mb-2">
                              <Briefcase className="w-4 h-4 inline mr-2 text-gray-500" />
                              Business Type
                            </label>
                            <select
                              id="businessType"
                              name="businessType"
                              value={formData.businessType}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                              required
                            >
                              <option value="" disabled>Select your industry</option>
                              {businessTypes.map((type, index) => (
                                <option key={index} value={type}>{type}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="notes" className="block text-sm font-semibold text-gray-700 mb-2">
                            <FileText className="w-4 h-4 inline mr-2 text-gray-500" />
                            Additional Notes <span className="text-gray-400 font-normal">(Optional)</span>
                          </label>
                          <textarea
                            id="notes"
                            name="notes"
                            value={formData.notes}
                            onChange={handleInputChange}
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white resize-none"
                            placeholder="Tell us about your specific requirements, design preferences, or any special features you need..."
                          ></textarea>
                        </div>
                        
                        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                          <div className="flex items-start">
                            <Shield className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-blue-900 mb-1">Privacy & Security</h4>
                              <p className="text-sm text-blue-700 leading-relaxed">
                                Your information is secure and will only be used to process your order and provide project updates. We never share your data with third parties.
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex gap-4 pt-4">
                          <Button 
                            type="button" 
                            variant="outline" 
                            className="flex-1 py-3 rounded-xl border-gray-200 hover:bg-gray-50 transition-all duration-200"
                            onClick={() => setSelectedPlan(null)}
                          >
                            Cancel
                          </Button>
                          <Button 
                            type="submit" 
                            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all duration-200 transform hover:scale-105"
                          >
                            Continue to Payment
                          </Button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 'payment' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Order Summary */}
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Package:</span>
                        <span className="font-medium">{plans[selectedPlan].name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Customer:</span>
                        <span className="font-medium">{formData.fullName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Business:</span>
                        <span className="font-medium">{formData.businessName}</span>
                      </div>
                      <hr className="my-4" />
                      <div className="flex justify-between text-lg font-semibold">
                        <span>Total:</span>
                        <span className="text-blue-600">{plans[selectedPlan].price}</span>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Shield className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="font-medium text-blue-800">Secure Payment</span>
                      </div>
                      <p className="text-sm text-blue-700">
                        Your payment information is encrypted and secure. We use industry-standard SSL encryption to protect your data.
                      </p>
                    </div>
                  </div>

                  {/* Payment Form */}
                  <div>
                    <div className="flex items-center mb-4">
                      <CreditCard className="w-6 h-6 text-blue-600 mr-2" />
                      <h3 className="text-xl font-semibold">Payment Information</h3>
                    </div>
                    
                    <form onSubmit={handlePaymentSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="cardholderName" className="block text-sm font-medium text-gray-700 mb-1">
                          Cardholder Name
                        </label>
                        <input
                          type="text"
                          id="cardholderName"
                          name="cardholderName"
                          value={paymentData.cardholderName}
                          onChange={handlePaymentInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="John Doe"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                          Card Number
                        </label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={paymentData.cardNumber}
                          onChange={handlePaymentInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            id="expiryDate"
                            name="expiryDate"
                            value={paymentData.expiryDate}
                            onChange={handlePaymentInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="MM/YY"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                            CVV
                          </label>
                          <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            value={paymentData.cvv}
                            onChange={handlePaymentInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="123"
                            required
                          />
                        </div>
                      </div>

                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Lock className="w-5 h-5 text-yellow-600 mr-2" />
                          <span className="font-medium text-yellow-800">Payment Security</span>
                        </div>
                        <p className="text-sm text-yellow-700">
                          We accept all major credit cards. Your payment will be processed securely and you'll receive a confirmation email.
                        </p>
                      </div>
                      
                      <div className="flex gap-4 pt-4">
                        <Button 
                          type="button" 
                          variant="outline" 
                          className="w-full"
                          onClick={() => setCurrentStep('form')}
                        >
                          Back to Form
                        </Button>
                        <Button 
                          type="submit" 
                          className="w-full"
                        >
                          <Lock className="w-4 h-4 mr-2" />
                          Pay {plans[selectedPlan].price}
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              )}

              {currentStep === 'processing' && (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-6"></div>
                  <h3 className="text-2xl font-semibold mb-4">Processing Your Payment</h3>
                  <p className="text-gray-600 mb-6">
                    Please wait while we process your payment. This may take a few moments.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg max-w-md mx-auto">
                    <p className="text-sm text-blue-700">
                      Do not close this window or refresh the page. You will be redirected to WhatsApp once payment is confirmed.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}