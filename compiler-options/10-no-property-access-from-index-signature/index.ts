interface Content {
    type: 'podcast' | 'playlist' | 'article';
    brand: 'lbc' | 'capital' | 'heart';
    [key: string]: string;
}

const content: Content = { type: 'playlist', brand: 'heart' };
console.log(content.brand);
console.log(content.brnd);
console.log(content['brnd']);

// when defining types using unknown key accessors, this option requires them
// to be accessed using indexed syntax (`obj["key"]`) rather than dot syntax
// useful for picking up typos when you're using unknown key accessors
