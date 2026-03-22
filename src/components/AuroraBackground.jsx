const AuroraBackground = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
            <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-[100%] mix-blend-multiply dark:mix-blend-screen filter blur-[120px] bg-teal-300/50 dark:bg-teal-900/40 animate-slow-float opacity-80"></div>
            
            <div className="absolute top-[30%] right-[-10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-[100%] mix-blend-multiply dark:mix-blend-screen filter blur-[120px] bg-coral/40 dark:bg-coral/30 animate-slow-float [animation-delay:-5s] opacity-80"></div>
            
            <div className="absolute bottom-[-10%] left-[20%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-[100%] mix-blend-multiply dark:mix-blend-screen filter blur-[120px] bg-purple-300/50 dark:bg-purple-900/30 animate-slow-float [animation-delay:-10s] opacity-80"></div>
        </div>
    );
};

export default AuroraBackground;
