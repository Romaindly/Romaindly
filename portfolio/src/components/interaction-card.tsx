import Link from "next/link";
import {FileText, Award, Globe, InfinityIcon} from "lucide-react";
import * as React from "react";
import {cva, type VariantProps} from "class-variance-authority";

const cardVariants = cva(
  "flex items-center rounded-xl border-2 bg-background px-4 py-3 transition gap-2.5 hover:bg-muted/40",
  {
    variants: {
      variant: {
        document: "",
        certificate: "",
        website: "",
        loop: "",
      },
    },
    defaultVariants: {
      variant: "document",
    },
  }
);

const iconVariants = cva(
  "border-2 size-10 rounded-lg p-2 flex items-center justify-center",
  {
    variants: {
      variant: {
        document: "",
        certificate: "",
        website: "",
        loop: "",
      },
    },
    defaultVariants: {
      variant: "document",
    },
  }
);

export type InteractionCardProps = VariantProps<typeof cardVariants> & {
  path: string;
  title: string;
  description?: string;
  isExternalLink?: boolean;
  isDownloadable?: boolean;
};

export function InteractionCard({
                                  path,
                                  title,
                                  description,
                                  isExternalLink,
                                  isDownloadable,
                                  variant = "document",
                                }: InteractionCardProps) {
  const IconComponent = React.useMemo(() => {
    switch (variant) {
      case "certificate":
        return Award;
      case "website":
        return Globe;
        case "loop":
          return InfinityIcon
      default:
        return FileText;
    }
  }, [variant]);

  return (
    <Link
      href={path}
      target={isExternalLink ? "_blank" : "_self"}
      download={isDownloadable}
      className={cardVariants({variant})}
    >
      <div className={iconVariants({variant})}>
        <IconComponent className="size-5"/>
      </div>
      <div>
        <p className="text-sm font-medium transition line-clamp-1 text-left">{title}</p>
        <p className="text-xs text-muted-foreground line-clamp-1 text-left">
          {description}
        </p>
      </div>
    </Link>
  );
}