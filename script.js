const colorsText = document.getElementsByClassName("color-code");
const getSchemeBtn = document.getElementById("get-scheme");
const colorTextCodeEl = document.getElementsByClassName("color-code");
const snackBar = document.getElementById("snackbar");

getSchemeBtn.addEventListener("click", getNewScheme);

function makeTextCopyable() {
  for (let i = 0; i < colorTextCodeEl.length; i++) {
    colorTextCodeEl[i].onclick = () => {
      document.execCommand("copy");
    };
    colorTextCodeEl[i].addEventListener("copy", (event) => {
      event.preventDefault();

      snackBar.className = "show";

      setTimeout(() => {
        snackBar.className = snackBar.className.replace("show", "snackbar");
      }, 3000);
      if (event.clipboardData) {
        event.clipboardData.setData(
          "text/plain",
          colorTextCodeEl[i].textContent
        );
      }
    });
  }
}

function getNewScheme() {
  getSchemeBtn.disabled = true;
  const selectedColor = document
    .getElementById("color-selector")
    .value.substring(1);

  const selectedMode = document.getElementById("mode").value.toLowerCase();
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${selectedMode}&count=5`
  )
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < 5; i++) {
        let color = data.colors[i].hex.value;
        colorsText[i].textContent = color;
        document.getElementsByClassName("single-color-container")[
          i
        ].style.backgroundColor = color;
      }
    });
  getSchemeBtn.disabled = false;
}

getNewScheme();
makeTextCopyable();
