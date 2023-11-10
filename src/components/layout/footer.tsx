export function Footer() {
    return (
        <footer className="h-20 w-full justify-center items-center flex text-2xl gap-4">
            <a href="https://www.linkedin.com/in/gino-novello-155aa8282/" rel="noreferrer" target="_blank">
                <i className="fa-brands fa-linkedin p-[2px] cursor-pointer text-gray-700 transform transition duration-300 ease-in hover:text-blue-600 hover:scale-105" />
            </a>
            <a href="https://github.com/GinoNovello" rel="noreferrer" target="_blank">
                <i className="fa-brands fa-github p-[2px] cursor-pointer text-gray-700 transform transition duration-300 ease-in hover:text-gray-100 hover:scale-105" />
            </a>
        </footer>
    );
}
