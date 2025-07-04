import type { AppData } from "./appDataType";

export type Card = {
  id: number;
  title?: string;
  subtitle?: string;
  description?: string;
  ctaButtonLabel?: string;
  imageUrl?: string;
};

export type ModalState = {
  isOpen: boolean;
  card: Card | null;
  section?: keyof AppData;
};

export type CardFormData = Omit<Card, "id">;

export type CardVariant = "long" | "wide" | "wide-reversed" | "square";
