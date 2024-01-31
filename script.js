// Lekce 2 úkoly

/* Vymyslete, jak použít funkci Math.random a různé zaokrouhlovací funkce probírané
 v této lekci k simulování hodu klasickou šestistěnnou kostkou. 
 S použitím vhodných funkcí sestavte výraz, který vygeneruje náhodné celé číslo mezi 1 a 6.
 
Zamyslete se nad tím, zda vámi vytvořený výraz generuje všechna čísla skutečně se stejnou
 pravděpodobností. Vemte v úvahu, že funkce Math.random generuje náhodná čísla mezi 
 0 (včetně) a 1 (vyjma). Je tedy malinká pravěpodobnost, že občas padne přesně číslo 0. 
 Naopak číslo 1 padnout nemůže.
 */

document.body.innerHTML += "Hod kostkou je: " + Math.floor((Math.random()*6)+1)


/*
Jeden lístek do divadla :i[Pěst na oko] stojí 12 euro. 
Spočítejte měsíční příjem divadla ze vstupného, přichází-li průměrně 174 návštěvníků 
na jedno představení a divadlo hraje 15 představení měsíčně. 
Uložte výsledek do proměnné prijem.

Hodnotu proměnné prijem vypište do stránky.

Divadlo se rozhodlo prodávat studentské vstupné ve výši 65 % plného vstupného. 
Jak se změní měsíční příjem divadla pokud víme, že 40 % návštěvníků jsou studenti?
Vypište do stránky i příjem divadla se započítanou slevou pro studenty
*/

document.body.innerHTML += "<h1>Úkol 2 - příjem divadla</h1>"

let listek = 12
let listekStudent = listek * 0.65
let obsazenost = 174
let pocetPredstaveni = 15
let prijem = listek * obsazenost * pocetPredstaveni
let prijemSlevy = Math.floor((listek * obsazenost * pocetPredstaveni * 0.6) + (listekStudent * obsazenost * pocetPredstaveni * 0.4))

document.body.innerHTML += "Příjem divadla je: " + prijem + " Eur." + "<br/>"
document.body.innerHTML += "Příjem divadla se studentskymi slevami je: " + prijemSlevy + " Eur."








