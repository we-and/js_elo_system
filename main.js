class EloRatingSystem {
    constructor(kFactor = 32, defaultRating = 1200) {
        this.kFactor = kFactor; // Factor determining the adjustment magnitude
        this.defaultRating = defaultRating; // Default rating for new players
        this.ratings = {}; // Stores player ratings
    }

    // Ensure player exists in the rating system or initialize them
    ensurePlayer(player) {
        if (!this.ratings[player]) {
            this.ratings[player] = this.defaultRating;
        }
    }

    // Calculate the expected score between two players
    getExpectedScore(playerA, playerB) {
        const ratingA = this.ratings[playerA];
        const ratingB = this.ratings[playerB];
        return 1 / (1 + Math.pow(10, (ratingB - ratingA) / 400));
    }

    // Update ratings based on the actual outcome of the game
    updateRating(winner, loser) {
        this.ensurePlayer(winner);
        this.ensurePlayer(loser);

        const expectedScoreWinner = this.getExpectedScore(winner, loser);
        const expectedScoreLoser = this.getExpectedScore(loser, winner);

        this.ratings[winner] += this.kFactor * (1 - expectedScoreWinner);
        this.ratings[loser] += this.kFactor * (0 - expectedScoreLoser);
    }

    // Get the current rating of a player
    getRating(player) {
        this.ensurePlayer(player);
        return this.ratings[player];
    }
}

// Example usage
const elo = new EloRatingSystem();

elo.updateRating('Alice', 'Bob');
console.log(`Alice's Rating: ${elo.getRating('Alice')}`);
console.log(`Bob's Rating: ${elo.getRating('Bob')}`);