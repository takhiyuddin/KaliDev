"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Check, X, CreditCard, Shield, Lock } from "lucide-react";
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
            {/* Progress Steps */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-4">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  currentStep === 'form' ? 'bg-blue-600 text-white' : 
                  currentStep === 'payment' || currentStep === 'processing' ? 'bg-green-500 text-white' : 
                  'bg-gray-300 text-gray-600'
                }`}>
                  1
                </div>
                <div className={`w-16 h-1 ${
                  currentStep === 'payment' || currentStep === 'processing' ? 'bg-green-500' : 'bg-gray-300'
                }`}></div>
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  currentStep === 'payment' ? 'bg-blue-600 text-white' : 
                  currentStep === 'processing' ? 'bg-green-500 text-white' : 
                  'bg-gray-300 text-gray-600'
                }`}>
                  2
                </div>
                <div className={`w-16 h-1 ${
                  currentStep === 'processing' ? 'bg-green-500' : 'bg-gray-300'
                }`}></div>
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  currentStep === 'processing' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  3
                </div>
              </div>
            </div>

            <div className="text-center mb-6">
              <p className="text-sm text-gray-600">
                {currentStep === 'form' && 'Step 1: Order Details'}
                {currentStep === 'payment' && 'Step 2: Payment Information'}
                {currentStep === 'processing' && 'Step 3: Processing Payment...'}
              </p>
            </div>

            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                {currentStep === 'form' && 'Order Form'}
                {currentStep === 'payment' && 'Payment Gateway'}
                {currentStep === 'processing' && 'Processing Payment'}
              </h2>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => {
                  setSelectedPlan(null);
                  setCurrentStep('form');
                }}
                className="rounded-full"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            {currentStep === 'form' && (
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
                        {plans[selectedPlan].name === "Custom" 
                          ? "Unlimited" 
                          : plans[selectedPlan].name === "Pro" 
                          ? "5x" 
                          : "3x"}
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
                  <form onSubmit={handleFormSubmit} className="space-y-4">
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
                        Continue to Payment
                      </Button>
                    </div>
                  </form>
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
          </motion.div>
        )}
      </div>
    </div>
  );
}