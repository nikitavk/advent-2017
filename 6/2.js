const banks = `0	5	10	0	11	14	13	4	11	8	8	7	1	4	12	11`.split('\t').map(e => +e);

let configurationHistory = [];
configurationHistory.push(banks + '');
let cycle = 0;

while (1) {
    let i = banks.indexOf(Math.max(...banks));

    let reloc = banks[i];
    banks[i] = 0;

    while (reloc > 0) {
        i++;
        if (i > banks.length - 1) {
            i = 0;
        }
        banks[i]++;
        reloc--;
    }
    cycle++;
    if (configurationHistory.includes(banks + '')) {
        configurationHistory.push(banks + '');
        break
    }
    configurationHistory.push(banks + '');
}

console.log(configurationHistory.length - configurationHistory.indexOf(banks + '') - 1);