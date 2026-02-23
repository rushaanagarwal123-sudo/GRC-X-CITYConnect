export default function LeadershipPage() {
    const leaders = [
        { name: "Sarah Jenkins", role: "Executive Director", bio: "Former urban planner with 15 years of experience in Bronx community development." },
        { name: "Marcus Rivera", role: "Director of Operations", bio: "NYC native focused on logistics and grassroots organizing." },
        { name: "Dr. Elena Rossi", role: "Head of Research", bio: "Social scientist specializing in urban connectivity and neighborhood health." },
    ];

    return (
        <div className="py-24 px-12 max-w-5xl">
            <h1 className="text-5xl font-black text-text-dark mb-8 animate-slide-right">Our Leadership</h1>
            <div className="h-1 w-24 bg-primary mb-12 rounded-full animate-reveal delay-100"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
                {leaders.map((leader, index) => (
                    <div key={leader.name} className="flex flex-col animate-scale-in" style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
                        <div className="w-full aspect-square bg-bg-gray rounded-3xl mb-6 overflow-hidden group">
                            {/* Image placeholder */}
                            <div className="w-full h-full flex items-center justify-center text-gray-300 font-bold text-lg italic group-hover:bg-primary/5 transition-colors duration-500">
                                Photo Coming Soon
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-text-dark mb-1">{leader.name}</h3>
                        <p className="text-primary font-bold text-sm mb-4 uppercase tracking-wider">{leader.role}</p>
                        <p className="text-gray-500 text-sm leading-relaxed">{leader.bio}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

