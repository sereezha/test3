'use client'

import * as React from "react"
import { Search, ChevronDown, Paperclip, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"

const searchLocations = [
  { value: "all", label: "All" },
  { value: "favorite", label: "Favorite" },
  { value: "email1@example.com", label: "email1@example.com" },
  { value: "email2@example.com", label: "email2@example.com" },
  { value: "email3@example.com", label: "email3@example.com" },
]

export default function EmailSearch() {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState("")
  const [searchLocation, setSearchLocation] = React.useState(searchLocations[0])
  const [filters, setFilters] = React.useState({
    from: "",
    to: "",
    subject: "",
    hasWords: "",
    hasAttachment: false,
    isFavorite: false
  })

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Search with filters:", { searchQuery, filters, searchIn: searchLocation.value })
  }

  return (
    <div className="w-full max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <form onSubmit={handleSearchSubmit} className="p-4">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search mail"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-10 py-2 w-full"
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <ChevronDown className={cn("h-4 w-4 transition-transform", isExpanded && "rotate-180")} />
            <span className="sr-only">{isExpanded ? "Collapse filters" : "Expand filters"}</span>
          </Button>
        </div>

        {isExpanded && (
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="from" className="text-sm font-medium text-gray-700">From</Label>
                <Input
                  id="from"
                  value={filters.from}
                  onChange={(e) => setFilters({ ...filters, from: e.target.value })}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="to" className="text-sm font-medium text-gray-700">To</Label>
                <Input
                  id="to"
                  value={filters.to}
                  onChange={(e) => setFilters({ ...filters, to: e.target.value })}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</Label>
                <Input
                  id="subject"
                  value={filters.subject}
                  onChange={(e) => setFilters({ ...filters, subject: e.target.value })}
                  className="mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 items-end">
              <div>
                <Label className="text-sm font-medium text-gray-700">Search in</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      className="w-full justify-between mt-1"
                    >
                      {searchLocation.label}
                      <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Search location..." className="h-9" />
                      <CommandEmpty>No location found.</CommandEmpty>
                      <CommandGroup>
                        {searchLocations.map((location) => (
                          <CommandItem
                            key={location.value}
                            onSelect={() => setSearchLocation(location)}
                          >
                            {location.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <Label htmlFor="hasWords" className="text-sm font-medium text-gray-700">Has the words</Label>
                <Input
                  id="hasWords"
                  value={filters.hasWords}
                  onChange={(e) => setFilters({ ...filters, hasWords: e.target.value })}
                  className="mt-1"
                />
              </div>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="hasAttachment"
                    checked={filters.hasAttachment}
                    onCheckedChange={(checked) =>
                      setFilters({ ...filters, hasAttachment: checked as boolean })
                    }
                  />
                  <Label htmlFor="hasAttachment" className="text-sm text-gray-700 flex items-center">
                    <Paperclip className="mr-1 h-4 w-4" />
                    Has attachment
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="isFavorite"
                    checked={filters.isFavorite}
                    onCheckedChange={(checked) =>
                      setFilters({ ...filters, isFavorite: checked as boolean })
                    }
                  />
                  <Label htmlFor="isFavorite" className="text-sm text-gray-700 flex items-center">
                    <Star className="mr-1 h-4 w-4" />
                    Is favorite
                  </Label>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setIsExpanded(false)}>
                Cancel
              </Button>
              <Button type="submit">Search</Button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
