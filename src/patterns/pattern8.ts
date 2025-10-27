export default function eight(count: number) {
    const totalRange = count * 2 - 1;

    for (let i = count; i > 0; i--) {
        let row = '';
        const stars = i * 2 - 1;
        const whitespace = (totalRange - stars) / 2;

        for (let j = 0; j < totalRange; j++) {
            if (j < whitespace || j > stars + whitespace - 1) {
                row += '_';
            } else {
                row += '*';
            }
        }

        console.log(row);
    }
}
