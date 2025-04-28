import {FileX, Timer} from "lucide-react";
import * as React from "react";
import {InteractionCard, InteractionCardProps} from "@/components/interaction-card";
import {ExamsConfig} from "@/config/exams-config";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";

export function ExamsSection() {
  return (
    <section className="grid gap-4">
      <h2 className="text-lg font-bold">
        Mes épreuves en BTS SIO
      </h2>
      <div className={"grid lg:grid-cols-3 gap-6"}>
        {ExamsConfig.map((exam, index) => (
          <ExamCard key={index} {...exam} />
        ))}
      </div>
    </section>
  )
}

export type ExamCardProps = {
  duration: string
  title: string
  description: string
  documents: InteractionCardProps[]
}

function ExamCard({duration, title, description, documents}: ExamCardProps) {
  return (
    <Sheet>
      <SheetTrigger className="text-left">
        <article className="border rounded-xl p-4 hover:bg-muted/40">
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="flex items-center text-sm text-primary mb-2">
              <Timer className="size-4 mr-1.5"/>
              <p className="font-medium">{duration}</p>
            </div>
            <h3 className="text-lg font-bold">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground pt-2">{description}</p>
          </div>
        </article>
      </SheetTrigger>
      <SheetContent className="max-md:w-screen max-w-screen-md overflow-y-auto">
        <SheetHeader className="border-b mb-8">
          <div className="space-y-4 mt-4 mb-8">
            <SheetTitle className="text-left">{title}</SheetTitle>
            <SheetDescription className="text-left">
              {description}
            </SheetDescription>
          </div>
        </SheetHeader>
        <section className="space-y-4">
          <h2 className="text-lg font-bold">
            Ressources annexes
          </h2>
          <div className="grid gap-4">
            {documents.length === 0 && (
              <div
                className="border-2 rounded-2xl p-4 border-dashed flex flex-col h-96 items-center justify-center gap-2">
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
