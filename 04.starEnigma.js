function starEnigma(input) {
  let messages = Number(input.shift());
  let attackedPlanetsCount = 0;
  let destroyedPlanetsCount = 0;
  let attackedPlanets = [];
  let destroyedPlanets = [];

  for (let index = 0; index < messages; index++) {
    let encryptedMessage = input[index];

    let letterCount = encryptedMessage
      .toLowerCase()
      .split("")
      .filter(
        (char) => char === "s" || char === "t" || char === "a" || char === "r"
      ).length;

    let decryptedMessage = encryptedMessage
      .split("")
      .map((char) => String.fromCharCode(char.charCodeAt(0) - letterCount))
      .join("");

    let pattern =
      /@(?<name>[A-z]+)[^@\-!:]*:(?<population>[\d]+)[^@\-!:]*!(?<attType>[A||D])![^@\-!:]*->(?<soldierCount>[\d]+)/g;
    let finalMessage = pattern.exec(decryptedMessage);
    if (finalMessage) {
      if (finalMessage.groups.attType === "A") {
        attackedPlanetsCount++;
        attackedPlanets.push(finalMessage.groups.name);
      }
      if (finalMessage.groups.attType === "D") {
        destroyedPlanetsCount++;
        destroyedPlanets.push(finalMessage.groups.name);
      }
    }
  }
  let sortedAttPlanets = attackedPlanets.sort((a, b) => a.localeCompare(b));
  let sortedDestroyedPlanets = destroyedPlanets.sort((a, b) =>
    a.localeCompare(b)
  );

  console.log(`Attacked planets: ${attackedPlanetsCount}`);
  if (attackedPlanetsCount > 0) {
    for (let planet of sortedAttPlanets) {
      console.log(`-> ${planet}`);
    }
  }
  console.log(`Destroyed planets: ${destroyedPlanetsCount}`);
  if (destroyedPlanetsCount > 0) {
    for (let planet of sortedDestroyedPlanets) {
      console.log(`-> ${planet}`);
    }
  }
}

starEnigma(["2", "STCDoghudd4=63333$D$0A53333", "EHfsytsnhf?8555&I&2C9555SR"]);

//console.log(
// `Destroyed planets: ${destroyedPlanetsCount}\n-> ${sortedDestroyedPlanets}`
// );
