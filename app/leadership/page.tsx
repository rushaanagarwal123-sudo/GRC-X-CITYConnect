import Image from "next/image";

export default function LeadershipPage() {
    // Helper for GitHub Pages asset paths
    const asset = (path: string) => `/GRC-X-CITYConnect${path}`;

    const leaders = [
        {
            name: "Richard Liu",
            role: "Executive Director",
            bio: "Former urban planner with 15 years of experience in Bronx community development.",
            image: "/Richard.jpeg"
        },
        {
            name: "Laxmi Viswanathan",
            role: "Director of Operations",
            bio: "NYC native focused on logistics and grassroots organizing.",
            image: "/Laxmi.jpeg"
        },
        {
            name: "Rushaan Argawal",
            role: "Head of Research",
            bio: "Social scientist specializing in urban connectivity and neighborhood health.",
            image: "/Rushaan.jpeg"
        },
        {
            name: "Roberto Jay",
            role: "Community Liaison",
            bio: "Advocate for local neighborhood leaders and sustainable growth initiatives.",
            image: "/Roberto.jpeg"
        },
    ];

    return (
        <div className="py-12 px-5 md:py-24 md:px-12 max-w-6xl">
            <h1 className="text-3xl md:text-5xl font-black text-text-dark mb-6 md:mb-8 animate-slide-right">Our Leadership</h1>
            <div className="h-1 w-24 bg-primary mb-8 md:mb-12 rounded-full animate-reveal delay-100"></div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10 mt-10 md:mt-16">
                {leaders.map((leader, index) => (
                    <div key={leader.name} className="flex flex-col animate-scale-in" style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
                        <div className="w-full aspect-square bg-bg-gray rounded-2xl md:rounded-3xl mb-4 md:mb-6 overflow-hidden group relative shadow-lg">
                            <Image
                                src={asset(leader.image)}
                                alt={leader.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                priority={index < 4}
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                        </div>
                        <h3 className="text-lg md:text-2xl font-bold text-text-dark mb-1">{leader.name}</h3>
                        <p className="text-primary font-bold text-xs md:text-sm mb-2 md:mb-4 uppercase tracking-wider">{leader.role}</p>
                        <p className="text-gray-500 text-xs md:text-sm leading-relaxed hidden md:block">{leader.bio}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
