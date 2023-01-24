


    export default function pickAddOns(){
        var divGetForm = document.querySelector(".getForm")
        divGetForm.innerHTML = ""

        var divForm = document.createElement("div")
        divForm.setAttribute("class", "div_form")

        var divFormHeader = document.createElement("div")
        divFormHeader.setAttribute("class", "div_form_header")


        var H1 = document.createElement("h1")
        H1.setAttribute("class", "title_h1")
        H1.innerText = "Pick add-ons"

        divFormHeader.appendChild(H1)

        var subText = document.createElement("p")
        subText.setAttribute("class", "text_descript_form")
        subText.innerText = "Add-ons help enhance your gaming experience"


        divFormHeader.appendChild(subText)

        divForm.appendChild(divFormHeader); // criado um cabeçalho no formulario atribuindo a div principal

        var divFormBody = document.createElement("div")
        divFormBody.setAttribute("class", "div_form_personal_info_body")

        var divOnlineService = document.createElement("div")
        divOnlineService.setAttribute("class", "divs_add_ons")
        divOnlineService.setAttribute("id", "online_service")

        var checkBoxOnlineService = document.createElement("input")
        checkBoxOnlineService.setAttribute("type", "checkbox")
        checkBoxOnlineService.setAttribute("id", "checkbox_online_service")

        var pOnlineService = document.createElement("p")
        pOnlineService.setAttribute("for", "checkbox_online_service")
        pOnlineService.innerText = "Online service"

        var spamOnlineService = document.createElement("spam")
        spamOnlineService.innerText = "Access to multiplayer games"
        

        var divColOnlineLeft = document.createElement("div")
        divOnlineService.appendChild(checkBoxOnlineService)
        divColOnlineLeft.appendChild(pOnlineService)
        divColOnlineLeft.appendChild(spamOnlineService)
        divOnlineService.appendChild(divColOnlineLeft)
        
        


        
        divFormBody.appendChild(divOnlineService)

        var divLargerStorage = document.createElement("div")
        divLargerStorage.setAttribute("class", "divs_add_ons")
        divLargerStorage.setAttribute("id", "larger_storage")


        var checkBoxLargerStorage = document.createElement("input")
        checkBoxLargerStorage.setAttribute("type", "checkbox")
        checkBoxLargerStorage.setAttribute("id", "checkbox_larger_storage")


        var pLargerStorage = document.createElement("p")
        pLargerStorage.setAttribute("for", "checkbox_larger_storage")
        pLargerStorage.innerText = "Larger Storage"

        var spamLargerStorage = document.createElement("spam")
        spamLargerStorage.innerText = "Extra 1TB of cloud save"

        var divColLargerStorageLeft = document.createElement("div")
        
        
        divLargerStorage.appendChild(checkBoxLargerStorage)
        divColLargerStorageLeft.appendChild(pLargerStorage)
        divColLargerStorageLeft.appendChild(spamLargerStorage)
        divLargerStorage.appendChild(divColLargerStorageLeft)




        divFormBody.appendChild(divLargerStorage)



        var divCustomizableProfile = document.createElement("div")
        divCustomizableProfile.setAttribute("class", "divs_add_ons")
        divCustomizableProfile.setAttribute("id", "customizable_profile")

        var checkBoxCustomizableProfile = document.createElement("input")
        checkBoxCustomizableProfile.setAttribute("type","checkbox" )
        checkBoxCustomizableProfile.setAttribute("id", "checkbox_customizable")

        var pCustomizable = document.createElement("p")
        pCustomizable.setAttribute("for", "checkbox_customizable")
        pCustomizable.innerText = "Customizable Profile"

        var spamCustomizable = document.createElement("spam")
        spamCustomizable.innerText = "Custom theme on your profile"

        var divColCustomLeft = document.createElement("div")




        divCustomizableProfile.appendChild(checkBoxCustomizableProfile)
        divColCustomLeft.appendChild(pCustomizable)
        divColCustomLeft.appendChild(spamCustomizable)
        divCustomizableProfile.appendChild(divColCustomLeft)




        divFormBody.appendChild(divCustomizableProfile)




        divOnlineService.addEventListener("click", () => {
            if(checkBoxOnlineService.checked == true){
                checkBoxOnlineService.checked = false
            }else{
                checkBoxOnlineService.checked  = true
            }
            
        })
        checkBoxOnlineService.addEventListener("click", () =>{
            if(checkBoxOnlineService.checked == true){
                checkBoxOnlineService.checked = false
            }else{
                checkBoxOnlineService.checked  = true
            }
        })

        divLargerStorage.addEventListener("click", () => {
            if(checkBoxLargerStorage.checked == true){
                checkBoxLargerStorage.checked = false
            }else{
                checkBoxLargerStorage.checked  = true
            }
            
        })
        checkBoxLargerStorage.addEventListener("click", () =>{
            if(checkBoxLargerStorage.checked == true){
                checkBoxLargerStorage.checked = false
            }else{
                checkBoxLargerStorage.checked  = true
            }
        })

        divCustomizableProfile.addEventListener("click", () => {
            if(checkBoxCustomizableProfile.checked == true){
                checkBoxCustomizableProfile.checked = false
            }else{
                checkBoxCustomizableProfile.checked  = true
            }
            
        })
        checkBoxCustomizableProfile.addEventListener("click", () =>{
            if(checkBoxCustomizableProfile.checked == true){
                checkBoxCustomizableProfile.checked = false
            }else{
                checkBoxCustomizableProfile.checked  = true
            }
        })


        divForm.appendChild(divFormBody)




        var divGetForm = document.querySelector(".getForm")
        divGetForm.appendChild(divForm)

    }