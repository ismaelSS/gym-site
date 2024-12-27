import Banner from '@/components/banner'
import PersonHeader from '@/components/custonHeader'
import OffertSection from '@/components/offertSection'

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <PersonHeader />
      <Banner />
      <OffertSection />
    </main>
  )
}
