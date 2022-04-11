import { Calculadora } from "./Calculadora.js";
import tema from "../css/_export.module.scss";
import "../css/index.scss";
const display = document.getElementById("valor");
const btnNumber= document.getElementsByClassName("numero");
const btnOperador=document.getElementsByClassName("operador");
const btnDelete=document.getElementsByClassName("delete");
const btnIgual=document.getElementsByClassName("igual");
const btnReset=document.getElementsByClassName("reset");
const containerNumber=document.getElementsByClassName("container-number");
const containerDisplay=document.getElementsByClassName("display");
const containerInput=document.getElementsByClassName("background");
const headCalc=document.getElementsByClassName("title");
const headNumber=document.getElementsByClassName("parrafo");
const numberDisplay=document.getElementsByClassName("valor");
const containerTheme=document.getElementsByClassName("theme-container")


let num1 = 0;
let num2 = 0;
let operacion = undefined;
let resultado;
const valorInicial = 0;
display.innerHTML = valorInicial;
document.addEventListener("click", (e) => {
  let id = e.target.id;
  console.log(id);
  let value = document.getElementById(id).value;
  if (e.target.classList.contains("numero")) {
    display.innerHTML = display.innerHTML.replace(String(num1), "");
    display.innerHTML += value;
  }
  if (e.target.classList.contains("delete")) {
    display.innerHTML =
      display.innerHTML.length > 1
        ? display.innerHTML.slice(0, -1)
        : valorInicial;
    if (num1 > 0) {
      num2 = Number(display.innerHTML);
    } else {
      num1 = Number(display.innerHTML);
    }
  }
  if (e.target.classList.contains("operador")) {
    switch (value) {
      case "+":
        if (num1 == 0) {
          num1 = Number(display.innerHTML);
        } else {
          display.innerHTML = Number(num1);
        }
        operacion = "suma";
        break;
      case "-":
        if (num1 == 0) {
          num1 = Number(display.innerHTML);
        } else {
          display.innerHTML = Number(num1);
        }
        operacion = "resta";
        break;
      case "*":
        if (num1 == 0) {
          num1 = Number(display.innerHTML);
        } else {
          display.innerHTML = Number(num1);
        }
        operacion = "multiplicacion";
        break;
      case "/":
        if (num1 == 0) {
          num1 = Number(display.innerHTML);
        } else {
          display.innerHTML = Number(num1);
        }
        operacion = "division";
        break;
      default:
        if (operacion) {
          num2 = Number(display.innerHTML);
          resultado = Calculadora[operacion](num1, num2);
          num1 = resultado;
          num2 = 0;
          display.innerHTML = resultado;
        }

        break;
    }
  }

  if (e.target.classList.contains("reset")) {
    display.innerHTML = `${Number(valorInicial)}`;
  }
  if (e.target.classList.contains("form-check-input")) {
    
    if(value === "option1") {
      document.body.style.background = tema["theme1-background"];
    }
    if(value === "option2") {
      document.body.style.background = tema["theme2-background"];   
      for(let i = 0; i< btnNumber.length; i++){
        btnNumber[i].style.background=tema["theme2-backgroundNumber"]
        btnNumber[i].style.color=tema["theme2-fontColorDark"]

      }

      for(let i = 0; i< btnOperador.length; i++){
        btnOperador[i].style.background=tema["theme2-backgroundNumber"]
        btnOperador[i].style.color=tema["theme2-fontColorLight"]
        
      }

      for(let i = 0; i< btnDelete.length; i++){
        btnDelete[i].style.background=tema["theme2-backgroundResetDelete"]
        btnDelete[i].style.color=tema["theme2-fontColorLight"]
        btnReset[i].style.background=tema["theme2-backgroundResetDelete"]
        btnReset[i].style.color=tema["theme2-fontColorLight"]
       
      }
      headCalc[0].style.color = tema["theme2-fontColorDark"];
      headNumber[0].style.color = tema["theme2-fontColorDark"];
      containerTheme[0].style.color = tema["theme2-fontColorDark"];

      containerInput[0].style.background = tema["theme2-backgroundDisplay"];
      
      containerDisplay[0].style.background = tema["theme2-backgroundDisplay"];
      numberDisplay[0].style.color = tema["theme2-fontColorDark"];

      containerNumber[0].style.background = tema["theme2-backgroundContainerNumber"];
      
      btnIgual[0].style.background = tema["theme2-backgroundIgual"];
      btnIgual[0].style.color = tema["theme2-fontColorLight"];

    }
    if(value === "option3") {
      document.body.style.background = tema["theme3-background"];   
      for(let i = 0; i< btnNumber.length; i++){
        btnNumber[i].style.background=tema["theme3-backgroundNumber"]
        btnNumber[i].style.color=tema["theme3-fontColorLight"]

      }

      for(let i = 0; i< btnOperador.length; i++){
        btnOperador[i].style.background=tema["theme3-backgroundNumber"]
        btnOperador[i].style.color=tema["theme3-fontColorLight"]
        
      }

      for(let i = 0; i< btnDelete.length; i++){
        btnDelete[i].style.background=tema["theme3-backgroundResetDelete"]
        btnDelete[i].style.color=tema["theme3-fontColorLight2"]
        btnReset[i].style.background=tema["theme3-backgroundResetDelete"]
        btnReset[i].style.color=tema["theme3-fontColorLight2"]
       
      }
      headCalc[0].style.color = tema["theme3-fontColorLight"];
      headNumber[0].style.color = tema["theme3-fontColorLight"];
      containerTheme[0].style.color = tema["theme3-fontColorLight"];

      containerInput[0].style.background = tema["theme3-backgroundDisplay"];
      
      containerDisplay[0].style.background = tema["theme3-backgroundDisplay"];
      numberDisplay[0].style.color = tema["theme3-fontColorLight"];

      containerNumber[0].style.background = tema["theme3-backgroundContainerNumber"];
      
      btnIgual[0].style.background = tema["theme3-backgroundIgual"];
      btnIgual[0].style.color = tema["theme3-fontColorDark"];

    }
  }
});
