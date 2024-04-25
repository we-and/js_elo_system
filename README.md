# Elo Rating System

The Elo Rating System is designed to provide a method for calculating the relative skill levels of players in zero-sum games such as chess and other competitive sports or games. This implementation offers an easy-to-use, flexible system for game developers, competition organizers, and anyone interested in rating systems.

## Features

- **Initial Rating Setup**: Set initial ratings for new players.
- **Dynamic Rating Updates**: Update ratings based on game outcomes (win, loss, draw).
- **Flexible K-Factor Adjustment**: Adjust the sensitivity of rating changes.
- **Support for Multiple Players**: Manage ratings for an arbitrary number of players.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

```bash
node >= 14.0.0
```

Installing
A step by step series of examples that tell you how to get a development environment running:

Clone the repository:
```
git clone https://github.com/your-username/elo-rating-system.git
```
Navigate to the project directory:
```
cd elo-rating-system
```
Usage
Here is a simple way to use this system:

```const EloRatingSystem = require('./EloRatingSystem');

const elo = new EloRatingSystem();
elo.setInitialRating('Alice', 1500);
elo.setInitialRating('Bob', 1400);

elo.updateRating('Alice', 'Bob', 'A wins');

console.log(`Alice's Rating: ${elo.getRating('Alice')}`);
console.log(`Bob's Rating: ${elo.getRating('Bob')}`);
```



