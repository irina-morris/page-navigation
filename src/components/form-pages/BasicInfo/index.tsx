"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check, X } from "lucide-react";

type AttendanceStatus = "yes" | "no" | null;

interface FormData {
  name: string;
  attendance: AttendanceStatus;
}

export function BasicInfoPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    attendance: null,
  });

  return (
    <div className="min-h-screen bg-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-8">
          <div>
            <label className="text-white text-lg font-medium block mb-2">
              What&apos;s your name?
            </label>
            <Input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="w-full h-12 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-slate-500"
              placeholder="Enter your name"
            />
          </div>

          <div className="space-y-4">
            <label className="text-white text-lg font-medium block mb-2">
              Are you able to attend?
            </label>
            <div className="flex flex-col space-y-3">
              {/* Custom radio-style buttons with icons */}
              <Button
                variant="ghost"
                onClick={() =>
                  setFormData((prev) => ({ ...prev, attendance: "yes" }))
                }
                className={`w-32 h-12 bg-slate-700 text-white hover:bg-slate-600 justify-start text-left border px-3 ${
                  formData.attendance === "yes"
                    ? "border-blue-500"
                    : "border-slate-600"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full border-2 border-white mr-3 flex-shrink-0 flex items-center justify-center ${
                    formData.attendance === "yes"
                      ? "bg-white"
                      : "bg-transparent"
                  }`}
                >
                  {formData.attendance === "yes" && (
                    <div className="w-2 h-2 rounded-full bg-slate-700" />
                  )}
                </div>
                <Check className="mr-2 h-4 w-4 text-green-400 flex-shrink-0" />
                Yes
              </Button>
              <Button
                variant="ghost"
                onClick={() =>
                  setFormData((prev) => ({ ...prev, attendance: "no" }))
                }
                className={`w-32 h-12 bg-slate-700 text-white hover:bg-slate-600 justify-start text-left border px-3 ${
                  formData.attendance === "no"
                    ? "border-blue-500"
                    : "border-slate-600"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full border-2 border-white mr-3 flex-shrink-0 flex items-center justify-center ${
                    formData.attendance === "no" ? "bg-white" : "bg-transparent"
                  }`}
                >
                  {formData.attendance === "no" && (
                    <div className="w-2 h-2 rounded-full bg-slate-700" />
                  )}
                </div>
                <X className="mr-2 h-4 w-4 text-red-400 flex-shrink-0" />
                Nope
              </Button>
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
