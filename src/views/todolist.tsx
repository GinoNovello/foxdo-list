import {FormEvent, useEffect, useMemo, useState} from "react";

import {useSeo} from "@/hooks/useSEO";
import {Translates} from "@/i18n/translates";
import {useLanguageStore} from "@/stores/language-store";

interface Task {
    id: number;
    completed: boolean;
    value: string;
}

export function TodoList() {
    const getTasks = localStorage.getItem("tasks");

    const language = useLanguageStore((state) => state.languageValue);
    const textTranslated = Translates[language];
    const [tasks, setTasks] = useState<Task[]>(getTasks ? JSON.parse(getTasks) : []);
    const [edit, setEdit] = useState(false);
    const getTitle = localStorage.getItem("title");
    const [title, setTitle] = useState(getTitle ? getTitle : textTranslated.defaulttitle);
    const checkComplete = useMemo(() => {
        return tasks.filter((task) => !task.completed);
    }, [tasks]);

    useSeo({
        description: "Aplication to make a todo list",
        title: `${checkComplete.length > 0 ? "(" + checkComplete.length + ")" + " Foxdo list" : "Foxdo list"}`,
    });
    const deleteTask = (id: number) => {
        const deleteId = tasks?.filter((task) => task.id !== id);

        setTasks(deleteId);
    };
    const checkToggle = (id: number) => {
        const findId = tasks.map((task) => (task.id === id ? {...task, completed: !task.completed} : task));

        setTasks(findId);
    };
    const addToList = (event: FormEvent) => {
        event.preventDefault();
        const getId = tasks && Math.max(...tasks.map((task) => task.id));
        const target = event.target as HTMLFormElement;
        const value = (target[0] as HTMLInputElement).value;

        setTasks([
            ...tasks,
            {
                id: getId < 0 ? 0 : getId + 1,
                completed: false,
                value: value,
            },
        ]);
    };

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        if (title === textTranslated.defaulttitle) {
            setTitle(textTranslated.defaulttitle);
        }
        localStorage.setItem("title", title);
    }, [title, textTranslated]);

    return (
        <div className="backdrop-blur-sm flex max-w-[446px] flex-col items-center justify-center space-y-4 p-4 bg-black/50 rounded-md shadow-md max-h-64 xs:max-h-full">
            {edit ? (
                <div className="flex items-center gap-3">
                    <div className="flex flex-col group">
                        <input
                            className="bg-transparent focus:outline-none break-words max-w-screen text-white text-2xl"
                            maxLength={19}
                            type="text"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                        <div className="relative">
                            <div className="w-full h-[2px] bg-gray-400" />
                            <div className="w-[0%] h-[2px] absolute left-0 top-0 group-focus-within:bg-violet-600 group-focus-within:w-full transition-all duration-500" />
                        </div>
                    </div>
                    <i
                        className="fa-regular fa-check text-lime-400 cursor-pointer fa-xl flex"
                        onClick={() => setEdit(false)}
                    />
                </div>
            ) : (
                <div className="flex gap-3 items-center">
                    <h1 className="text-white text-2xl border-b border-transparent">{title}</h1>
                    <i
                        className="fa-regular fa-pen-to-square cursor-pointer text-violet-300"
                        onClick={() => setEdit(true)}
                    />
                </div>
            )}

            {tasks.length < 1 ? (
                <div className="h-60 w-60 flex p-4 justify-center text-gray-400"> {textTranslated.addtask_below}</div>
            ) : (
                <ul className="h-60 overflow-auto w-60 rounded-md text-gray-200 p-4 font-mono">
                    {tasks.map((task) => (
                        <li key={task.id} className="flex justify-between items-center">
                            <h2
                                className={`flex cursor-pointer ${task.completed ? "line-through" : ""}`}
                                onClick={() => checkToggle(task.id)}
                            >
                                {task.value}
                            </h2>

                            <i
                                className="cursor-pointer fa-solid fa-xmark text-red-700"
                                onClick={() => deleteTask(task.id)}
                            />
                        </li>
                    ))}
                </ul>
            )}

            <form className="flex flex-col shadow-sm text-gray-100" onSubmit={addToList}>
                <div className="h-11 flex items-center">
                    <input
                        required
                        className="px-4 flex-grow ml-2 bg-transparent outline-none bg-white text-neutral-900 rounded-l-md h-full"
                        name="task"
                        placeholder={textTranslated.write_task}
                        type="text"
                    />
                    <button className="h-full py-2 px-2 font-mono bg-violet-800 rounded-r-md" type="submit">
                        {textTranslated.addtask}
                    </button>
                </div>
            </form>
        </div>
    );
}
