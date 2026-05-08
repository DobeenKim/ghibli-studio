const Footer = () => {
    return (
        <footer className="w-full py-10 pb-24 md:pb-10">
            <div className="border-t border-[#0d4c71]/20 w-[95%] mx-auto mb-6" />
            <div className="flex flex-col items-center justify-center text-[#433422]/60 text-sm md:text-lg tracking-wider">
                <p>© {new Date().getFullYear()} Dobeen Kim.</p>
                <p className="mt-1 font-serif italic">Created with magic and memories.</p>
            </div>
        </footer>
    )
}

export default Footer 