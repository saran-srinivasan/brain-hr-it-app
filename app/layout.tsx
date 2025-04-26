import type { ReactNode } from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DefaultSeo } from "next-seo"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "TechTalent Consultancy - Premier Software Staffing Solutions",
  description:
    "TechTalent Consultancy provides premium staffing solutions for prestigious software companies in India and the US. Connect with top-tier talent today.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-sans">
        <DefaultSeo
          titleTemplate="%s | TechTalent Consultancy"
          defaultTitle="TechTalent Consultancy - Premier Software Staffing Solutions"
          description="TechTalent Consultancy provides premium staffing solutions for prestigious software companies in India and the US. Connect with top-tier talent today."
          openGraph={{
            type: "website",
            locale: "en_US",
            url: "https://techtalent-consultancy.com/",
            siteName: "TechTalent Consultancy",
            images: [
              {
                url: "https://techtalent-consultancy.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "TechTalent Consultancy",
              },
            ],
          }}
          twitter={{
            handle: "@techtalentconsultancy",
            site: "@techtalentconsultancy",
            cardType: "summary_large_image",
          }}
        />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
