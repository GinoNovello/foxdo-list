import {useLanguageStore} from "@/stores/language-store";

interface Props {
    onClick?: () => void;
}

export function Language({onClick = () => {}}: Props) {
    const {languageValue, setLanguage} = useLanguageStore();

    const flagStyles = `cursor-pointer hover:scale-110 hover:grayscale-0`;

    return (
        <div className="flex gap-2 items-center">
            <img
                className={`${flagStyles} ${languageValue === "EN" ? "grayscale-0" : "grayscale"} `}
                src="/usa-flag.png"
                width={30}
                onClick={() => {
                    setLanguage("EN"), onClick();
                }}
            />

            <img
                className={`${flagStyles} ${languageValue === "ES" ? "grayscale-0" : "grayscale"} `}
                src="/arg-flag.png"
                width={30}
                onClick={() => {
                    setLanguage("ES"), onClick();
                }}
            />
        </div>
    );
}
