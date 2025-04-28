import * as React from "react";
import {Briefcase, GraduationCap} from "lucide-react";

export type TimelineCardProps = {
  label: string;
  location: string;
  duration: string;
  variant: "experience" | "education";
};

export function TimelineCard({label, location, duration, variant}: TimelineCardProps) {
  return (
    <section className="rounded-xl p-4 border-2 flex items-center gap-4 bg-background">
      <div className="border-2 rounded-lg h-10 w-14 flex items-center justify-center">
        {variant === "experience" ? (
          <Briefcase className="size-5"/>
        ) : (
          <GraduationCap className="size-5"/>
        )}
      </div>
      <section className="lg:flex items-center justify-between w-full">
        <div className="justify-start">
          <h1 className="font-bold flex items-center gap-2">{label}</h1>
          <p className="text-muted-foreground text-xs">{location}</p>
        </div>
        <div className="max-sm:text-xs text-sm text-muted-foreground font-medium">
          {duration}
        </div>
      </section>
    </section>
  );
}
