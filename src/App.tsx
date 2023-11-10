import {Footer} from "./components/layout/footer";
import {Header} from "./components/layout/header";
import {TodoList} from "./views/todolist";

function App() {
    return (
        <main className="justify-center  w-screen bg-no-repeat bg-cover bg-center h-screen bg-[url('/fondo.jpg')] flex items-center flex-col">
            <Header />
            <section className="h-[calc(100%-80px)] flex justify-center items-center">
                <TodoList />
            </section>
            <Footer />
        </main>
    );
}

export default App;
