export default function MissionPage() {
    return (
        <div className="py-24 px-12 max-w-4xl">
            <h1 className="text-5xl font-black text-text-dark mb-8 animate-slide-right">Our Mission</h1>
            <div className="h-1 w-24 bg-primary mb-12 rounded-full animate-reveal delay-100"></div>
            <div className="prose prose-lg text-gray-600 space-y-8">
                <blockquote className="text-3xl font-medium text-dark-teal italic border-l-4 border-primary pl-8 my-12 animate-slide-right delay-200">
                    "To empower New York City neighborhoods through localized infrastructure, advocacy, and direct community engagement."
                </blockquote>
                <p className="animate-reveal delay-300">
                    Our mission is rooted in the belief that sustainable change comes from within. We don't just provide services; we build the capacity of local leaders to sustain and grow their own communities.
                </p>
                <h2 className="text-3xl font-bold text-text-dark mt-16 mb-6 animate-slide-up delay-400">Our Core Values</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 list-none p-0">
                    <li className="bg-bg-gray p-8 rounded-2xl animate-scale-in delay-100">
                        <h4 className="font-bold text-text-dark mb-2">Inclusivity</h4>
                        <p className="text-sm">Every voice matters in the design of our programs.</p>
                    </li>
                    <li className="bg-bg-gray p-8 rounded-2xl animate-scale-in delay-200">
                        <h4 className="font-bold text-text-dark mb-2">Transparency</h4>
                        <p className="text-sm">Open communication and financial accountability.</p>
                    </li>
                    <li className="bg-bg-gray p-8 rounded-2xl animate-scale-in delay-300">
                        <h4 className="font-bold text-text-dark mb-2">Sustainability</h4>
                        <p className="text-sm">Built to last and evolve with neighborhood needs.</p>
                    </li>
                    <li className="bg-bg-gray p-8 rounded-2xl animate-scale-in delay-400">
                        <h4 className="font-bold text-text-dark mb-2">Equity</h4>
                        <p className="text-sm">Prioritizing resources for those who need them most.</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

