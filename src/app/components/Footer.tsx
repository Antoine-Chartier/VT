

const Footer = () => {
    return (
        <footer className="flex flex-col sticky bottom-0 h-full p-20 bg-slate-100 -z-10">
            <p className="text-center text-sm">
                © {new Date().getFullYear()} Viva Tremblant - Tous droits réservés
            </p>
        </footer>
    )
}

export default Footer