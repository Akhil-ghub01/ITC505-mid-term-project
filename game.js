const story = {
    start: {
        text: "You wake up in a mysterious forest. It's quiet, and you don't know where you are. What will you do?",
        choices: [
            { text: "Explore the forest", next: "exploreForest" },
            { text: "Go back to sleep", next: "sleep" }
        ],
        image: "images/forest.jpg"
    },
    exploreForest: {
        text: "You decide to explore the forest. After a while, you encounter a wild animal. What will you do?",
        choices: [
            { text: "Fight the animal", next: "fightAnimal" },
            { text: "Run away", next: "runAway" }
        ],
        image: "images/animal.jpg"
    },
    fightAnimal: {
        text: "You fight the animal and win. You find a hidden treasure behind a bush.",
        choices: [
            { text: "Open the treasure", next: "openTreasure" },
            { text: "Leave the treasure and walk away", next: "walkAway" }
        ],
        image: "images/treasure.jpg"
    },
    runAway: {
        text: "You run away safely but find yourself lost in the forest again.",
        choices: [
            { text: "Keep walking", next: "keepWalking" },
            { text: "Climb a tree to get a better view", next: "climbTree" }
        ],
        image: "images/lost.jpg"
    },
    openTreasure: {
        text: "You open the treasure and find gold! You're rich!",
        choices: [
            { text: "Celebrate your wealth", next: "celebrateWealth" }
        ],
        image: "images/gold.jpg"
    },
    walkAway: {
        text: "You leave the treasure and walk into the sunset.",
        choices: [],
        image: "images/sunset.jpg"
    },
    keepWalking: {
        text: "You keep walking and stumble upon a peaceful village. You’ve found your way home.",
        choices: [],
        image: "images/village.jpg"
    },
    climbTree: {
        text: "You climb a tree, get a better view, and find your way out of the forest.",
        choices: [],
        image: "images/exit.jpg"
    },
    celebrateWealth: {
        text: "You live happily ever after as a rich adventurer.",
        choices: [],
        image: "images/happy.jpg"
    },
    sleep: {
        text: "You go back to sleep and wake up in the morning. It's all a dream!",
        choices: [],
        image: "images/sleep.jpg"
    }
};

let currentStage = "start";

function startGame() {
    currentStage = "start";
    showStage(currentStage);
    document.getElementById('restart-button').style.display = "none"; // Initially hide the restart button
}

function showStage(stage) {
    const stageData = story[stage];
    document.getElementById('story-text').textContent = stageData.text;
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = "";

    // Add choices
    stageData.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = function() {
            showStage(choice.next);
        };
        choicesContainer.appendChild(button);
    });

    // Change image
    document.getElementById('story-image').src = stageData.image;

    // Show Restart Button for terminal stages
    if (stage === 'celebrateWealth' || stage === 'walkAway' || stage === 'sleep' || stage === 'keepWalking' || stage === 'climbTree') {
        showAddendum(); // Show addendum when the game ends
        document.getElementById('restart-button').style.display = "block"; // Show restart button
    } else {
        document.getElementById('restart-button').style.display = "none"; // Hide restart button if it's not a terminal stage
    }
}

// Show Addendum section
function showAddendum() {
    document.getElementById('addendum').removeAttribute('hidden');
}

// Restart the game
function restartGame() {
    currentStage = "start";
    showStage(currentStage);
    document.getElementById('restart-button').style.display = "none"; // Hide restart button after restart
    document.getElementById('addendum').setAttribute('hidden', 'true'); // Hide addendum after restart
}

// Start the game
startGame();
