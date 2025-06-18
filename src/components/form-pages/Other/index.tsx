"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

interface AdditionalInfoFormData {
  guests: number;
  dietaryRestrictions: string;
  specialRequests: string;
  newsletter: boolean;
}

export function OtherPage() {
  const [formData, setFormData] = useState<AdditionalInfoFormData>({
    guests: 1,
    dietaryRestrictions: "",
    specialRequests: "",
    newsletter: false,
  });

  return (
    <div className="min-h-screen bg-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-white text-2xl font-bold">Additional Info</h2>
            <p className="text-slate-400">Help us prepare for your visit.</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-white text-lg font-medium block mb-2">
                Number of Guests
              </label>
              <p className="text-slate-400 text-sm mb-2">
                Including yourself in the total count
              </p>
              <Input
                type="number"
                min="1"
                max="10"
                value={formData.guests}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    guests: parseInt(e.target.value) || 1,
                  }))
                }
                className="w-full h-12 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-slate-500"
              />
            </div>

            <div>
              <label className="text-white text-lg font-medium block mb-2">
                Dietary Restrictions
              </label>
              <Input
                type="text"
                value={formData.dietaryRestrictions}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    dietaryRestrictions: e.target.value,
                  }))
                }
                className="w-full h-12 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-slate-500"
                placeholder="e.g., Vegetarian, Gluten-free, None"
              />
            </div>

            <div>
              <label className="text-white text-lg font-medium block mb-2">
                Special Requests
              </label>
              <textarea
                value={formData.specialRequests}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    specialRequests: e.target.value,
                  }))
                }
                className="w-full h-24 bg-slate-700 border border-slate-600 text-white placeholder:text-slate-400 focus:border-slate-500 rounded-lg p-4 resize-none"
                placeholder="Any special accommodations or requests..."
              />
            </div>

            {/* Simple checkbox for newsletter signup */}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="newsletter"
                checked={formData.newsletter}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    newsletter: e.target.checked,
                  }))
                }
                className="w-4 h-4 text-amber-500 bg-slate-700 border-slate-600 rounded focus:ring-amber-500"
              />
              <label htmlFor="newsletter" className="text-slate-300 text-sm">
                Subscribe to our newsletter for updates
              </label>
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
