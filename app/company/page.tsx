import type { Metadata } from "next"
import Image from "next/image"
import { HeroSection } from "@/components/hero-section"
import { SectionHeading } from "@/components/section-heading"
import { CheckCircle, Target, Heart, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Company",
  description: "Learn about TechTalent Consultancy, our mission, values, and the team behind our success.",
}

const teamMembers = [
  {
    name: "Priya Sharma",
    role: "Founder & CEO",
    bio: "With over 15 years of experience in the tech industry, Priya founded TechTalent Consultancy to bridge the gap between exceptional talent and leading software companies.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "David Chen",
    role: "Chief Operating Officer",
    bio: "David oversees the day-to-day operations of TechTalent, ensuring that our processes are efficient and our clients receive exceptional service.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Arun Patel",
    role: "VP of Recruitment",
    bio: "Arun leads our recruitment team, developing innovative strategies to identify and attract top-tier talent for our clients.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Sarah Johnson",
    role: "Director of Client Relations",
    bio: "Sarah works closely with our clients to understand their unique needs and ensure that we deliver staffing solutions that exceed their expectations.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function CompanyPage() {
  return (
    <>
      <HeroSection
        title="About TechTalent Consultancy"
        subtitle="Learn about our mission, values, and the team behind our success."
      />

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Our Story"
                subtitle="How TechTalent Consultancy came to be a leader in software staffing solutions."
              />

              <div className="space-y-4 mt-6">
                <p>
                  Founded in 2015, TechTalent Consultancy was born out of a vision to transform how software companies
                  connect with exceptional talent. Our founder, Priya Sharma, recognized a significant gap in the
                  market: prestigious software companies were struggling to find qualified professionals who not only
                  had the technical skills but also aligned with their company culture and values.
                </p>
                <p>
                  Starting with a small team of experienced recruiters, TechTalent quickly gained a reputation for its
                  thorough understanding of technical roles and its ability to identify candidates who were perfect
                  matches for their clients. As word spread about our success, we expanded our operations from Bangalore
                  to include offices in Mumbai, Delhi, and San Francisco.
                </p>
                <p>
                  Today, TechTalent Consultancy is proud to serve some of the most innovative and respected software
                  companies in both India and the United States. Our growth is a testament to our unwavering commitment
                  to excellence and our deep understanding of the software industry's unique staffing needs.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-teal-500/20 rounded-lg blur-lg"></div>
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="TechTalent Consultancy office"
                width={800}
                height={600}
                className="rounded-lg relative z-10 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Mission & Values"
            subtitle="The principles that guide everything we do at TechTalent Consultancy."
            centered
          />

          <div className="mt-12 max-w-3xl mx-auto text-center">
            <div className="glass p-8 rounded-lg">
              <div className="flex justify-center mb-6">
                <Target className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg">
                To connect exceptional talent with prestigious software companies, creating meaningful partnerships that
                drive innovation and success for all parties involved.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="glass p-6 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-muted-foreground">
                We operate with honesty and transparency in all our interactions, building trust with both clients and
                candidates.
              </p>
            </div>

            <div className="glass p-6 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We are committed to delivering exceptional service and results that exceed expectations at every
                touchpoint.
              </p>
            </div>

            <div className="glass p-6 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Partnership</h3>
              <p className="text-muted-foreground">
                We build long-term relationships with our clients and candidates, focusing on mutual success and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The experienced professionals behind TechTalent Consultancy's success."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="glass p-6 rounded-lg text-center">
                <div className="relative mb-4 mx-auto w-40 h-40 overflow-hidden rounded-full">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Why Choose TechTalent Consultancy"
            subtitle="What sets us apart from other staffing firms in the industry."
            centered
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="flex items-start space-x-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Industry Specialization</h3>
                <p className="text-muted-foreground">
                  Unlike general staffing firms, we focus exclusively on the software industry, giving us deep insights
                  into technical roles and requirements.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Technical Expertise</h3>
                <p className="text-muted-foreground">
                  Our recruiters have technical backgrounds, enabling them to effectively evaluate candidates' skills
                  and match them to appropriate roles.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Quality Over Quantity</h3>
                <p className="text-muted-foreground">
                  We focus on presenting a select number of highly qualified candidates rather than overwhelming you
                  with numerous mediocre options.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Global Reach</h3>
                <p className="text-muted-foreground">
                  With offices in both India and the US, we have access to talent pools across multiple regions and can
                  support international staffing needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
