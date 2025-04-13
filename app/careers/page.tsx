import type { Metadata } from "next"
import Link from "next/link"
import { HeroSection } from "@/components/hero-section"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Briefcase, MapPin, Clock, DollarSign, Heart, Users, Coffee } from "lucide-react"

export const metadata: Metadata = {
  title: "Careers",
  description: "Explore career opportunities at TechTalent Consultancy and join our team of staffing professionals.",
}

const jobOpenings = [
  {
    id: 1,
    title: "Senior Technical Recruiter",
    location: "Bangalore, India",
    type: "Full-time",
    category: "recruiting",
    salary: "₹15-20 LPA",
    description:
      "We are looking for an experienced Technical Recruiter to join our team in Bangalore. The ideal candidate will have a strong understanding of technical roles and the ability to identify and attract top talent.",
    responsibilities: [
      "Source and screen candidates for technical roles",
      "Conduct initial interviews and technical assessments",
      "Build and maintain relationships with candidates",
      "Work closely with clients to understand their requirements",
      "Provide regular updates to clients and candidates",
    ],
    requirements: [
      "5+ years of experience in technical recruiting",
      "Strong understanding of software development roles and technologies",
      "Excellent communication and interpersonal skills",
      "Experience with applicant tracking systems",
      "Bachelor's degree in HR, Computer Science, or related field",
    ],
  },
  {
    id: 2,
    title: "Client Relationship Manager",
    location: "Mumbai, India",
    type: "Full-time",
    category: "sales",
    salary: "₹18-25 LPA",
    description:
      "We are seeking a Client Relationship Manager to build and maintain relationships with our clients in the software industry. The ideal candidate will have a strong background in account management and a passion for delivering exceptional service.",
    responsibilities: [
      "Develop and maintain relationships with key clients",
      "Understand clients' staffing needs and provide tailored solutions",
      "Collaborate with the recruitment team to fulfill client requirements",
      "Negotiate contracts and service level agreements",
      "Monitor client satisfaction and address any concerns",
    ],
    requirements: [
      "7+ years of experience in account management or client relations",
      "Experience in the staffing industry, preferably in IT/software",
      "Strong negotiation and relationship-building skills",
      "Excellent communication and presentation abilities",
      "Bachelor's degree in Business, Marketing, or related field",
    ],
  },
  {
    id: 3,
    title: "Technical Sourcing Specialist",
    location: "Remote, India",
    type: "Full-time",
    category: "recruiting",
    salary: "₹10-15 LPA",
    description:
      "We are looking for a Technical Sourcing Specialist to identify and engage with potential candidates for our clients' technical roles. The ideal candidate will be skilled in various sourcing techniques and have a good understanding of technical positions.",
    responsibilities: [
      "Utilize various sourcing channels to identify potential candidates",
      "Conduct initial outreach and engagement with candidates",
      "Screen resumes and profiles for technical qualifications",
      "Maintain a pipeline of qualified candidates for current and future roles",
      "Stay updated on industry trends and sourcing best practices",
    ],
    requirements: [
      "3+ years of experience in technical sourcing or recruiting",
      "Proficiency with LinkedIn Recruiter, GitHub, and other sourcing tools",
      "Understanding of software development roles and technologies",
      "Excellent research and communication skills",
      "Bachelor's degree in any field",
    ],
  },
  {
    id: 4,
    title: "Business Development Manager",
    location: "San Francisco, USA",
    type: "Full-time",
    category: "sales",
    salary: "$90K-120K",
    description:
      "We are seeking a Business Development Manager to expand our client base in the US market. The ideal candidate will have a strong network in the software industry and a proven track record of business development success.",
    responsibilities: [
      "Identify and pursue new business opportunities with software companies",
      "Develop and implement business development strategies",
      "Build and maintain relationships with potential and existing clients",
      "Negotiate contracts and service agreements",
      "Collaborate with the recruitment team to ensure client satisfaction",
    ],
    requirements: [
      "5+ years of experience in business development or sales",
      "Experience in the staffing industry, preferably in IT/software",
      "Strong network in the US software industry",
      "Excellent negotiation and relationship-building skills",
      "Bachelor's degree in Business, Marketing, or related field",
    ],
  },
]

export default function CareersPage() {
  return (
    <>
      <HeroSection
        title="Join Our Team"
        subtitle="Explore career opportunities at TechTalent Consultancy and be part of our mission to connect exceptional talent with prestigious software companies."
      />

      {/* Company Culture */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Culture"
            subtitle="At TechTalent Consultancy, we foster a collaborative, innovative, and inclusive work environment."
            centered
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="glass p-6 rounded-lg text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Passion for Excellence</h3>
              <p className="text-muted-foreground">
                We are committed to delivering exceptional service and results that exceed expectations at every
                touchpoint.
              </p>
            </div>

            <div className="glass p-6 rounded-lg text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Collaborative Spirit</h3>
              <p className="text-muted-foreground">
                We believe in the power of teamwork and foster a collaborative environment where everyone's ideas and
                contributions are valued.
              </p>
            </div>

            <div className="glass p-6 rounded-lg text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <Coffee className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Work-Life Balance</h3>
              <p className="text-muted-foreground">
                We understand the importance of balance and support our team members in maintaining a healthy work-life
                integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Employee Benefits"
            subtitle="We offer a comprehensive benefits package to support our team members' well-being and professional growth."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Competitive Compensation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Salary packages that recognize your skills, experience, and contributions to our success.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Health Insurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Comprehensive health insurance coverage for you and your family to ensure your well-being.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Professional Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Opportunities for continuous learning, including workshops, certifications, and conference attendance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Flexible Work Options</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Flexible working hours and remote work options to accommodate your personal needs and preferences.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Paid Time Off</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Generous vacation days, sick leave, and holidays to ensure you have time to rest and recharge.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Retirement Plans</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Retirement savings plans with company matching to help you secure your financial future.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Team Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Regular team outings, celebrations, and social events to foster camaraderie and connection.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Wellness Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Initiatives to support your physical and mental well-being, including gym memberships and wellness
                  workshops.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Current Openings"
            subtitle="Explore our current job opportunities and find your next career move."
            centered
          />

          <div className="mt-12">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-8">
                <TabsTrigger value="all">All Positions</TabsTrigger>
                <TabsTrigger value="recruiting">Recruiting</TabsTrigger>
                <TabsTrigger value="sales">Sales & Business</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-6">
                {jobOpenings.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </TabsContent>

              <TabsContent value="recruiting" className="space-y-6">
                {jobOpenings
                  .filter((job) => job.category === "recruiting")
                  .map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
              </TabsContent>

              <TabsContent value="sales" className="space-y-6">
                {jobOpenings
                  .filter((job) => job.category === "sales")
                  .map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Employee Testimonials"
            subtitle="Hear what our team members have to say about working at TechTalent Consultancy."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold">R</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Rahul Mehta</CardTitle>
                    <CardDescription>Senior Technical Recruiter</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Working at TechTalent has been the highlight of my career. The collaborative environment,
                  opportunities for growth, and the satisfaction of connecting great talent with amazing companies make
                  every day rewarding."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold">A</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Ananya Desai</CardTitle>
                    <CardDescription>Client Relationship Manager</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "The leadership team at TechTalent truly values work-life balance and professional development. I've
                  been able to grow my skills while maintaining a healthy balance, which is rare in the fast-paced
                  staffing industry."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold">J</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Jason Kim</CardTitle>
                    <CardDescription>Business Development Manager</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "The culture at TechTalent is unlike any other company I've worked for. There's a genuine commitment
                  to excellence and integrity in everything we do, and it's reflected in our relationships with clients
                  and candidates."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Application Process"
            subtitle="Our streamlined hiring process is designed to identify the best talent efficiently."
            centered
          />

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Application</h3>
              <p className="text-muted-foreground">
                Submit your application through our careers page, including your resume and cover letter.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Initial Screening</h3>
              <p className="text-muted-foreground">
                Our HR team will review your application and conduct an initial phone screening.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Interviews</h3>
              <p className="text-muted-foreground">
                Qualified candidates will be invited for interviews with the hiring manager and team members.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Offer & Onboarding</h3>
              <p className="text-muted-foreground">
                Successful candidates will receive an offer and begin our comprehensive onboarding process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Ready to Join Our Team?</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Explore our current openings and take the next step in your career with TechTalent Consultancy.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="#current-openings">
              View Open Positions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}

interface JobCardProps {
  job: {
    id: number
    title: string
    location: string
    type: string
    category: string
    salary: string
    description: string
    responsibilities: string[]
    requirements: string[]
  }
}

function JobCard({ job }: JobCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{job.title}</CardTitle>
        <CardDescription>
          <div className="flex flex-wrap gap-4 mt-2">
            <div className="flex items-center text-sm">
              <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
              {job.location}
            </div>
            <div className="flex items-center text-sm">
              <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
              {job.type}
            </div>
            <div className="flex items-center text-sm">
              <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />
              {job.salary}
            </div>
            <div className="flex items-center text-sm">
              <Briefcase className="h-4 w-4 mr-1 text-muted-foreground" />
              {job.category === "recruiting" ? "Recruiting" : "Sales & Business"}
            </div>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{job.description}</p>

        <div>
          <h4 className="font-semibold mb-2">Responsibilities:</h4>
          <ul className="list-disc pl-5 space-y-1">
            {job.responsibilities.map((responsibility, index) => (
              <li key={index} className="text-sm text-muted-foreground">
                {responsibility}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Requirements:</h4>
          <ul className="list-disc pl-5 space-y-1">
            {job.requirements.map((requirement, index) => (
              <li key={index} className="text-sm text-muted-foreground">
                {requirement}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/careers/apply/${job.id}`}>
            Apply Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
