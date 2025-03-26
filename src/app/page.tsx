import PageTransition from '@/components/@layout/PageTransition';
import Contact from '@/components/home/Contact';
import Experience from '@/components/home/Experience';
import Learning from '@/components/home/Learning';
import Profile from '@/components/home/Profile';
import Skills from '@/components/home/Skills';

export default function Home() {
  return (
    <PageTransition>
      <Profile />
      <Skills />
      <Experience />
      <Learning />
      <Contact />
    </PageTransition>
  );
}
