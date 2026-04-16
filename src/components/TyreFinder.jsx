import React, { useState, useRef, useEffect } from 'react';
import { Car, Ruler, ChevronDown, AlertCircle } from 'lucide-react';

const TyreFinder = () => {
    const [activeTab, setActiveTab] = useState('size');
    const [regNumber, setRegNumber] = useState('');
    const [loading, setLoading] = useState(false);
    const [searching, setSearching] = useState(false);
    const [error, setError] = useState('');
    const [sortBy, setSortBy] = useState('relevance');
    const tyreResultsRef = useRef(null);

    // Form States
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [diameter, setDiameter] = useState('');
    const [brand, setBrand] = useState('');
    const [season, setSeason] = useState('Summer');
    // Arrange a call back form state
    const [arrangeMobile, setArrangeMobile] = useState('');
    const [arrangePostcode, setArrangePostcode] = useState('');
    const [arrangeReg, setArrangeReg] = useState('');
    const [arrangeSubmitting, setArrangeSubmitting] = useState(false);
    const [arrangeStatus, setArrangeStatus] = useState('');
    const [arrangeDebug, setArrangeDebug] = useState(null); // raw server error for debugging

    // Results State
    const [tyres, setTyres] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);
    const [vehicleResult, setVehicleResult] = useState(null);
    const [vehicleNotFound, setVehicleNotFound] = useState(false);
    const [arrangeMatched, setArrangeMatched] = useState(null); // existing callbacks for reg

    // Available options for dropdowns
    const widthOptions = ['135', '145', '155', '165', '175', '185', '195', '205', '215', '225', '235', '245', '255', '265', '275', '285'];
    const heightOptions = ['30', '35', '40', '45', '50', '55', '60', '65'];
    const diameterOptions = [ 'R15', 'R16', 'R17', 'R18', 'R19', 'R20', 'R21', 'R22', 'R23', 'R24'];
    const brandOptions = ['', 'Pirelli', 'Continental', 'Goodyear', 'Bridgestone', 'Dunlop'];
    const seasonOptions = ['Summer', 'Winter', 'All Season'];

    // Fetch tyres from API (Simulate going straight to Call Back)
    const fetchTyres = async (e) => {
        e.preventDefault();

        // Validation
        if (!width || !height || !diameter) {
            setError('Please select Width, Height, and Diameter');
            return;
        }

        setLoading(true);
        setError('');
        setTyres([]);

        setTimeout(() => {
            setLoading(false);
            setHasSearched(true);
        }, 800);
    };

    useEffect(() => {
        if (activeTab === 'size' && tyres.length > 0 && tyreResultsRef.current) {
            tyreResultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [activeTab, tyres]);

    // Auto-fill arrange form reg number if a reg search was used
    useEffect(() => {
        if (regNumber && !arrangeReg) setArrangeReg(regNumber);
    }, [regNumber]);

    const handleRegSearch = async (e) => {
        e.preventDefault();
        setError('');
        setVehicleNotFound(false);
        setVehicleResult(null);

        const normalizedReg = regNumber.replace(/\s+/g, '').toUpperCase();

        if (!normalizedReg) {
            setError('Please enter a valid UK registration number');
            return;
        }

        setSearching(true);

        // Try to fetch any existing arrange-a-call-backs records for this reg
        try {
            const url = `https://enduring-morning-cf86e59201.strapiapp.com/api/arrange-a-call-backs?filters[regNumber][$eq]=${encodeURIComponent(regNumber)}`;
            const resp = await fetch(url);
            if (resp.ok) {
                const json = await resp.json().catch(() => null);
                const match = json?.data && json.data.length ? json.data[0].attributes || json.data[0] : null;
                setArrangeMatched(match);
            } else {
                setArrangeMatched(null);
            }
        } catch (err) {
            setArrangeMatched(null);
        }

        // Directly go to arrange call back (keep UX timing)
        setTimeout(() => {
            setSearching(false);
            setHasSearched(true);
            setTyres([]);
        }, 800);
    };

    const handleArrangeSubmit = async (e) => {
        e.preventDefault();
        setArrangeSubmitting(true);
        setArrangeStatus('');

        // Basic validation
        if (!arrangeMobile || !arrangePostcode) {
            setArrangeStatus('Please provide both mobile number and postcode.');
            setArrangeSubmitting(false);
            return;
        }

        // Build tyre object only when fields are present
        const tyre = {};
        if (width) tyre.width = width;
        if (height) tyre.height = height;
        // Normalize diameter: strip leading 'R' if present
        const normalizedDiameter = diameter ? diameter.replace(/^R/i, '') : '';
        if (normalizedDiameter) tyre.diameter = normalizedDiameter;
        if (brand) tyre.brand = brand;
        if (season) tyre.season = season;

        // Build a human-readable title if possible
        const parts = [];
        if (brand) parts.push(brand);
        if (width && height && normalizedDiameter) parts.push(`${width}/${height} ${normalizedDiameter}`);
        else if (width && height) parts.push(`${width}/${height}`);
        const title = parts.length ? parts.join(' ') : undefined;
        if (title) tyre.title = title;

        // Determine search context
        const searchContext = activeTab === 'size' ? 'size' : activeTab === 'reg' ? 'reg' : 'results';

        // Vehicle reg when available
        const vehicleReg = regNumber ? regNumber.replace(/\s+/g, '').toUpperCase() : undefined;

        // Construct exact payload matching backend fields
        const payload = {
            mobileNumber: arrangeMobile,
            postcode: arrangePostcode,
            width: width || null,
            height: height || null,
            diameter: normalizedDiameter || null,
            brand: brand || null,
            Season: season || null,
            productId: null,
            title: title || null,
            regNumber: arrangeReg || null,
        };

        // Debug: log payload sent to server
        console.debug('Arrange-a-call-backs payload', payload);

        try {
            const res = await fetch('https://enduring-morning-cf86e59201.strapiapp.com/api/arrange-a-call-backs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ data: payload }),
            });

            if (!res.ok) {
                // Try to parse JSON error body, fall back to text
                let serverBody = null;
                try {
                    serverBody = await res.json();
                } catch {
                    try {
                        serverBody = await res.text();
                    } catch {
                        serverBody = null;
                    }
                }
                console.error('Arrange-a-call-backs failed', { status: res.status, body: serverBody });
                setArrangeDebug(serverBody);
                const serverMsg = serverBody && typeof serverBody === 'object'
                    ? (serverBody.error || serverBody.message || JSON.stringify(serverBody))
                    : serverBody || `Server responded with status ${res.status}`;
                // show server message to user
                setArrangeStatus(typeof serverMsg === 'string' ? serverMsg : JSON.stringify(serverMsg));
                // throw to trigger catch branch
                throw new Error(typeof serverMsg === 'string' ? serverMsg : JSON.stringify(serverMsg));
            }

            // Optionally read created entity
            try {
                const created = await res.json().catch(() => null);
                console.info('Arrange-a-call-backs created', created);
            } catch (e) {
                // ignore
            }

            setArrangeStatus('Request submitted — our experts will call you shortly.');
            setArrangeDebug(null);
            setArrangeMobile('');
            setArrangePostcode('');
            setTimeout(() => setArrangeStatus(''), 6000);
        } catch (err) {
            setArrangeStatus(err.message || 'Submission failed. Please try again.');
        } finally {
            setArrangeSubmitting(false);
        }
    };

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-8">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 font-['Outfit']">

                {/* ── TABS ─────────────────────────────────────────────────── */}
                <div className="flex border-b border-gray-100 flex-wrap sm:flex-nowrap">
                    <button
                        onClick={() => setActiveTab('size')}
                        className={`w-full sm:flex-1 py-4 sm:py-6 px-4 flex items-center justify-center gap-2 sm:gap-3 transition-all font-black text-xs sm:text-sm md:text-lg uppercase tracking-tight ${activeTab === 'size' ? 'bg-white text-black shadow-[inset_0_-4px_0_#FB7E10]' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}
                    >
                        <div className={`p-1.5 sm:p-2 rounded-lg ${activeTab === 'size' ? 'bg-[#FB7E10]/10 text-[#FB7E10]' : 'bg-gray-200 text-gray-400'}`}>
                            <Ruler size={16} className="sm:w-5 sm:h-5" />
                        </div>
                        <span className="whitespace-nowrap">Search by Size</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('reg')}
                        className={`w-full sm:flex-1 py-4 sm:py-6 px-4 flex items-center justify-center gap-2 sm:gap-3 transition-all font-black text-xs sm:text-sm md:text-lg uppercase tracking-tight ${activeTab === 'reg' ? 'bg-white text-black shadow-[inset_0_-4px_0_#FB7E10]' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}
                    >
                        <div className={`p-1.5 sm:p-2 rounded-lg ${activeTab === 'reg' ? 'bg-[#FB7E10]/10 text-[#FB7E10]' : 'bg-gray-200 text-gray-400'}`}>
                            <Car size={16} className="sm:w-5 sm:h-5" />
                        </div>
                        <span className="whitespace-nowrap">Search by Reg</span>
                    </button>
                </div>

                {/* ── CONTENT AREA ─────────────────────────────────────────── */}
                <div className="flex flex-col lg:flex-row p-8 lg:p-12 gap-12 items-start bg-gradient-to-br from-white to-slate-50">

                    {/* Left side: Tyre Image */}
                    <div className="w-full lg:w-1/3 flex justify-center lg:justify-start items-center">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-[#FB7E10] blur-[80px] opacity-10 rounded-full group-hover:opacity-20 transition-opacity"></div>
                            <img
                                src="/images/cta-bg.png"
                                alt="Tyre"
                                className="w-full max-w-[320px] h-auto object-contain drop-shadow-2xl grayscale brightness-75 group-hover:grayscale-0 transition-all duration-700"
                                onError={(e) => { e.target.src = 'https://www.mobiletyremates.com/wp-content/themes/mobile-tyre-mates/assets/images/tyre.png'; }}
                            />
                        </div>
                    </div>

                    {/* Right side: Forms */}
                    <div className="w-full lg:w-2/3 space-y-10">
                        {activeTab === 'size' ? (
                            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                                <div className="space-y-4">
                                    <h3 className="text-3xl font-black text-black tracking-tight uppercase">
                                        Search for <span className="text-[#FB7E10]">Tyres by Size</span>
                                    </h3>
                                    <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-xl">
                                        Enter your tyre measurements (e.g., <span className="text-black font-black">205/55 R16</span>). You can find these on your tyre's sidewall.
                                    </p>
                                </div>

                                <form onSubmit={fetchTyres} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {/* Width */}
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest pl-1">Width (Wide)</label>
                                            <div className="relative">
                                                <select
                                                    value={width}
                                                    onChange={(e) => setWidth(e.target.value)}
                                                    className={`w-full bg-white border-2 ${!width && error.includes('Width') ? 'border-red-500' : 'border-slate-100'} rounded-xl px-4 py-4 appearance-none font-bold text-black focus:border-[#FB7E10] outline-none transition-all cursor-pointer shadow-sm`}>
                                                    <option value="">Choose Width</option>
                                                    {widthOptions.map(w => (
                                                        <option key={w} value={w}>{w}</option>
                                                    ))}
                                                </select>
                                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                                            </div>
                                        </div>
                                        {/* Height */}
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest pl-1">Profile (Height)</label>
                                            <div className="relative">
                                                <select
                                                    value={height}
                                                    onChange={(e) => setHeight(e.target.value)}
                                                    className={`w-full bg-white border-2 ${!height && error.includes('Height') ? 'border-red-500' : 'border-slate-100'} rounded-xl px-4 py-4 appearance-none font-bold text-black focus:border-[#FB7E10] outline-none transition-all cursor-pointer shadow-sm`}>
                                                    <option value="">Choose Profile</option>
                                                    {heightOptions.map(h => (
                                                        <option key={h} value={h}>{h}</option>
                                                    ))}
                                                </select>
                                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                                            </div>
                                        </div>
                                        {/* Diameter */}
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest pl-1">Rim (Diameter)</label>
                                            <div className="relative">
                                                <select
                                                    value={diameter}
                                                    onChange={(e) => setDiameter(e.target.value)}
                                                    className={`w-full bg-white border-2 ${!diameter && error.includes('Diameter') ? 'border-red-500' : 'border-slate-100'} rounded-xl px-4 py-4 appearance-none font-bold text-black focus:border-[#FB7E10] outline-none transition-all cursor-pointer shadow-sm`}>
                                                    <option value="">Choose Diameter</option>
                                                    {diameterOptions.map(d => (
                                                        <option key={d} value={d}>{d}</option>
                                                    ))}
                                                </select>
                                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Brand */}
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest pl-1">Brand / Product Class</label>
                                            <div className="relative">
                                                <select
                                                    value={brand}
                                                    onChange={(e) => setBrand(e.target.value)}
                                                    className="w-full bg-white border-2 border-slate-100 rounded-xl px-4 py-4 appearance-none font-bold text-black focus:border-[#FB7E10] outline-none transition-all cursor-pointer">
                                                    <option value="">All Brands</option>
                                                    {brandOptions.filter(b => b).map(b => (
                                                        <option key={b} value={b}>{b}</option>
                                                    ))}
                                                </select>
                                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                                            </div>
                                        </div>
                                        {/* Season */}
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest pl-1">Season</label>
                                            <div className="relative">
                                                <select
                                                    value={season}
                                                    onChange={(e) => setSeason(e.target.value)}
                                                    className="w-full bg-white border-2 border-slate-100 rounded-xl px-4 py-4 appearance-none font-bold text-black focus:border-[#FB7E10] outline-none transition-all cursor-pointer">
                                                    {seasonOptions.map(s => (
                                                        <option key={s} value={s}>{s}</option>
                                                    ))}
                                                </select>
                                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                                            </div>
                                        </div>
                                    </div>

                                    {hasSearched && (
                                        <div className="flex items-center gap-2">
                                            <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Sort by:</label>
                                            <select
                                                value={sortBy}
                                                onChange={(e) => setSortBy(e.target.value)}
                                                className="text-sm font-bold text-black border border-slate-200 rounded-lg px-3 py-2 focus:border-[#FB7E10] outline-none">
                                                <option value="relevance">Relevance</option>
                                                <option value="price-low">Price: Low to High</option>
                                                <option value="price-high">Price: High to Low</option>
                                            </select>
                                        </div>
                                    )}

                                    <div className="flex flex-col sm:flex-row items-center justify-between pt-4 gap-6">

                                        <button
                                            type="submit"
                                            className="w-full sm:w-auto bg-[#FB7E10] hover:bg-orange-600 text-white px-8 sm:px-12 py-5 sm:py-6 rounded-xl sm:rounded-2xl font-black uppercase tracking-widest text-base sm:text-lg shadow-xl shadow-orange-900/10 transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3 group"
                                            disabled={loading}
                                        >
                                            {loading ? (
                                                <>
                                                    <span className="animate-spin h-5 w-5 border-2 border-white/20 border-t-white rounded-full"></span>
                                                    INITIATING SEARCH...
                                                </>
                                            ) : (
                                                <>
                                                    CHECK AVAILABILITY & PRICES
                                                    <ChevronDown className="rotate-270 group-hover:translate-x-1 transition-transform" size={20} />
                                                </>
                                            )}
                                        </button>
                                    </div>

                                    {error && (
                                        <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-xl animate-in fade-in slide-in-from-top-2">
                                            <div className="flex items-start gap-4">
                                                <AlertCircle className="text-red-500 mt-0.5 flex-shrink-0" size={24} />
                                                <div className="space-y-1">
                                                    <p className="text-red-900 font-black uppercase text-xs tracking-widest">Incomplete Information</p>
                                                    <p className="text-red-700 font-medium text-sm leading-relaxed">{error}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </form>
                            </div>
                        ) : (
                            <form onSubmit={handleRegSearch} className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                                <h3 className="text-3xl font-black text-black tracking-tight uppercase">
                                    Tyre Size by <span className="text-[#FB7E10]">Reg Number</span>
                                </h3>

                                <div className="space-y-6">
                                    <div className="flex flex-col md:flex-row items-end gap-6">
                                        <div className="flex-1 space-y-2 w-full">
                                            <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest pl-1">Registration number</label>
                                            <div className="flex items-center gap-2 sm:gap-4 overflow-hidden">
                                                <div className="flex items-center bg-white border-2 border-slate-100 rounded-xl px-3 sm:px-6 py-2 sm:py-4 font-black text-sm sm:text-xl text-black whitespace-nowrap shadow-sm">
                                                    BD51 SMR
                                                </div>
                                                <input
                                                    type="text"
                                                    value={regNumber}
                                                    onChange={(e) => setRegNumber(e.target.value)}
                                                    placeholder="ENTER REG"
                                                    className="flex-1 min-w-0 bg-white border-2 border-slate-100 rounded-xl px-4 sm:px-6 py-3 sm:py-4 font-bold text-sm sm:text-xl text-black focus:border-[#FB7E10] outline-none shadow-sm transition-all focus:ring-4 focus:ring-orange-100"
                                                />
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full md:w-auto bg-[#FB7E10] hover:bg-orange-600 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-lg shadow-xl shadow-orange-900/10 transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3"
                                            disabled={searching}
                                        >
                                            {searching ? (
                                                <>
                                                    <span className="animate-spin h-5 w-5 border-2 border-white/20 border-t-white rounded-full"></span>
                                                    VERIFYING...
                                                </>
                                            ) : 'Identify Vehicle'}
                                        </button>
                                    </div>

                                    {error && (
                                        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                                            <p className="text-red-700 font-semibold text-sm">{error}</p>
                                        </div>
                                    )}

                                    {vehicleNotFound && !error && (
                                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-xl animate-in shake duration-500">
                                            <div className="flex items-start gap-4">
                                                <AlertCircle className="text-yellow-600 mt-0.5 flex-shrink-0" size={24} />
                                                <div className="space-y-1">
                                                    <p className="text-yellow-900 font-black uppercase text-xs tracking-widest">No Vehicle Match</p>
                                                    <p className="text-yellow-700 font-medium text-sm leading-relaxed">We couldn't identify registration <span className="font-bold underline">{regNumber}</span>. Please double-check or search by tyre size.</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {vehicleResult && (
                                        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 mt-4">
                                            <h4 className="text-xl font-black text-black mb-3">Vehicle details</h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm sm:text-base">
                                                <div className="space-y-2">
                                                    <p className="text-gray-500 uppercase tracking-[0.2em] text-[10px] font-black">Model</p>
                                                    <p className="text-black font-semibold">{vehicleResult.model}</p>
                                                </div>
                                                <div className="space-y-2">
                                                    <p className="text-gray-500 uppercase tracking-[0.2em] text-[10px] font-black">Year</p>
                                                    <p className="text-black font-semibold">{vehicleResult.year}</p>
                                                </div>
                                                <div className="space-y-2">
                                                    <p className="text-gray-500 uppercase tracking-[0.2em] text-[10px] font-black">Fuel Type</p>
                                                    <p className="text-black font-semibold">{vehicleResult.fuelType}</p>
                                                </div>
                                                <div className="space-y-2">
                                                    <p className="text-gray-500 uppercase tracking-[0.2em] text-[10px] font-black">Tyre Size</p>
                                                    <p className="text-black font-semibold">{`${vehicleResult.tyreWidth}/${vehicleResult.tyreHeight} R${vehicleResult.tyreDiameter}`}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {arrangeMatched && (
                                        <div className="bg-white border border-gray-200 rounded-2xl p-6 mt-6">
                                            <h4 className="text-xl font-black text-black mb-3">Previous Callback Request</h4>
                                            <div className="text-sm text-gray-700 space-y-2">
                                                <div><strong>Mobile:</strong> {arrangeMatched.mobileNumber || arrangeMatched.mobile}</div>
                                                <div><strong>Postcode:</strong> {arrangeMatched.postcode}</div>
                                                <div><strong>Reg:</strong> {arrangeMatched.regNumber || arrangeMatched.documentId}</div>
                                                <div><strong>Tyre:</strong> {`${arrangeMatched.width || ''}${arrangeMatched.width ? '/' : ''}${arrangeMatched.height || ''} ${arrangeMatched.diameter || ''}`.trim()}</div>
                                                <div><strong>Brand:</strong> {arrangeMatched.brand}</div>
                                                <div><strong>Season:</strong> {arrangeMatched.Season || arrangeMatched.season}</div>
                                                <div className="text-xs text-gray-400">Requested: {new Date(arrangeMatched.createdAt || arrangeMatched.publishedAt).toLocaleString()}</div>
                                            </div>
                                        </div>
                                    )}

                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest animate-pulse">
                                        <span className="text-[#FB7E10]">⚡</span> SECURE DVLA VEHICLE LOOKUP ENABLED
                                    </p>
                                </div>
                            </form>
                        )}
                    </div>
                </div>

                {/* Footer Tip */}
                <div className="bg-slate-50 p-6 border-t border-gray-100 text-center">
                    <p className="text-[10px] font-black uppercase text-gray-400 tracking-[0.3em]">
                        Mobile Tyre Champions © 2026 • Precision Fitment GUARANTEED • 24/7 UK Emergency Response
                    </p>
                </div>
            </div>

            {/* ── SEARCH RESULTS SECTION ─────────────────────────────────── */}
            {hasSearched && (
                <div ref={tyreResultsRef} className="mt-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="space-y-8">
                        {/* Results Header */}
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
                                    {tyres.length > 0 ? `${tyres.length} Tyre${tyres.length !== 1 ? 's' : ''} Found` : 'Arrange A Call Back'}
                                </h2>
                                {activeTab === 'size' && width ? (
                                    <p className="text-gray-400 text-sm md:text-base mt-2">
                                        Searched Size: {width}/{height} {diameter} • {season} • {brand || 'All Brands'}
                                    </p>
                                ) : activeTab === 'reg' && regNumber ? (
                                    <p className="text-gray-400 text-sm md:text-base mt-2">
                                        Searched Reg: {regNumber.toUpperCase()}
                                    </p>
                                ) : null}
                            </div>
                        </div>

                        {/* Tyre Results Grid */}
                        {tyres.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {tyres.map((tyre, index) => (
                                    <div
                                        key={tyre.id || index}
                                        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100"
                                    >
                                        {/* Card Header with Stock Status */}
                                        <div className="bg-gradient-to-r from-slate-50 to-white p-4 border-b border-gray-100">
                                            <div className="flex items-start justify-between mb-2">
                                                <h3 className="text-black font-black text-lg md:text-xl uppercase tracking-tight group-hover:text-[#FB7E10] transition-colors line-clamp-2">
                                                    {tyre.title || 'Tyre'}
                                                </h3>
                                                <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest whitespace-nowrap ml-2 ${tyre.inStock
                                                        ? 'bg-green-100 text-green-700'
                                                        : 'bg-red-100 text-red-700'
                                                    }`}>
                                                    {tyre.inStock ? 'In Stock' : 'Out of Stock'}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 text-sm font-semibold">{tyre.brand || tyre.productClass}</p>
                                        </div>

                                        {/* Card Body */}
                                        <div className="p-6 space-y-4">
                                            {/* Size Info */}
                                            <div className="bg-slate-50 rounded-xl p-4 space-y-2">
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-gray-600 font-semibold">Size:</span>
                                                    <span className="text-black font-black">{tyre.width}/{tyre.height} {`R${tyre.diameter}`}</span>
                                                </div>
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-gray-600 font-semibold">Season:</span>
                                                    <span className="text-black font-black">{tyre.season}</span>
                                                </div>
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-gray-600 font-semibold">Brand:</span>
                                                    <span className="text-black font-black">{tyre.brand}</span>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            {tyre.description && (
                                                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                                                    {tyre.description}
                                                </p>
                                            )}

                                            {/* Price */}
                                            <div className="flex items-baseline gap-2 pt-2">
                                                <span className="text-3xl font-black text-[#FB7E10]">
                                                    £{tyre.price.toFixed(2)}
                                                </span>
                                                <span className="text-gray-500 text-sm font-semibold">per tyre</span>
                                            </div>

                                            {/* CTA Button */}
                                            <button className="w-full bg-[#FB7E10] hover:bg-orange-600 text-white font-black uppercase tracking-widest py-3 rounded-xl transition-all active:scale-95 mt-4">
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-3xl p-8 sm:p-12 text-center border border-gray-100 shadow-2xl overflow-hidden relative group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-orange-100 transition-colors"></div>
                                <AlertCircle className="w-16 h-16 text-[#FB7E10] mx-auto mb-6" />
                                <h3 className="text-2xl sm:text-3xl font-black text-black mb-2 uppercase">Request Confirmation</h3>
                                <p className="text-gray-500 max-w-md mx-auto mb-8 font-medium">
                                    Leave your details below and <span className="text-black font-black">our experts will call you back</span> to arrange your fitting, confirm availability and price.
                                </p>
                                
                                <div className="max-w-md mx-auto bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-[2rem] text-left">
                                     <form className="space-y-5" onSubmit={handleArrangeSubmit}>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest pl-1">Mobile Number</label>
                                            <input
                                                required
                                                type="tel"
                                                placeholder="Enter valid mobile"
                                                value={arrangeMobile}
                                                onChange={(e) => setArrangeMobile(e.target.value)}
                                                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 font-bold text-black focus:border-[#FB7E10] outline-none"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest pl-1">Registration Number</label>
                                            <input
                                                type="text"
                                                placeholder="Enter reg "
                                                value={arrangeReg}
                                                onChange={(e) => setArrangeReg(e.target.value)}
                                                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 font-bold text-black focus:border-[#FB7E10] outline-none"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest pl-1">Postcode</label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="Enter valid postcode"
                                                value={arrangePostcode}
                                                onChange={(e) => setArrangePostcode(e.target.value)}
                                                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 font-bold text-black focus:border-[#FB7E10] outline-none"
                                            />
                                        </div>
                                        {arrangeStatus && (
                                            <div className="text-sm font-bold text-[#0B1528] bg-[#FB7E10]/5 border border-[#FB7E10]/30 px-4 py-3 rounded-xl">{arrangeStatus}</div>
                                        )}
                                        {arrangeDebug && (
                                            <pre className="mt-2 max-h-40 overflow-auto text-xs bg-black/5 border border-gray-200 p-3 rounded-md text-left whitespace-pre-wrap">{JSON.stringify(arrangeDebug, null, 2)}</pre>
                                        )}
                                        <div className="pt-2">
                                            <button
                                                type="submit"
                                                disabled={arrangeSubmitting}
                                                className="w-full bg-[#FB7E10] hover:bg-orange-600 text-white font-black uppercase tracking-widest py-4 rounded-xl shadow-lg transition-all active:scale-95 disabled:opacity-70"
                                            >
                                                {arrangeSubmitting ? 'Requesting...' : 'Request A Call Back'}
                                            </button>
                                        </div>
                                     </form>
                                </div>

                                <button
                                    onClick={() => {
                                        setTyres([]);
                                        setHasSearched(false);
                                        setWidth('');
                                        setHeight('');
                                        setDiameter('');
                                        setBrand('');
                                    }}
                                    className="mt-8 text-gray-400 hover:text-black font-black uppercase text-xs tracking-[0.2em] border-b border-transparent hover:border-black transition-all"
                                >
                                    Try Another Search
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TyreFinder;
