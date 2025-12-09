"use client";

import { useState } from "react";
import { manrope } from "@/lib/fonts";

export default function NewsLetter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email.trim() === "") {
      setError("Email cannot be empty");
      return;
    }

    setError("");
    alert("Email was sent!");
    setEmail("");
  };

  return (
    <div className="bg-[#131313] p-3.5 flex-1 rounded-[10px] -mt-2 h-fit min-w-60">
      <p className="font-semibold text-[16px] lg:text-[18px] mb-[23px] lg:mb-[29px]">Join Our Newsletter</p>

      <form onSubmit={handleSubmit} className="mb-[19px]">
        <div className="flex justify-between w-full h-[39px] rounded-sm">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
            placeholder="Your email address"
            className="h-full w-full bg-[#1e1e1e] text-[11px] text-[#616161] pl-2.5 rounded-l-sm outline-none"
          />

          <button
            type="submit"
            className="bg-black font-medium text-xs px-[22px] rounded-r-sm"
          >
            Subscribe
          </button>
        </div>

        {error && (
          <p className="text-red-500 text-[12px] mt-1 pl-1">{error}</p>
        )}
      </form>

      <p className={`${manrope.className} font-medium text-[13px] text-[rgba(255,255,255,0.5)] p-0 lg:p-2.5`}>
        * Will send you weekly updates for your better tool management.
      </p>
    </div>
  );
}