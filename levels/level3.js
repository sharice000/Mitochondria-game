// Level 3 Population Genetics Simulation

class PopulationGeneticsSimulation {
    constructor(size, mutationRate) {
        this.size = size; // Size of the population
        this.mutationRate = mutationRate; // Probability of mutation
        this.population = this.initializePopulation();
    }

    initializePopulation() {
        const population = [];
        for (let i = 0; i < this.size; i++) {
            population.push({ allele: Math.random() < 0.5 ? 'A' : 'a', fitness: 1 });
        }
        return population;
    }

    simulateGeneration() {
        const newPopulation = [];
        for (let individual of this.population) {
            const mutated = Math.random() < this.mutationRate;
            newPopulation.push({ allele: mutated ? (Math.random() < 0.5 ? 'A' : 'a') : individual.allele, fitness: individual.fitness });
        }
        this.population = newPopulation;
    }

    getPopulation() {
        return this.population;
    }
}

// Example usage
const simulation = new PopulationGeneticsSimulation(1000, 0.01);
simulation.simulateGeneration();
console.log(simulation.getPopulation());