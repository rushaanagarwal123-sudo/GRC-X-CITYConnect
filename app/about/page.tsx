export default function AboutPage() {
    return (
        <div className="py-24 px-12 max-w-4xl">
            <h1 className="text-5xl font-black text-text-dark mb-8">About Us</h1>
            <div className="h-1 w-24 bg-primary mb-12 rounded-full"></div>
            <div className="prose prose-lg text-gray-600 space-y-8">
                <p>
                    Founded in 2024, CityConnect is a grassroots nonprofit organization dedicated to bridging the digital and social divide in New York City's underserved neighborhoods.
                </p>
                <p>
                    We believe that every New Yorker deserves access to the tools and networks necessary to thrive in the 21st century. Our team works on the ground in the Bronx and Northern Manhattan to implement pilot programs that foster community growth, education, and economic opportunity.
                </p>
                <h2 className="text-3xl font-bold text-text-dark mt-16 mb-6">Our Story</h2>
                <p>
                    What started as a small group of neighborhood advocates in Melrose has grown into a city-wide initiative. Our approach is simple: listen to the community first, then build the solutions they need.
                </p>
            </div>
        </div>
    );
}
