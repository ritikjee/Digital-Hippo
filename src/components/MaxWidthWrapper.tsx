import { cn } from "@/lib/utils"
import { ReactNode } from "react"

function MaxWidthWrapper({
  children,
  className
}:{
  children: ReactNode,
  className?: string

}) {
  return (
    <div className={cn("mx-auto w-full font-sans max-w-screen-xl px-2.5 md:px-20",className)}>
        {children}
    </div>
  )
}

export default MaxWidthWrapper