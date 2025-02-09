import React from "react"

const Button = ({ children, className, variant, size, ...props }) => {
    const baseStyles = "px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-2"
    const variantStyles = {
      default: "bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500",
      outline: "border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white focus:ring-purple-500",
      ghost: "text-purple-500 hover:bg-purple-100 focus:ring-purple-500",
    }
    const sizeStyles = {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg px-6 py-3",
    }
  
    const combinedClassName = `${baseStyles} ${variantStyles[variant || "default"]} ${sizeStyles[size || "md"]} ${className || ""}`
  
    return (
      <button className={combinedClassName} {...props}>
        {children}
      </button>
    )
  }
  
  export default Button;