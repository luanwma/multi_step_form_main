


    const btnStepOne = document.getElementById("stepONE");
    const btnStepTwo =  document.getElementById("stepTWO");
    const btnStepThree = document.getElementById("stepTHREE");
    const btnStepFour = document.getElementById("stepFOUR");


    btnStepOne.addEventListener("click", () =>{
        btnStepTwo.setAttribute("class", "circulo")
        btnStepThree.setAttribute("class", "circulo")
        btnStepFour.setAttribute("class", "circulo")
        btnStepOne.setAttribute("class", "divOnchange circulo")
  
    })

    btnStepTwo.addEventListener("click", () =>{
        btnStepOne.setAttribute("class", "circulo")
        btnStepThree.setAttribute("class", "circulo")
        btnStepFour.setAttribute("class", "circulo")
        btnStepTwo.setAttribute("class", "divOnchange circulo")
  
    })
    btnStepThree.addEventListener("click", () =>{
        btnStepOne.setAttribute("class", "circulo")
        btnStepTwo.setAttribute("class", "circulo")
        btnStepFour.setAttribute("class", "circulo")
        btnStepThree.setAttribute("class", "divOnchange circulo")
  
    })
    btnStepFour.addEventListener("click", () =>{
        btnStepOne.setAttribute("class", "circulo")
        btnStepTwo.setAttribute("class", "circulo")
        btnStepThree.setAttribute("class", "circulo")
        btnStepFour.setAttribute("class", "divOnchange circulo")
  
    })
