/*
    Scrie o funcție care primește ca parametru un număr și întoarce un calificativ.
    Încearcă să scrii cât mai puține instrucțiuni.
    
    Calificative:
    10: FB
     9: FB
     8: B
     7: B
     6: S
     5: S
     4: IS
     3: IS
     2: IS
     1: IS
*/
let studentGrade = function (score, total = 10) {
  let totalPercent = score;
  let letterGrade = "";

  if (totalPercent >= 9) {
    letterGrade = "FB";
  } else if (totalPercent >= 7) {
    letterGrade = "B";
  } else if (totalPercent >= 5) {
    letterGrade = "S";
  } else if (totalPercent >= 1) {
    letterGrade = "IS";
  }
  return letterGrade;
};
let studentOne = studentGrade(9, 10);
console.log(studentOne);
