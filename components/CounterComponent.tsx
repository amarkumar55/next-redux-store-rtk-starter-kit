"use client";

import { useAppSelector, useAppDispatch } from "../hooks/reduxHooks";
import { increment, decrement } from "../store/slices/counterSlice";

export default function CounterComponent() {
  const count = useAppSelector((s) => s.counter.value);
  const dispatch = useAppDispatch();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">
        Next.js 15 + Redux Toolkit + Tailwind v4
      </h1>
      <p className="text-2xl">Count: {count}</p>
      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded-lg"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </main>
  );
}
