import React from "react"
interface ButtonProps {
  [propName: string]: unknown
  children: React.ReactNode
  onClick?: () => void
  type?: "primary" | "text" | "outline"
  addClassName?: string
}
function Button(props: ButtonProps) {
  const { addClassName, children, type = "primary", onClick, ...propName } = props
  let style = ""
  switch (type) {
    case "primary":
      style = "bg-sky-500 text-white hover:bg-sky-700"
      break
    case "text":
      style = "bg-transparent text-neutral-400 hover:bg-slate-300"
      break
    default:
      style = "bg-sky-200"
      break
  }

  return (
    <button
      className={`${addClassName} ${style} rounded text-base px-2 py-1 transition-all`}
      onClick={onClick}
      {...propName}
    >
      {children}
    </button>
  )
}

export default Button
