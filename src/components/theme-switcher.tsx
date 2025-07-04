"use client"

import * as React from "react"
import { Moon, Sun, Laptop, Palette } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const themes = [
  { name: "Default", value: "default", colors: "bg-slate-900 text-slate-50" },
  { name: "Red", value: "red", colors: "bg-red-900 text-red-50" },
  { name: "Rose", value: "rose", colors: "bg-rose-900 text-rose-50" },
  { name: "Orange", value: "orange", colors: "bg-orange-900 text-orange-50" },
  { name: "Green", value: "green", colors: "bg-green-900 text-green-50" },
  { name: "Blue", value: "blue", colors: "bg-blue-900 text-blue-50" },
  { name: "Yellow", value: "yellow", colors: "bg-yellow-900 text-yellow-50" },
  { name: "Violet", value: "violet", colors: "bg-violet-900 text-violet-50" },
]

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [colorTheme, setColorTheme] = React.useState("default")

  React.useEffect(() => {
    // Apply color theme to document
    const root = document.documentElement
    root.className = root.className.replace(/theme-\w+/g, '')
    if (colorTheme !== "default") {
      root.classList.add(`theme-${colorTheme}`)
    }
  }, [colorTheme])

  return (
    <div className="flex items-center space-x-2">
      {/* Theme Mode Switcher */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Theme Mode</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setTheme("light")}>
            <Sun className="mr-2 h-4 w-4" />
            <span>Light</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            <Moon className="mr-2 h-4 w-4" />
            <span>Dark</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            <Laptop className="mr-2 h-4 w-4" />
            <span>System</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Color Theme Switcher */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Palette className="h-4 w-4" />
            <span className="sr-only">Choose color theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>Color Theme</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {themes.map((themeOption) => (
            <DropdownMenuItem
              key={themeOption.value}
              onClick={() => setColorTheme(themeOption.value)}
              className="flex items-center justify-between"
            >
              <div className="flex items-center space-x-2">
                <div className={`h-4 w-4 rounded-full ${themeOption.colors}`} />
                <span>{themeOption.name}</span>
              </div>
              {colorTheme === themeOption.value && (
                <div className="h-2 w-2 rounded-full bg-primary" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
} 