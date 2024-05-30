import React, { forwardRef } from 'react';

const Footer = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <footer ref={ref} className="w-full p-20 flex flex-col sticky bottom-0 bg-slate-950 -z-20">
            <p className="text-center text-sm text-white">
                © {new Date().getFullYear()} Viva Tremblant - Tous droits réservés
            </p>
        </footer>
    );
});

export default Footer;