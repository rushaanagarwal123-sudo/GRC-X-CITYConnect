import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-text-dark text-white py-12 px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                    <h3 className="text-xl font-bold mb-6 text-primary">CityConnect</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Building stronger, more connected communities across New York City through grassroots initiatives and primary pilot programs.
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold mb-6">Quick Links</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link href="/mission" className="hover:text-primary transition-colors">Our Mission</Link></li>
                        <li><Link href="/leadership" className="hover:text-primary transition-colors">Our Leadership</Link></li>
                        <li><Link href="/financials" className="hover:text-primary transition-colors">Our Financials</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-6">Location</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Melrose Park, Bronx<br />
                        New York, NY 10451<br />
                        United States
                    </p>
                </div>
            </div>
            <div className="max-w-6xl mx-auto border-t border-white/10 mt-12 pt-8 text-center text-xs text-gray-500">
                &copy; {new Date().getFullYear()} CityConnect. All rights reserved. WCAG AA Compliant.
            </div>
        </footer>
    );
};

export default Footer;
