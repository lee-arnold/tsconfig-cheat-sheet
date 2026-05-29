import { JustAString } from './other-file';
import 'does-not-exist.css';

export {
    doSomething,
    anObject,
    Theme,
    Podcast,
    Episode,
    getBrand,
    type Content,
    content,
    getBrandAgain,
    brands,
    brand,
    newSplit,
};

const text: JustAString = 'hello';

const doSomething = (have: number, some, variables: number) => {
    return some + variables;
    console.log('unreachable!');
};

const anObject = {
    forename: 'Lee',
    surname: 'Arnold',
};
likes: ['cats', 'beer'];

thisIsALabel: {
    console.log('this will execute');
    break thisIsALabel;
    console.log('this will not');
    // More info here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label
}

interface Theme {
    choice?: 'dark' | 'light';
}
const theme: Theme = {};
theme.choice = undefined;

switch (true) {
    case true:
        console.log(true);
    case false:
        console.log(false);
    default:
        console.log('default');
}

class Podcast {
    contentType: string = 'podcast';
    podcastName: string;
    numSeasons: number;

    constructor(name: string) {
        this.podcastName = name;
    }

    listen() {
        console.log('playing...');
    }

    download() {
        console.log('downloading...');
    }
}

class Episode extends Podcast {
    episodeName: string;

    constructor(podcastName: string, episodeName: string) {
        super(podcastName);
        this.episodeName = episodeName;
    }

    override listen() {
        console.log('playing episode...');
    }

    download() {
        console.log('downloading episode...');
    }

    brokenGetTitleFunction() {
        return function () {
            return this.podcastName + ' | ' + this.episodeName;
        };
    }

    workingGetTitleFunction() {
        return () => {
            return this.podcastName + ' | ' + this.episodeName;
        };
    }
}

const getBrand = (type: 'news' | 'music') => {
    if (type === 'news') {
        return 'lbc';
    } else {
        // idk, capital i guess?
    }
};

interface Content {
    type: 'podcast' | 'playlist' | 'article';
    brand: 'lbc' | 'capital' | 'heart';
    [key: string]: string;
}

const content: Content = { type: 'playlist', brand: 'heart' };
console.log(content.brand);
console.log(content.brnd);
console.log(content['brnd']);
console.log(content['brnd'].toString());

function fn(x: string) {
    return parseInt(x);
}
export const n1 = fn.call(undefined, '10');
export const n2 = fn.call(undefined, 10);

const brands = new Set(['lbc', 'capital', 'heart']);
const brand = brands.values().next().value;

const split = (str: string) => str.split('');
type NewSplitFunction = (input: string | number) => string[];
const newSplit: NewSplitFunction = split;

try {
    // do something
} catch (err) {
    if (err instanceof Error) console.log(err.message);
}
