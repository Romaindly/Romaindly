import React from "react";
import {SkillsSection} from "@/components/pages/skills-section";
import {ExamsSection} from "@/components/pages/exams-section";
import {TechWatch} from "@/components/pages/tech-watch";
import {ProfileSection} from "@/components/pages/profile-section";

export default function Home() {
  return (
    <>
      <ProfileSection />
      <div className="container max-w-6xl mt-10 space-y-16 mb-20">
        <SkillsSection />
        <TechWatch />
        <ExamsSection />
      </div>
    </>
  );
}
