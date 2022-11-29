function secretChat(input) {
  let text = input.shift();
  let commands = { Reverse, ChangeAll, InsertSpace };

  while (input[0] !== "Reveal") {
    let tokens = input.shift().split(":|:");
    let name = tokens[0];
    let p1 = tokens[1];
    let p2 = tokens[2];
    let command = commands[name];
    text = command(text, p1, p2);
  }
  console.log(`You have a new text message: ${text}`)

  function ChangeAll(text, substr, replacement) {
    let result = text.split(substr).join(replacement);
    console.log(result);
    return result;
  }
  function Reverse(text, substr) {
    let index = text.indexOf(substr);
    if (index !== -1) {
      let leftText = text.substring(0, index);
      let rightText = text.substring(index + substr.length);
      let result = leftText + rightText + substr.split("").reverse().join("");
      console.log(result);
      return result;
    } else {
      console.log("error");
      return text;
    }
  }
  function InsertSpace(text, index) {
    let leftText = text.substring(0, index);
    let rightText = text.substring(index);
    let result = leftText + " " + rightText;
    console.log(result);
    return result;
  }
}

secretChat([
  "heVVodar!gniV",

  "ChangeAll:|:V:|:l",

  "Reverse:|:!gnil",

  "InsertSpace:|:5",

  "Reveal",
]);

//ChangeAl('heVVodar!gniV', 'V', 'l');
//Reverse("!abcOLLEHdef", "OLLEH");
//InsertSpace("hellodarling!", 5);

/**/
