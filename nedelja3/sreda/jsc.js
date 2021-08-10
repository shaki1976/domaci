/**
 *
 * 1. Napisati funkciju koja vrsi sumiranje i mnozenje jednog niza i vratiti te vrednosti u niz
 *
 * 2. Napisati funkciju koja iz datog niza izbacuje null, undefined, NaN, 0, "" itd...
 *
 * 4. За првих 100 бројева исписати:
 *       ако је дељив са 3  Fizz, са 5  Buzz, и са оба  FizzBuzz, у супротном Broj
 *       Ако је дељив са 3,5,7 - FizzBuzzZazz
 *       3,5 - FizzBuzz
 *       3,7 - FizzZazz
 *       5,7 - BuzzZazz
 *
 * 5. Izvrsiti inverziju brojeva bez pomocne promenljive.
 *      Pr: x = 5 y = 9
 *      Resenje: x = 9 y = 5
 *      pom = "ne mozete koristiti"
 *
 */
// /**
//  * 1. Napisati funkciju koja vraca najduzi palindrom u datom stringu.
// Napomena: nije potrebno da se ispituje da li je uneti string palindrom, neka se podrazumeva da jeste
// Primer: "HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"
// Ispis: "12345678987654321"
//  */

console.log("---------------------------nizovi zadatak 1");
// * 1. Napisati funkciju koja vrsi sumiranje i mnozenje jednog niza i vratiti te vrednosti u niz
{
  let niz = [1, 2, 3, 4, 5, 6];

  let sumiranjeIMnozenje = (arr) => {
    let sum = 0;
    let proizvod = 1;
    for (const el of arr) {
      sum += el;
      proizvod *= el;
    }
    return [sum, proizvod];
  };

  // povrat f-je kao poseban niz u nizu
  //   niz.push(sumiranjeIMnozenje(niz));
  //   console.log(niz);

  // povrat f-je kao zasebni elementi u nizu
  niz.push(...sumiranjeIMnozenje(niz));
  console.log(niz);
}
{
  // varijanta da f-ja vraca elemente u niz

  let niz = [1, 2, 3, 4, 5, 6];

  let sumiranjeIMnozenje = (arr) => {
    let sum = 0;
    let proizvod = 1;
    for (const el of arr) {
      sum += el;
      proizvod *= el;
    }
    arr.push(sum, proizvod);
  };

  sumiranjeIMnozenje(niz);
  console.log(niz);
}

console.log("---------------------------nizovi zadatak 2");
// 2. Napisati funkciju koja iz datog niza izbacuje null, undefined, NaN, 0, "" itd...
{
  function izbacivanje(niz) {
    for (let i = 0; i < niz.length; i++) {
      if (!niz[i]) {
        niz.splice(i, 1);
      }
    }
  }

  let arr = [1, NaN, 2, undefined, 3, "", 4, null, 5];
  izbacivanje(arr);
  console.log(arr);
}

console.log("---------------------------nizovi zadatak 4");
// * 4. За првих 100 бројева исписати:
// *       ако је дељив са 3  Fizz, са 5  Buzz, и са оба  FizzBuzz, у супротном Broj
// *       Ако је дељив са 3,5,7 - FizzBuzzZazz
// *       3,5 - FizzBuzz
// *       3,7 - FizzZazz
// *       5,7 - BuzzZazz

{
  // ako je u postavci zadatka slucajno izostavljeno da ako je broj deljiv sa 7 ispisuje "Zazz"
  let str = "",
    x,
    y,
    z,
    a;
  for (a = 1; a <= 100; a++) {
    x = a % 3 == 0;
    y = a % 5 == 0;
    z = a % 7 == 0;
    if (x) {
      str += "Fizz";
    }
    if (y) {
      str += "Buzz";
    }
    if (z) {
      str += "Zazz";
    }
    if (!(x || y || z)) {
      str += a;
    }
    str += "\n";
  }
  console.log(str);
}

{
  console.log("---------------------------nizovi zadatak 4 nacin 2");
  //ako je namerno izostavljeno da ako je deljiv sa 7 ispisuje Zazz
  function fizzBuzzZazz(pocBroj, zavrBroj) {
    let str = "";
    if (pocBroj > zavrBroj) {
      let t = pocBroj;
      pocBroj = zavrBroj;
      zavrBroj = t;
    }

    for (let i = pocBroj; i <= zavrBroj; i++) {
      x = i % 3 == 0;
      y = i % 5 == 0;
      z = i % 7 == 0;
      if (x && y && z) str += "FizzBuzzZazz";
      else if (y && z) str += "BuzzZazz";
      else if (x && z == 0) str += "FizzZazz";
      else {
        if (x) {
          str += "Fizz";
        }
        if (y) {
          str += "Buzz";
        }
        if (!(x || y)) {
          str += i;
        }
      }
      str += "\n";
    }
    console.log(str);
  }

  fizzBuzzZazz(1, 105);
}

console.log("---------------------------nizovi zadatak 5");
// * 5. Izvrsiti inverziju brojeva bez pomocne promenljive.
// *      Pr: x = 5 y = 9
// *      Resenje: x = 9 y = 5
// *      pom = "ne mozete koristiti"
{
  let a = 9,
    b = 5;
  console.log(`staro a: ${a}, staro b: ${b}`);
  a = a + b;
  b = a - b;
  a = a - b;

  console.log(`novo a: ${a}, novo b: ${b}`);
}
