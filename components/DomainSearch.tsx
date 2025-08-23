"use client"

import type React from "react"
import { useState, useCallback, useRef } from "react"
import { Link } from "react-router-dom"
import DomainSearchForm from "./domainSearch/DomainSearchForm"
import SearchResults from "./domainSearch/SearchResults"
import ScrollingQuotes from "./domainSearch/ScrollingQuotes"

type SearchStatus = "idle" | "searching" | "suggesting" | "success" | "error"

interface SuggestedDomain {
  name: string
  tld: string
  available: boolean
  price?: string
}

const DomainSearchComplete: React.FC = () => {
  const [domainName, setDomainName] = useState("")
  const [searchResult, setSearchResult] = useState<string | null>(null)
  const [status, setStatus] = useState<SearchStatus>("idle")
  const [availability, setAvailability] = useState<"available" | "taken" | null>(null)
  const [suggestedDomains, setSuggestedDomains] = useState<SuggestedDomain[]>([])

  const contentAboveScrollingTextRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const generateMockSuggestions = (domain: string): SuggestedDomain[] => {
    const baseName = domain.replace(/\.(com|net|org|io|co)$/i, "")
    const tlds = [".com", ".net", ".org", ".io", ".co", ".app", ".dev", ".tech"]

    return tlds.slice(0, 6).map((tld) => ({
      name: baseName,
      tld,
      available: Math.random() > 0.3,
      price: `$${Math.floor(Math.random() * 50) + 10}.99`,
    }))
  }

  const handleSearch = useCallback(async (domainToSearch: string) => {
    const trimmedDomain = domainToSearch.trim()
    if (!trimmedDomain) {
      setStatus("error")
      setSearchResult("Please enter a domain name.")
      setSuggestedDomains([])
      setAvailability(null)
      return
    }

    setStatus("searching")
    setSearchResult(`Searching for ${trimmedDomain}...`)
    setSuggestedDomains([])
    setAvailability(null)

    // Simulate search delay
    await new Promise((r) => setTimeout(r, 1500))

    const isAvailable = Math.random() > 0.5
    const currentAvailability = isAvailable ? "available" : "taken"
    setAvailability(currentAvailability)
    setSearchResult(
      isAvailable ? `Great news! "${trimmedDomain}" is available!` : `Sorry, "${trimmedDomain}" is already taken.`,
    )

    setStatus("suggesting")

    // Generate suggestions
    await new Promise((r) => setTimeout(r, 1000))
    const suggestions = generateMockSuggestions(trimmedDomain)
    setSuggestedDomains(suggestions)
    setStatus("success")
  }, [])

  const handleSuggestionClick = (suggestion: SuggestedDomain) => {
    const fullSuggestedDomain = `${suggestion.name}${suggestion.tld}`
    setDomainName(fullSuggestedDomain)
    handleSearch(fullSuggestedDomain)
    contentAboveScrollingTextRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  const isLoading = status === "searching" || status === "suggesting"

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden" style={{ minHeight: "200vh" }}>
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img src="/images/ab-3.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
      </div>

      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col">
        {/* Main Search Section */}
        <div className="flex items-center justify-center min-h-screen px-6 py-24">
          <div className="w-full max-w-4xl mx-auto text-center">
            {/* Header */}
            <div ref={contentAboveScrollingTextRef} className="mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                Find Your Perfect Domain
              </h1>
              <p className="text-xl text-white/90 mb-8 drop-shadow">
                Start your online journey with a unique domain name. Get instant availability results and smart
                suggestions.
              </p>
            </div>

            {/* Search Form */}
            <div className="mb-8">
              <DomainSearchForm
                domainName={domainName}
                setDomainName={setDomainName}
                onSearch={handleSearch}
                isLoading={isLoading}
              />
            </div>

            {/* Search Results */}
            <SearchResults
              status={status}
              searchResult={searchResult}
              availability={availability}
              suggestions={suggestedDomains}
              suggestionsError={null}
              onSuggestionClick={handleSuggestionClick}
              isLoading={isLoading}
            />
          </div>
        </div>

        {/* Scrolling Quotes Section */}
        <div className="min-h-screen flex items-center">
          <ScrollingQuotes contentAboveRef={contentAboveScrollingTextRef} />
        </div>
      </div>
    </section>
  )
}

export default DomainSearchComplete
