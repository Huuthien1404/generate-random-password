const passwordLength = 12;
const characterUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const characterLowerCase = "abcdefghijklmnopqrstuvwxyz";
const characterNumber = "0123456789";
const characterSymbol = "@#$%^&*()_+~|}{[]></-=";
const characterAll =
  characterUpperCase + characterLowerCase + characterNumber + characterSymbol;

let generateBtn: HTMLElement | null = document.querySelector(
  ".generate-password-container"
);

let copyBtn: HTMLElement | null = document.querySelector(".copy-password-button");

function generate(): string {
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

generateBtn?.addEventListener("click", () => {
  let newPassword: HTMLInputElement | null = document.querySelector(
    ".input-password-text"
  );
  if (newPassword !== null) {
    newPassword.value = generate();
  }
});

copyBtn?.addEventListener("click", () => {
  let newPassword: HTMLInputElement | null = document.querySelector(
    ".input-password-text"
  );
  if (newPassword !== null) {
    newPassword.select();
    newPassword.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(newPassword.value);
  }
});
