"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import confetti from "canvas-confetti";
import { TerminalUi } from "../components/TerminalUi";

export default function Contact() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleClick = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
 
    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;
 
    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();
 
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
 
      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("messages").insert([formData]);

    if (error) {
      console.error("Error submitting message:", error.message);
    } else {
      setSuccess(true);
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    }

    setLoading(false);
    handleClick();

  };

  return (
    <div className="container md:my-[150px]">
      <div className="grid gap-12 md:grid-cols-2 grid-cols-1 items-center">
        <form onSubmit={handleSubmit} className="space-y-4 p-4 rounded-md grid md:gap-4">
          <div>
            <h1 className="font-bold md:text-4xl">さあ、私と共に世界を広きましょう！</h1>
            {/* <p className="md:mt-2 ">さあ、私と共に世界を広きましょう！</p> */}
          </div>
         
         <div className="md:flex gap-4">
            <div>
              <label htmlFor="">First Name</label>
              <input 
                type="text" 
                name="firstName" 
                placeholder="Gosling" 
                value={formData.firstName} 
                onChange={handleChange} 
                required 
                className="w-full border border-stone-400 md:ps-2 md:py-4 rounded mt-2"
              />
            </div>
            <div>
              <label htmlFor="">Last Name</label>
              <input 
                type="text" 
                name="lastName" 
                placeholder="Alex" 
                value={formData.lastName} 
                onChange={handleChange} 
                required 
                className="w-full border border-stone-400 md:ps-2 md:py-4 rounded mt-2"
              />
            </div>
         </div>

          <div className="">
            <label htmlFor="">Email</label>
            <input 
              type="email" 
              name="email" 
              placeholder="alex@gmail.com" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              className="w-full border border-stone-400 md:ps-2 md:py-4 rounded mt-2"
            />
          </div>
          
         <div>
          <label htmlFor="">Message for me </label>
          <textarea 
            name="message" 
            // placeholder="何か私について言い残すこと" 
            value={formData.message} 
            onChange={handleChange} 
            required 
            className="w-full border border-stone-400 md:ps-2 md:py-4 rounded mt-2"
          />
         </div>
          <button 
            type="submit" 
            disabled={loading} 
            className=" bg-stone-900 md:py-2 text-white inline-block disabled:opacity-50"
          >
            {loading ? "送信中..." : "送信"}
          </button>
          {success && <p className="text-blue-600">送信完了しました </p>}
        </form>

        <div className="h-full w-full">
          <TerminalUi/>
        </div>
      </div>
    </div>
  );
}
