class Podcast {
    listen() {
        console.log('playing...');
    }
}

class Episode extends Podcast {
    listen() {
        console.log('playing episode...');
    }
}

// missing the override keyword here
