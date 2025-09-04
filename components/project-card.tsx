"use client"

import { cn } from "@/lib/utils"

type ProjectCardProps = {
  title: string
  categories: string[]
  imgSrc: string
  className?: string
}

export function ProjectCard({ title, categories, imgSrc, className }: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-md border border-neutral-800 bg-neutral-950",
        "transition-transform duration-300 hover:-translate-y-0.5 select-none",
        className,
      )}
    >
      <img
        src={imgSrc || "/placeholder.svg"}
        alt={title}
        className="h-full w-full object-cover opacity-95 transition-opacity duration-300 group-hover:opacity-100 select-none"
        draggable={false}
        crossOrigin="anonymous"
      />

      {/* <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-black/0 opacity-0 transition-opacity duration-300",
          "group-hover:bg-black/50 group-hover:opacity-100",
        )}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="flex items-end justify-between gap-2">
          <div>
            <h3 className="text-pretty text-[15px] font-semibold leading-tight text-white">{title}</h3>
            <div className="mt-1 flex flex-wrap gap-1.5">
              {categories.map((c) => (
                <span key={c} className="text-[11px] uppercase tracking-wide text-neutral-300">
                  {c}
                </span>
              ))}
            </div>
          </div>
          <span className="rounded-full border border-neutral-700 bg-neutral-900/70 px-2 py-0.5 text-[10px] text-neutral-300">
            View
          </span>
        </div>
      </div> */}

      {/* subtle brutalist dots */}
      <span className="pointer-events-none absolute left-2 top-2 block h-1 w-1 rounded-full bg-cyan-400" />
      <span className="pointer-events-none absolute bottom-2 right-2 block h-1 w-1 rounded-full bg-neutral-600" />
    </div>
  )
}
