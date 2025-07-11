'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [activeSection, setActiveSection] = useState('photography');
    const [currentPortrait, setCurrentPortrait] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const portraits = [
        {
            src: 'https://res.cloudinary.com/dexibw60d/image/upload/c_fit/v1748793219/aks-vogue2_emlhkt.jpg',
            alt: 'Portrait photograph 1',
        },
        {
            src: 'https://res.cloudinary.com/dexibw60d/image/upload/c_fit/v1748793219/aks-vogue2_emlhkt.jpg',
            alt: 'Portrait photograph 1',
        },
        {
            src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1748792833/aks-vogue_vvp1yr.png',
            alt: 'Portrait photograph 2',
        },
        {
            src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1748792832/Fashion_France_59__ctvxex.png',
            alt: 'Portrait photograph 3',
        },
        {
            src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1748792828/EB8B5455-5183-40D5-9E9B-E9C91EAACA0D_t6wvgg.jpg',
            alt: 'Portrait photograph 4',
        },
        {
            src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1748796319/88BC5FB3-2470-4644-BFE8-89071E4A65E3_kovmho.jpg',
            alt: 'Portrait photograph 5',
        },
        // Added 4 new photos
        {
            src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749035067/DSC01716_u4oxcs.jpg',
            alt: 'Portrait photograph 6',
        },
        {
            src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749035550/Meher_fgpetp.jpg',
            alt: 'Portrait photograph 7',
        },
        {
            src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1748792834/73_zhllvh.jpg',
            alt: 'Portrait photograph 8',
        },
        {
            src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749035550/Abmol_iwxrya.jpg',
            alt: 'Portrait photograph 9',
        },
        // Added new photo
        {
            src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749059073/Interior_Pages_V56_1562_amqwwr.jpg',
            alt: 'Portrait photograph 10',
        },
    ];

    // Auto-rotate portraits
    useEffect(() => {
        // Only set up the interval if not paused
        if (!isPaused) {
            const interval = setInterval(() => {
                setCurrentPortrait((prev) => (prev + 1) % portraits.length);
            }, 2500); // Change portrait every 3 seconds

            return () => clearInterval(interval); // Cleanup on unmount
        }
    }, [portraits.length, isPaused]);

    useEffect(() => {
        setIsLoaded(true);

        // Close dropdown when clicking outside
        const handleClickOutside = (event) => {
            const dropdown = document.getElementById('contact-dropdown');
            const button = event.target.closest('button');
            const isButtonClick =
                button &&
                button.nextElementSibling &&
                button.nextElementSibling.id === 'contact-dropdown';

            if (dropdown && !dropdown.contains(event.target) && !isButtonClick) {
                dropdown.classList.add('hidden');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const sections = [
        { id: 'photography', label: 'Photography', status: 'enabled' },
        { id: 'design', label: 'Design', status: 'disabled' },
    ];

    const featuredWorks = [
        // Photography works - Fashion
        {
            id: 1,
            title: 'Fashion',
            category: 'Photography',
            subcategory: 'Fashion',
            description: 'Capturing the essence of style and expression',
            image: 'https://res.cloudinary.com/dexibw60d/image/upload/v1748792832/Fashion_France_59__ctvxex.png',
        },
        // Photography works - Portraits
        {
            id: 2,
            title: 'Portraits',
            category: 'Photography',
            subcategory: 'Portraits',
            description: 'Intimate portraits exploring vulnerability and authenticity',
            image: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749065358/portraits/port-12.jpg',
        },
        // Photography works - Fine Arts
        {
            id: 3,
            title: 'Fine Arts',
            category: 'Photography',
            subcategory: 'Fine Arts',
            description: 'Artistic expressions through the photographic medium',
            image: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072544/fineart/Fine-4.jpg',
        },
        // Photography works - Editorial
        {
            id: 4,
            title: 'Editorial',
            category: 'Photography',
            subcategory: 'Editorial',
            description: 'Visual storytelling for magazines and publications',
            image: 'https://res.cloudinary.com/dexibw60d/image/upload/v1748796319/88BC5FB3-2470-4644-BFE8-89071E4A65E3_kovmho.jpg',
        },
        // Photography works - Travel
        {
            id: 5,
            title: 'Travel',
            category: 'Photography',
            subcategory: 'Travel',
            description: 'Documenting journeys and capturing diverse cultures',
            image: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749073187/Travel/Travel-9.jpg',
        },
        // Photography works - Events
        {
            id: 6,
            title: 'Events',
            category: 'Photography',
            subcategory: 'Events',
            description: 'Preserving special moments and celebrations',
            image: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749073433/Event-Thumbnail.png',
        },
        // Design works - Only keeping one item
        {
            id: 7,
            title: 'Visual Identity',
            category: 'Design',
            description: 'Creating cohesive and impactful brand experiences',
            image: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749053305/7_ykmvwr.jpg',
        },
    ];

    return (
        <div
            className={`min-h-screen bg-white text-gray-900 font-serif transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            data-oid="bciaz.t"
        >
            {/* Navigation */}
            <nav
                className="fixed top-0 left-0 right-0 z-50 bg-white/95 border-b border-gray-200"
                data-oid="3avhjhr"
            >
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12" data-oid="tmh_iep">
                    <div
                        className="flex justify-between items-center h-16 sm:h-20"
                        data-oid="rjh1x_u"
                    >
                        <Link
                            href="/"
                            className="text-xl sm:text-2xl tracking-tighter font-light"
                            data-oid="ck6h-xp"
                        >
                            aksartiste
                        </Link>
                        <div
                            className="hidden md:flex space-x-8 text-sm uppercase tracking-widest"
                            data-oid="k80mejt"
                        >
                            <Link
                                href="#work"
                                className="hover:text-black/70 transition-colors"
                                data-oid="3v04.le"
                            >
                                Work
                            </Link>
                            <Link
                                href="#about"
                                className="hover:text-black/70 transition-colors"
                                data-oid="kpqdq20"
                            >
                                About
                            </Link>
                            <Link
                                href="#journal"
                                className="hover:text-black/70 transition-colors"
                                data-oid="-tw42d0"
                            >
                                Journal
                            </Link>
                            <Link
                                href="#contact"
                                className="hover:text-black/70 transition-colors"
                                data-oid="qlig8h7"
                            >
                                Contact
                            </Link>
                        </div>
                        <button
                            className="md:hidden p-2 -mr-2" /* Added padding for better touch target */
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                            data-oid="lwq_1jm"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                                data-oid="mn9xvma"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    data-oid="k6txyzm"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence data-oid="v5su5aa">
                    {mobileMenuOpen && (
                        <motion.div
                            className="md:hidden absolute top-16 sm:top-20 left-0 right-0 bg-white border-b border-gray-200 shadow-lg"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            data-oid="qkl:qny"
                        >
                            <div
                                className="flex flex-col py-4 px-6 sm:px-8 lg:px-12 space-y-6 text-sm uppercase tracking-widest"
                                /* Increased spacing between items */ data-oid="0r9hbw:"
                            >
                                <Link
                                    href="#work"
                                    className="py-3 block hover:text-black/70 transition-colors" /* Increased padding and made block for larger touch target */
                                    onClick={() => setMobileMenuOpen(false)}
                                    data-oid="0efzis0"
                                >
                                    Work
                                </Link>
                                <Link
                                    href="#about"
                                    className="py-3 block hover:text-black/70 transition-colors" /* Increased padding and made block for larger touch target */
                                    onClick={() => setMobileMenuOpen(false)}
                                    data-oid="vcxtp:d"
                                >
                                    About
                                </Link>
                                <Link
                                    href="#journal"
                                    className="py-3 block hover:text-black/70 transition-colors" /* Increased padding and made block for larger touch target */
                                    onClick={() => setMobileMenuOpen(false)}
                                    data-oid="-:jertd"
                                >
                                    Journal
                                </Link>
                                <Link
                                    href="#contact"
                                    className="py-3 block hover:text-black/70 transition-colors" /* Increased padding and made block for larger touch target */
                                    onClick={() => setMobileMenuOpen(false)}
                                    data-oid="3kbss-c"
                                >
                                    Contact
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Hero Section */}
            <section
                className="pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto"
                /* Adjusted top padding for small screens */ data-oid="7dl7bve"
            >
                <div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center"
                    data-oid="le-.bbl"
                >
                    <div className="order-2 lg:order-1" data-oid="2mrm72:">
                        <h1
                            className="text-3xl sm:text-5xl md:text-6xl font-light leading-tight mb-6 sm:mb-8"
                            data-oid="ono.lh2"
                        >
                            A living archive of{' '}
                            <span className="italic" data-oid="q4ly2_v">
                                craft
                            </span>{' '}
                            and{' '}
                            <span className="italic" data-oid="uljm0f3">
                                emotion
                            </span>
                        </h1>
                        <p
                            className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 max-w-xl leading-relaxed"
                            data-oid="o7c6iko"
                        >
                            Photographs. Words. Offerings. All of it, a way to say: I was here.
                        </p>
                        <button
                            className="w-full sm:w-auto px-8 py-3 border border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
                            onClick={() => {
                                document
                                    .getElementById('work')
                                    ?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            data-oid="k_cn688"
                        >
                            Explore Work
                        </button>
                    </div>
                    <div className="order-1 lg:order-2" data-oid="r:..x-w">
                        <div
                            className="aspect-[4/5] bg-gray-100 overflow-hidden relative cursor-pointer"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                            data-oid="7bm3o6r"
                        >
                            <Image
                                key={currentPortrait}
                                src={portraits[currentPortrait].src}
                                alt={portraits[currentPortrait].alt}
                                className="w-full h-full object-contain hover:cursor-zoom-in transition-opacity duration-500"
                                loading="eager"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                priority
                                data-oid="c-mfykv"
                            />

                            {/* Navigation controls removed */}

                            {/* Indicators removed */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Work Section */}
            <section
                id="work"
                className="py-16 sm:py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto"
                data-oid="kjwmgad"
            >
                <div className="mb-12 sm:mb-16" data-oid="r:i9s22">
                    <h2 className="text-2xl sm:text-3xl font-light mb-6 sm:mb-8" data-oid="0sng4v:">
                        Featured Work
                    </h2>
                    <div className="flex flex-wrap border-b border-gray-200" data-oid="p5p8.iv">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => setActiveSection(section.id)}
                                className={`py-3 px-2 sm:px-5 text-xs sm:text-sm uppercase tracking-wider mr-1 sm:mr-4 mb-1 ${activeSection === section.id ? 'border-b border-black' : 'text-gray-500 hover:text-black transition-colors'}`}
                                /* Adjusted spacing for very small screens */ data-oid="-irtxuv"
                            >
                                {section.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 overflow-x-auto"
                    data-oid="h4r1:81"
                >
                    {featuredWorks
                        .filter((work) => work.category.toLowerCase() === activeSection)
                        .map((work) => (
                            <Link
                                key={work.id}
                                href={
                                    work.category !== 'Design' && work.id !== 6
                                        ? `/work/${work.category.toLowerCase()}/${work.subcategory ? work.subcategory.toLowerCase().replace(/\s+/g, '-') : work.title.toLowerCase().replace(/\s+/g, '-')}`
                                        : ``
                                }
                                scroll={work.category !== 'Design' && work.id !== 6}
                                className={`group ${work.category === 'Design' ? 'relative' : 'cursor-pointer'}`}
                                data-oid=":g:yh2-"
                            >
                                <div
                                    className="aspect-[3/4] bg-gray-100 overflow-hidden mb-4 relative"
                                    data-oid="nyr8y_9"
                                >
                                    <Image
                                        src={work.image}
                                        alt={work.title}
                                        className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${work.category === 'Design' ? 'blur-sm' : ''}`}
                                        fill
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                                        data-oid="h2a-lx0"
                                    />

                                    {(work.category === 'Design' || work.id === 6) && (
                                        <div
                                            className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm"
                                            data-oid="wxmrskl"
                                        >
                                            <div
                                                className="bg-white/80 backdrop-blur-sm px-6 py-4 rounded-md text-center"
                                                data-oid="rjmrj3c"
                                            >
                                                <p
                                                    className="text-lg font-medium text-black"
                                                    data-oid="n40g.wn"
                                                >
                                                    Coming Soon
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="py-2" data-oid="g60-_no">
                                    <h3 className="text-xl font-light mb-2" data-oid="ivl:jms">
                                        {work.subcategory || work.category}
                                    </h3>
                                    <p className="text-sm text-gray-600" data-oid="c3q5wkm">
                                        {work.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                </div>

                <div className="mt-16 text-center" data-oid="04ddih7">
                    <button
                        className="w-full sm:w-auto px-8 py-3 border border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
                        onClick={() => window.open('https://forms.gle/DJhsJ47eAuFmzWbm7', '_blank')}
                        data-oid="bl0oq_6"
                    >
                        Drop A Feeling
                    </button>
                </div>
            </section>

            {/* About Section */}
            <section
                id="about"
                className="py-16 sm:py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto"
                data-oid="onl9thr"
            >
                <div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center"
                    data-oid="jpmbw8k"
                >
                    <div
                        className="aspect-[4/5] bg-gray-100 overflow-hidden relative"
                        data-oid="mwhb3qi"
                    >
                        <Image
                            src="https://res.cloudinary.com/dexibw60d/image/upload/v1749043892/Screenshot_2025-06-04_at_7.00.25_PM_rw8lnr.png"
                            alt="Creator portrait"
                            className="object-cover"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            data-oid="c6mnfsw"
                        />
                    </div>
                    <div data-oid="jp_ox_n">
                        <h2
                            className="text-2xl sm:text-3xl font-light mb-6 sm:mb-8"
                            data-oid="ax627.0"
                        >
                            Hi, I&apos;m Akshay
                        </h2>
                        <p
                            className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed"
                            data-oid="l:7yl3o"
                        >
                            I&apos;m a multidisciplinary artist based in Mumbai. While portrait and
                            fashion photography are at the core of my practice, my creative work
                            extends into writing, fine arts, creative direction, and emotion-led
                            visual storytelling rooted in social awareness.
                        </p>
                        <p
                            className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 leading-relaxed"
                            data-oid="ku:08q."
                        >
                            I believe in capturing people in their most authentic, unfiltered
                            moments, and I use my background in writing to explore the deeper
                            narratives behind each frame. My projects often revolve around themes
                            such as mental health, body positivity, disability representation, and
                            LGBTQ+ visibility, giving voice to stories that are too often
                            overlooked.
                        </p>
                        <Link href="/about" className="inline-block" data-oid="_avpqbg">
                            <button
                                className="w-full sm:w-auto px-8 py-3 border border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
                                /* Made full width on mobile */ data-oid="wdu6eyl"
                            >
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Journal Section */}
            <section
                id="journal"
                className="py-16 sm:py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto"
                data-oid="rnqneqm"
            >
                <h2 className="text-2xl sm:text-3xl font-light mb-8 sm:mb-12" data-oid="45896dk">
                    Journal
                </h2>
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
                    data-oid="42eqpo6"
                >
                    {[1, 2, 3, 4].map((item) => (
                        <Link
                            href={`/journal/${item}`}
                            key={item}
                            className="group cursor-pointer"
                            data-oid="_su6yn4"
                        >
                            <div
                                className="aspect-video bg-gray-100 overflow-hidden mb-4 relative"
                                data-oid="etu9agr"
                            >
                                <Image
                                    src={
                                        item === 1
                                            ? 'https://res.cloudinary.com/dexibw60d/image/upload/v1749034991/output_clzh4q.png'
                                            : item === 2
                                              ? 'https://res.cloudinary.com/dexibw60d/image/upload/v1749038207/output-3_gpz3oa.png'
                                              : item === 3
                                                ? 'https://res.cloudinary.com/dexibw60d/image/upload/v1749045727/2tt_vvcvga.jpg'
                                                : item === 4
                                                  ? 'https://res.cloudinary.com/dexibw60d/image/upload/v1749046669/4th-journal-image_drmdrn.png'
                                                  : `https://images.unsplash.com/photo-167${1000000 + item}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80`
                                    }
                                    alt={
                                        item === 1
                                            ? 'Granny Always Knew - Journal entry'
                                            : item === 4
                                              ? 'Ashes to Intention journal entry'
                                              : 'Journal entry'
                                    }
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    data-oid="b46tdiw"
                                />
                            </div>
                            <div className="py-2" data-oid="azpgx:5">
                                <p
                                    className="text-xs uppercase tracking-wider text-gray-500 mb-1"
                                    data-oid="zele8fm"
                                >
                                    {item === 4 ? 'June 22, 2023' : 'May 15, 2023'}
                                </p>
                                <h3 className="text-xl font-light mb-2" data-oid="6boms7h">
                                    {item === 1
                                        ? 'Granny Always Knew'
                                        : item === 2
                                          ? 'We packed light, but…'
                                          : item === 4
                                            ? 'Ashes to Intention'
                                            : 'Cigarettes'}
                                </h3>
                                <p className="text-sm text-gray-600" data-oid="yl4ua58">
                                    {item === 1
                                        ? 'Reflections on childhood wisdom and the perspective that comes with looking back.'
                                        : item === 2
                                          ? 'A journey through mountains, friendship, and understanding the complexities of trauma and healing.'
                                          : item === 4
                                            ? 'From rejection to redemption: my journey through addiction and finding strength in art.'
                                            : 'Exploring how vulnerability creates connection in both visual and written narratives.'}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="mt-16 text-center" data-oid="l25r98q">
                    <Link href="/journal/1" data-oid="-l1x9o8">
                        <button
                            className="w-full sm:w-auto px-8 py-3 border border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
                            /* Made full width on mobile */ data-oid="q_m:n05"
                        >
                            View All Posts
                        </button>
                    </Link>
                </div>
            </section>

            {/* Featured In Section - Brand Logo Marquee */}
            <section className="py-16 sm:py-20 border-t border-gray-100" data-oid="fljq7.y">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12" data-oid="qnxireg">
                    <h2
                        className="text-2xl sm:text-3xl font-light mb-12 text-center"
                        data-oid="q_:ln9g"
                    >
                        Featured In
                    </h2>

                    <style jsx global data-oid="67c5o_p">{`
                        @keyframes marquee {
                            0% {
                                transform: translateX(0);
                            }
                            100% {
                                transform: translateX(-100%);
                            }
                        }
                        .marquee-container {
                            overflow: hidden;
                            position: relative;
                            width: 100%;
                        }
                        .marquee-content {
                            display: flex;
                            animation: marquee 40s linear infinite;
                            width: max-content;
                        }
                        .marquee-reverse {
                            animation-direction: reverse;
                        }
                    `}</style>

                    {/* First row of logos */}
                    <div className="marquee-container" data-oid="bca58ey">
                        <div className="marquee-content" data-oid="4-ziuk5">
                            {[
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-1.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-2.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-3.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-4.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-5.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-6.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-7.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-8.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-9.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-10.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-11.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-12.png',
                            ].map((logoSrc, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center mx-6 sm:mx-8"
                                    data-oid="wgpn0:k"
                                >
                                    <Image
                                        src={logoSrc}
                                        alt={`Brand logo ${index + 1}`}
                                        className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                                        width={96}
                                        height={48}
                                        sizes="(max-width: 768px) 96px, 128px"
                                        data-oid="2synr48"
                                    />
                                </div>
                            ))}

                            {/* Duplicate for seamless looping */}
                            {[
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-1.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-2.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-3.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-4.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-5.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-6.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-7.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-8.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-9.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-10.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-11.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-12.png',
                            ].map((logoSrc, index) => (
                                <div
                                    key={`dup-${index}`}
                                    className="flex items-center justify-center mx-6 sm:mx-8"
                                    data-oid="nno-diq"
                                >
                                    <Image
                                        src={logoSrc}
                                        alt={`Brand logo ${index + 1}`}
                                        className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                                        width={96}
                                        height={48}
                                        sizes="(max-width: 768px) 96px, 128px"
                                        data-oid="yqat_n4"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Second row of logos (moving in opposite direction) */}
                    <div className="marquee-container mt-8" data-oid="cpbov7m">
                        <div className="marquee-content marquee-reverse" data-oid="ydqrjwu">
                            {[
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-13.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-14.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-15.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-16.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-17.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-18.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-19.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-20.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-21.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-22.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-23.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-24.png',
                            ].map((logoSrc, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center mx-6 sm:mx-8"
                                    data-oid="5n:474m"
                                >
                                    <Image
                                        src={logoSrc}
                                        alt={`Brand logo ${index + 13}`}
                                        className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                                        width={96}
                                        height={48}
                                        sizes="(max-width: 768px) 96px, 128px"
                                        data-oid="81pfthp"
                                    />
                                </div>
                            ))}

                            {/* Duplicate for seamless looping */}
                            {[
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-13.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-14.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-15.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-16.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-17.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-18.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-19.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-20.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-21.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-22.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-23.png',
                                'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-24.png',
                            ].map((logoSrc, index) => (
                                <div
                                    key={`dup-${index}`}
                                    className="flex items-center justify-center mx-6 sm:mx-8"
                                    data-oid="tjb43t7"
                                >
                                    <Image
                                        src={logoSrc}
                                        alt={`Brand logo ${index + 13}`}
                                        className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                                        width={96}
                                        height={48}
                                        sizes="(max-width: 768px) 96px, 128px"
                                        data-oid="x_p.wsg"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section
                id="contact"
                className="py-16 sm:py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto"
                data-oid="93vg_ky"
            >
                <div className="max-w-2xl mx-auto text-center" data-oid="kiywc-0">
                    <h2 className="text-2xl sm:text-3xl font-light mb-4 sm:mb-6" data-oid="1a888dk">
                        Let&apos;s Connect
                    </h2>
                    <p
                        className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10"
                        data-oid="sji6gbr"
                    >
                        Interested in working together or just want to say hello? I&apos;d love to
                        hear from you.
                    </p>
                    <div className="relative inline-block" data-oid="ng36hwo">
                        <button
                            className="w-full sm:w-auto px-12 py-4 border border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
                            onClick={() => {
                                const dropdown = document.getElementById('contact-dropdown');
                                if (dropdown) {
                                    dropdown.classList.toggle('hidden');
                                }
                            }}
                            data-oid="wai5b4e"
                        >
                            Get in Touch
                        </button>
                        <div
                            id="contact-dropdown"
                            className="hidden absolute z-10 mt-2 w-full sm:w-64 bg-white border border-gray-200 shadow-lg rounded-sm transition-all duration-300 ease-in-out"
                            data-oid="2fyrqu4"
                        >
                            <div className="py-1" data-oid="y-_xt3s">
                                <Link
                                    href="https://wa.me/919660773383"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center px-4 py-3 text-sm text-gray-800 hover:bg-gray-50 transition-colors"
                                    data-oid="8pm78wj"
                                >
                                    <svg
                                        className="w-5 h-5 mr-3 text-green-600"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="p12j3k3"
                                    >
                                        <path
                                            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                                            data-oid="ri4099f"
                                        />
                                    </svg>
                                    WhatsApp
                                </Link>
                                <Link
                                    href="mailto:aksartiste@gmail.com"
                                    className="flex items-center px-4 py-3 text-sm text-gray-800 hover:bg-gray-50 transition-colors"
                                    data-oid="6vv_388"
                                >
                                    <svg
                                        className="w-5 h-5 mr-3 text-gray-700"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        data-oid="su202wf"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                            data-oid="asf6f7j"
                                        />
                                    </svg>
                                    Email
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer
                className="py-10 sm:py-12 px-4 sm:px-8 lg:px-12 border-t border-gray-200"
                data-oid="tpvxt5h"
            >
                <div className="max-w-7xl mx-auto" data-oid="sx_eu65">
                    <div
                        className="flex flex-col md:flex-row justify-between items-center"
                        data-oid="uh0gjc6"
                    >
                        <div className="mb-6 md:mb-0" data-oid="3nrigix">
                            <Link
                                href="/"
                                className="text-xl tracking-tighter font-light"
                                data-oid="vuu1e-6"
                            >
                                aksartiste
                            </Link>
                        </div>
                        <div
                            className="flex flex-wrap justify-center space-x-4 sm:space-x-8 text-sm uppercase tracking-widest mb-8 md:mb-0"
                            data-oid="lss1h47"
                        >
                            <Link
                                href="#work"
                                className="hover:text-black/70 transition-colors"
                                data-oid="of2rbnk"
                            >
                                Work
                            </Link>
                            <Link
                                href="#about"
                                className="hover:text-black/70 transition-colors"
                                data-oid="7bwts6a"
                            >
                                About
                            </Link>
                            <Link
                                href="#journal"
                                className="hover:text-black/70 transition-colors"
                                data-oid="vsibqp6"
                            >
                                Journal
                            </Link>
                            <Link
                                href="#contact"
                                className="hover:text-black/70 transition-colors"
                                data-oid="s-1g3wj"
                            >
                                Contact
                            </Link>
                        </div>
                        <div className="flex space-x-8 sm:space-x-6" data-oid="5xizdwk">
                            {/* Increased spacing for touch targets */}
                            <a
                                href="https://www.instagram.com/aksartiste"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-black transition-colors"
                                data-oid="wp_b:9q"
                            >
                                <span className="sr-only" data-oid="k.m4xy3">
                                    Instagram
                                </span>
                                <svg
                                    className="h-6 w-6 sm:h-5 sm:w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    data-oid="ndcwjy4"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clipRule="evenodd"
                                        data-oid="c:x7mei"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://x.com/aksartiste"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-black transition-colors"
                                data-oid=".c.rtsk"
                            >
                                <span className="sr-only" data-oid="zo44:.:">
                                    Twitter
                                </span>
                                <svg
                                    className="h-6 w-6 sm:h-5 sm:w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    data-oid="odt5unw"
                                >
                                    <path
                                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                        data-oid="cll7gkj"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://pin.it/1Muso2RAZ"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-black transition-colors"
                                data-oid="nut8__j"
                            >
                                <span className="sr-only" data-oid="wemd6pq">
                                    Pinterest
                                </span>
                                <svg
                                    className="h-6 w-6 sm:h-5 sm:w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    data-oid="it:zw9y"
                                >
                                    <path
                                        d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        data-oid="w37ozfe"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://www.behance.net/aksartiste"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-black transition-colors"
                                data-oid="2ipv:uc"
                            >
                                <span className="sr-only" data-oid="_lw6bej">
                                    Behance
                                </span>
                                <svg
                                    className="h-6 w-6 sm:h-5 sm:w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    data-oid="e6uua--"
                                >
                                    <path
                                        d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H13.96c.13 3.211 3.483 3.312 4.588 2.029h3.178zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"
                                        data-oid="4p7whxg"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div
                        className="mt-10 pt-8 border-t border-gray-200 text-center text-sm text-gray-500"
                        data-oid="li4nwlh"
                    >
                        <p data-oid="y61ihwl">
                            © {new Date().getFullYear()} aksartiste. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
