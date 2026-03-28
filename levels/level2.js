// Level 2 Mutation Challenge Gameplay

function level2MutationChallenge() {
    // Setup variables
    const challengeTime = 300; // Challenge duration in seconds
    let mutations = ['A', 'C', 'G', 'T']; // DNA mutations
    let score = 0;

    // Start the challenge
    console.log('Starting Level 2 Mutation Challenge! You have ' + challengeTime + ' seconds.');

    // Challenge logic here
    for (let i = 0; i < challengeTime; i++) {
        // Simulate mutation
        let mutation = mutations[Math.floor(Math.random() * mutations.length)];
        console.log('Mutation detected: ' + mutation);
        score += evaluateMutation(mutation);
    }
    console.log('Challenge finished! Your score is: ' + score);
}

function evaluateMutation(mutation) {
    // Evaluate the mutation and return score
    if (mutation === 'A') return 10;
    if (mutation === 'C') return 5;
    if (mutation === 'G') return 3;
    if (mutation === 'T') return 1;
    return 0;
}

// Uncomment to run the challenge within the game 
// level2MutationChallenge();