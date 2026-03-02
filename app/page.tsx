"use client";
import { useState } from "react";


export default function Home() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("/api/leads", {
      method: "POST",
      body: JSON.stringify(form),
    });
    alert("Lead submitted!");
    setForm({ name: "", email: "", phone: "" });
  }

  return (
    <main className="min-h-screen flex flex-col items-center p-10">
      <h1 className="text-3xl font-bold mb-4">
        Luxury 2 Bedroom Apartment – London
      </h1>

      <p className="mb-6">£450,000 | Central London | Modern Finish</p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-md"
      >
        <input
          placeholder="Name"
          className="border p-2"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Email"
          className="border p-2"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          placeholder="Phone"
          className="border p-2"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <button className="bg-black text-white p-2">
          Request Details
        </button>
      </form>
    </main>
  );
}
