type Props = {
  price: number;
};

export default function PredictionResult({ price }: Props) {
  return (
    <div className="mt-6 text-xl font-bold text-green-600">
      Predicted Price: ₹ {price}
    </div>
  );
}