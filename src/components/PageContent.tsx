"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight, Check, X } from "lucide-react";

export function BasicInfoPage(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-8">
          <div>
            <label className="text-white text-lg font-medium block mb-2">
              What&apos;s your name? <span className="text-red-400">*</span>
            </label>
            <Input
              type="text"
              className="w-full h-12 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-slate-500"
              placeholder=""
            />
          </div>

          <div className="space-y-4">
            <label className="text-white text-lg font-medium block mb-2">
              Are you able to attend? <span className="text-red-400">*</span>
            </label>
            <div className="flex flex-col space-y-3">
              <Button
                variant="ghost"
                className="w-32 h-12 bg-slate-700 text-white hover:bg-slate-600 justify-start text-left border border-slate-600 px-3"
              >
                <div className="w-4 h-4 rounded-full border-2 border-white bg-transparent mr-3 flex-shrink-0"></div>
                <Check className="mr-2 h-4 w-4 text-green-400 flex-shrink-0" />
                Yes
              </Button>
              <Button
                variant="ghost"
                className="w-32 h-12 bg-slate-700 text-white hover:bg-slate-600 justify-start text-left border border-slate-600 px-3"
              >
                <div className="w-4 h-4 rounded-full border-2 border-white bg-transparent mr-3 flex-shrink-0"></div>
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

export function ContactInfoPage(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-white text-lg font-medium">
              What&apos;s your email address?{" "}
              <span className="text-red-400">*</span>
            </label>
            <p className="text-slate-400 text-sm">
              We&apos;ll send you birthday updates here!
            </p>
          </div>

          <div className="relative">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
            <Input
              type="email"
              className="w-full h-12 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-slate-500 pl-12"
              placeholder=""
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
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

export function GuestsPage(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-white text-lg font-medium">
              How many guests will you bring?{" "}
              <span className="text-red-400">*</span>
            </label>
            <p className="text-slate-400 text-sm">Including yourself</p>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((num: number) => (
              <Button
                key={num}
                variant="ghost"
                className="h-12 bg-slate-700 text-white hover:bg-slate-600 border border-slate-600"
              >
                {num}
              </Button>
            ))}
          </div>

          <Button className="w-auto bg-amber-500 hover:bg-amber-600 text-slate-900 font-medium px-6 py-2">
            Next <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export function EndingPage(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-6 text-center">
          <div className="space-y-2">
            <h2 className="text-white text-2xl font-bold">Thank you!</h2>
            <p className="text-slate-400 text-lg">
              We&apos;ve received your information and will be in touch soon.
            </p>
          </div>

          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
            <Check className="h-8 w-8 text-white" />
          </div>

          <Button className="w-auto bg-amber-500 hover:bg-amber-600 text-slate-900 font-medium px-6 py-2">
            Done
          </Button>
        </div>
      </div>
    </div>
  );
}

export function DetailsPage(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-white text-lg font-medium">
              Tell us more about yourself
            </label>
            <p className="text-slate-400 text-sm">
              Any dietary restrictions or special requests?
            </p>
          </div>

          <textarea
            className="w-full h-32 bg-slate-700 border border-slate-600 text-white placeholder:text-slate-400 focus:border-slate-500 rounded-lg p-4 resize-none"
            placeholder="Type your message here..."
          />

          <Button className="w-auto bg-amber-500 hover:bg-amber-600 text-slate-900 font-medium px-6 py-2">
            Next <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export function OtherPage(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-white text-lg font-medium">
              Anything else?
            </label>
            <p className="text-slate-400 text-sm">
              Last chance to add any additional information
            </p>
          </div>

          <div className="space-y-4">
            <Input
              type="text"
              className="w-full h-12 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-slate-500"
              placeholder="Additional notes..."
            />

            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="newsletter"
                className="w-4 h-4 text-amber-500 bg-slate-700 border-slate-600 rounded focus:ring-amber-500"
              />
              <label htmlFor="newsletter" className="text-slate-300 text-sm">
                Subscribe to our newsletter
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
