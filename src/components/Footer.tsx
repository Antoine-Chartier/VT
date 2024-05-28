

const Footer = () => {
    return (
        <footer className="w-full p-20 flex flex-col sticky bottom-0 bg-slate-950 -z-10">
            <p className="text-center text-sm text-white">
                © {new Date().getFullYear()} Viva Tremblant - Tous droits réservés
            </p>
        </footer>
    )
}

export default Footer