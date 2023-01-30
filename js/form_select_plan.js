    
    import componentArcadePlan from "./component_plan_arcade.js"
    import componentAdvancedPlan from "./component_plan_advanced.js"
import componentProPlan from "./component_plan_pro.js"

    const pricePlanArcadebyMonth = 9 ,pricePlanAdvancedbyMonth = 12 , pricePlanProbyMonth = 15
   
export default function selectPlan(){

    var divGetForm = document.querySelector(".getForm")
    divGetForm.innerHTML = ""

    var divForm = document.createElement("div")
    divForm.setAttribute("class", "div_form")

    var divFormHeader = document.createElement("div")
    divFormHeader.setAttribute("class", "div_form_header")
    var H1 = document.createElement("h1")
    H1.setAttribute("class", "title_h1")
    H1.innerText = "Select your plan"

    divFormHeader.appendChild(H1)

    var subText = document.createElement("p")
    subText.setAttribute("class", "text_descript_form")
    subText.innerText = "You have the option of monthly or yearly billing."
    divFormHeader.appendChild(subText)

    divForm.appendChild(divFormHeader);

    var divFormBody = document.createElement("div")
    divFormBody.setAttribute("class", "div_form_select_plan_body")
    divForm.appendChild(divFormBody)


    var divPlans= document.createElement("div")
    divPlans.setAttribute("class", "body_form_select_plan") // para grid
    
  

   var  arcadePlan = componentArcadePlan()
   var advancedPlan = componentAdvancedPlan();
   var proPlan = componentProPlan()

   

 
    divPlans.appendChild(arcadePlan)
    divPlans.appendChild(advancedPlan)
    divPlans.appendChild(proPlan)
    divFormBody.appendChild(divPlans)


    var divCheckbox =  document.createElement("div")
    divCheckbox.setAttribute("class", "div_input_checkbox")
    var pMonthly = document.createElement("p")
    pMonthly.innerText = "Monthly"
    pMonthly.setAttribute("id", "select_monthly")
    var pYearly = document.createElement("p")
    pYearly.innerText = "Yearly"
    pYearly.setAttribute("id", "select_yearly")
    var inputcheckbox = document.createElement("input")
    inputcheckbox.setAttribute("type", "checkbox")
    inputcheckbox.setAttribute("id", "checkbox_year_month")
    divCheckbox.appendChild(pMonthly)
    divCheckbox.appendChild(inputcheckbox)
    divCheckbox.appendChild(pYearly)
    divFormBody.appendChild(divCheckbox)

   

    var divButtom = document.createElement("div")
    divButtom.setAttribute("class", "div_buttons_pageTwo" )

    var btnNextStep = document.createElement("button")
    btnNextStep.setAttribute("class", "buttom_next")
    btnNextStep.setAttribute("id", "toStepTwo")
    btnNextStep.innerText = "Next Step"

    var btnGoBack = document.createElement("p")
    btnGoBack.setAttribute("class", "link_go_back")
    btnGoBack.innerText = "Go Back"
    divButtom.appendChild(btnGoBack)

    divButtom.appendChild(btnNextStep)

    divFormBody.appendChild(divButtom)

    

    
    divForm.appendChild(divFormBody)


    var divGetForm = document.querySelector(".getForm")
    divGetForm.appendChild(divForm)

}


