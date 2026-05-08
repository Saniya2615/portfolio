import {
  ScrollProgress,
  Navbar,
  Hero,
  About,
  Education,
  Experience,
  Skills,
  Certifications,
  Projects,
  Achievements,
  Languages,
  Interests,
  Contact,
  Footer,
} from '@/components/portfolio'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Certifications />
      <Projects />
      <Achievements />
      <Languages />
      <Interests />
      <Contact />
      <Footer />
    </main>
  )
}
