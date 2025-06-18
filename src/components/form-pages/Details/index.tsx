"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight } from "lucide-react";

interface ContactFormData {
  email: string;
  phone: string;
  company: string;
}

export function DetailsPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    email: "",
    phone: "",
    company: "",
  });

  return (
    <div className="min-h-screen bg-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-white text-2xl font-bold">Contact Details</h2>
            <p className="text-slate-400">
              We&apos;ll use this information to keep you updated.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-white text-lg font-medium block mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="w-full h-12 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-slate-500 pl-12"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="text-white text-lg font-medium block mb-2">
                Phone Number
              </label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, phone: e.target.value }))
                }
                className="w-full h-12 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-slate-500"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="text-white text-lg font-medium block mb-2">
                Company (Optional)
              </label>
              <Input
                type="text"
                value={formData.company}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, company: e.target.value }))
                }
                className="w-full h-12 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-slate-500"
                placeholder="Enter your company name"
              />
            </div>
          </div>

          <Button className="w-auto bg-amber-500 hover:bg-amber-600 text-slate-900 font-medium px-6 py-2">
            Next <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
