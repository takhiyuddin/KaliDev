"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, FolderKanban, BarChart, MessageSquare, Smartphone, Globe, Database, Server, Headphones, Wrench, Palette, Shield, Cloud, LineChart, Zap, Laptop, FileText, Image, Video, Users, ShoppingCart, Layers, Cpu, BookOpen, Map, PieChart, Briefcase, Lightbulb, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A scalable online store with real-time inventory management.",
      tags: ["Next.js", "Supabase", "Stripe"]
    },
    {
      title: "Analytics Dashboard",
      description: "Interactive data visualization for business intelligence.",
      tags: ["React", "D3.js", "TypeScript"]
    },
    {
      title: "Content Management",
      description: "Headless CMS with customizable workflows and publishing.",
      tags: ["GraphQL", "Next.js", "Tailwind"]
    },
    {
      title: "AI-Powered Chatbot",
      description: "Intelligent customer support with natural language processing.",
      tags: ["Python", "TensorFlow", "WebSockets"]
    },
    {
      title: "Mobile App Suite",
      description: "Cross-platform mobile applications with shared codebase.",
      tags: ["React Native", "Firebase", "Redux"]
    },
    {
      title: "Enterprise Portal",
      description: "Secure internal tools for team collaboration and resource management.",
      tags: ["Vue.js", "Node.js", "PostgreSQL"]
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive platform for patient records and appointment scheduling.",
      tags: ["Angular", "MongoDB", "Express"]
    },
    {
      title: "Real Estate Marketplace",
      description: "Property listing platform with advanced search and virtual tours.",
      tags: ["React", "Node.js", "ElasticSearch"]
    },
    {
      title: "Learning Management System",
      description: "Educational platform with course creation and student progress tracking.",
      tags: ["Next.js", "PostgreSQL", "WebRTC"]
    },
    {
      title: "Fintech Payment Solution",
      description: "Secure payment processing with multi-currency support and fraud detection.",
      tags: ["Node.js", "Redis", "Docker"]
    },
    {
      title: "Social Media Platform",
      description: "Community-focused platform with real-time feeds and rich media sharing.",
      tags: ["React", "GraphQL", "AWS"]
    },
    {
      title: "IoT Control Dashboard",
      description: "Centralized management system for connected devices and sensors.",
      tags: ["Vue.js", "MQTT", "WebSockets"]
    }
  ];

  const services = [
    {
      icon: <Server className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern frameworks and best practices."
    },
    {
      icon: <Smartphone className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android devices."
    },
    {
      icon: <Palette className="w-12 h-12 text-blue-600 mb-4" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed for optimal user experience and engagement."
    },
    {
      icon: <Database className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Database Solutions",
      description: "Scalable database architecture with optimized performance and security."
    },
    {
      icon: <Cloud className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Cloud Services",
      description: "Deployment and management of applications on leading cloud platforms."
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Security Audits",
      description: "Comprehensive security assessments to identify and address vulnerabilities."
    },
    {
      icon: <LineChart className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Performance Optimization",
      description: "Enhance application speed and efficiency through advanced optimization techniques."
    },
    {
      icon: <Headphones className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Technical Support",
      description: "24/7 expert assistance and maintenance for all your digital products."
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-600 mb-4" />,
      title: "API Development",
      description: "Custom API solutions for seamless integration between systems and services."
    },
    {
      icon: <Laptop className="w-12 h-12 text-blue-600 mb-4" />,
      title: "DevOps Services",
      description: "Streamlined development operations with CI/CD pipelines and infrastructure automation."
    },
    {
      icon: <Code2 className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Custom Software",
      description: "Bespoke software solutions tailored to your specific business requirements."
    },
    {
      icon: <Wrench className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Maintenance & Updates",
      description: "Ongoing support, updates, and improvements to keep your applications running smoothly."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/">
                <span className="text-xl font-bold">KaliDev</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <Link href="/pricing">
                  <Button variant="ghost">Pricing</Button>
                </Link>
                <Link href="/documentation">
                  <Button variant="ghost">Documentation</Button>
                </Link>
                <Link href="/get-started">
                  <Button>Contact</Button>
                </Link>
              </div>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b shadow-lg"
          >
            <div className="px-4 pt-2 pb-4 space-y-1 sm:px-6">
              <div className="flex justify-end">
                <Button variant="ghost" size="icon" onClick={toggleMenu}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <div className="flex flex-col space-y-2">
                <Link href="/pricing" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">Pricing</Button>
                </Link>
                <Link href="/documentation" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">Documentation</Button>
                </Link>
                <Link href="/pricing" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full justify-start">Get Started</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
              Build faster with our
              <span className="text-blue-600"> modern platform</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Empower your development workflow with cutting-edge tools and frameworks.
              Build scalable applications faster than ever before.
            </p>
            <div className="flex justify-center">
              <Link href="/pricing">
                <Button size="lg" className="gap-2">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive development solutions to bring your ideas to life
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gray-50 border hover:shadow-md transition-shadow"
              >
                {service.icon}
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore what you can build with KaliDev's powerful development platform
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4 text-blue-600">
                  {index === 0 ? <ShoppingCart className="w-6 h-6" /> : 
                   index === 1 ? <BarChart className="w-6 h-6" /> : 
                   index === 2 ? <FileText className="w-6 h-6" /> :
                   index === 3 ? <MessageSquare className="w-6 h-6" /> :
                   index === 4 ? <Smartphone className="w-6 h-6" /> :
                   index === 5 ? <Users className="w-6 h-6" /> :
                   index === 6 ? <Briefcase className="w-6 h-6" /> :
                   index === 7 ? <Map className="w-6 h-6" /> :
                   index === 8 ? <BookOpen className="w-6 h-6" /> :
                   index === 9 ? <PieChart className="w-6 h-6" /> :
                   index === 10 ? <Layers className="w-6 h-6" /> :
                   <Cpu className="w-6 h-6" />}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-blue-600 text-white rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are already building amazing products with our platform.
            </p>
            <Link href="/pricing">
              <Button size="lg" variant="secondary" className="gap-2">
                Start Building <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-gray-600">
            <p>© 2025 KaliDev. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}