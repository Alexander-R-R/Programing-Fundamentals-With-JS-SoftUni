function barIncome(input) {
  let totalSum = 0;
  for (let line of input) {
    let pattern =
    /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>[\w]+)>[^|$%.]*\|(?<count>[\d]+)\|[^|$%.]*?(?<price>[\d]+[.]?[\d]+?)\$/gm;
    let order = pattern.exec(line);
    if (order) {
      let customer = order.groups.customer;
      let product = order.groups.product;
      let count = order.groups.count;
      let price = order.groups.price;
      totalSum += count * price;
      console.log(`${customer}: ${product} - ${(count * price).toFixed(2)}`);
    }
    if (line == "end of shift") {
      console.log(`Total income: ${totalSum.toFixed(2)}`);
    }
  }
}

barIncome([
  "%George%<Croissant>|2|10.3$",

  "%Peter%<Gum>|1|1.3$",

  "%Maria%<Cola>|1|2.4$",

  '%Valid%<Valid>valid|10|valid20$',

  "end of shift",
]);

///%(?<customer>[A-Z][a-z]+)%<(?<product>[\w]+)>\|(?<count>[\d]+)\|(?<price>[\d]+[.][\d]+)\$/gm    /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>[\w]+)>[^|$%.]*\|(?<count>[\d]+)\|[^|$%.]*(?<price>[\d]+[.]?[\d]+?)\$/gm
