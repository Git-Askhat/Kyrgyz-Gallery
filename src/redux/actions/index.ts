
interface changeToEnglish {
    type: "English",
    payload: string
}

interface changeToKyrgyz {
    type: "Kyrgyz",
    payload: string
}

interface changeToRussian {
    type: "Russian",
    payload: string
}

export type Action = changeToEnglish | changeToKyrgyz | changeToRussian;