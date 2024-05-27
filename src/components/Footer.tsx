

const Footer = () => {
    return (
        <footer className="flex flex-col sticky bottom-0 h-full p-20 bg-gradient-to-t from-gris-900 to-gris-200 -z-10">
            <p className="text-center text-sm pt-24">
                © {new Date().getFullYear()} Viva Tremblant - Tous droits réservés
            </p>
        </footer>
    )
}

export default Footer