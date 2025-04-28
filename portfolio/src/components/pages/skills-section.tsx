import * as React from "react";
import {FileX} from "lucide-react";
import {InteractionCard, InteractionCardProps} from "@/components/interaction-card";
import {ExamSkills} from "@/config/exams-config";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Badge} from "@/components/ui/badge";

export function SkillsSection() {
  return (
    <div className="grid gap-4" id="skills">
      <h2 className="text-lg font-bold">
        Mes compétences
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ExamSkills.map((skill, index) => (
          <EvidenceCard key={index} {...skill} />
        ))}
      </div>
    </div>
  )
}

export type EvidenceProps = {
  code: string
  title: string
  description: string
  documents: InteractionCardProps[]
}

function EvidenceCard({code, title, description, documents}: EvidenceProps) {
  return (
    <Sheet>
      <SheetTrigger className="text-left">
        <section className="border-2 rounded-xl p-4 hover:bg-muted/40">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-bold line-clamp-1">
              {code}
            </h3>
            <p className="text-sm text-muted-foreground pt-2 line-clamp-3">
              {description}
            </p>
          </div>
        </section>
      </SheetTrigger>
      <SheetContent className="max-md:w-screen max-w-screen-md overflow-y-auto">
        <SheetHeader className="border-b mb-8">
          <div className="space-y-4 mt-4 mb-8 text-left">
            <Badge variant="outline">{code}</Badge>
            <SheetTitle className="text-left">{title}</SheetTitle>
            <SheetDescription className="text-left text-sm">
              {description}
            </SheetDescription>
          </div>
        </SheetHeader>
        <section className="space-y-4">
          <h2 className="text-lg font-medium">
            Ressources annexes
          </h2>
          <div className="grid gap-4">
            {documents.length === 0 && (
              <div className="border-2 rounded-2xl p-4 border-dashed flex flex-col h-96
              items-center justify-center gap-2">
                <FileX className="size-10 text-muted-foreground"/>
                <h2 className="font-bold">Aucun document trouvé</h2>
                <p className="text-sm text-muted-foreground w-[90%] text-center">
                  Ceci est peut-être une erreur, veuillez réessayer plus tard.
                </p>
              </div>
            )}
            {documents.map((document, index) => (
              <InteractionCard key={index} {...document}  />
            ))}
          </div>
        </section>
      </SheetContent>
    </Sheet>
  )
}
