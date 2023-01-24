


   export default function criarFormulario(){

      
        var divGetForm = document.querySelector(".getForm")
        divGetForm.innerHTML = ""
        
       

        
        var divForm = document.createElement("div")
        divForm.setAttribute("class", "div_form")

        var divFormHeader = document.createElement("div")
        divFormHeader.setAttribute("class", "div_form_header")


        var H1 = document.createElement("h1")
        H1.setAttribute("class", "title_h1")
        H1.innerText = "Personal info"

        divFormHeader.appendChild(H1)

        var subText = document.createElement("p")
        subText.setAttribute("class", "text_descript_form")
        subText.innerText = "Please provide your name, email address, and phone number."


        divFormHeader.appendChild(subText)

        divForm.appendChild(divFormHeader); // criado um cabeçalho no formulario atribuindo a div principal

        var divFormBody = document.createElement("div")
        divFormBody.setAttribute("class", "div_form_personal_info_body")

        //creating name label 

        var nameLabel =document.createElement("label")
        nameLabel.setAttribute("class", "label_form")
        nameLabel.setAttribute("for", "input_name") //remember : for is linked to id 
        nameLabel.innerText = "Name"
        divFormBody.appendChild(nameLabel)

        
        //creating name input
        var nameInput = document.createElement("input")
        nameInput.setAttribute("class", "input_form")
        nameInput.setAttribute("name", "name")  // remember name is to JSON File key and value
        nameInput.setAttribute("id", "input_name")
        nameInput.setAttribute("type", "text")
        nameInput.setAttribute("placeholder", "Insert your complete name")
        nameInput.setAttribute("required", "")
        //input done, next add to divs

       
        divFormBody.appendChild(nameInput)
       
        

        //creating email address label

        var emailLabel =document.createElement("label")
        emailLabel.setAttribute("class", "label_form")
        emailLabel.setAttribute("for", "input_email")
        emailLabel.innerText = "Email Address"
        divFormBody.appendChild(emailLabel)

         //creating email input
         var emailInput = document.createElement("input")
         emailInput.setAttribute("class", "input_form")
         emailInput.setAttribute("name", "email")
         emailInput.setAttribute("id", "input_email")
         emailInput.setAttribute("type", "text")
         emailInput.setAttribute("placeholder", "Your_Address@....")
         emailInput.setAttribute("required", "This Field is required")
         divFormBody.appendChild(emailInput)



        // creating label 

        var phoneNumberLabel = document.createElement("label")
        phoneNumberLabel.setAttribute("class", "label_form")
        phoneNumberLabel.setAttribute("for","input_phone_number")
        phoneNumberLabel.innerText="Phone Number"
        divFormBody.appendChild(phoneNumberLabel)
        var messageRequired = document.createElement("spam")
        messageRequired.innerText = "This field is required"
        messageRequired.setAttribute("class", "message_phone_required")
        messageRequired.style.display = "none"
        divFormBody.appendChild(messageRequired)


        var phoneNumber = document.createElement("input")
        phoneNumber.setAttribute("class", "input_form")
        phoneNumber.setAttribute("type","number")
        phoneNumber.setAttribute("name", "phone_number")
        phoneNumber.setAttribute("id","input_phone_number")
        phoneNumber.setAttribute("placeholder", "e.g. +1 234 567 890")
        phoneNumber.setAttribute("required", "This Field is required")
        divFormBody.appendChild(phoneNumber)

        var divButtom = document.createElement("div")
        divButtom.setAttribute("class", "div_buttons_pageOne" )

        var btnNextStep = document.createElement("button")
        btnNextStep.setAttribute("class", "buttom_next")
        btnNextStep.setAttribute("id", "toStepTwo")
        btnNextStep.innerText = "Next Step"

       /* var btnNextStep2 = document.createElement("button")
        btnNextStep2.setAttribute("class", "buttom_next")
        btnNextStep2.innerText = "Next Step"
        divButtom.appendChild(btnNextStep2)  */
        
        
        divButtom.appendChild(btnNextStep)

        divFormBody.appendChild(divButtom)



         
         

         divForm.appendChild(divFormBody)

         


        



        var divGetForm = document.querySelector(".getForm")
        divGetForm.appendChild(divForm)


    }

  