

type HamburgerProps = {
    isOpen: boolean;
};

export default function Hamburger({ isOpen }: HamburgerProps) {
    return (
        <>
            <div className="hamburger">
                <div className="burger burger1"></div>
                <div className="burger burger2"></div>
            </div>

            <style>{`

                .hamburger {
                    position: relative;
                    width: 2rem;
                    height: 2rem;
                    display: flex;
                    justify-content: space-around;
                    flex-flow: column nowrap;
                    cursor: pointer;
                    z-index: 1000;
                }
                .burger {
                    width: 2rem;
                    height: 0.25rem;
                    border-radius: 10px;
                    background-color: var(--text-color);
                    transform-origin: 1px;
                    transition: all 0.1s linear;
                }
                .burger1 {
                    transform: ${isOpen ? 'rotate(33deg)' : 'rotate(0)'} rotate(0);
                }
                .burger2 {
                    transform: ${isOpen ? 'rotate(-33deg)' : 'rotate(0)'} rotate(0);
                }
                .hamburger.open .burger1 {
                    transform: translateY(8px) rotate(45deg);
                }
                .hamburger.open .burger2 {
                    opacity: 0;
                }
                .hamburger.open .burger3 {
                    transform: translateY(-8px) rotate(-45deg);
                }

                `}
            </style>
        </>
    );
}

