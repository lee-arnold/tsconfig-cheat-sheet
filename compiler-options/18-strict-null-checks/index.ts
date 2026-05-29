const brandsByName = [
    { name: 'lbc', prettyName: 'LBC' },
    { name: 'riviera', prettyName: 'Riviera Radio' },
];

declare const brandToSearch: string;

const foundBrand = brandsByName.find((u) => u.name === brandToSearch);
console.log(foundBrand.prettyName);

// similar to noUncheckedIndexedAccess, forces you to guarantee that
// `foundBrand` is not null or undefined before using it
