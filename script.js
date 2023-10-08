window.onload = () => {

    var myForm = document.getElementById("myForm");
    var submitButton = document.getElementById("submitButton");
    myForm.addEventListener("submit", submitted);
    myForm.addEventListener("reset", function () {
        submitButton.disabled = true;
        document.getElementById("text_area").style.display = "none";
        document.getElementById("dynamicCheckbox").style.display = "none";
        validFirstName = false;
        validLastName = false;
        validEmail = false;
        validPhone = false;
        validStreetAddress1 = false;
        validCity = false;
        validZipcode = false;
        validState = false;
        validTitle = false;
        validRatingSelected = false;
        suggestionBox = false;
        validComment = false;
        textAreaVisibility = false;
        validCheckboxSelection = false;
    });
    
    //Regex for matching patterns
    var regFirstName = /^[a-zA-Z]{2,25}$/;
    var regLastName = /^[a-zA-Z]{2,25}$/
    var regEmail = /^[A-Za-z0-9._%+-]+@northeastern\.edu$/;
    var regPhone = /\d{3}-?\d{3}-\d{4}(?:-[0-9]{6})?$/;
    var regStreetAddress1 = /^[a-zA-Z0-9\s,'-]{2,50}$/;
    var regCity = /^[a-zA-Z]{2,25}$/;
    var regZipcode = /^[0-9]{5}(?:-[0-9]{4})?$/;
    var regState = /^[a-zA-Z]{2,25}$/;
    var regComment = /^[a-zA-Z0-9.\s,'-]{2,100}$/;

    var validFirstName = false;
    var validLastName = false;
    var validEmail = false;
    var validPhone = false;
    var validStreetAddress1 = false;
    var validCity = false;
    var validZipcode = false;
    var validState = false;
    var validTitle = false;
    var validRatingSelected = false;
    var suggestionBox = false;
    var validComment = false;
    var textAreaVisibility = false;
    var validCheckboxSelection = false;

    var firstName = document.getElementById("firstName");
    firstName.addEventListener("input", validator);

    var lastName = document.getElementById("lastName");
    lastName.addEventListener("input", validator);

    var emailId = document.getElementById("emailId");
    emailId.addEventListener("input", validator);

    var phoneNumber = document.getElementById("phoneNumber");
    phoneNumber.addEventListener("input", validator);

    var streetAddress1 = document.getElementById("streetAddress1");
    streetAddress1.addEventListener("input", validator);

    var city = document.getElementById("city");
    city.addEventListener("input", validator);

    var state = document.getElementById("state");
    state.addEventListener("input", validator);

    var zipCode = document.getElementById("zipcode");
    zipCode.addEventListener("input", validator);

    var ratingSelect = document.getElementById("ratingSelect");
    ratingSelect.addEventListener("change", validator);
    ratingSelect.addEventListener("change", addCheckbox);

    var checkboxSelect = document.getElementById("checkboxSelectDynamic");
    checkboxSelect.addEventListener("change", addTextField);
    
    var commentsTextArea = document.getElementById("comments");
    commentsTextArea.addEventListener("input", validator);

    var checkboxElements = document.querySelectorAll('input[name="heardfrom"]');
    checkboxElements.forEach(function (checkbox) {
        checkbox.addEventListener("change", function (e) {
            validCheckboxSelection = document.querySelectorAll('input[name="heardfrom"]:checked').length > 0;
            validator(e);
        });
    });

    var radioButtons = document.querySelectorAll('input[name="title"]');
    radioButtons.forEach(function (button) {
        button.addEventListener("change", validator);
    });


    function validator(e) {
        var value = e.target.value;
        var type = this.id;
        var errorMessage = "error_" + type;

        switch (type) {
            case "firstName":
                if (!value.trim().match(regFirstName) || !isLengthValid(value, 2, 50)) {
                    document.getElementById(errorMessage).style.display = "block";
                    this.style.border = "2px solid red";
                    validFirstName = false;
                }
                else {
                    document.getElementById(errorMessage).style.display = "none";
                    this.style.border = "";
                    validFirstName = true;
                }
                break;

            case "lastName":
                if (!value.trim().match(regLastName) || !isLengthValid(value, 2, 50)) {
                    document.getElementById(errorMessage).style.display = "block";
                    this.style.border = "2px solid red";
                    validLastName = false;
                }
                else {
                    document.getElementById(errorMessage).style.display = "none";
                    this.style.border = "";
                    validLastName = true;
                }
                break;

            case "emailId":
                if (!value.trim().match(regEmail)) {
                    document.getElementById(errorMessage).style.display = "block";
                    this.style.border = "2px solid red";
                    validEmail = false;
                }
                else {
                    document.getElementById(errorMessage).style.display = "none";
                    this.style.border = "";
                    validEmail = true;
                }
                break;

            case "phoneNumber":
                if (!value.trim().match(regPhone)) {
                    document.getElementById(errorMessage).style.display = "block";
                    this.style.border = "2px solid red";
                    validPhone = false;
                }
                else {
                    document.getElementById(errorMessage).style.display = "none";
                    this.style.border = "";
                    validPhone = true;
                }
                break;

            case "streetAddress1":
                if (!value.trim().match(regStreetAddress1) || !isLengthValid(value, 2, 100)) {
                    document.getElementById(errorMessage).style.display = "block";
                    this.style.border = "2px solid red";
                    validStreetAddress1 = false;
                }
                else {
                    document.getElementById(errorMessage).style.display = "none";
                    this.style.border = "";
                    validStreetAddress1 = true;
                }
                break;

            case "city":
                if (!value.trim().match(regCity) || !isLengthValid(value, 2, 50)) {
                    document.getElementById(errorMessage).style.display = "block";
                    this.style.border = "2px solid red";
                    validCity = false;
                }
                else {
                    document.getElementById(errorMessage).style.display = "none";
                    this.style.border = "";
                    validCity = true;
                }
                break;
            case "state":
                if (!value.trim().match(regState)) {
                    document.getElementById(errorMessage).style.display = "block";
                    this.style.border = "2px solid red";
                    validState = false;
                }
                else {
                    document.getElementById(errorMessage).style.display = "none";
                    this.style.border = "";
                    validState = true;
                }
                break;


            case "zipcode":
                if (!value.trim().match(regZipcode)) {
                    document.getElementById(errorMessage).style.display = "block";
                    this.style.border = "2px solid red";
                    validZipcode = false;
                }
                else {
                    document.getElementById(errorMessage).style.display = "none";
                    this.style.border = "";
                    validZipcode = true;
                }
                break;
            case "text-area":
                if (!value.trim().match(regComment)) {
                    document.getElementById(errorMessage).style.display = "block";
                    this.style.border = "2px solid red";
                    suggestionBox = false
                } else {
                    document.getElementById(errorMessage).style.display = "none";
                    this.style.border = "";
                    suggestionBox = true;
                }
                break;

            case "ratingSelect":
                    // validator for selected ratings
                if (value === "") {
                     document.getElementById("error_rating").style.display = "block";
                     validRatingSelected = false;
                } else {
                        document.getElementById("error_rating").style.display = "none";
                        validRatingSelected = true;
                }
                break;

            case "comments":
                if (!value.trim().match(regComment)) {
                    validComment = false;
                } else {
                    validComment = true;
                }
                break;
        }

        //Validate mandatory change events
        validTitle = Array.from(radioButtons).some(button => button.checked);
 
        if (validComment && validCheckboxSelection && validRatingSelected && validTitle && validFirstName && validLastName && validEmail && validPhone && validZipcode && validCity && validState && validStreetAddress1) {
            if (textAreaVisibility) {
                if (suggestionBox) {
                    submitButton.disabled = false;
                }
                else {
                    submitButton.disabled = true;
                }
            }
            else {
                submitButton.disabled = false;
            }
        }
        else {
            submitButton.disabled = true;
        }
    }


    function isLengthValid(value, minLength, maxLength) {
        const length = value.trim().length;
        return length >= minLength && length <= maxLength;
    }


    function submitted(e) {
        e.preventDefault();
        if (validComment && validFirstName && validLastName && validEmail && validPhone && validZipcode && validCity && validStreetAddress1 && validComment && validRatingSelected ) {
            alert("Data saved successfully");
            submitButton.disabled = true;
            document.getElementById("table").style.display = "block";

            var table = document.getElementById("table");
            var row = table.insertRow(-1);
            var title = row.insertCell(0);
            var firstName = row.insertCell(1);
            var lastName = row.insertCell(2);
            var emailId = row.insertCell(3);
            var phoneNumber = row.insertCell(4);
            var address1 = row.insertCell(5);
            var address2 = row.insertCell(6);
            var city = row.insertCell(7);
            var state = row.insertCell(8);
            var zipcode = row.insertCell(9);
            var heardfrom = row.insertCell(10);
            var comments = row.insertCell(11);
            var selectRating = row.insertCell(12);
            var suggestions = row.insertCell(13);


            title.innerHTML = document.querySelector('input[name="title"]:checked').value;

            firstName.innerHTML = document.getElementById("firstName").value;
            lastName.innerHTML = document.getElementById("lastName").value;
            emailId.innerHTML = document.getElementById("emailId").value;

            phoneNumber.innerHTML = document.getElementById("phoneNumber").value;
            address1.innerHTML = document.getElementById("streetAddress1").value;
            address2.innerHTML = document.getElementById("streetAddress2").value;


            city.innerHTML = document.getElementById("city").value;
            state.innerHTML = document.getElementById("state").value;
            zipcode.innerHTML = document.getElementById("zipcode").value;

            var selectedHeardFrom = document.querySelector('input[name="heardfrom"]:checked');
            if (selectedHeardFrom) {
                var heardfromValue = selectedHeardFrom.value;
                heardfrom.innerHTML = heardfromValue;
            }

            comments.innerHTML = document.getElementById("comments").value;
            selectRating.innerHTML = document.getElementById("ratingSelect").value;
            suggestions.innerHTML = document.getElementById("text-area").value;

            var checks = $('input[name="link"]:checked').map(function () {
                return $(this).val();
            }).get();
        }
        else {
            alert("Please enter correct details");
        }
        myForm.reset();

        //Set validators to false:
        validFirstName = false;
        validLastName = false;
        validEmail = false;
        validPhone = false;
        validStreetAddress1 = false;
        validCity = false;
        validZipcode = false;
        validState = false;
        validTitle = false;
        validRatingSelected = false;
        suggestionBox = false;
        validComment = false;
        textAreaVisibility = false;
        validCheckboxSelection = false;
        document.getElementById("text_area").style.display = "none";
        document.getElementById("dynamicCheckbox").style.display = "none";

    }


    function addTextField(e) {
        var selected = e.target.checked;
        var textarea = document.getElementById("text_area");
        var textAreaContent = document.getElementById("text-area");
        if (selected) {
            textarea.style.display = "block";
            textAreaVisibility = true;
            textAreaContent.value = textAreaContent.value.replace(/\s/g, "");
            submitButton.disabled = true;
            textAreaContent.addEventListener("input", validator);

        } else {
            textarea.style.display = "none";
            textAreaVisibility = false;
            textAreaContent.addEventListener("input", validator);
        }
    }

    function addCheckbox(e) {
        var selectedVal = e.target.value;
        var dynamicCheckbox = document.getElementById("dynamicCheckbox");

        if (selectedVal && selectedVal != "") {
            dynamicCheckbox.style.display = "block";
            checkboxSelect.value = selectedVal;
            document.getElementById("spanTag").innerHTML = `${selectedVal} ${selectedVal == 1 ? "Star" : "Stars"}? Want to suggest any improvements?`;
        } else {
            dynamicCheckbox.style.display = "none";
        }
    }

};
