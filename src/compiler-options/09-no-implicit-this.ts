class PodcastEpisode {
    podcastName: string;
    episodeName: string;

    constructor(podcastName: string, episodeName: string) {
        this.podcastName = podcastName;
        this.episodeName = episodeName;
    }

    getFunction() {
        return function () {
            return this.podcastName + ' | ' + this.episodeName;
        };
    }
}

// `this` inside the function inside `getFunction` refers to its own context, not the `Episode` context
// if you wanted to access the `Episode` context, you'd use an arrow function
