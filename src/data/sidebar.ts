import { IPage, ISidebarContent } from "../types";

const makePage = (
  title: string,
  category?: string,
  tags?: string[],
  slug?: string,
): IPage => ({
  title,
  tags,
  category,
  slug:
    slug ??
    `/${category != null ? category + "/" : ""}${title
      .toLowerCase()
      .replace(/\s+/g, "-")}`,
});

export const sidebarContent: ISidebarContent = [
  // The goal is to have the docs be in a narrative structure
  {
    title: "",
    pages: [
      makePage("Introduction", undefined, ["home", "dockoo", "index"], "/"),
      makePage("Getting Started", undefined, [
        "introduction",
        "tutorial",
        "getting started",
      ]),
    ],
  },
  // {
  //   title: "Group Title",
  //   pages: [
  //     makePage("Title", "category", ["tag"]),
  //   ],
  // },
];
