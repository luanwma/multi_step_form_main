
    export default function componentProPlan(ligado){



        var planPro = document.createElement("div")
        planPro.setAttribute("class", "plan")
        planPro.setAttribute("id", "plan_pro")
        var imgArcadePlan = document.createElement("img")
        imgArcadePlan.src = "../assets/images/icon-pro.svg"
        planPro.appendChild(imgArcadePlan)
        var divDescArcadePlan = document.createElement("div")
        
        var nameArcadePlan = document.createElement("p")
        nameArcadePlan.innerText = "Pro"
        divDescArcadePlan.appendChild(nameArcadePlan)
        var proPlanPrice = document.createElement("spam")
        
        
        
        if(ligado == true){
            proPlanPrice.innerText = "$150/yr"
            divDescArcadePlan.appendChild(proPlanPrice)

           var yearlyPlanText = document.createElement("p")
           yearlyPlanText.setAttribute("class", "yearly_plan")
           yearlyPlanText.innerText = "2 months free"

           divDescArcadePlan.appendChild(yearlyPlanText)
        }else{

            proPlanPrice.innerText = "$15/mo"
            divDescArcadePlan.appendChild(proPlanPrice)
           
        }
        planPro.appendChild(divDescArcadePlan)
    
        return planPro

    }