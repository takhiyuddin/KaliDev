"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Leaf, Zap, MessageSquare, Smartphone, Globe, Database, Server, Headphones, Wrench, Palette, Cloud, LineChart, Laptop, FileText, Image, Video, Users, ShoppingCart, Layers, Cpu, BookOpen, Map, PieChart, Briefcase, Lightbulb, Menu, X, Star, Quote, ExternalLink, Github, CheckCircle, Award, TrendingUp, Sparkles, Target, Heart, Rocket, Building2, Code2, Workflow, Settings, BarChart3, Lock } from "lucide-react";
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
      description: "A scalable online store with real-time inventory management and advanced analytics.",
      tags: ["Next.js", "Supabase", "Stripe"],
      category: "E-Commerce",
      color: "blue",
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      title: "Analytics Dashboard",
      description: "Interactive data visualization platform for business intelligence and insights.",
      tags: ["React", "D3.js", "TypeScript"],
      category: "Analytics",
      color: "green",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Content Management",
      description: "Headless CMS with customizable workflows and intelligent publishing.",
      tags: ["GraphQL", "Next.js", "Tailwind"],
      category: "CMS",
      color: "yellow",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "AI-Powered Chatbot",
      description: "Intelligent customer support with natural language processing capabilities.",
      tags: ["Python", "TensorFlow", "WebSockets"],
      category: "AI/ML",
      color: "blue",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      title: "Mobile App Suite",
      description: "Cross-platform mobile applications with shared codebase and native performance.",
      tags: ["React Native", "Firebase", "Redux"],
      category: "Mobile",
      color: "green",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: "Enterprise Portal",
      description: "Secure internal tools for team collaboration and resource management.",
      tags: ["Vue.js", "Node.js", "PostgreSQL"],
      category: "Enterprise",
      color: "yellow",
      icon: <Building2 className="w-6 h-6" />
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
      category: "Enterprise Software",
      color: "blue"
    },
    {
      title: "AI-Powered Content Management Platform",
      description: "Next-generation CMS with AI-driven content optimization, automated SEO suggestions, and intelligent content categorization.",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Next.js", "Python", "TensorFlow", "MongoDB", "AWS"],
      features: ["AI Content Analysis", "Auto-SEO Optimization", "Multi-language Support", "Cloud Storage"],
      liveUrl: "#",
      githubUrl: "#",
      category: "AI & Machine Learning",
      color: "green"
    },
    {
      title: "Blockchain-Based Supply Chain Tracker",
      description: "Transparent supply chain management system using blockchain technology to track products from origin to consumer.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Solidity", "Web3.js", "React", "Node.js", "IPFS"],
      features: ["Blockchain Integration", "Smart Contracts", "QR Code Tracking", "Immutable Records"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Blockchain",
      color: "yellow"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, TechVision Inc.",
      company: "TechVision Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote: "Koderupa transformed our business with their e-commerce platform. The attention to detail and performance optimization exceeded our expectations. Our conversion rates have increased by 40% since launch.",
      rating: 5,
      color: "blue"
    },
    {
      name: "Michael Chen",
      position: "Founder, HealthPlus",
      company: "HealthPlus",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote: "The healthcare management system Koderupa built for us has revolutionized how we handle patient data. The platform is intuitive, secure, and has significantly improved our operational efficiency.",
      rating: 5,
      color: "green"
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director, EduLearn",
      company: "EduLearn",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      quote: "Our learning management system has received outstanding feedback from both instructors and students. Koderupa delivered a product that was not only beautiful but also incredibly functional and user-friendly.",
      rating: 5,
      color: "yellow"
    }
  ];

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern frameworks and best practices for optimal performance.",
      features: ["Responsive Design", "SEO Optimization", "Performance Tuning"],
      color: "blue"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android with seamless user experiences.",
      features: ["Cross-Platform", "Native Performance", "App Store Optimization"],
      color: "green"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed for optimal user experience and brand consistency.",
      features: ["User Research", "Prototyping", "Design Systems"],
      color: "yellow"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Solutions",
      description: "Scalable database architecture with optimized performance, security, and data integrity.",
      features: ["Data Modeling", "Performance Optimization", "Backup & Recovery"],
      color: "blue"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Services",
      description: "Deployment and management of applications on leading cloud platforms with auto-scaling.",
      features: ["Auto-Scaling", "Load Balancing", "Monitoring"],
      color: "green"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Security Audits",
      description: "Comprehensive security assessments to identify and address vulnerabilities proactively.",
      features: ["Penetration Testing", "Code Review", "Compliance"],
      color: "yellow"
    }
  ];

  const stats = [
    { 
      number: "500+", 
      label: "Projects Completed", 
      icon: <CheckCircle className="w-6 h-6" />,
      color: "blue"
    },
    { 
      number: "98%", 
      label: "Client Satisfaction", 
      icon: <Heart className="w-6 h-6" />,
      color: "green"
    },
    { 
      number: "50+", 
      label: "Team Members", 
      icon: <Users className="w-6 h-6" />,
      color: "yellow"
    },
    { 
      number: "24/7", 
      label: "Support Available", 
      icon: <Headphones className="w-6 h-6" />,
      color: "blue"
    }
  ];

  const getColorClasses = (color: string, type: 'bg' | 'text' | 'border' | 'icon') => {
    const colorMap = {
      blue: {
        bg: 'bg-gradient-to-br from-blue-50 to-blue-100',
        text: 'text-blue-600',
        border: 'border-blue-200',
        icon: 'bg-blue-100 text-blue-600'
      },
      green: {
        bg: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
        text: 'text-emerald-600',
        border: 'border-emerald-200',
        icon: 'bg-emerald-100 text-emerald-600'
      },
      yellow: {
        bg: 'bg-gradient-to-br from-amber-50 to-amber-100',
        text: 'text-amber-600',
        border: 'border-amber-200',
        icon: 'bg-amber-100 text-amber-600'
      }
    };
    return colorMap[color as keyof typeof colorMap]?.[type] || colorMap.blue[type];
  };

  return (
    <div className="min-h-screen professional-gradient">
      {/* Navigation */}
      <nav className="fixed w-full glass-effect z-50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-gradient-blue">Koderupa</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-2">
                <Link href="/pricing">
                  <Button variant="ghost" className="text-slate-600 hover:text-blue-600 font-medium">
                    Pricing
                  </Button>
                </Link>
                <Link href="/documentation">
                  <Button variant="ghost" className="text-slate-600 hover:text-blue-600 font-medium">
                    Documentation
                  </Button>
                </Link>
                <Link href="/get-started">
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 btn-modern">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-slate-600">
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
            className="md:hidden glass-effect border-t border-slate-200/60"
          >
            <div className="px-6 pt-4 pb-6 space-y-3">
              <div className="flex justify-end">
                <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-slate-600">
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <div className="flex flex-col space-y-3">
                <Link href="/pricing" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-slate-600">
                    Pricing
                  </Button>
                </Link>
                <Link href="/documentation" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-slate-600">
                    Documentation
                  </Button>
                </Link>
                <Link href="/get-started" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full justify-start bg-gradient-to-r from-blue-600 to-blue-700">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-emerald-50/30"></div>
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-emerald-100 rounded-full text-sm font-medium text-slate-700 mb-8 border border-blue-200/50 modern-shadow">
              <Sparkles className="w-4 h-4 mr-2 text-blue-500" />
              Trusted by 500+ companies worldwide
              <Award className="w-4 h-4 ml-2 text-emerald-500" />
            </div>
            <h1 className="text-gradient mb-8 leading-tight">
              Build exceptional digital experiences with our
              <span className="block text-gradient-blue">
                modern development platform
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Empower your business with cutting-edge technology solutions. We create scalable, 
              secure, and beautiful applications that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/pricing">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold modern-shadow hover:shadow-2xl transition-all duration-300 group btn-modern">
                  <Rocket className="w-5 h-5 mr-2" />
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/documentation">
                <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-blue-50 hover:border-blue-300 px-8 py-4 text-lg font-semibold elegant-border">
                  <BookOpen className="w-5 h-5 mr-2" />
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`flex justify-center mb-4 ${
                  stat.color === 'blue' ? 'text-blue-400' :
                  stat.color === 'green' ? 'text-emerald-400' :
                  stat.color === 'yellow' ? 'text-amber-400' : 'text-blue-400'
                }`}>
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-slate-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-gradient mb-6">Our Expertise</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive development solutions designed to transform your business and accelerate growth
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group p-8 rounded-2xl ${getColorClasses(service.color, 'bg')} border ${getColorClasses(service.color, 'border')} card-hover modern-shadow`}
              >
                <div className={`w-16 h-16 ${getColorClasses(service.color, 'icon')} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-slate-500">
                      <CheckCircle className={`w-4 h-4 ${getColorClasses(service.color, 'text')} mr-2`} />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-6 lg:px-8 professional-gradient">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-gradient mb-6">Featured Projects</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover innovative solutions we've built for forward-thinking companies
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border ${getColorClasses(project.color, 'border')} elegant-hover`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 ${getColorClasses(project.color, 'icon')} rounded-xl flex items-center justify-center`}>
                    {project.icon}
                  </div>
                  <span className={`text-xs font-semibold ${getColorClasses(project.color, 'text')} ${getColorClasses(project.color, 'bg')} px-3 py-1 rounded-full`}>
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">{project.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-sm font-medium">
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
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-gradient mb-6">Flagship Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Showcasing our most impactful and innovative solutions across various industries
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {majorProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border ${getColorClasses(project.color, 'border')} elegant-hover`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <span className={`${getColorClasses(project.color, 'bg')} backdrop-blur-sm text-slate-800 px-4 py-2 rounded-full text-sm font-semibold border ${getColorClasses(project.color, 'border')}`}>
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">{project.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-slate-800">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-slate-600">
                          <div className={`w-2 h-2 ${getColorClasses(project.color, 'text').replace('text-', 'bg-')} rounded-full mr-2`}></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-slate-800">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1 border-slate-300 hover:bg-slate-50" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button variant="outline" className="flex-1 border-slate-300 hover:bg-slate-50" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
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
      <section className="py-24 px-6 lg:px-8 professional-gradient">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-gradient mb-6">Client Success Stories</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Hear from industry leaders who have transformed their businesses with our solutions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${getColorClasses(testimonial.color, 'border')} relative elegant-hover`}
              >
                <div className={`absolute top-6 right-6 ${getColorClasses(testimonial.color, 'text')} opacity-20`}>
                  <Quote className="w-8 h-8" />
                </div>
                <div className="flex items-start mb-6">
                  <div className="mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full object-cover border-2 border-slate-200"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{testimonial.name}</h3>
                    <p className="text-slate-600 text-sm">{testimonial.position}</p>
                    <div className="flex mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-slate-900 to-emerald-900/50"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Ready to transform your
              <span className="block bg-gradient-to-r from-blue-400 via-emerald-400 to-amber-400 bg-clip-text text-transparent">
                digital presence?
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              Join hundreds of successful companies who have accelerated their growth with our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group btn-modern">
                  <Rocket className="w-5 h-5 mr-2" />
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/get-started">
                <Button variant="outline" size="lg" className="border-slate-400 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-gradient-blue">Koderupa</span>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed max-w-md">
                Empowering businesses with cutting-edge technology solutions. We create scalable, 
                secure, and beautiful applications that drive growth and innovation.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="border-slate-300 hover:bg-blue-50 hover:border-blue-300">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="border-slate-300 hover:bg-emerald-50 hover:border-emerald-300">
                  <Globe className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Services</h3>
              <ul className="space-y-3 text-slate-600">
                <li><Link href="#" className="hover:text-blue-600 transition-colors">Web Development</Link></li>
                <li><Link href="#" className="hover:text-emerald-600 transition-colors">Mobile Apps</Link></li>
                <li><Link href="#" className="hover:text-amber-600 transition-colors">UI/UX Design</Link></li>
                <li><Link href="#" className="hover:text-blue-600 transition-colors">Cloud Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Company</h3>
              <ul className="space-y-3 text-slate-600">
                <li><Link href="/pricing" className="hover:text-blue-600 transition-colors">Pricing</Link></li>
                <li><Link href="/documentation" className="hover:text-emerald-600 transition-colors">Documentation</Link></li>
                <li><Link href="/get-started" className="hover:text-amber-600 transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 mt-12 pt-8 text-center text-slate-600">
            <p>&copy; 2024 Koderupa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}