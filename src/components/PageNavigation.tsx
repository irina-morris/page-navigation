"use client";

import React, { useState, useCallback } from "react";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  UniqueIdentifier,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  FileText,
  Plus,
  Edit3,
  Copy,
  Files,
  Trash2,
  Flag,
  CircleCheck,
} from "lucide-react";

export interface Page {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface PageNavigationProps {
  pages: Page[];
  activePageId: string;
  onPageChange: (pageId: string) => void;
  onPagesReorder: (pages: Page[]) => void;
  onAddPage: (index: number) => void;
}

interface SortablePageTabProps {
  page: Page;
  isActive: boolean;
  onClick: () => void;
  onContextAction: (
    action: "rename" | "duplicate" | "delete" | "setFirst" | "copy"
  ) => void;
}

function SortablePageTab({
  page,
  isActive,
  onClick,
  onContextAction,
}: SortablePageTabProps): React.JSX.Element {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: page.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleContextAction = useCallback(
    (action: "rename" | "duplicate" | "delete" | "setFirst" | "copy"): void => {
      onContextAction(action);
    },
    [onContextAction]
  );

  const ThreeDotsVertical = () => (
    <div className="flex flex-col items-center justify-center gap-0.5">
      <div className="w-0.5 h-0.5 bg-gray-500 rounded-full"></div>
      <div className="w-0.5 h-0.5 bg-gray-500 rounded-full"></div>
      <div className="w-0.5 h-0.5 bg-gray-500 rounded-full"></div>
    </div>
  );

  const getPageIcon = (pageTitle: string) => {
    switch (pageTitle.toLowerCase()) {
      case "ending":
        return (
          <CircleCheck className="h-5 w-5 transition-colors duration-200" />
        );
      default:
        return <FileText className="h-5 w-5 transition-colors duration-200" />;
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="relative"
      {...attributes}
      {...listeners}
    >
      {isActive ? (
        // Active tab - button opens dropdown menu
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={`
                h-10 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200 flex items-center gap-2 whitespace-nowrap
                bg-white text-gray-900 border border-gray-200 shadow-sm hover:bg-gray-50
                focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1
                ${isDragging ? "cursor-grabbing" : "cursor-grab"}
              `}
            >
              <span className="text-orange-500">{getPageIcon(page.title)}</span>
              <span className="transition-colors duration-200">
                {page.title}
              </span>
              <div className="ml-auto">
                <ThreeDotsVertical />
              </div>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="w-48 p-0 border border-gray-200 shadow-lg rounded-lg"
          >
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <div className="text-gray-900 flex items-center font-medium text-base leading-6 tracking-tight font-[BL_Melody]">
                Settings
              </div>
            </div>
            <div className="p-2">
              <DropdownMenuItem
                onClick={() => handleContextAction("setFirst")}
                className="flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-gray-50 cursor-pointer"
              >
                <Flag className="h-4 w-4 text-blue-600 fill-blue-600" />
                <span className="text-gray-900 font-[Inter] font-medium text-sm leading-4 tracking-tight">
                  Set as first page
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleContextAction("rename")}
                className="flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-gray-50 cursor-pointer"
              >
                <Edit3 className="h-4 w-4 text-gray-500" />
                <span className="text-gray-900 font-[Inter] font-medium text-sm leading-4 tracking-tight">
                  Rename
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleContextAction("copy")}
                className="flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-gray-50 cursor-pointer"
              >
                <Copy className="h-4 w-4 text-gray-500" />
                <span className="text-gray-900 font-[Inter] font-medium text-sm leading-4 tracking-tight">
                  Copy
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleContextAction("duplicate")}
                className="flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-gray-50 cursor-pointer"
              >
                <Files className="h-4 w-4 text-gray-500" />
                <span className="text-gray-900 font-[Inter] font-medium text-sm leading-4 tracking-tight">
                  Duplicate
                </span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="my-2 border-gray-200" />
              <DropdownMenuItem
                onClick={() => handleContextAction("delete")}
                className="flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-red-50 cursor-pointer"
              >
                <Trash2 className="h-4 w-4 text-red-500" />
                <span className="text-red-500 font-[Inter] font-medium text-sm leading-4 tracking-tight">
                  Delete
                </span>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        // Inactive tab - button switches to this page
        <Button
          variant="ghost"
          className={`
            h-10 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200 flex items-center gap-2 whitespace-nowrap
            bg-gray-100 text-gray-600 border border-transparent hover:bg-gray-200 hover:text-gray-600
            focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1
            ${isDragging ? "cursor-grabbing" : "cursor-grab"}
          `}
          onClick={onClick}
        >
          <span className="text-gray-500">{getPageIcon(page.title)}</span>
          <span className="transition-colors duration-200">{page.title}</span>
        </Button>
      )}
    </div>
  );
}

export function PageNavigation({
  pages,
  activePageId,
  onPageChange,
  onPagesReorder,
  onAddPage,
}: PageNavigationProps): React.JSX.Element {
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const handleDragStart = useCallback((event: DragStartEvent): void => {
    setActiveId(event.active.id);
  }, []);

  const handleDragEnd = useCallback(
    (event: DragEndEvent): void => {
      const { active, over } = event;

      if (over && active.id !== over.id) {
        const oldIndex = pages.findIndex((page) => page.id === active.id);
        const newIndex = pages.findIndex((page) => page.id === over.id);

        if (oldIndex !== -1 && newIndex !== -1) {
          const newPages = arrayMove(pages, oldIndex, newIndex);
          onPagesReorder(newPages);
        }
      }

      setActiveId(null);
    },
    [pages, onPagesReorder]
  );

  const handleContextAction = useCallback(
    (action: "rename" | "duplicate" | "delete" | "setFirst" | "copy"): void => {
      console.log(`Context action: ${action}`);
    },
    []
  );

  const handlePageChange = useCallback(
    (pageId: string): void => {
      onPageChange(pageId);
    },
    [onPageChange]
  );

  const handleAddPage = useCallback(
    (index: number): void => {
      onAddPage(index);
    },
    [onAddPage]
  );

  const activePage = pages.find((page) => page.id === activeId);

  return (
    <div className="w-full bg-white border-t border-gray-200">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="flex items-center py-4 px-4 overflow-x-auto">
          <div
            className="flex items-center gap-2 min-w-fit"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <SortableContext
              items={pages.map((page) => page.id)}
              strategy={horizontalListSortingStrategy}
            >
              {pages.map((page, index) => (
                <React.Fragment key={page.id}>
                  <div
                    onMouseEnter={() => setHoveredIndex(index)}
                    className="relative flex items-center"
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`
                        h-10 w-10 p-0 mx-1 rounded-full border border-dashed border-gray-300 
                        hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 bg-white
                        ${
                          hoveredIndex === index
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-90"
                        }
                      `}
                      onClick={() => handleAddPage(index)}
                    >
                      <Plus className="h-4 w-4 text-gray-500 hover:text-blue-600" />
                    </Button>
                  </div>

                  <SortablePageTab
                    page={page}
                    isActive={page.id === activePageId}
                    onClick={() => handlePageChange(page.id)}
                    onContextAction={handleContextAction}
                  />
                </React.Fragment>
              ))}

              <div
                onMouseEnter={() => setHoveredIndex(pages.length)}
                className="relative flex items-center"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className={`
                    h-10 w-10 p-0 mx-1 rounded-full border border-dashed border-gray-300 
                    hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 bg-white
                    ${
                      hoveredIndex === pages.length
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-90"
                    }
                  `}
                  onClick={() => handleAddPage(pages.length)}
                >
                  <Plus className="h-4 w-4 text-gray-500 hover:text-blue-600" />
                </Button>
              </div>
            </SortableContext>

            <Button
              variant="outline"
              size="sm"
              className="ml-2 h-10 px-3 bg-white border-gray-200 hover:bg-gray-50 text-gray-700 whitespace-nowrap flex-shrink-0"
              onClick={() => handleAddPage(pages.length)}
            >
              <Plus className="h-4 w-4 mr-1" />
              Add page
            </Button>
          </div>
        </div>

        <DragOverlay>
          {activePage && (
            <Button
              variant="ghost"
              className="h-10 px-3 py-2 rounded-lg font-medium text-sm bg-blue-100 text-blue-700 border border-blue-200 shadow-lg cursor-grabbing flex items-center gap-2"
            >
              <FileText className="h-4 w-4" />
              {activePage.title}
            </Button>
          )}
        </DragOverlay>
      </DndContext>
    </div>
  );
}
