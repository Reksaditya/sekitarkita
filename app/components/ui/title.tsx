import * as React from "react"
import { cn } from "~/lib/utils"

function Title({ className, title, ...props }: React.ComponentProps<"title">) {
  return (
    <div 
      className={cn(
        "flex items-center justify-center w-full my-8",
        className,
      )}
    >
      <div className="grow h-2 bg-primary max-w-96 rounded-full" />
      <h2 className="mx-4 text-6xl font-bold italic">{title}</h2>
      <div className="grow h-2 bg-primary max-w-96 rounded-full" />
    </div>
  )
}

export { Title }