function pirates(input) {
  let cities = {};
  let lineOfInput = input.shift();

  while (lineOfInput !== "Sail") {
    let [cityName, population, gold] = lineOfInput.split("||");
    if (!cities.hasOwnProperty(cityName)) {
      cities[cityName] = [Number(population), Number(gold)];
    } else {
      cities[cityName][0] += Number(population);
      cities[cityName][1] += Number(gold);
    }
    lineOfInput = input.shift();
  }
  lineOfInput = input.shift();

  while (lineOfInput !== "End") {
    let [command, cityName, population, gold] = lineOfInput.split("=>");
    if (command == "Plunder") {
      cities[cityName][0] -= Number(population);
      cities[cityName][1] -= Number(gold);
      console.log(
        `${cityName} plundered! ${gold} gold stolen, ${population} citizens killed.`
      );
      if (cities[cityName][0] <= 0 || cities[cityName][1] <= 0) {
        delete cities[cityName];
        console.log(`${cityName} has been wiped off the map!`);
      }
    } else if (command == "Prosper") {
      let prosperGold = Number(population);
      if (prosperGold < 0) {
        console.log("Gold added cannot be a negative number!");
      } else {
        cities[cityName][1] += prosperGold;
        console.log(
          `${prosperGold} gold added to the city treasury. ${cityName} now has ${cities[cityName][1]} gold.`
        );
      }
    }
    lineOfInput = input.shift();
  }
  if (lineOfInput == "End") {
    if (Object.keys(cities).length == 0) {
      console.log(
        "Ahoy, Captain! All targets have been plundered and destroyed!"
      );
    } else {
      console.log(
        `Ahoy, Captain! There are ${
          Object.keys(cities).length
        } wealthy settlements to go to:`
      );
      for (let city of Object.keys(cities)) {
        console.log(
          `${city} -> Population: ${cities[city][0]} citizens, Gold: ${cities[city][1]} kg`
        );
      }
    }
  }
}

pirates([
  "Nassau||95000||1000",

  "San Juan||930000||1250",

  "Campeche||270000||690",

  "Port Royal||320000||1000",

  "Port Royal||100000||2000",

  "Sail",

  "Prosper=>Port Royal=>-200",

  "Plunder=>Nassau=>94000=>750",

  "Plunder=>Nassau=>1000=>150",

  "Plunder=>Campeche=>150000=>690",

  "End",
]);

console.log("====================");

pirates([
  "Tortuga||345000||1250",

  "Santo Domingo||240000||630",

  "Havana||410000||1100",

  "Sail",

  "Plunder=>Tortuga=>75000=>380",

  "Prosper=>Santo Domingo=>180",

  "End",
]);
