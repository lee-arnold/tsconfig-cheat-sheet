const brands = new Set(['lbc', 'capital', 'heart']);
const brand = brands.values().next().value;

// when disabled, `brand` is `any`
// when enabled, `brand` is `string | undefined`
