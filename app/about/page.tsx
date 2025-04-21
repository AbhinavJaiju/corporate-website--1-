import Link from "next/link"
import { ArrowRight, Award, Clock, Globe, Heart, Target, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-emerald-800 text-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Company</h1>
            <p className="text-xl mb-8">
              We're on a mission to transform industries through innovation, sustainability, and exceptional service.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full hidden lg:block overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <img
            src="/placeholder.svg?height=800&width=600"
            alt="Office building"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2005, our company began with a simple vision: to create innovative solutions that make a
                positive impact on the world. What started as a small team of passionate individuals has grown into a
                global organization with offices in 12 countries.
              </p>
              <p className="text-gray-700 mb-6">
                Throughout our journey, we've remained committed to our core values of excellence, integrity, and
                sustainability. These principles guide every decision we make and every project we undertake.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                  <Link href="/contact">Join Our Team</Link>
                </Button>
                <Button asChild variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=600&width=800&text=Our Team"
                alt="Our team"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-emerald-600 text-white p-4 rounded-lg shadow-lg">
                <p className="text-2xl font-bold">15+ Years</p>
                <p>of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We're guided by a clear mission and a set of core values that define who we are and how we operate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To deliver innovative solutions that empower businesses and individuals to achieve their goals while
                making a positive impact on society and the environment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be a global leader in sustainable innovation, recognized for our commitment to excellence, integrity,
                and positive social impact across all our divisions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Values</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-emerald-600">•</div>
                  <p>Excellence in everything we do</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-emerald-600">•</div>
                  <p>Integrity and transparency</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-emerald-600">•</div>
                  <p>Innovation and creativity</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-emerald-600">•</div>
                  <p>Sustainability and responsibility</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white" id="leadership">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who guide our vision and drive our success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alexandra Chen",
                position: "Chief Executive Officer",
                bio: "With over 20 years of industry experience, Alexandra leads our company with vision and integrity.",
                image: "/placeholder.svg?height=400&width=400&text=A.C.",
              },
              {
                name: "Marcus Johnson",
                position: "Chief Technology Officer",
                bio: "Marcus brings innovative thinking and technical expertise to drive our technological advancements.",
                image: "/placeholder.svg?height=400&width=400&text=M.J.",
              },
              {
                name: "Sophia Rodriguez",
                position: "Chief Operations Officer",
                bio: "Sophia ensures operational excellence across all our divisions with her strategic approach.",
                image: "/placeholder.svg?height=400&width=400&text=S.R.",
              },
              {
                name: "David Kim",
                position: "Chief Financial Officer",
                bio: "David's financial acumen has been instrumental in our sustainable growth and profitability.",
                image: "/placeholder.svg?height=400&width=400&text=D.K.",
              },
              {
                name: "Priya Patel",
                position: "Head of Sustainability",
                bio: "Priya leads our environmental initiatives and ensures we maintain our commitment to sustainability.",
                image: "/placeholder.svg?height=400&width=400&text=P.P.",
              },
              {
                name: "James Wilson",
                position: "Director of Innovation",
                bio: "James drives our research and development efforts to create groundbreaking solutions.",
                image: "/placeholder.svg?height=400&width=400&text=J.W.",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-emerald-600 mb-4">{member.position}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50" id="timeline">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From our humble beginnings to our current success, explore the key milestones that have shaped our
              company.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-200 hidden md:block"></div>

            {/* Timeline items */}
            {[
              {
                year: "2005",
                title: "Company Founded",
                description: "Our journey began with a small team and a big vision.",
              },
              {
                year: "2008",
                title: "First Major Project",
                description: "Completed our first landmark project, establishing our reputation for excellence.",
              },
              {
                year: "2012",
                title: "International Expansion",
                description: "Opened our first international office, marking the beginning of our global presence.",
              },
              {
                year: "2015",
                title: "Sustainability Initiative",
                description: "Launched our comprehensive sustainability program, setting industry standards.",
              },
              {
                year: "2018",
                title: "Technology Division",
                description: "Established our technology division to drive digital innovation.",
              },
              {
                year: "2023",
                title: "Global Recognition",
                description:
                  "Received multiple industry awards for our innovative solutions and sustainable practices.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`relative mb-12 md:mb-24 ${index % 2 === 0 ? "md:ml-auto md:mr-[50%] md:pr-12" : "md:mr-auto md:ml-[50%] md:pl-12"}`}
              >
                <div
                  className="hidden md:block absolute top-0 w-6 h-6 rounded-full bg-emerald-500 border-4 border-white shadow-md"
                  style={{ [index % 2 === 0 ? "right" : "left"]: "-12px" }}
                ></div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full font-bold mb-4">
                    <Clock className="inline-block w-4 h-4 mr-2" />
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR Section */}
      <section className="py-20 bg-white" id="csr">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Corporate Social Responsibility</h2>
              <p className="text-gray-700 mb-6">
                We believe that business success and social responsibility go hand in hand. Our CSR initiatives focus on
                creating positive impact in three key areas:
              </p>

              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Globe className="h-6 w-6 text-emerald-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Environmental Sustainability</h3>
                    <p className="text-gray-700">
                      Our commitment to reducing our carbon footprint and promoting sustainable practices extends across
                      all our operations and projects.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-emerald-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Community Development</h3>
                    <p className="text-gray-700">
                      We invest in the communities where we operate, supporting education, healthcare, and local
                      economic development.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-emerald-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Ethical Business Practices</h3>
                    <p className="text-gray-700">
                      We maintain the highest standards of integrity, transparency, and ethical conduct in all our
                      business relationships.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                  <Link href="/about/csr-report">
                    <span className="flex items-center">
                      View CSR Report <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="/placeholder.svg?height=300&width=300&text=CSR 1"
                alt="CSR Initiative 1"
                className="w-full h-auto rounded-lg shadow-md"
              />
              <img
                src="/placeholder.svg?height=300&width=300&text=CSR 2"
                alt="CSR Initiative 2"
                className="w-full h-auto rounded-lg shadow-md mt-8"
              />
              <img
                src="/placeholder.svg?height=300&width=300&text=CSR 3"
                alt="CSR Initiative 3"
                className="w-full h-auto rounded-lg shadow-md"
              />
              <img
                src="/placeholder.svg?height=300&width=300&text=CSR 4"
                alt="CSR Initiative 4"
                className="w-full h-auto rounded-lg shadow-md mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're looking to partner with us, join our team, or learn more about our services, we'd love to
            hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-emerald-800 hover:bg-gray-100">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/careers">View Careers</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
