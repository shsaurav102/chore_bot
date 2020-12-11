let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let startButton = document.getElementById("start");
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let closedDoorPath =
  "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";
let currentlyPlaying = true;
let botDoorPath =
  "https://content.codecademy.com/projects/chore-door/images/robot.svg";
let beachDoorPath =
  "https://content.codecademy.com/projects/chore-door/images/beach.svg";
let spaceDoorPath =
  "https://content.codecademy.com/projects/chore-door/images/space.svg";

const isBot = (door) => {
  if (door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
};

let isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
};

const playDoor = (door) => {
  numClosedDoor--;
  if (numClosedDoor === 0) {
    gameOver("win");
  } else if (isBot(door)) {
    gameOver("lose");
  }
};

const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor3 = beachDoorPath;
    openDoor2 = botDoorPath;
    openDoor1 = spaceDoorPath;
  } else {
    openDoor2 = spaceDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = botDoorPath;
  }
};

doorImage1.onclick = () => {
  if (!isClicked(doorImage1) && currentlyPlaying) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
};

doorImage2.onclick = () => {
  if (!isClicked(doorImage2) && currentlyPlaying) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
};

doorImage3.onclick = () => {
  if (!isClicked(doorImage3) && currentlyPlaying) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
};

const gameOver = (status) => {
  if (status === "win") {
    startButton.innerHTML = "You win! Play again?";
  } else {
    startButton.innerHTML = "Game over! Play again?";
  }
  currentlyPlaying = false;
};

const startRound = () => {
  doorImage1 = closedDoorPath;
  doorImage2 = closedDoorPath;
  doorImage3 = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = "GoodLuck!";
  currentlyPlaying = true;
};

randomChoreDoorGenerator();

startButton.onclick = () => {
  startRound();
};
