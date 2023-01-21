

    export default function componentArcadePlan(ligado){

       
        var planArcade = document.createElement("div")
        planArcade.setAttribute("class", "plan")
        planArcade.setAttribute("id", "plan_arcade")
       // planArcade.setAttribute("onclick", "selectionPlan()")
       /*var check = document.createElement("input")
       check.setAttribute("type", "checkbox")
       check.setAttribute("id", "check_plan")
       planArcade.appendChild(check) */
        var imgArcadePlan = document.createElement("img")
        imgArcadePlan.src = "../assets/images/icon-arcade.svg"
        planArcade.appendChild(imgArcadePlan)
        var divDescArcadePlan = document.createElement("div")
        
        var nameArcadePlan = document.createElement("p")
        nameArcadePlan.innerText = "Arcade"
        var arcadePlanPrice = document.createElement("spam") 
        var yearlyPlanText = document.createElement("p")
        divDescArcadePlan.appendChild(nameArcadePlan)
        
       
        
        if(ligado == true){

           
            arcadePlanPrice.innerText = "$90/yr"
            divDescArcadePlan.appendChild(arcadePlanPrice)
           
           yearlyPlanText.setAttribute("class", "yearly_plan")
           yearlyPlanText.innerText = "2 months free"
           divDescArcadePlan.appendChild(yearlyPlanText)
          
           
        }else{
            arcadePlanPrice.innerText = "$9/mo"
            divDescArcadePlan.appendChild(arcadePlanPrice)
        }
        

        planArcade.appendChild(divDescArcadePlan)
        
    
        return planArcade
    }