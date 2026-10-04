import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/haraData';
import CtaBanner from '../components/CtaBanner';

export default function Portfolio(){
    const [activeCategory, setActiveCategory] = useState('Semua');
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const portfolioRef = useRef(null);
    const ITEMS_PER_PAGE = 4;

    const categories = ['Semua', 'Website', 'Photo & Video', 'Advertising', 'Social Media'];

    const filteredItems = portfolioData.filter((item)=> {
        const matchesCategory = 
            activeCategory === "Semua" || item.category === activeCategory;
        const matchesSearch = 
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
            item.category.toLowerCase().includes(searchQuery.toLowerCase()) || 
            (item.tagline && item.tagline.toLowerCase().includes(searchQuery.toLowerCase()));

        return matchesCategory && matchesSearch;
    });

    const totalPages = Math.max(1, Math.ceil(filteredItems.length / ITEMS_PER_PAGE));
    const paginatedItems = filteredItems.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    const handleCategoryChange = (cat)=> {
        setActiveCategory(cat);
        setCurrentPage(1);
    }

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    }

    const handleResetFilter = () => {
        setActiveCategory("Semua");
        setSearchQuery("");
        setCurrentPage(1);
        portfolioRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        portfolioRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    
    return (
    <>
        <section className="page-hero">
            <div className="wrap">
                <div className="crumb">
                    <Link to="/">Beranda </Link>/ Portfolio
                </div>
                <div className="eyebrow lime">Portfolio</div>
                <h1>Different brands. <br /><span className="lime">Distinct stories.</span></h1>
                <p className="lead">Jelajahi arah visual dan pendekatan kreatif untuk beragam kebutuhan bisnis.</p>
            </div>
        </section>  

        <section className="section" ref={portfolioRef}>
            <div className="wrap">
                <div className="section-head">
                    <div className="pill-row" id="filters">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                type='button'
                                className='pill'
                                aria-pressed={activeCategory === cat}
                                onClick={() => handleCategoryChange(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <div className="search">
                        <label htmlFor="work-search">Cari project</label>
                        <input
                            id="work-search" 
                            type="search" 
                            placeholder="Nama atau kategori..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>
               
                <p className="page-count mb" id="work-count" aria-live='polite'>
                    Menampilkan {filteredItems.length} dari {portfolioData.length} project
                </p>

                <div className="work-results">
                    {filteredItems.length === 0 ? (
                        <div className="empty" style={{textAlign:"center", padding:"3rem 1rem"}}>
                            <h2>Belum ada kecocokan</h2>
                            <p className='lead' style={{padding:"1rem 0", color:"#888"}}>
                                Tidak ada project yang sesuai dengan filter atau kata kunci "{searchQuery}"
                            </p>
                            <button type="button" className="btn" onClick={handleResetFilter}>
                                Reset filter ↗
                            </button>
                        </div>
                    ) : (
                        <div className="grid two">
                            {paginatedItems.map((item)=>(
                                <Link
                                    key={item.id}
                                    className='work'
                                    to={`/portfolio/${item.id}`}
                                >
                                    <div className={`work-art ${item.artClass}`} role='img' aria-label={`Ilustrasi konsep ${item.title}`}>
                                        <div className="mock">
                                            <em>{item.icon}</em>
                                            <b>
                                                {item.mark ? (
                                                    item.mark.split("\n").map((line,i) => (
                                                        <span key={i}>{line}<br/></span>
                                                    ))
                                                ):(
                                                    item.title
                                                )}
                                            </b>
                                            <small>{item.tagline}</small>
                                        </div>
                                    </div>
                                    <div className="work-info">
                                        <div>
                                            <span>{item.subtitle}</span>
                                            <h3>{item.title}</h3>
                                        </div>
                                        <b className="arrow lime">↗</b>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>

                {totalPages > 1 && (
                    <div className="pagination" id="pagination">
                        <button
                            type="button"
                            className="btn outline small"
                            disabled={currentPage === 1}
                            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                        >
                            ← Sebelumnya
                        </button>
                        {Array.from({length: totalPages}, (_, i) => i + 1).map((pageNum) => (
                            <button
                                key={pageNum}
                                type='button'
                                className={`btn ${currentPage === pageNum ? "" : "outline"} small`}
                                aria-current={currentPage === pageNum ? "page": undefined}
                                onClick={() => handlePageChange(pageNum)}
                            >
                                {pageNum}
                            </button>
                        ))}
                        <button
                            type='button'
                            className='btn outline small'
                            disabled={currentPage === totalPages}
                            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                        >
                            Berikutnya →
                        </button>
                    </div>
                )}
            </div>       
        </section>
        <CtaBanner/>
    </>
    )
}
