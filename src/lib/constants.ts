// Page types and configurations
export const PAGE_TYPES = {
  INFO: "info",
  DETAILS: "details",
  OTHER: "other",
  ENDING: "ending",
} as const;

export const PAGE_TITLES = {
  [PAGE_TYPES.INFO]: "Info",
  [PAGE_TYPES.DETAILS]: "Details",
  [PAGE_TYPES.OTHER]: "Other",
  [PAGE_TYPES.ENDING]: "Ending",
} as const;

// Context menu actions
export const CONTEXT_ACTIONS = {
  SET_FIRST: "setFirst",
  RENAME: "rename",
  COPY: "copy",
  DUPLICATE: "duplicate",
  DELETE: "delete",
} as const;

// UI Constants
export const UI_CONSTANTS = {
  DRAG_ACTIVATION_DISTANCE: 8,
  ICON_SIZE: {
    SMALL: "h-4 w-4",
    MEDIUM: "h-5 w-5",
    LARGE: "h-8 w-8",
  },
  BUTTON_HEIGHT: "h-10",
  INPUT_HEIGHT: "h-12",
} as const;

export type PageType = (typeof PAGE_TYPES)[keyof typeof PAGE_TYPES];
export type ContextAction =
  (typeof CONTEXT_ACTIONS)[keyof typeof CONTEXT_ACTIONS];
