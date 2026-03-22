import { useState, useEffect } from 'react';

const roles = ["Frontend Developer", "Graphic Designer", "Freelancer"];

const Typewriter = () => {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let delay = 100;
        if (isDeleting) delay = 40;
        if (!isDeleting && currentText === roles[currentRoleIndex]) delay = 2000;
        if (!isDeleting && currentText === "") delay = 500;

        const timeout = setTimeout(() => {
            const currentRole = roles[currentRoleIndex];

            if (!isDeleting && currentText === currentRole) {
                setIsDeleting(true);
            } else if (isDeleting && currentText === "") {
                setIsDeleting(false);
                setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            } else if (isDeleting) {
                setCurrentText(currentRole.substring(0, currentText.length - 1));
            } else {
                setCurrentText(currentRole.substring(0, currentText.length + 1));
            }
        }, delay);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentRoleIndex]);

    return (
        <span className="inline-flex items-center min-h-[1.2em]">
            <style>
                {`
                @keyframes cursor-blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                .animate-cursor-blink {
                    animation: cursor-blink 1.06s step-end infinite;
                }
                `}
            </style>
            <span className="whitespace-pre">{currentText}</span>
            <span className="ml-[2px] w-px h-[0.9em] bg-coral animate-cursor-blink"></span>
        </span>
    );
};

export default Typewriter;
