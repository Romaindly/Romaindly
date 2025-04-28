import Link from "next/link";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import {TimelineCard} from "@/components/timeline-card";
import {Avatar, AvatarImage} from "@radix-ui/react-avatar";
import {EDUCATION_CONFIG, EXPERIENCE_CONFIG, siteConfig, SOCIAL_LINKS} from "@/config/site-config";
import Image from "next/image";

import {AvatarFallback} from "@/components/ui/avatar";

export function ProfileSection() {
  return (
    <section className="grid gap-4" id="about">
      <Image src="/test.png" alt="Random" className="h-60 border-b-2 w-full" height={240} width={1000} objectFit="cover" priority />
      <div className="container max-w-6xl">
        <Avatar>
          <AvatarImage
            src={siteConfig.profile.avatar} alt={siteConfig.profile.position}
            className="rounded-full max-sm:size-36 size-40 border-2 max-sm:-mt-20 -mt-24 bg-white ring ring-muted"
          />
          <AvatarFallback className="rounded-full max-sm:size-36 size-40 border-2 max-sm:-mt-20 -mt-24 bg-white ring ring-muted">
            <p className="text-2xl/7 font-bold">{siteConfig.profile.name.charAt(0)}</p>
          </AvatarFallback>
        </Avatar>
        <section className="flex max-lg:flex-col lg:items-start gap-8 lg:gap-16 mt-8">
          <div className="lg:max-w-2xl">
            <h1 className="text-3xl font-bold">{siteConfig.profile.name}</h1>
            <p className="text-muted-foreground mt-1.5">{siteConfig.profile.position}</p>
            <p className="mt-6">
              {siteConfig.profile.description}
            </p>
          </div>
          <div>
            <h3 className="text-muted-foreground mb-4">Liens sociaux</h3>
            <section className="flex flex-col gap-2">

              {SOCIAL_LINKS.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 text-sm hover:underline hover:underline-offset-2"
                >
                  <link.icon className="size-5"/>
                  <p>{link.name}</p>
                </Link>
              ))}
            </section>
            <Link
              href={siteConfig.profile.resume} download
              className={cn(buttonVariants({size: "sm"}), "py-0.5 w-full mt-6 max-lg:hidden")}
            >
              <span>Télécharger CV</span>
            </Link>
          </div>
        </section>
        <section className="mt-16 flex max-lg:flex-col gap-6">
          <div className="lg:w-1/2">
            <h2 className="text-lg font-bold mb-4">
              Formations
            </h2>
            <div className="grid space-y-4">
              {EDUCATION_CONFIG.map((card, index) => (
                <TimelineCard key={index} {...card} />
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-lg font-bold mb-4">
              Experiences
            </h2>
            <div className="grid space-y-4">
              {EXPERIENCE_CONFIG.map((card, index) => (
                <TimelineCard key={index} {...card} />
              ))}
            </div>
          </div>
        </section>
        <section className="mt-16 gap-6">
          <h2 className="text-lg font-bold mb-4">
            Mon projet professionnel
          </h2>
          <div className="text-sm text-muted-foreground border-2 rounded-2xl p-8">
            {siteConfig.professional_project}
          </div>
        </section>
      </div>
    </section>
  )
}
