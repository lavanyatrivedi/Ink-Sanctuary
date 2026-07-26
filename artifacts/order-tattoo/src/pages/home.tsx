import { FadeIn, HeadingReveal, LineReveal, ImageReveal, ParagraphReveal } from '@/components/animations';
import { motion } from 'framer-motion';

// Generated and client assets
import heroLotus from '@assets/generated_images/hero_lotus.jpg';
import studioWorkspace from '@assets/generated_images/studio_workspace.jpg';
import artistPortrait from '@assets/generated_images/artist_portrait.jpg';
import sunTattooArm from '@/assets/sun_tattoo.jpg';

const historyChapters = [
  { year: "3300 BCE", title: "Ötzi the Iceman", text: "The oldest known tattoos: charcoal rubbed into incisions, placed over arthritic joints. The first tattoos were medicine." },
  { year: "Origins", title: "Polynesia & Māori", text: "Tā moko encoded genealogy and rank in spirals on the face. A readable life. The face as the most sacred canvas." },
  { year: "17th Century", title: "Japan - Irezumi", text: "Punishment marks reclaimed as pride. By the Edo period, a discipline so revered that masters trained for decades." },
  { year: "Today", title: "Personal Myth", text: "From rebellion to ritual. A permanent mark made in a permanent moment: saying what words cannot." },
];

export default function Home() {
  return (
    <div className="w-full bg-[#F7F3EE] text-[#1A1A1A] font-serif antialiased">

      {/* ── FIXED HEADER ── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-14 py-4 bg-[#F7F3EE]/85 backdrop-blur-md border-b border-[#1A1A1A]/5 shadow-xs transition-all duration-300">
        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex items-center gap-3"
        >
          <span className="font-serif text-[11px] font-medium tracking-[0.25em] uppercase text-[#1A1A1A]/80">
            Order Tattoo
          </span>
          <span className="w-4 h-[1px] bg-[#1A1A1A]/30" />
          <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#1A1A1A]/40">
            Jaipur
          </span>
        </motion.div>

        {/* Right nav */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex items-center gap-7"
        >
          <a
            href="#philosophy"
            className="font-sans text-[10px] tracking-[0.22em] uppercase text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors duration-500"
          >
            Studio
          </a>
          <a
            href="#contact"
            className="font-sans text-[10px] tracking-[0.22em] uppercase text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors duration-500"
          >
            Contact
          </a>
          <a
            href="https://wa.me/918740007570"
            target="_blank"
            rel="noreferrer"
            className="font-sans text-[10px] tracking-[0.22em] uppercase border border-[#1A1A1A]/20 px-4 py-1.5 hover:border-[#1A1A1A]/60 hover:text-[#1A1A1A] text-[#1A1A1A]/50 transition-all duration-500"
          >
            Book
          </a>
        </motion.div>
      </header>

      {/* ── 1. HERO ── */}
      <section className="relative min-h-screen w-full bg-[#F7F3EE] pt-0 pb-0 grid grid-cols-1 lg:grid-cols-2 overflow-hidden">

        {/* Left: text block */}
        <div className="flex flex-col justify-between pb-12 md:pb-16 px-8 md:px-14 pt-28 lg:pt-24 z-10">

          {/* Eyebrow + title + tagline */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex items-center gap-3 mb-6 md:mb-8"
            >
              <span className="w-8 h-[1px] bg-[#C8A882]" />
              <span className="font-sans text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-[#C8A882] font-medium">
                Jaipur's first female-owned tattoo brand
              </span>
            </motion.div>

            {/* Main title */}
            <h1 className="font-serif font-light leading-[0.92] tracking-[-0.02em] text-[#1A1A1A]" style={{ fontSize: 'clamp(4rem, 9vw, 8.5rem)' }}>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                Order
              </motion.span>
              <motion.span
                className="block italic text-[#3B4F6B]"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
              >
                Tattoo
              </motion.span>
            </h1>

            {/* Rule */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '5rem' }}
              transition={{ duration: 1.4, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
              className="h-[1px] bg-[#C8A882] my-8 md:my-10"
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-sans font-light text-base md:text-lg leading-relaxed tracking-wide text-[#1A1A1A]/60 max-w-xs"
            >
              Rebuilding how India<br />gets tattooed.
            </motion.p>

            {/* Metadata strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="mt-12 md:mt-16 flex flex-wrap gap-x-6 gap-y-2 font-sans text-[10px] tracking-[0.2em] uppercase text-[#1A1A1A]/35"
            >
              <span>Order Online</span>
              <span>·</span>
              <span>Get an Estimate</span>
              <span>·</span>
              <span>Choose Your Location</span>
            </motion.div>
          </div>{/* end text block */}
        </div>{/* end left column */}

        {/* Right: hero image */}
        <div className="relative h-[55vw] lg:h-full lg:min-h-screen overflow-hidden">
          <motion.div
            className="absolute inset-0"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={{ clipPath: 'inset(0 0% 0 0)' }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            <img
              src={heroLotus}
              alt="Fine-line lotus tattoo"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle left vignette to blend into page */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F7F3EE] via-transparent to-transparent w-1/3" />
          </motion.div>

          {/* Floating caption */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="absolute bottom-10 right-8 text-right"
          >
            <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-white/60">
              Founded by Manpreet Kaur Brar
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── 2. HISTORY ── */}
      <section className="bg-[#F5EEE6] py-20 md:py-24 px-8 md:px-14">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-14 flex items-end justify-between gap-6 flex-wrap">
            <div>
              <FadeIn delay={0.1}>
                <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#C8A882]">The Archive</span>
              </FadeIn>
              <h2 className="mt-3 font-serif font-light leading-[1.05] tracking-tight text-[#1A1A1A]" style={{ fontSize: 'clamp(2rem, 4vw, 3.6rem)' }}>
                <HeadingReveal text="5,000 years of skin and meaning." />
              </h2>
            </div>
            <FadeIn delay={0.2}>
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#1A1A1A]/30 hidden md:block">
                One of the oldest continuous human art forms
              </span>
            </FadeIn>
          </div>

          {/* Timeline */}
          <FadeIn delay={0.15}>
            {/* Horizontal spine */}
            <div className="relative">
              {/* The line */}
              <div className="hidden md:block absolute top-[22px] left-0 right-0 h-[1px] bg-[#1A1A1A]/12" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
                {historyChapters.map((chapter, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
                    className="relative pt-0 md:pt-10"
                  >
                    {/* Dot on timeline */}
                    <div className="hidden md:flex absolute top-0 left-0 items-center justify-center -translate-y-[9px]">
                      <div className="w-[5px] h-[5px] rounded-full bg-[#C8A882]" />
                    </div>

                    {/* Year */}
                    <span className="font-sans text-[10px] tracking-[0.28em] uppercase text-[#3B4F6B]">
                      {chapter.year}
                    </span>

                    {/* Title */}
                    <h3 className="mt-2 font-serif text-lg md:text-xl font-light text-[#1A1A1A] leading-snug">
                      {chapter.title}
                    </h3>

                    {/* Divider */}
                    <div className="my-3 w-6 h-[1px] bg-[#C8A882]/50" />

                    {/* Text */}
                    <p className="font-sans text-[13px] leading-[1.75] text-[#1A1A1A]/55 font-light">
                      {chapter.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 3. WHY & WHEN ── */}
      <section className="bg-[#F7F3EE] pt-14 pb-20 md:pt-16 md:pb-28 px-8 md:px-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left: heading + text */}
          <div>
            <FadeIn delay={0.1}>
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#C8A882]">
                Before You Decide
              </span>
            </FadeIn>
            <h2 className="mt-6 font-serif font-light leading-[1.1] tracking-tight text-[#1A1A1A]" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4.5rem)' }}>
              <HeadingReveal text="Getting a tattoo" />
              <HeadingReveal text="is not a small" delay={0.1} />
              <HeadingReveal text="decision." delay={0.2} />
            </h2>

            <div className="mt-10 mb-12">
              <LineReveal className="bg-[#1A1A1A]/15" />
            </div>

            <div className="space-y-6">
              <ParagraphReveal delay={0.1}>
                <p className="font-sans text-base md:text-[17px] leading-[1.9] text-[#1A1A1A]/65 font-light">
                  People carry ink for reasons that span the entirety of human experience. We tattoo to remember. To reclaim our bodies, to grieve, to celebrate, to mark transitions, and to find belonging. A tattoo is an anchor in a fluid world: fixed, permanent, yours.
                </p>
              </ParagraphReveal>
              <ParagraphReveal delay={0.25}>
                <p className="font-sans text-base md:text-[17px] leading-[1.9] text-[#1A1A1A]/65 font-light">
                  Readiness matters. Permanence requires intention. Healing takes time and patience. Choose a design for yourself, not for a trend, not for another person. The commitment to aftercare is the final step in the ritual. Be sure you are ready to carry this with you forever.
                </p>
              </ParagraphReveal>
            </div>
          </div>

          {/* Right: image */}
          <FadeIn delay={0.3} className="lg:pt-24">
            <ImageReveal
              src={sunTattooArm}
              alt="Sun tattoo on forearm"
              className="aspect-[4/5] w-full object-cover rounded-sm shadow-sm"
            />
            <FadeIn delay={0.5}>
              <p className="mt-5 font-sans text-[10px] tracking-[0.2em] uppercase text-[#1A1A1A]/35 text-right">
                Sun Tattoo · Jaipur
              </p>
            </FadeIn>
          </FadeIn>
        </div>
      </section>

      {/* ── 4. PHILOSOPHY ── */}
      <section id="philosophy" className="bg-[#1A1A1A] py-32 md:py-48 px-8 md:px-14 text-[#F7F3EE]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: portrait */}
          <FadeIn className="relative">
            <ImageReveal
              src={artistPortrait}
              alt="Manpreet Kaur - tattoo artist, Jaipur"
              className="aspect-[3/4] w-full"
            />
            {/* Accent frame */}
            <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 border border-[#C8A882]/20 pointer-events-none" />
          </FadeIn>

          {/* Right: text */}
          <div className="flex flex-col gap-8 lg:gap-10">
            <div>
              <FadeIn delay={0.1}>
                <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#C8A882]">
                  The Artist
                </span>
              </FadeIn>
              <h2
                className="mt-4 font-serif font-light leading-[1.05] tracking-tight text-[#F7F3EE]"
                style={{ fontSize: 'clamp(2.4rem, 4vw, 4.2rem)' }}
              >
                <HeadingReveal text="Manpreet Kaur Brar" delay={0.1} />
              </h2>
              <FadeIn delay={0.25}>
                <p className="mt-3 font-sans text-[11px] tracking-[0.18em] uppercase text-[#F7F3EE]/40">
                  Founder · Certified, Aliens Tattoo Mumbai
                </p>
              </FadeIn>
            </div>

            <LineReveal delay={0.2} className="bg-[#F7F3EE]/10" />

            <ParagraphReveal delay={0.3}>
              <p className="font-sans text-base md:text-[17px] leading-[1.85] font-light text-[#F7F3EE]/70">
                Every tattoo studio works the same way. You call, you DM, you wait, you walk in, you negotiate. We flipped it. At Order Tattoo you place an order online, receive an estimate before you commit, and choose where the session happens: our private atelier, your home, or your hotel.
              </p>
            </ParagraphReveal>

            <ParagraphReveal delay={0.4}>
              <p className="font-sans text-base md:text-[17px] leading-[1.85] font-light text-[#F7F3EE]/70">
                Every session is one-on-one and by appointment, using US-imported equipment, single-use needles, vegan inks, and hospital-grade hygiene.
              </p>
            </ParagraphReveal>

            <LineReveal delay={0.45} className="bg-[#F7F3EE]/10" />

            <FadeIn delay={0.5}>
              <div className="flex flex-col gap-2">
                {[
                  'Fine Line',
                  'Black & Grey',
                  'Realism',
                  'Lettering & Script',
                  'Doorstep & On-Location Sessions',
                  'Corporate & Brand Collaborations',
                ].map((style, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="w-3 h-[1px] bg-[#C8A882]/50" />
                    <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-[#F7F3EE]/40">
                      {style}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 5. CONTACT ── */}
      <section id="contact" className="bg-[#EEF0F3] py-28 md:py-40 px-8 md:px-14">
        <div className="max-w-6xl mx-auto">

          <div className="mb-20">
            <FadeIn delay={0.1}>
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#3B4F6B]">
                Begin Here
              </span>
            </FadeIn>
            <h2
              className="mt-6 font-serif font-light leading-[1.05] tracking-tight text-[#1A1A1A]"
              style={{ fontSize: 'clamp(2.6rem, 5.5vw, 5.5rem)' }}
            >
              <HeadingReveal text="Tell us what you" />
              <HeadingReveal text="want to carry" delay={0.1} />
              <HeadingReveal text="with you." delay={0.2} />
            </h2>
            <div className="mt-10">
              <LineReveal className="bg-[#1A1A1A]/12" />
            </div>
          </div>

          {/* Contact links with clean, symmetrical vertical dividers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 items-center">
            {[
              { label: 'Instagram', value: '@ordertattoo.in', href: 'https://instagram.com/ordertattoo.in' },
              { label: 'WhatsApp', value: '+91 87400 07570', href: 'https://wa.me/918740007570' },
              { label: 'Web', value: 'ordertattoo.in', href: 'https://ordertattoo.in' },
            ].map((item, i) => (
              <FadeIn key={i} delay={0.1 + i * 0.12} className="w-full">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`group flex flex-col gap-2.5 py-4 px-2 md:px-10 transition-all duration-500 ${
                    i !== 0 ? 'md:border-l md:border-[#1A1A1A]/15' : ''
                  }`}
                >
                  <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#1A1A1A]/40 group-hover:text-[#3B4F6B] transition-colors duration-500">
                    {item.label}
                  </span>
                  <span className="font-serif text-2xl md:text-3xl font-light text-[#1A1A1A] group-hover:text-[#3B4F6B] transition-colors duration-500">
                    {item.value}
                  </span>
                  <span className="w-0 group-hover:w-8 h-[1px] bg-[#3B4F6B] transition-all duration-700 ease-out" />
                </a>
              </FadeIn>
            ))}
          </div>

          {/* Concise Footer 3 Points */}
          <FadeIn delay={0.4}>
            <div className="mt-28 md:mt-32 pb-4 flex flex-wrap items-center justify-center gap-4 md:gap-8 font-sans text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-[#1A1A1A]/40 font-medium">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A882]" />
                Online Estimates
              </span>
              <span className="hidden sm:inline text-[#1A1A1A]/20">·</span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A882]" />
                Private Sessions
              </span>
              <span className="hidden sm:inline text-[#1A1A1A]/20">·</span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A882]" />
                Jaipur Doorstep & Studio
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#EEF0F3] border-t border-[#1A1A1A]/10 px-8 md:px-14 py-7 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#1A1A1A]/30">
          Order Tattoo · Jaipur, India
        </span>
        <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#1A1A1A]/25">
          © 2026
        </span>
      </footer>
    </div>
  );
}
