"use strict";
const passwordLength = 12;
const characterUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const characterLowerCase = "abcdefghijklmnopqrstuvwxyz";
const characterNumber = "0123456789";
const characterSymbol = "@#$%^&*()_+~|}{[]></-=";
const characterAll = characterUpperCase + characterLowerCase + characterNumber + characterSymbol;
let generateBtn = document.querySelector(".generate-password-container");
let copyBtn = document.querySelector(".copy-password-button");
function generate() {
    let newPassword = "";
    newPassword +=
        characterUpperCase[Math.floor(Math.random() * characterUpperCase.length)];
    newPassword +=
        characterLowerCase[Math.floor(Math.random() * characterLowerCase.length)];
    newPassword +=
        characterNumber[Math.floor(Math.random() * characterNumber.length)];
    newPassword +=
        characterSymbol[Math.floor(Math.random() * characterSymbol.length)];
    for (let i = 0; i < 8; i++) {
        newPassword +=
            characterAll[Math.floor(Math.random() * characterAll.length)];
    }
    return newPassword;
}
generateBtn === null || generateBtn === void 0 ? void 0 : generateBtn.addEventListener("click", () => {
    let newPassword = document.querySelector(".input-password-text");
    if (newPassword !== null) {
        newPassword.value = generate();
    }
});
copyBtn === null || copyBtn === void 0 ? void 0 : copyBtn.addEventListener("click", () => {
    let newPassword = document.querySelector(".input-password-text");
    if (newPassword !== null) {
        newPassword.select();
        newPassword.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(newPassword.value);
    }
});
