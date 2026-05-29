try {
    // do something
} catch (err) {
    console.log(err.message);
    if (err instanceof Error) console.log(err.message);
}

// err is `unknown` and must be checked prior to consumption
