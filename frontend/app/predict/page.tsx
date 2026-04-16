import PredictionForm from "@/components/PredictionForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Predict Car Price — CarDealDekho",
  description:
    "Enter your used car details and get an instant AI-powered price prediction. Supports 43+ brands with 95% accuracy.",
};

export default function PredictPage() {
  return <PredictionForm />;
}