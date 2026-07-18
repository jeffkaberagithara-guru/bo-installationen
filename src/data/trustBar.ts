export interface TrustItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export const trustData: TrustItem[] = [
  {
    id: "years",
    value: 15,
    suffix: "+",
    label: "Jahre Erfahrung",
    icon: "award",
  },
  {
    id: "projects",
    value: 500,
    suffix: "+",
    label: "Projekte realisiert",
    icon: "briefcase",
  },
  {
    id: "rating",
    value: 4.9,
    suffix: "/5",
    label: "Bewertungen",
    icon: "star",
  },
];
