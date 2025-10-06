import Header from '@/components/header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import AdditionalExperience from '@/components/AdditionalExperience'
import Interests from '@/components/Interests'
import LoadingIntro from '@/components/LoadingIntro'

/**
 * Main Home Page Component
 */
export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <LoadingIntro />
        <Hero />
        <Experience />
        <Projects />
        <AdditionalExperience />
        <About /> 
        <Interests />
      </main>
    </div>
  )
}
