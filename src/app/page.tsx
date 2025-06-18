"use client";

import React, { useState } from "react";
import { PageNavigation, Page } from "@/components/PageNavigation";
import {
  BasicInfoPage,
  DetailsPage,
  OtherPage,
  EndingPage,
} from "@/components/PageContent";

export default function Home(): React.JSX.Element {
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

  const [activePageId, setActivePageId] = useState<string>("info");

  const handlePageChange = (pageId: string): void => {
    setActivePageId(pageId);
  };

  const handlePagesReorder = (newPages: Page[]): void => {
    setPages(newPages);
  };

  const handleAddPage = (index: number): void => {
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

    const newPages = [...pages];
    newPages.splice(index, 0, newPage);
    setPages(newPages);
  };

  const activePage = pages.find((page) => page.id === activePageId);

  return (
    <div className="h-screen bg-slate-800 flex flex-col">
      {/* Page Content */}
      <div className="flex-1 overflow-auto">{activePage?.content}</div>

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
