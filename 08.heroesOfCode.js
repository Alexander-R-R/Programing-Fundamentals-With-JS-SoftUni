function heroesOfCode(input) {
  let players = Number(input.shift());
  let heroes = {};

  for (let i = 0; i < players; i++) {
    let heroeData = input.shift().split(" ");
    let name = heroeData[0];
    let hp = Number(heroeData[1]);
    let mp = Number(heroeData[2]);

    heroes[name] = {
      hp,
      mp,
    };
  }

  while (input[0] != "End") {
    let tokens = input.shift().split(" - ");
    let command = tokens[0];
    let name = tokens[1];
    let p1 = Number(tokens[2]);
    let p2 = tokens[3];
    let hero = heroes[name];

    if (command == "Heal") {
      if (hero.hp <= 100) {
        let currentHp = hero.hp;
        hero.hp += p1;
        if (hero.hp > 100) {
          hero.hp = 100;
        }
        console.log(`${name} healed for ${hero.hp - currentHp} HP!`);
      }

    } else if (command == "Recharge") {
      if (hero.mp < 200) {
        let currentMP = hero.mp;
        hero.mp += p1;
        if (hero.mp > 200) {
          hero.mp = 200;
        }
        console.log(`${name} recharged for ${hero.mp - currentMP} MP!`);
      }

    } else if (command == "TakeDamage") {
      if (hero.hp > 0) {
        hero.hp -= p1;
        if (hero.hp > 0) {
          console.log(
            `${name} was hit for ${p1} HP by ${p2} and now has ${hero.hp} HP left!`
          );
        } else {
          console.log(`${name} has been killed by ${p2}!`);
          delete heroes[name];
        }
      }
    } else if (command == "CastSpell") {
      if (hero.mp >= p1) {
        hero.mp -= p1;
        console.log(
          `${name} has successfully cast ${p2} and now has ${hero.mp} MP!`
        );
      } else {
        console.log(`${name} does not have enough MP to cast ${p2}!`);
      }
    }
  }
  for (let heroData of Object.entries(heroes)) {
    let name = heroData[0];
    let hero = heroData[1];
    console.log(name);
    console.log(`  HP: ${hero.hp}`);
    console.log(`  MP: ${hero.mp}`);
  }
}

heroesOfCode([
  2,

  "Solmyr 85 120",

  "Kyrre 99 50",

  "Heal - Solmyr - 10",

  "Recharge - Solmyr - 50",

  "TakeDamage - Kyrre - 66 - Orc",

  "CastSpell - Kyrre - 15 - ViewEarth",

  "End",
]);

console.log("-----------------");

heroesOfCode([
  4,

  "Adela 90 150",

  "SirMullich 70 40",

  "Ivor 1 111",

  "Tyris 94 61",

  "Heal - SirMullich - 50",

  "Recharge - Adela - 100",

  "CastSpell - Tyris - 1000 - Fireball",

  "TakeDamage - Tyris - 99 - Fireball",

  "TakeDamage - Ivor - 3 - Mosquito",

  "End",
]);
