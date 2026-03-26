import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">

      <h1 className="text-5xl font-bold mb-4">
        Used Car Price Predictor 🚗
      </h1>

      <p className="text-lg mb-8">
        Predict resale value using Machine Learning
      </p>

      <Link href="/predict">
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Start Prediction
        </button>
      </Link>

    </div>
  );
}