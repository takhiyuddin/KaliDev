"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GetStarted() {
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
          className="max-w-2xl"
        >
          <h1 className="text-4xl font-bold mb-8">Get Started with KaliDev</h1>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Create an Account</h2>
              <p className="text-gray-600 mb-4">
                Join KaliDev to start building your next project with our powerful platform.
              </p>
              <Button size="lg">Sign Up Now</Button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Already have an account?</h2>
              <p className="text-gray-600 mb-4">
                Sign in to access your projects and continue building.
              </p>
              <Button size="lg" variant="outline">Sign In</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}