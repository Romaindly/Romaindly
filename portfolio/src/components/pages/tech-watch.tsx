import {GPTReports} from "@/config/reports-config";
import {InteractionCard} from "@/components/interaction-card";
import * as React from "react";
import {FileX} from "lucide-react";
import {siteConfig} from "@/config/site-config";

export function TechWatch() {
  return (
    <section className="grid gap-4 mb-10" id="tech-watch">
      <h2 className="text-lg font-bold">
        Ma veille technologique
      </h2>
        <center>
            <h3>
            IA dans la santé : diagnostics, personnalisation et traitements
            </h3>
        </center>
      <p className="text-sm text-muted-foreground border-2 rounded-2xl p-8">
        {siteConfig.veille_technologique}
      </p>
      <div className="border border-dashed rounded-2xl p-6 lg:p-12">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {GPTReports.length === 0 && (
            <div
              className="max-lg:border-2 rounded-2xl p-4 max-lg:border-dashed flex flex-col h-80 items-center justify-center gap-2 col-span-full">
              <FileX className="size-10 text-muted-foreground"/>
              <h2 className="font-bold">Aucun rapport de veille</h2>
              <p className="text-sm text-muted-foreground w-[90%] text-center">
                Ceci est peut-être une erreur, veuillez réessayer plus tard.
              </p>
            </div>
          )}
          {GPTReports.map((report, index) => (
            <InteractionCard key={index} {...report} />
          ))}
        </div>
      </div>
    </section>
  )
}