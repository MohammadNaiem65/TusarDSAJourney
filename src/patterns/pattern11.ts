export default function eleven(count: number) {
    for (let i = 0; i < count; i++) {
        let row = '';
        let num = !(i % 2) ? 1 : 0;

        for (let j = 0; j < i + 1; j++) {
            row += num;
            num = num ? 0 : 1;
        }

        console.log(row);
    }
}
