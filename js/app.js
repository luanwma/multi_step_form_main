    import criarFormulario from "./form_personal_info.js";
    import selectPlan from "./form_select_plan.js";



    const btnStepOne = document.getElementById("stepONE");
    const btnStepTwo =  document.getElementById("stepTWO");
    const btnStepThree = document.getElementById("stepTHREE");
    const btnStepFour = document.getElementById("stepFOUR");

    const plan = document.getElementById("")
    window.onload = () => {
        var divGetForm = document.querySelector(".getForm")
        divGetForm.innerHTML = "<div> </div>"
        divGetForm = criarFormulario()
    }



    btnStepOne.addEventListener("click", () =>{
        var divGetForm = document.querySelector(".getForm")
        divGetForm.innerHTML = "<div> </div>"
        divGetForm = criarFormulario()
        btnStepTwo.setAttribute("class", "circulo")
        btnStepThree.setAttribute("class", "circulo")
        btnStepFour.setAttribute("class", "circulo")
        btnStepOne.setAttribute("class", "divOnchange circulo")

        
  
    })

    btnStepTwo.addEventListener("click", () =>{
        var divGetForm = document.querySelector(".getForm")
        divGetForm.innerHTML = "<div> </div>"
        divGetForm = selectPlan()
        btnStepOne.setAttribute("class", "circulo")
        btnStepThree.setAttribute("class", "circulo")
        btnStepFour.setAttribute("class", "circulo")
        btnStepTwo.setAttribute("class", "divOnchange circulo")
  
    })
    btnStepThree.addEventListener("click", () =>{
        var divGetForm = document.querySelector(".getForm")
        divGetForm.innerHTML = "<div> </div>"
        
        btnStepOne.setAttribute("class", "circulo")
        btnStepTwo.setAttribute("class", "circulo")
        btnStepFour.setAttribute("class", "circulo")
        btnStepThree.setAttribute("class", "divOnchange circulo")
  
    })
    btnStepFour.addEventListener("click", () =>{
        var divGetForm = document.querySelector(".getForm")
        divGetForm.innerHTML = "<div> </div>"
        divGetForm = criarFormulario
        btnStepOne.setAttribute("class", "circulo")
        btnStepTwo.setAttribute("class", "circulo")
        btnStepThree.setAttribute("class", "circulo")
        btnStepFour.setAttribute("class", "divOnchange circulo")
  
    })



   

