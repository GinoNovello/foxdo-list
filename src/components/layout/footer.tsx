export function Footer() {
    return (
        <footer className="h-28 w-full justify-center items-center flex text-2xl gap-4 flex-col">
            <div className="flex justify-center items-center gap-4">
                <a href="https://www.linkedin.com/in/gino-novello-155aa8282/" rel="noreferrer" target="_blank">
                    <i className="fa-brands fa-linkedin p-[2px] cursor-pointer text-gray-700 transform transition duration-300 ease-in hover:text-blue-600 hover:scale-105" />
                </a>
                <a href="https://github.com/GinoNovello" rel="noreferrer" target="_blank">
                    <i className="fa-brands fa-github p-[2px] cursor-pointer text-gray-700 transform transition duration-300 ease-in hover:text-gray-100 hover:scale-105" />
                </a>
            </div>
            <h2 className="text-gray-500 text-sm font-mono">Developed by Gino Novello</h2>
        </footer>
    );
}
