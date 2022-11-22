function furniture(text) {
  let finalSum = 0;

  console.log("Bought furniture:");

  for (let line of text) {
    if (line === "Purchase") {
      break;
    }
    let pattern = />>(?<name>[A-za-z]+)<<(?<price>\d+(.\d+)?)!(?<amount>\d+)/;
    let result = pattern.exec(line);

    if (result !== null) {
      let name = result.groups["name"];
      let price = result.groups["price"];
      let amount = result.groups["amount"];
      finalSum += Number(price) * Number(amount);
      console.log(name);
    }
  }
  console.log(`Total money spend: ${finalSum.toFixed(2)}`);
}

furniture([
  ">>Laptop<<312.2323!3",

  ">>TV<<300.21314!5",

  ">Invalid<<!5",

  ">>TV<<300.21314!20",

  ">>Invalid<!5",

  ">>TV<<30.21314!5",

  ">>Invalid<<!!5",

  "Purchase",
]);
