import { ReactElement } from "react";

export type Type___Data = {
    title: ReactElement;
    description: ReactElement[];
    sections?: Type___DataSection[];
    paragraphs?: ReactElement[];
}

export type Type___DataSection = {
    id: number;
    title: ReactElement;
    description?: ReactElement[];
    list?: Type___DataList[];
    child?: Type___DataSection[];
    paragraphs?: ReactElement[];
}

export type Type___DataList = {
    id: number;
    title?: ReactElement;
    paragraph?: ReactElement;
}


