"use client"
import React from 'react'
import ViewWorkButton from '../header/ViewWorkButton'

const projects = [
    {
        id: 'gary-neville',
        year: '2025',
        client: 'Gary Neville',
        tags: ['Branding', 'Website', 'SEO'],
        title: "Refreshing Gary Neville's Digital Presence",
        description: "A bold editorial art direction that mirrors the energy of his personal brand.",
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1470&auto=format&fit=crop',
        badge: null,
    },
    {
        id: 'nth-degree',
        year: '2025',
        client: 'Nth Degree',
        tags: ['Website', 'Interior'],
        title: 'Furniture Designed To The Greatest Extent',
        description: 'Digital showroom for premium architecture studios with cinematic visuals.',
        image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1469&auto=format&fit=crop',
        badge: 'Our Work',
    },
    {
        id: 'sketch-studios',
        year: '2025',
        client: 'Sketch Studios',
        tags: ['Branding', 'Website'],
        title: 'A Workplace Consultancy Creating Inspiring Spaces',
        description: 'Strategy, design, and no-code build for a fast-scaling studio.',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop',
        badge: null,
    },
    {
        id: 'ymu',
        year: '2025',
        client: 'YMU',
        tags: ['Website','Branding'],
        title: 'Redefining A Leading Global Talent Group',
        description: 'Responsive experience system tailored for talent and brand partners.',
        image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1472&auto=format&fit=crop',
        badge: 'Website',
    }
]

const ProjectCard = ({ project }) => {
    const [cursorPos, setCursorPos] = React.useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = React.useState(false)
    const lidRef = React.useRef(null)

    const handlePointer = (event) => {
        const bounds = event.currentTarget.getBoundingClientRect()
        setCursorPos({
            x: event.clientX - bounds.left,
            y: event.clientY - bounds.top,
        })
    }

    const cardClasses = `group relative isolate aspect-[4/3] w-full overflow-hidden rounded-[32px] bg-[#0c0d12] transition-all duration-500 hover:-translate-y-2 ${isHovering ? 'cursor-none' : 'cursor-pointer'}`

    return (
        <div
            className={cardClasses}
            onMouseMove={handlePointer}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full rounded-[32px] object-cover transition duration-700 ease-out group-hover:scale-105"
                loading="lazy"
            />
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-black/10 via-black/40 to-black/80 transition duration-500 group-hover:via-black/60" />

            {/* Hover Tabs */}
            <div ref={lidRef} className="pointer-events-none absolute right-0 top-0 flex w-1/2 translate-y-[-80%] justify-end gap-3 rounded-[40px] bg-[#16171e]/95 px-8 py-5 opacity-0 shadow-[0_20px_40px_rgba(0,0,0,0.45)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-[14px] group-hover:opacity-100">
                {project.tags.map((tag) => (
                    <span
                        key={`${project.id}-${tag}`}
                        className="rounded-full bg-[#202129] px-7 py-2 text-[13px] font-medium text-white/90 shadow-[0_10px_20px_rgba(0,0,0,0.45)]"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* {project.badge && (
                <div className="absolute right-6 top-6 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                    {project.badge}
                </div>
            )} */}

            {/* Card Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                    <span>{project.year}</span>
                    <span className="text-[#ff6600]">•</span>
                    <span>{project.client}</span>
                </div>
                <h3 className="mt-2 text-[26px] font-semibold leading-tight text-white">
                    {project.title}
                </h3>
            </div>

            {/* Cursor Accent */}
            <div className="pointer-events-none absolute inset-0">
                <span
                    className="absolute -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 ease-out"
                    style={{
                        left: cursorPos.x,
                        top: cursorPos.y,
                        opacity: isHovering ? 1 : 0,
                        transform: `translate(-50%, -50%) scale(${isHovering ? 1 : 0.95})`
                    }}
                >
                    <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#ff7a18] via-[#ff6600] to-[#ff3d00] text-white shadow-[0_25px_50px_rgba(255,102,0,0.45)]">
                        <span className="absolute inset-0 rounded-full border border-white/25" aria-hidden></span>
                        <span className="absolute inset-[-8px] -z-10 animate-ping rounded-full border border-[#ff6600]/40" aria-hidden></span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-5 w-5"
                        >
                            <path d="M12 19V5" strokeLinecap="round" />
                            <path d="M8 9l4-4 4 4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </span>
            </div>
        </div>
    )
}

function ProjectShowcase() {
    return (
        <section className="mx-auto max-w-[1400px] px-6 py-24 text-white lg:px-[40px]">
            <div className="grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-7">
                    <ProjectCard project={projects[0]} />
                </div>

                <div className="flex flex-col gap-6 lg:col-span-5">
                    <div className="justify-between rounded-[32px] border-white/10 bg-gradient-to-b  p-8">
                        <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#ff6600]">
                            <span className="text-lg">•</span>
                            <span>Our Work</span>
                        </div>
                        <div className='top-heading-bussiness-cards'>
                        <div className="space-y-4 text-left">
                            <h2 className="text-4xl font-semibold leading-tight lg:text-5xl">
                                Take A Look at Our Projects
                            </h2>
                        </div>
                        <div className="mt-4">
                            <ViewWorkButton label="See Our Work" />
                        </div>
                        </div>
                    </div>
                    <ProjectCard project={projects[1]} />
                </div>

                <div className="lg:col-span-6">
                    <ProjectCard project={projects[2]} />
                </div>
                <div className="lg:col-span-6">
                    <ProjectCard project={projects[3]} />
                </div>
            </div>
        </section>
    )
}

export default ProjectShowcase
