import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with TechTalent Consultancy for your staffing needs or career opportunities.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
