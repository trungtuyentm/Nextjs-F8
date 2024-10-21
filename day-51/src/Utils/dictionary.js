import "server-only";

const dictionaries = {
    vi: () => import("@/locales/vi-VN.json").then((module) => module.default),
    en: () => import("@/locales/en-US.json").then((module) => module.default),
};

export const getDictionary = (lang) => {
    return dictionaries[lang]();
};
