export const createButtonsMassive = (countAllPages) => {
    const massive = [];

    for (let i = 0; i < countAllPages; i++) {
        massive[i] = i + 1;
    }

    return massive;
}