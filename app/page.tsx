"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, FolderKanban, BarChart, MessageSquare, Smartphone, Globe, Database, Server, Headphones, Wrench, Palette, Shield, Cloud, LineChart, Zap, Laptop, FileText, Image, Video, Users, ShoppingCart, Layers, Cpu, BookOpen, Map, PieChart, Briefcase, Lightbulb, Menu, X, Star, Quote, ExternalLink, Github } from "lucide-react";
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

  const majorProjects = [
    {
      title: "Enterprise Resource Planning System",
      description: "Comprehensive ERP solution for manufacturing companies with inventory management, production planning, and financial reporting modules.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
      features: ["Real-time Analytics", "Multi-tenant Architecture", "API Integration", "Advanced Security"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Enterprise Software"
    },
    {
      title: "AI-Powered Content Management Platform",
      description: "Next-generation CMS with AI-driven content optimization, automated SEO suggestions, and intelligent content categorization.",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Next.js", "Python", "TensorFlow", "MongoDB", "AWS"],
      features: ["AI Content Analysis", "Auto-SEO Optimization", "Multi-language Support", "Cloud Storage"],
      liveUrl: "#",
      githubUrl: "#",
      category: "AI & Machine Learning"
    },
    {
      title: "Blockchain-Based Supply Chain Tracker",
      description: "Transparent supply chain management system using blockchain technology to track products from origin to consumer.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Solidity", "Web3.js", "React", "Node.js", "IPFS"],
      features: ["Blockchain Integration", "Smart Contracts", "QR Code Tracking", "Immutable Records"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Blockchain"
    },
    {
      title: "Real-Time Collaboration Platform",
      description: "Advanced team collaboration tool with video conferencing, document sharing, project management, and real-time editing capabilities.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Vue.js", "WebRTC", "Socket.io", "Express", "MongoDB"],
      features: ["Video Conferencing", "Real-time Editing", "File Sharing", "Project Management"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Collaboration Tools"
    },
    {
      title: "IoT Smart City Dashboard",
      description: "Comprehensive smart city management system integrating traffic monitoring, environmental sensors, and public services optimization.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Angular", "Python", "InfluxDB", "Grafana", "MQTT"],
      features: ["Real-time Monitoring", "Predictive Analytics", "Alert System", "Data Visualization"],
      liveUrl: "#",
      githubUrl: "#",
      category: "IoT & Smart Systems"
    },
    {
      title: "Advanced E-Learning Platform",
      description: "Comprehensive online education platform with adaptive learning algorithms, virtual classrooms, and progress tracking.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Django", "PostgreSQL", "WebRTC", "AWS"],
      features: ["Adaptive Learning", "Virtual Classrooms", "Progress Analytics", "Mobile App"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Education Technology"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, TechVision Inc.",
      company: "TechVision Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote: "Koderupa transformed our business with their e-commerce platform. The attention to detail and performance optimization exceeded our expectations. Our conversion rates have increased by 40% since launch.",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "Founder, HealthPlus",
      company: "HealthPlus",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote: "The healthcare management system Koderupa built for us has revolutionized how we handle patient data. The platform is intuitive, secure, and has significantly improved our operational efficiency.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director, EduLearn",
      company: "EduLearn",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote: "Our learning management system has received outstanding feedback from both instructors and students. Koderupa delivered a product that was not only beautiful but also incredibly functional and user-friendly.",
      rating: 5
    },
    {
      name: "David Park",
      position: "CEO, PropertyFinder",
      company: "PropertyFinder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote: "The real estate marketplace Koderupa developed for us has completely changed how we connect buyers with sellers. The virtual tour feature has been particularly impressive and has set us apart from competitors.",
      rating: 4
    },
    {
      name: "Lisa Thompson",
      position: "Operations Manager, LogiFlow",
      company: "LogiFlow",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote: "The supply chain management system has given us complete visibility into our operations. Real-time tracking and analytics have helped us reduce costs by 25% and improve delivery times significantly.",
      rating: 5
    },
    {
      name: "James Wilson",
      position: "CTO, FinanceFlow",
      company: "FinanceFlow",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote: "Koderupa's fintech solution exceeded all our security and compliance requirements. The payment processing system handles thousands of transactions daily without any issues. Exceptional work!",
      rating: 5
    },
    {
      name: "Rachel Green",
      position: "Head of Digital, RetailMax",
      company: "RetailMax",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote: "The mobile app suite Koderupa created for our retail chain has transformed our customer experience. Push notifications and loyalty features have increased customer engagement by 60%.",
      rating: 5
    },
    {
      name: "Alex Kumar",
      position: "Founder, SmartCity Solutions",
      company: "SmartCity Solutions",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote: "The IoT dashboard platform has revolutionized how we manage smart city infrastructure. Real-time monitoring and predictive analytics have helped us prevent issues before they occur.",
      rating: 5
    },
    {
      name: "Maria Santos",
      position: "Director of Technology, EcoGreen",
      company: "EcoGreen",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote: "Working with Koderupa on our environmental monitoring platform was fantastic. Their expertise in data visualization and real-time processing helped us create a tool that's both powerful and easy to use.",
      rating: 4
    },
    {
      name: "Robert Taylor",
      position: "VP Engineering, CloudTech",
      company: "CloudTech",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote: "The enterprise collaboration platform has streamlined our remote work processes. Video conferencing integration and real-time document editing have made our team 40% more productive.",
      rating: 5
    },
    {
      name: "Jennifer Lee",
      position: "Product Manager, InnovateLab",
      company: "InnovateLab",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote: "Koderupa's AI-powered content management system has automated so many of our manual processes. The intelligent categorization and SEO optimization features have saved us countless hours.",
      rating: 5
    },
    {
      name: "Thomas Anderson",
      position: "CEO, BlockChain Ventures",
      company: "BlockChain Ventures",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote: "The blockchain supply chain solution has brought unprecedented transparency to our operations. Smart contracts and immutable records have built trust with our partners and customers.",
      rating: 5
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
                <span className="text-xl font-bold">Koderupa</span>
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
                <Link href="/get-started" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full justify-start">Contact</Button>
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
              Explore what you can build with Koderupa's powerful development platform
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

      {/* Major Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Major Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our most impactful and innovative solutions across various industries
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {majorProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-gray-800">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-gray-800">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button variant="outline" className="flex-1" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" className="flex-1" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what our clients have to say about their experience working with us
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow relative"
              >
                <div className="absolute top-6 right-6 text-blue-500">
                  <Quote className="w-8 h-8 opacity-20" />
                </div>
                <div className="flex items-start mb-6">
                  <div className="mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic text-sm leading-relaxed">"{testimonial.quote}"</p>
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
    </div>
  );
}