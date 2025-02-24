"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Cpu, Globe, Layers, Lock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Features() {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "High Performance",
      description: "Optimized for speed with advanced caching and minimal overhead."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Edge Network",
      description: "Deploy to multiple regions with automatic failover and load balancing."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Built-in protection against common vulnerabilities and threats."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI-Powered Tools",
      description: "Intelligent code suggestions and automated optimizations."
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Scalable Architecture",
      description: "Built to handle growth with microservices and containerization."
    }
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
        >
          <h1 className="text-4xl font-bold mb-8">Platform Features</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Discover the powerful features that make KaliDev the perfect choice for modern development teams.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4 text-blue-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}