import { ReactNode } from "react";

export interface Anchor {
  href: string;
  icon: ReactNode;
  parentClassNames: string;
}

export interface Anchors {
  anchors: Anchor[]
}

export interface Card {
  className?: string;
  centerText?: boolean;
  title?: string;
  subtitle?: string;
  href?: string;
}