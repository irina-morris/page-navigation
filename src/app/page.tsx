"use client";

import { useState, useCallback } from "react";
import { PageNavigation, type Page } from "@/components/PageNavigation";
import { BasicInfoPage } from "@/components/form-pages/BasicInfo";
import { DetailsPage } from "@/components/form-pages/Details";
import { OtherPage } from "@/components/form-pages/Other";
import { EndingPage } from "@/components/form-pages/Ending";

export default function Home() {
  const [pages, setPages] = useState<Page[]>([
    {
      id: "info",
      title: "Info",
      content: <BasicInfoPage />,
    },
    {
      id: "details",
      title: "Details",
      content: <DetailsPage />,
    },
    {
      id: "other",
      title: "Other",
      content: <OtherPage />,
    },
    {
      id: "ending",
      title: "Ending",
      content: <EndingPage />,
    },
  ]);

  const [activePageId, setActivePageId] = useState("info");

  const handlePageChange = useCallback((pageId: string) => {
    setActivePageId(pageId);
  }, []);

  const handlePagesReorder = useCallback((newPages: Page[]) => {
    setPages(newPages);
  }, []);

  const handleAddPage = useCallback((index: number) => {
    const newPage: Page = {
      id: `new-page-${Date.now()}`,
      title: "New Page",
      content: (
        <div className="min-h-screen bg-slate-800 flex items-center justify-center p-4">
          <div className="w-full max-w-md space-y-8">
            <div className="space-y-6 text-center">
              <h2 className="text-white text-2xl font-bold">New Page</h2>
              <p className="text-slate-400 text-lg">
                This is a new page that was added dynamically.
              </p>
            </div>
          </div>
        </div>
      ),
    };

    setPages((prev) => {
      const newPages = [...prev];
      newPages.splice(index, 0, newPage);
      return newPages;
    });
  }, []);

  const activePage = pages.find((page) => page.id === activePageId);

  // Fallback content if no active page is found
  const activeContent = activePage?.content ?? (
    <div className="min-h-screen bg-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6 text-center">
        <h2 className="text-white text-2xl font-bold">Page Not Found</h2>
        <p className="text-slate-400">The requested page could not be found.</p>
      </div>
    </div>
  );

  return (
    <div className="h-screen bg-slate-800 flex flex-col">
      {/* Page Content */}
      <div className="flex-1 overflow-auto">{activeContent}</div>

      {/* Navigation - Fixed at bottom */}
      <div className="shrink-0">
        <PageNavigation
          pages={pages}
          activePageId={activePageId}
          onPageChange={handlePageChange}
          onPagesReorder={handlePagesReorder}
          onAddPage={handleAddPage}
        />
      </div>
    </div>
  );
}
