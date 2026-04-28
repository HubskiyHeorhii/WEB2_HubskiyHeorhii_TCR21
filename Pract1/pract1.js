"use strict";

alert("Будь ласка, заповніть анкету");

let name;

do {

    name = prompt("Введіть ваше ім'я:");

    if (name === null || name.trim() === "") {
        alert("Помилка! Ім'я не може бути порожнім.");
    }

} while (name === null || name.trim() === "");

let age;
let ageNumber;

do {

    age = prompt("Введіть ваш вік:");

    if (age === null || age.trim() === "") {
        alert("Помилка! Вік не може бути порожнім.");
        continue;
    }

    ageNumber = Number(age);

    if (isNaN(ageNumber) || ageNumber < 0) {
        alert("Помилка! Введіть коректний вік (число).");
        continue;
    }

    if (ageNumber < 18) {
        alert("Доступ дозволено лише повнолітнім користувачам (18+).");
    }

} while (isNaN(ageNumber) || ageNumber < 18);

let city;

do {

    city = prompt("Введіть ваше місто:");

    if (city === null || city.trim() === "") {
        alert("Помилка! Місто не може бути порожнім.");
    }

} while (city === null || city.trim() === "");

let color;

do {

    color = prompt("Введіть ваш улюблений колір:");

    if (color === null || color.trim() === "") {
        alert("Помилка! Колір не може бути порожнім.");
    }

} while (color === null || color.trim() === "");

let work;

do {

    work = prompt("Чи працюєте ви? (так / ні)");

    work = work.trim().toLowerCase();

    if (work !== "так" && work !== "ні") {
        alert("Будь ласка введіть тільки: так або ні.");
    }

} while (work !== "так" && work !== "ні");

let sendData = confirm("Чи згодні ви надіслати введені дані?");

if (!sendData) {

    alert("Відправку даних скасовано.");
    console.log("Користувач відмовився від надсилання даних.");

} else {

    console.log("Ім'я:", name);
    console.log("Вік:", ageNumber);
    console.log("Місто:", city);
    console.log("Колір:", color);
    console.log("Працює:", work);

    console.log(typeof name);
    console.log(typeof ageNumber);
    console.log(typeof city);
    console.log(typeof color);
    console.log(typeof work);

    document.getElementById("name").textContent = name;
    document.getElementById("age").textContent = ageNumber;
    document.getElementById("city").textContent = city;
    document.getElementById("color").textContent = color;
    document.getElementById("work").textContent = work ? "Так" : "Ні";
}