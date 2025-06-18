"use client";

import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";

export function EndingPage() {
  return (
    <div className="min-h-screen bg-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-6 text-center">
          <div className="flex justify-center">
            <CircleCheck className="h-16 w-16 text-green-400" />
          </div>
          <h2 className="text-white text-2xl font-bold">All Done!</h2>
          <p className="text-slate-400 text-lg">
            Thank you for completing the form. We&apos;ve received all your
            information and will be in touch soon.
          </p>
          <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-medium px-6 py-2">
            Start Over
          </Button>
        </div>
      </div>
    </div>
  );
}
