import { Link } from "react-router-dom"
import Navigation from "../components/Navigation/Navigation"

const Page404 = () => {
    return(
        <>
        <Navigation />
        
        <section style={{
            position: 'relative',
            padding: '4rem 2rem', 
            backgroundColor: '#f3f4f6',
            overflow: 'hidden',
            height: '90vh',
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}
        >
            <div style={{ maxWidth: '80rem', margin: '0 auto', textAlign: 'center'}}>
                <h1
                style={{
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    color: '#1f2937'
                }}
                className="antonRegular min-h-[210px] md:min-h-[110px]  items-center justify-center flex-wrap leading-8" 
                >
                    Takovou stránku zatím nemáme. :(
                </h1>
                <button
                    className="w-50 text-black font-semibold py-3 px-6 rounded-lg transform transition-all duration-200 hover:scale-105 hover:underline shadow-lg"
                    style={{
                        background: `linear-gradient(to right, #d0d0dd, #d0d0d0)`
                    }}
                >
                <Link to='/' className="block w-full h-full"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                                            onClick={() => {
                                            // Scroll to top when navigating to portfolio page
                                            setTimeout(() => {
                                            const container = document.querySelector("#root");
                                            if (container) {
                                                container.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                            } else {
                                                // Fallback to window scroll if #root doesn't exist
                                                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                            }
                                            }, 100); // Small delay to ensure navigation completes first
                                        }}
                >Zpět?</Link>
                </button>

            </div>
        </section>
        </>
    )
}

export default Page404