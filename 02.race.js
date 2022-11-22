function race(input) {
  let racers = {};
  let names = input.shift().split(", ");

  for (let line of input) {
    if (line !== "end of race") {
      let racerName = line.match(/[A-Z]+/gi).join("");
      let ranDistance = line.match(/\d/g);
      let totalDistance = 0;
      //for (let meters of ranDistance) {
        //totalDistance += Number(meters);
      //}
      totalDistance = ranDistance.map(Number).reduce((a, b) => a + b);

      if (names.includes(racerName)) {
        if (racers.hasOwnProperty(racerName)) {
          racers[racerName] += totalDistance;
        } else {
          racers[racerName] = totalDistance;
        }
      }
    }
  }
  let sortedArr = Object.keys(racers).sort((a, b) => racers[b] - racers[a]);
  console.log(
    `1st place: ${sortedArr[0]}\n2nd place: ${sortedArr[1]}\n3rd place: ${sortedArr[2]}`
  );
}

race([
  "George, Peter, Bill, Tom",

  "G4e@55or%6g6!68e!!@ ",

  "R1@!3a$y4456@",

  "B5@i@#123ll",

  "G@e54o$r6ge#",

  "7P%et^#e5346r",

  "T$o553m&6",

  "end of race",
]);
