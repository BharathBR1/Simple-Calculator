const keys = document.querySelectorAll(".keys");
const ip = document.getElementById("ip");
const op = document.getElementById("op");
let buttons = document.getElementsByTagName("button");

[...buttons].forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // if(Number(ip.innerText) != 0)

    switch (e.target.innerText) {
      case "Clear":
        ip.innerText = "";
        op.innerText = "";
        break;
      case "Delete":
        if (ip.innerText) {
          ip.innerText = ip.innerText.slice(0, -1);
        }
        break;

      case "=":
        try {
          op.innerText = eval(ip.innerText);
        } catch (error) {
          op.innerText = "Invalid Expression!";
        }
        break;
      case "0":
        if(Number(ip.innerText) != 0 ){
        ip.innerText += btn.value;
        }
      break;
      case "00":
        if(Number(ip.innerText) != 0 ){
        ip.innerText += btn.value;
        }
      break;
      default:
        ip.innerText += btn.value;
        if(ip.innerText.length > 20){
            alert("You can only enter 20 digit")
            ip.innerText = ip.innerText.slice(0, -1);

        }
    }
  });
});
