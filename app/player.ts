/// <reference path="person.ts" />

class Player implements Person {

    name: string;
    age: number;
    highScore: number; // Extra property that's not on the 'Person' Interface

    /*
    constructor(name: string, age: number, highScore: number) {
        this.name = name;
        this.age = age;
        this.highScore = highScore;
        console.log("New Player created!");
    }
    */

    formatName() {
        return this.name.toUpperCase();
    }
}