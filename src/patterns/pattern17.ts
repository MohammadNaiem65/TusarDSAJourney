export default function seventeen(count: number) {
    if (count > 5) {
        return console.error("Count can't be more than 5");
    }

    const letters = ['A', 'B', 'C', 'D', 'E'];
    const range = count * 2 - 1;

    for (let i = 1; i < count + 1; i++) {
        let row = '';
        const lettersCount = i * 2 - 1;
        const whitespace = (range - lettersCount) / 2;
        const maxLetterIndex = Math.ceil(lettersCount / 2);
        let letterIndex = 0;
        let reachedMax = false;

        for (let j = 0; j < range; j++) {
            if (j < whitespace || j > lettersCount + whitespace - 1) {
                row += ' ';
            } else {
                row += letters[letterIndex];

                if (!reachedMax && letterIndex < maxLetterIndex - 1) {
                    letterIndex++;
                } else if (reachedMax) {
                    letterIndex--;
                } else {
                    reachedMax = true;
                    letterIndex--;
                }
            }
        }

        console.log(row);
    }
}
