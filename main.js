class EloRatingSystem {
    constructor(kFactor = 32, defaultRating = 1200) {
        this.kFactor = kFactor;
        this.defaultRating = defaultRating;
        this.ratings = {};
    }

    ensurePlayer(player) {
        if (!this.ratings[player]) {
            this.ratings[player] = this.defaultRating;
        }
    }

    setInitialRating(player, rating) {
        this.ratings[player] = rating;
    }

    getExpectedScore(playerA, playerB) {
        const ratingA = this.ratings[playerA];
        const ratingB = this.ratings[playerB];
        return 1 / (1 + Math.pow(10, (ratingB - ratingA) / 400));
    }

    updateRating(playerA, playerB, outcome) {
        this.ensurePlayer(playerA);
        this.ensurePlayer(playerB);

        const expectedScoreA = this.getExpectedScore(playerA, playerB);
        const expectedScoreB = this.getExpectedScore(playerB, playerA);

        let scoreA, scoreB;

        if (outcome === "A wins") {
            scoreA = 1;
            scoreB = 0;
        } else if (outcome === "B wins") {
            scoreA = 0;
            scoreB = 1;
        } else { // Draw
            scoreA = 0.5;
            scoreB = 0.5;
        }

        this.ratings[playerA] += this.kFactor * (scoreA - expectedScoreA);
        this.ratings[playerB] += this.kFactor * (scoreB - expectedScoreB);
    }

    getRating(player) {
        this.ensurePlayer(player);
        return Math.round(this.ratings[player]);
    }
}

// Example usage
const elo = new EloRatingSystem();

// Set initial ratings
elo.setInitialRating('Alice', 1300);
elo.setInitialRating('Bob', 1250);
console.log(`Initial ratings: Alice: ${elo.getRating('Alice')}, Bob: ${elo.getRating('Bob')}`);


// Update ratings based on different outcomes
elo.updateRating('Alice', 'Bob', 'A wins');
console.log(`After Alice wins: Alice's Rating: ${elo.getRating('Alice')}, Bob's Rating: ${elo.getRating('Bob')}`);

elo.updateRating('Alice', 'Bob', 'B wins');
console.log(`After Bob wins: Alice's Rating: ${elo.getRating('Alice')}, Bob's Rating: ${elo.getRating('Bob')}`);

elo.updateRating('Alice', 'Bob', 'draw');
console.log(`After a draw: Alice's Rating: ${elo.getRating('Alice')}, Bob's Rating: ${elo.getRating('Bob')}`);

elo.updateRating('Alice', 'Bob', 'A wins');
console.log(`After Alice wins: Alice's Rating: ${elo.getRating('Alice')}, Bob's Rating: ${elo.getRating('Bob')}`);

elo.updateRating('Alice', 'Bob', 'B wins');
console.log(`After Bob wins: Alice's Rating: ${elo.getRating('Alice')}, Bob's Rating: ${elo.getRating('Bob')}`);
