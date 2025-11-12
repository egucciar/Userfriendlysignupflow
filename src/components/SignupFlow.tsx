import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageCarousel } from "./ImageCarousel";
import { SignupForm } from "./SignupForm";

export function SignupFlow() {
  return (
    <div className="flex min-h-screen">
      {/* Left Panel - Visual Storytelling */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 relative overflow-hidden">
        <ImageCarousel />
      </div>

      {/* Right Panel - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <SignupForm />
      </div>
    </div>
  );
}
