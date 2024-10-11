
const Footer = () => {
    return (
        <footer className="h-full w-full p-20 flex flex-col mt-auto sticky bottom-0 -z-20 bg-slate-950">
            <p className="text-center text-sm text-white">
                © {new Date().getFullYear()} Viva Tremblant - Tous droits réservés
            </p>
        </footer>
    );
};

export default Footer;