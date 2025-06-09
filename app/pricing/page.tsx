"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Check, X, CreditCard, Shield, Lock, Star, Sparkles } from "lucide-react";
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

    if (name === 'cardNumber') {
      formattedValue = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
      if (formattedValue.length > 19) formattedValue = formattedValue.slice(0, 19);
    }

    if (name === 'expiryDate') {
      formattedValue = value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2');
      if (formattedValue.length > 5) formattedValue = formattedValue.slice(0, 5);
    }

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

    if (!formData.fullName || !formData.whatsapp || !formData.businessName || !formData.businessType) {
      alert("Please fill in all required fields.");
      return;
    }

    setCurrentStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!paymentData.cardNumber || !paymentData.expiryDate || !paymentData.cvv || !paymentData.cardholderName) {
      alert("Please fill in all payment details.");
      return;
    }

    setCurrentStep('processing');

    setTimeout(() => {
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
      name: "Starter",
      price: "$42",
      originalPrice: "$60",
      description: "Perfect for small businesses and startups",
      popular: false,
      features: [
        "Modern & Responsive Design",
        "On-Page SEO Optimization",
        "Contact Form & WhatsApp Integration",
        "Google Analytics Setup",
        "Social Media Integration",
        "SSL Security (HTTPS)",
        "Speed Optimization",
        "Free .com Domain (1 Year)",
        "Free Hosting (1 Year)",
        "3 Design Revisions",
        "1 Month Free Maintenance"
      ],
      maintenance: "1 Month",
      revisions: "3x"
    },
    {
      name: "Professional",
      price: "$117",
      originalPrice: "$150",
      description: "Ideal for growing businesses and professionals",
      popular: true,
      features: [
        "Premium & Responsive Design",
        "Advanced SEO Optimization",
        "Content Management System",
        "Blog/News System",
        "Contact Forms & WhatsApp",
        "Google Maps Integration",
        "Analytics & Search Console",
        "Social Media Integration",
        "SSL Security (HTTPS)",
        "Advanced Speed Optimization",
        "Free .com Domain (1 Year)",
        "Free Hosting (1 Year)",
        "Free Business Email",
        "6 Months Free Maintenance",
        "5 Design Revisions",
        "Priority Support"
      ],
      maintenance: "6 Months",
      revisions: "5x"
    },
    {
      name: "Enterprise",
      price: "$176",
      originalPrice: "$220",
      description: "Complete solution for large organizations",
      popular: false,
      features: [
        "Business Needs Analysis",
        "Custom Premium Design",
        "Custom Development",
        "Database Design & Integration",
        "API Development & Integration",
        "Payment Gateway Integration",
        "Advanced Security Features",
        "High Performance Setup",
        "Premium SEO Configuration",
        "Server Optimization",
        "Free .com Domain (1 Year)",
        "Free Hosting (1 Year)",
        "Free Business Email",
        "1 Year Free Maintenance",
        "Unlimited Revisions",
        "24/7 Priority Support",
        "Training & Documentation"
      ],
      maintenance: "1 Year",
      revisions: "Unlimited"
    }
  ];

  const businessTypes = [
    "E-commerce", "Service Business", "Restaurant/Cafe", "Education", "Healthcare",
    "Real Estate", "Technology", "Finance", "Travel & Tourism", "Entertainment",
    "Non-profit", "Manufacturing", "Consulting", "Other"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <Link href="/">
          <Button variant="ghost" className="mb-8 text-slate-600 hover:text-slate-900">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-medium text-blue-700 mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Limited Time Offer - Save up to 30%
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gradient mb-6">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Transparent pricing with no hidden fees. Start your project today and transform your digital presence.
          </p>
        </motion.div>

        {selectedPlan === null ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-3xl shadow-xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  plan.popular 
                    ? 'border-blue-500 ring-4 ring-blue-100' 
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                    <p className="text-slate-600 mb-6">{plan.description}</p>
                    
                    <div className="flex items-center justify-center mb-6">
                      <span className="text-slate-400 line-through text-lg mr-2">{plan.originalPrice}</span>
                      <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    </div>
                    
                    <Button 
                      className={`w-full py-3 text-lg font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg'
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                      }`}
                      onClick={() => setSelectedPlan(index)}
                    >
                      Get Started
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-slate-50 rounded-xl">
                      <div className="text-center">
                        <div className="text-sm text-slate-500">Maintenance</div>
                        <div className="font-semibold text-slate-900">{plan.maintenance}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-slate-500">Revisions</div>
                        <div className="font-semibold text-slate-900">{plan.revisions}</div>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-slate-700">
                          <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
          >
            {/* Progress Steps */}
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 px-8 py-6">
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center space-x-4">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold ${
                    currentStep === 'form' ? 'bg-blue-600 text-white' : 
                    currentStep === 'payment' || currentStep === 'processing' ? 'bg-green-500 text-white' : 
                    'bg-slate-300 text-slate-600'
                  }`}>
                    1
                  </div>
                  <div className={`w-20 h-1 rounded-full ${
                    currentStep === 'payment' || currentStep === 'processing' ? 'bg-green-500' : 'bg-slate-300'
                  }`}></div>
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold ${
                    currentStep === 'payment' ? 'bg-blue-600 text-white' : 
                    currentStep === 'processing' ? 'bg-green-500 text-white' : 
                    'bg-slate-300 text-slate-600'
                  }`}>
                    2
                  </div>
                  <div className={`w-20 h-1 rounded-full ${
                    currentStep === 'processing' ? 'bg-green-500' : 'bg-slate-300'
                  }`}></div>
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold ${
                    currentStep === 'processing' ? 'bg-blue-600 text-white' : 'bg-slate-300 text-slate-600'
                  }`}>
                    3
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm font-medium text-slate-600">
                  {currentStep === 'form' && 'Step 1: Project Details'}
                  {currentStep === 'payment' && 'Step 2: Secure Payment'}
                  {currentStep === 'processing' && 'Step 3: Processing Order'}
                </p>
              </div>
            </div>

            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-slate-900">
                  {currentStep === 'form' && 'Project Information'}
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
                  className="rounded-full hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              
              {currentStep === 'form' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Package Details */}
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold mb-6 text-slate-900">{plans[selectedPlan].name} Package</h3>
                    
                    <div className="space-y-6">
                      <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                        <span className="text-slate-600">Package Price:</span>
                        <div className="text-right">
                          <span className="text-slate-400 line-through text-sm mr-2">{plans[selectedPlan].originalPrice}</span>
                          <span className="text-2xl font-bold text-blue-600">{plans[selectedPlan].price}</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-white rounded-xl text-center">
                          <p className="text-sm text-slate-500 mb-1">Maintenance</p>
                          <p className="font-semibold text-slate-900">{plans[selectedPlan].maintenance}</p>
                        </div>
                        <div className="p-4 bg-white rounded-xl text-center">
                          <p className="text-sm text-slate-500 mb-1">Revisions</p>
                          <p className="font-semibold text-slate-900">{plans[selectedPlan].revisions}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <h4 className="font-semibold mb-4 text-slate-900">What's Included:</h4>
                      <div className="space-y-2 max-h-64 overflow-y-auto">
                        {plans[selectedPlan].features.map((feature, i) => (
                          <div key={i} className="flex items-start text-sm">
                            <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Order Form */}
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-slate-900">Project Details</h3>
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-semibold text-slate-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="whatsapp" className="block text-sm font-semibold text-slate-700 mb-2">
                          WhatsApp Number *
                        </label>
                        <input
                          type="text"
                          id="whatsapp"
                          name="whatsapp"
                          value={formData.whatsapp}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Example: +1234567890"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="businessName" className="block text-sm font-semibold text-slate-700 mb-2">
                          Business/Company Name *
                        </label>
                        <input
                          type="text"
                          id="businessName"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Your business or company name"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="businessType" className="block text-sm font-semibold text-slate-700 mb-2">
                          Business Type *
                        </label>
                        <select
                          id="businessType"
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          required
                        >
                          <option value="" disabled>Select your business type</option>
                          {businessTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="notes" className="block text-sm font-semibold text-slate-700 mb-2">
                          Additional Notes (Optional)
                        </label>
                        <textarea
                          id="notes"
                          name="notes"
                          value={formData.notes}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                          placeholder="Tell us about your specific requirements or questions"
                        ></textarea>
                      </div>
                      
                      <div className="flex gap-4 pt-6">
                        <Button 
                          type="button" 
                          variant="outline" 
                          className="flex-1 py-3 border-slate-300 hover:bg-slate-50"
                          onClick={() => setSelectedPlan(null)}
                        >
                          Back to Plans
                        </Button>
                        <Button 
                          type="submit" 
                          className="flex-1 py-3 bg-slate-900 hover:bg-slate-800 text-white"
                        >
                          Continue to Payment
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              )}

              {currentStep === 'payment' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Order Summary */}
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold mb-6 text-slate-900">Order Summary</h3>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                        <span className="text-slate-600">Package:</span>
                        <span className="font-semibold text-slate-900">{plans[selectedPlan].name}</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                        <span className="text-slate-600">Customer:</span>
                        <span className="font-semibold text-slate-900">{formData.fullName}</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                        <span className="text-slate-600">Business:</span>
                        <span className="font-semibold text-slate-900">{formData.businessName}</span>
                      </div>
                      <div className="border-t border-slate-200 pt-4">
                        <div className="flex justify-between items-center text-xl font-bold">
                          <span className="text-slate-900">Total Amount:</span>
                          <span className="text-blue-600">{plans[selectedPlan].price}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-100 p-6 rounded-xl">
                      <div className="flex items-center mb-3">
                        <Shield className="w-6 h-6 text-blue-600 mr-3" />
                        <span className="font-semibold text-blue-800">Secure Payment</span>
                      </div>
                      <p className="text-sm text-blue-700 leading-relaxed">
                        Your payment information is encrypted and secure. We use industry-standard SSL encryption 
                        to protect your data and ensure safe transactions.
                      </p>
                    </div>
                  </div>

                  {/* Payment Form */}
                  <div>
                    <div className="flex items-center mb-6">
                      <CreditCard className="w-8 h-8 text-slate-700 mr-3" />
                      <h3 className="text-2xl font-bold text-slate-900">Payment Information</h3>
                    </div>
                    
                    <form onSubmit={handlePaymentSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="cardholderName" className="block text-sm font-semibold text-slate-700 mb-2">
                          Cardholder Name *
                        </label>
                        <input
                          type="text"
                          id="cardholderName"
                          name="cardholderName"
                          value={paymentData.cardholderName}
                          onChange={handlePaymentInputChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="John Doe"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="cardNumber" className="block text-sm font-semibold text-slate-700 mb-2">
                          Card Number *
                        </label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={paymentData.cardNumber}
                          onChange={handlePaymentInputChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="expiryDate" className="block text-sm font-semibold text-slate-700 mb-2">
                            Expiry Date *
                          </label>
                          <input
                            type="text"
                            id="expiryDate"
                            name="expiryDate"
                            value={paymentData.expiryDate}
                            onChange={handlePaymentInputChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="MM/YY"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="cvv" className="block text-sm font-semibold text-slate-700 mb-2">
                            CVV *
                          </label>
                          <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            value={paymentData.cvv}
                            onChange={handlePaymentInputChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="123"
                            required
                          />
                        </div>
                      </div>

                      <div className="bg-yellow-100 p-6 rounded-xl">
                        <div className="flex items-center mb-3">
                          <Lock className="w-6 h-6 text-yellow-600 mr-3" />
                          <span className="font-semibold text-yellow-800">Payment Security</span>
                        </div>
                        <p className="text-sm text-yellow-700 leading-relaxed">
                          We accept all major credit cards. Your payment will be processed securely and you'll 
                          receive a confirmation email immediately after successful payment.
                        </p>
                      </div>
                      
                      <div className="flex gap-4 pt-6">
                        <Button 
                          type="button" 
                          variant="outline" 
                          className="flex-1 py-3 border-slate-300 hover:bg-slate-50"
                          onClick={() => setCurrentStep('form')}
                        >
                          Back to Details
                        </Button>
                        <Button 
                          type="submit" 
                          className="flex-1 py-3 bg-slate-900 hover:bg-slate-800 text-white"
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
                <div className="text-center py-16">
                  <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-blue-600 mx-auto mb-8"></div>
                  <h3 className="text-3xl font-bold mb-6 text-slate-900">Processing Your Payment</h3>
                  <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto leading-relaxed">
                    Please wait while we securely process your payment. This may take a few moments.
                  </p>
                  <div className="bg-blue-50 p-6 rounded-xl max-w-lg mx-auto">
                    <p className="text-sm text-blue-700 leading-relaxed">
                      <strong>Important:</strong> Do not close this window or refresh the page. 
                      You will be redirected to WhatsApp once payment is confirmed.
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