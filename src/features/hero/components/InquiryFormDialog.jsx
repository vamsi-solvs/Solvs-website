"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function InquiryFormDialog({ buttonLabel = "PROJECT INQUIRY" }) {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    alert("Form submitted! (Integrate EmailJS or Formspree here)");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="bg-white text-black text-sm md:text-base font-medium px-6 py-3 rounded-md hover:bg-white/90 transition"
        >
          {buttonLabel}
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Project Inquiry</DialogTitle>
        </DialogHeader>

        <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <Input type="tel" placeholder="Phone Number" />
          <Textarea placeholder="Tell us about your project..." rows={4} />

          <DialogFooter>
            <Button type="submit" className="w-full">
              Send Inquiry
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}