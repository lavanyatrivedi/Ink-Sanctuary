import { FadeIn, TextReveal, HeadingReveal, LineReveal, ImageReveal, ParagraphReveal } from '@/components/animations';
import { motion, useScroll, useTransform } from 'framer-motion';

// Import images
import heroLotus from '@assets/generated_images/hero_lotus.jpg';
import studioWorkspace from '@assets/generated_images/studio_workspace.jpg';
import artistPortrait from '@assets/generated_images/artist_portrait.jpg';
import portfolioGrid from '@assets/WhatsApp_Image_2026-07-26_at_16.52.56_1785065020741.jpeg';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // We map the scroll progress to background colors
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.15, 0.2, 0.45, 0.5, 0.8, 0.85],
    [
      "hsl(0, 0%, 10%)", // hero: deep charcoal
      "hsl(0, 0%, 10%)", 
      "hsl(32, 37%, 93%)", // history: warmer bone #F5EEE6
      "hsl(32, 37%, 93%)",
      "hsl(33, 27%, 95%)", // studio/philosophy: bone white #F7F3EE
      "hsl(33, 27%, 95%)",
      "hsl(216, 17%, 94%)" // contact: barely-blue-gray #EEF0F3
    ]
  );

  return (
    <motion.div 
      style={{ backgroundColor }}
      className="w-full font-light selection:bg-[var(--color-warm-sand)] selection:text-[var(--color-deep-charcoal)] transition-colors duration-700"
    >
      
      {/* 1. HERO */}
      <section className="relative h-[100svh] w-full text-[var(--color-bone-white)] flex flex-col justify-center items-center overflow-hidden">
        {/* Very subtle background texture / image */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <motion.img 
            style={{ y }}
            src={heroLotus} 
            alt="Hero Texture" 
            className="w-full h-full object-cover object-center mix-blend-overlay"
          />
        </div>
        
        <div className="relative z-10 flex flex-col items-center px-6 max-w-4xl w-full">
          <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tight mb-8">
            <TextReveal text="Order Tattoo" />
          </h1>
          <FadeIn delay={1.5} duration={1.2}>
            <p className="text-lg md:text-xl tracking-wide uppercase font-sans text-white/70 text-center">
              Ink, intention, and everything in between.
            </p>
          </FadeIn>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
            className="h-[1px] bg-white/30 mt-12"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            delay: 3, 
            repeat: Infinity, 
            repeatType: "reverse", 
            repeatDelay: 1 
          }}
          className="absolute bottom-12 flex flex-col items-center gap-2"
        >
          <span className="w-[1px] h-12 bg-white/30"></span>
        </motion.div>
      </section>

      {/* 2. HISTORY OF TATTOOS */}
      <section className="relative py-32 md:py-48 px-6 text-[var(--color-deep-charcoal)]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-24">
            <h2 className="text-4xl md:text-6xl lg:text-7xl mb-8">
              <HeadingReveal text="A 5,000-Year Story Written on Skin" />
            </h2>
            <LineReveal className="bg-[var(--color-deep-charcoal)]/20" />
          </div>

          <div className="flex flex-col gap-24 md:gap-32">
            {[
              {
                year: "~3300 BCE",
                title: "Ötzi the Iceman",
                text: "The oldest tattooed human body ever found. Preserved in Alpine ice for over five millennia, Ötzi carried 61 marks on his body — charcoal rubbed into incisions. Analysis suggests they were therapeutic, placed over arthritic joints. The first tattoos were medicine."
              },
              {
                year: "~1300 BCE",
                title: "Ancient Egypt",
                text: "Tattooed mummies of Egyptian priestesses bear geometric patterns on their skin — dots, lines, abstract figures. Once dismissed as markers of low status, scholars now understand them as symbols of fertility, protection, and devotion. Some things are too important to leave unsaid."
              },
              {
                year: "Origins",
                title: "Polynesia & Māori",
                text: "In the Pacific, tattoos were never decoration. The Māori tā moko encoded genealogy, rank, and identity — a readable life carved in spirals onto the face. To know someone's moko was to know their entire lineage. The face was the most sacred canvas."
              },
              {
                year: "17th Century",
                title: "Japan — Irezumi",
                text: "Japanese irezumi began as punishment marks — criminals branded by location and crime. Then something shifted. Artisans and laborers reclaimed the tradition, turning stigma into pride. By the Edo period, full-body irezumi had become a discipline so revered that masters trained for decades."
              },
              {
                year: "Ancestral",
                title: "Indigenous Traditions",
                text: "Across the Americas and Africa, tattooing and scarification marked transitions — from child to warrior, from living to ancestor. These marks were not chosen freely in a studio. They were earned. They were given. They carried the weight of the community."
              },
              {
                year: "Today",
                title: "Personal Myth",
                text: "Tattooing moved from stigma to mainstream, from sailors to surgeons, from rebellion to ritual. What remains constant is this: humans have always needed to mark on their bodies what they cannot say with words. A tattoo is a permanent decision made in a permanent moment."
              }
            ].map((chapter, i) => (
              <FadeIn key={i} delay={0.2} duration={1.2} className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start">
                <div className="border-t border-[var(--color-deep-charcoal)]/20 pt-4 md:border-t-0 md:pt-0 md:border-l md:pl-8">
                  <span className="block text-sm uppercase tracking-widest text-[var(--color-ink-blue)] mb-2">{chapter.year}</span>
                  <h3 className="text-xl md:text-2xl">{chapter.title}</h3>
                </div>
                <div className="text-lg md:text-xl leading-relaxed text-[var(--color-deep-charcoal)]/80">
                  {chapter.text}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY & WHEN TO GET ONE */}
      <section className="relative py-32 md:py-48 px-6 text-[var(--color-deep-charcoal)]">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-12 text-center">
            <HeadingReveal text="Getting a tattoo is not a small decision." />
          </h2>
          
          <div className="w-full mb-16">
            <LineReveal className="bg-[var(--color-deep-charcoal)]/20" />
          </div>

          <div className="space-y-8 text-lg md:text-xl leading-[1.9] text-[var(--color-deep-charcoal)]/80">
            <ParagraphReveal delay={0.2}>
              <p>
                People carry ink for reasons that span the entirety of the human experience. We tattoo to remember. We tattoo to forget. We tattoo to reclaim our bodies, to grieve, to celebrate, to mark transitions, and to find belonging. A tattoo is an anchor in a fluid world.
              </p>
            </ParagraphReveal>
            <ParagraphReveal delay={0.4}>
              <p>
                But readiness matters. Permanence requires intention. Healing takes time and patience. Choose a design for yourself, not for a trend. The commitment to aftercare is the final step in the ritual. Be sure you are ready to carry this with you.
              </p>
            </ParagraphReveal>
          </div>

          <div className="mt-24 w-[110%] -ml-[5%] relative overflow-hidden">
            <ImageReveal 
              src={studioWorkspace} 
              alt="Clean minimal tattoo workspace" 
              className="aspect-[4/3] md:aspect-[21/9]"
            />
          </div>
        </div>
      </section>

      {/* 4. STUDIO / MANPREET'S PHILOSOPHY */}
      <section className="relative py-32 md:py-48 px-6 text-[var(--color-deep-charcoal)]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn>
            <ImageReveal 
              src={artistPortrait} 
              alt="Manpreet Kaur, Tattoo Artist" 
              className="aspect-[3/4] object-cover"
            />
          </FadeIn>

          <div className="flex flex-col gap-8">
            <div>
              <FadeIn delay={0.1}>
                <span className="text-sm uppercase tracking-widest text-[var(--color-warm-sand)] font-medium">The Artist</span>
              </FadeIn>
              <h2 className="text-4xl md:text-6xl mt-4 mb-2">Manpreet Kaur</h2>
              <FadeIn delay={0.3}>
                <p className="text-sm md:text-base text-[var(--color-deep-charcoal)]/60">
                  Jaipur's first female-owned tattoo atelier · Certified, Aliens Tattoo Mumbai
                </p>
              </FadeIn>
            </div>

            <LineReveal className="bg-[var(--color-deep-charcoal)]/10" />

            <ParagraphReveal delay={0.4}>
              <p className="text-xl md:text-2xl leading-relaxed font-serif text-[var(--color-deep-charcoal)]/90 italic">
                "Every tattoo I make is a collaboration. I don't put my art on your body — I help you find what was already trying to come through. The process is slow, deliberate, and private. You bring the meaning. I bring the craft."
              </p>
            </ParagraphReveal>

            <LineReveal className="bg-[var(--color-deep-charcoal)]/10" />

            <FadeIn delay={0.6}>
              <p className="uppercase tracking-widest text-sm font-medium">By appointment. At your door.</p>
            </FadeIn>
            
            <FadeIn delay={0.8} className="mt-8">
               <ImageReveal 
                 src={portfolioGrid} 
                 alt="Tattoo Portfolio Examples" 
                 className="aspect-square opacity-90 mix-blend-multiply max-w-sm"
               />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. CONTACT */}
      <section className="relative py-32 md:py-48 px-6 text-[var(--color-deep-charcoal)] flex flex-col items-center justify-center min-h-[80svh]">
        <div className="max-w-4xl mx-auto text-center w-full">
          <h2 className="text-5xl md:text-7xl lg:text-8xl mb-24">
            <HeadingReveal text="Tell us what you want to carry with you." />
          </h2>

          <div className="flex flex-col gap-8 text-xl md:text-3xl font-light mb-32 tracking-wide">
            <FadeIn delay={0.3}>
              <a href="https://instagram.com/mnprt_9001" target="_blank" rel="noreferrer" className="hover:text-[var(--color-ink-blue)] transition-colors duration-500">
                Instagram: @mnprt_9001
              </a>
            </FadeIn>
            <FadeIn delay={0.4}>
              <a href="https://wa.me/918740007570" target="_blank" rel="noreferrer" className="hover:text-[var(--color-ink-blue)] transition-colors duration-500">
                WhatsApp: +91 87400 07570
              </a>
            </FadeIn>
            <FadeIn delay={0.5}>
              <a href="https://ordertattoo.in" target="_blank" rel="noreferrer" className="hover:text-[var(--color-ink-blue)] transition-colors duration-500">
                Website: ordertattoo.in
              </a>
            </FadeIn>
          </div>

          <FadeIn delay={0.8}>
            <p className="text-lg md:text-xl font-serif italic text-[var(--color-deep-charcoal)]/60 mb-24">
              Order. Then, forever.
            </p>
          </FadeIn>
        </div>
        
        <footer className="absolute bottom-0 w-full p-6 flex flex-col items-center text-sm text-[var(--color-deep-charcoal)]/40 tracking-widest uppercase">
          <div className="w-full max-w-sm h-[1px] bg-[var(--color-deep-charcoal)]/10 mb-6"></div>
          <p>© 2025 Order Tattoo · Jaipur, India</p>
        </footer>
      </section>

    </motion.div>
  );
}
