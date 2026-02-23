export default function FinancialsPage() {
    return (
        <div className="py-24 px-12 max-w-4xl">
            <h1 className="text-5xl font-black text-text-dark mb-8 animate-slide-right">Our Financials</h1>
            <div className="h-1 w-24 bg-primary mb-12 rounded-full animate-reveal delay-100"></div>

            <div className="bg-bg-gray p-12 rounded-3xl mb-16 animate-scale-in delay-200">
                <h2 className="text-2xl font-bold mb-6">Transparency Matters</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                    CityConnect is committed to 100% financial transparency. We believe our donors and the communities we serve have a right to know exactly how funds are being utilized based on our latest operating audit.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h4 className="font-bold text-text-dark mb-4">Expense Allocation</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-sm">
                                <span>Programs & Initiatives</span>
                                <span className="font-bold">85.8%</span>
                            </div>
                            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-primary w-[85.8%] transition-all duration-1000 ease-out"></div>
                            </div>

                            <div className="flex justify-between items-center text-sm mt-4">
                                <span>Management & General</span>
                                <span className="font-bold">9.5%</span>
                            </div>
                            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-dark-teal w-[9.5%] transition-all duration-1000 ease-out delay-200"></div>
                            </div>

                            <div className="flex justify-between items-center text-sm mt-4">
                                <span>Fundraising</span>
                                <span className="font-bold">4.7%</span>
                            </div>
                            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-olive-green w-[4.7%] transition-all duration-1000 ease-out delay-400"></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center border-l border-gray-200 pl-12">
                        <h3 className="text-4xl font-black text-primary mb-2">$1.72M</h3>
                        <p className="text-sm font-bold text-gray-500 uppercase">2024 Operating Budget</p>
                    </div>
                </div>
            </div>

            <h3 className="text-2xl font-bold mb-8 animate-slide-up delay-300">Annual Reports</h3>
            <div className="space-y-4">
                {[2024, 2023].map((year, index) => (
                    <div key={year} className="flex items-center justify-between p-6 bg-white border border-gray-100 rounded-2xl hover:border-primary transition-all cursor-pointer group shadow-sm hover:shadow-md animate-slide-up" style={{ animationDelay: `${(index + 4) * 0.1}s` }}>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                PDF
                            </div>
                            <div>
                                <h4 className="font-bold text-text-dark">{year} Annual Report</h4>
                                <p className="text-xs text-gray-500">Released January {year + 1}</p>
                            </div>
                        </div>
                        <span className="text-primary font-bold text-sm group-hover:translate-x-1 transition-transform">Download</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
