

    export default function componentAdvancedPlan(ligado){


        var planAdvanced = document.createElement("div")
        planAdvanced.setAttribute("id", "plan_advanced")
        planAdvanced.setAttribute("class", "plan")


        var imgPlanAdvanced = document.createElement("img")
        imgPlanAdvanced.src = "../assets/images/icon-advanced.svg"
        planAdvanced.appendChild(imgPlanAdvanced)


        var divDescAdvancedPlan = document.createElement("div")
        

        var nomePlanAdvanced= document.createElement("p")
        nomePlanAdvanced.innerText = "Advanced"
        divDescAdvancedPlan.appendChild(nomePlanAdvanced)
        

        var pricePlanAdvanced = document.createElement("spam")
        pricePlanAdvanced.innerText = "$12/mo"
        divDescAdvancedPlan.appendChild(pricePlanAdvanced)


        if(ligado){

            pricePlanAdvanced.innerText = "$120/yr"
            divDescAdvancedPlan.appendChild(pricePlanAdvanced)

            var yearlyPlanText = document.createElement("p")
           yearlyPlanText.setAttribute("class", "yearly_plan")
           yearlyPlanText.innerText = "2 months free"

           divDescAdvancedPlan.appendChild(yearlyPlanText)
        }else{
            pricePlanAdvanced.innerText = "$12/mo"
            divDescAdvancedPlan.appendChild(pricePlanAdvanced)

        }
    

        planAdvanced.appendChild(divDescAdvancedPlan)
        
        return planAdvanced
    }