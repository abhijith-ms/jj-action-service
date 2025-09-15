// Common CSS classes and utilities with updated color palette and fonts

export const containerStyles = "container mx-auto px-4 sm:px-6 lg:px-8"

export const sectionStyles = "py-16 lg:py-20"

export const headingStyles = {
  h1: "text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-navy",
  h2: "text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-navy",
  h3: "text-2xl sm:text-3xl font-semibold font-heading text-navy",
  h4: "text-xl sm:text-2xl font-semibold font-heading text-navy",
}

export const textStyles = {
  lead: "text-lg sm:text-xl font-body text-cool-gray",
  body: "text-base font-body text-cool-gray",
  small: "text-sm font-body text-cool-gray",
}

export const buttonStyles = {
  primary: "bg-primary hover:bg-primary-600 text-white font-accent font-medium",
  secondary: "bg-light-gray hover:bg-cool-gray hover:text-white text-navy font-accent font-medium",
  outline: "border border-cool-gray hover:bg-light-gray text-cool-gray font-accent font-medium",
  terracotta: "bg-terracotta hover:bg-terracotta-600 text-white font-accent font-medium",
}

export const cardStyles = "bg-white rounded-lg shadow-sm border border-cool-gray/20 p-6"

export const gridStyles = {
  services: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
  contact: "grid grid-cols-1 lg:grid-cols-2 gap-8",
}