/**
 * greet(name):
 * - optionally receives a name
 * - logs "Hello" if there is no name
 * - logs "Hello <name>" if there is a name
 */
function greet(name = "Hello") {
  if (name === "Hello") {
    console.log(name);
  } else {
    console.log(`Hello ${name}`);
  }
}
console.log(greet("Hello"));

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 */
function isOdd(n) {
  if (n % 2 === 0) {
    return false;
  } else {
    return true;
  }
}
console.log(isOdd(5));

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 *
 * Hint: you can solve this without writing any loops!
 */
function oddsSmallerThan(n) {
  return Math.trunc(n / 2);
}
console.log(oddsSmallerThan(7));
/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  if (n % 2 === 0) {
    return n * 2;
  } else {
    return Math.pow(n, 2);
  }
}
console.log(squareOrDouble(16));
/**
 * ageFromCivilID(civilID):
 * - receives a civilID as a STRING of the form <CYYMMDDXXXXX>
 *   where:
 *     - C is the century (1 = 18xx, 2 = 19xx, 3 = 20xx)
 *     - YY is the year (00 - 99)
 *     - MM is the month (01 - 12)
 *     - DD is the date
 * - calculates and returns the age of the civilID holder (rounded down to the nearest year)
 * - assume all civilIDs will be valid
 *
 * Hint: you can use JavaScript's Date() class to make things easier
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
 *
 * e.g. (if we assume that the date today is September 23 2018):
 *    ageFromCivilID(287050612345) -> 31
 *    ageFromCivilID(297111012345) -> 20
 */
function ageFromCivilID(civilID) {
  let century = civilID.toString().substr(0, 1);
  // let month = civilID.toString().substr(3, 4);
  // let day = civilID.toString().substr(5, 6);
  let year = civilID.toString().substr(1, 2);

  if (century === "1") {
    year = "18" + year;
  } else if (century === "2") {
    year = "19" + year;
    console.log("year if :" + year);
  } else if (century === "3") {
    year = "20" + year;
  }
  // year = parseInt(year, 10);
  let date = new Date();
  date.setFullYear(year);
  console.log("date:" + date);

  let today = new Date();
  return today.getFullYear() - date.getFullYear();
}
console.log(ageFromCivilID(297111012345));
/**
 * canVoteInKuwait(civilID, isKuwaiti, isRoyal):
 * - receives a civilID as a STRING
 * - receives a boolean isKuwaiti
 * - receives a boolean isRoyal
 * - returns true if the person can vote, false otherwise:
 *   In Kuwait the conditions for voting are as follows:
 *    - Over 21
 *    - Is a Kuwaiti citizen
 *    - Is NOT a member of the royal family
 */
function canVoteInKuwait(civilID, isKuwaiti, isRoyal) {
  var age = ageFromCivilID(civilID);
  if (age >= 21 && isKuwaiti && isRoyal) {
    return true;
  } else {
    return false;
  }
}
console.log(canVoteInKuwait(287050612345, true, true));
module.exports = {
  greet,
  isOdd,
  oddsSmallerThan,
  squareOrDouble,
  ageFromCivilID,
  canVoteInKuwait
};
