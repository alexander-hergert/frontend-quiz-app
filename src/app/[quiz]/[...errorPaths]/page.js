"use client";
import { useRouter } from "next/navigation";

export default function CustomErrorPage() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center gap-8 text-neutral">
      <h1 className="text-2xl">Page not found</h1>
      <p className="text-lg">Please navigate back to home page.</p>
      <button
        onClick={() => {
          router.push("/");
        }}
        className="btn"
      >
        Back to Home
      </button>
    </div>
  );
}
