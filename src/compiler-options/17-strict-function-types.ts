const split = (str: string) => str.split('');

type NewSplitFunction = (input: string | number) => string[];

const newSplit: NewSplitFunction = split;

// if disabled, the unsafe assignment of newSplit to split is allowed
// even though the types are incompatible.
// Meaning this will cause a runtime crash: `split(10)`

// NOTE: this check doesn't apply to method syntax:

function speakFunction(str: string) {
    console.log(str.toLowerCase());
}

type PersonType = {
    speak(str: string | number): void;
};

const Person: PersonType = {
    speak: speakFunction,
};
