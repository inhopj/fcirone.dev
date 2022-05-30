import { ReactNode } from "react";

export interface Anchor {
  href: string;
  icon: ReactNode;
  parentClassNames: string;
}

export interface Anchors {
  anchors: Anchor[]
}