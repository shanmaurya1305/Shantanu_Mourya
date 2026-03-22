const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
        <button
            onClick={toggleTheme}
            className="group relative flex h-7 w-14 cursor-pointer items-center rounded-full bg-[#7C3AED] p-1 transition-colors hover:bg-[#6D28D9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-coral dark:focus-visible:ring-offset-midnight"
            aria-label="Toggle Dark Mode"
        >
            {/* Visual Track */}
            <div className="relative flex w-full items-center justify-between px-1.5 text-white">
                {/* Moon Icon (Left) */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="z-10"
                >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
                {/* Sun Icon (Right) */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="z-10"
                >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                </svg>
            </div>

            {/* Sliding Knob */}
            <div
                className={`absolute left-1 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out ${
                    theme === 'dark' ? 'translate-x-7' : 'translate-x-0'
                }`}
            ></div>
        </button>
    );
};

export default ThemeToggle;
