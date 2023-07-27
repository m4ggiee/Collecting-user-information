let age = parseInt(prompt(`Введіть свій рік народження:`));
age = 2023 - age;

if(age){
    alert(age);
} else{
    alert(`Шкода, що Ви не захотіли ввести свою дату народження`);
}


let city = prompt(`В якому місті ви живете?`);
let kyiv = 'Київ';
let washington = `Вашингтон`;
let london = `Лондон`;

if(city===kyiv){
    alert(`Ти живеш у столиці України`);
} else if(city===washington){
    alert(`Ти живеш у столиці США`);
} else if(city===london){
    alert(`Ти живеш у столиці Англії`);
} else if(city!=kyiv, city!=washington, city!=london){
    alert(`Ти живеш у місті ${city}`);
} else{
    alert(`Шкода, що Ви не захотіли ввести своє міто.`);
}


let sport = prompt(`Який ваш улюблений вид спорту?`);
let football = `Футбол`;
let basketball = `Баскетбол`;
let volleyball = `Волейбол`;


if(sport===football){
    alert(`Круто! Хочеш стати Лионелем Мессі`);
} else if(sport===basketball){
    alert(`Круто! Хочеш стати як Майкл Джордан`);
} else if(sport===volleyball){
    alert(`Круто! Хочеш стати Вільфредо Леоном`);
} else{
    alert(`Шкода, що Ви не захотіли ввести свій улюблений вид спорту.`);
}