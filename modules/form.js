import d from "../assets/js/NTechDOM.js";

const formDiv = d.createElement("div").setAttribute({
  class: "formDiv",
});

const header = d
  .createElement("header")
  .setAttribute({ class: "header" });
const h1 = d.createElement("h1", "Valley OBGYN Application");
header.append(h1);

const form = d
  .createElement("form")
  .setAttribute({ class: "form", name: "form" });

const userName = d
  .createElement(
    "div",
    d.createElement("label", ["Name", d.createElement("span", " *")])
  )
  .setAttribute({ class: ["form-item"] });

const firstName = d.createElement("input").setAttribute({
  required: "",
  autocomplete: "off",
  spellcheck: "false",
  placeholder: "First",
  oninput: "nin(this, 1)",
});

const lastName = d.createElement("input").setAttribute({
  required: "",
  autocomplete: "off",
  spellcheck: "false",
  placeholder: "Last",
  oninput: "nin(this, 2)",
});
userName.append(
  d.createElement("div", [firstName, lastName], {
    class: ["input-field", "rows-input"],
  }),
  d.createElement("div", "Error Found").setAttribute({
    class: "error-div",
  })
);

const cityName = d
  .createElement(
    "div",
    d.createElement("label", [
      "City, State",
      d.createElement("span", " *"),
    ])
  )
  .setAttribute({ class: ["form-item"] });

const city = d.createElement("input").setAttribute({
  required: "",
  autocomplete: "off",
  spellcheck: "false",
  oninput: "nin(this, 3)",
});

cityName.append(
  d.createElement("div", city, {
    class: "input-field",
  }),
  d.createElement("div", "Error Found").setAttribute({
    class: "error-div",
  })
);

const phoneNo = d
  .createElement(
    "div",
    d.createElement("label", ["Phone", d.createElement("span", " *")])
  )
  .setAttribute({ class: ["form-item"] });

const phone = d.createElement("input").setAttribute({
  required: "",
  autocomplete: "off",
  spellcheck: "false",
  type: "number",
  oninput: "nin(this, 4)",
});

phoneNo.append(
  d.createElement("div", phone, {
    class: "input-field",
  }),
  d.createElement("div", "Error Found").setAttribute({
    class: "error-div",
  })
);

const emailAdd = d
  .createElement(
    "div",
    d.createElement("label", ["Email", d.createElement("span", " *")])
  )
  .setAttribute({ class: ["form-item"] });

const email = d.createElement("input").setAttribute({
  required: "",
  autocomplete: "off",
  spellcheck: "false",
  type: "email",
  oninput: "nin(this, 5)",
});

emailAdd.append(
  d.createElement("div", email, {
    class: "input-field",
  }),
  d.createElement("div", "Error Found").setAttribute({
    class: "error-div",
  })
);

const schoolName = d
  .createElement(
    "div",
    d.createElement("label", [
      "School Name",
      d.createElement("span", " *"),
    ])
  )
  .setAttribute({ class: ["form-item"] });

const school = d.createElement("input").setAttribute({
  required: "",
  autocomplete: "off",
  spellcheck: "false",
  type: "text",
  oninput: "nin(this, 6)",
});

schoolName.append(
  d.createElement("div", school, {
    class: "input-field",
  }),
  d.createElement("div", "Error Found").setAttribute({
    class: "error-div",
  })
);

const graduationDate = d
  .createElement(
    "div",
    d.createElement("label", [
      "Graduation Date",
      d.createElement("span", " *"),
    ])
  )
  .setAttribute({ class: ["form-item"] });

const graduation = d.createElement("input").setAttribute({
  required: "",
  autocomplete: "off",
  spellcheck: "false",
  type: "date",
  onchange: "nin(this, 7)",
});

graduationDate.append(
  d.createElement("div", graduation, {
    class: "input-field",
  }),
  d.createElement("div", "Error Found").setAttribute({
    class: "error-div",
  })
);

const aboutUs = d
  .createElement(
    "div",
    d.createElement("label", [
      "How did you hear about us?",
      d.createElement("span", " *"),
    ])
  )
  .setAttribute({ class: ["form-item"] });

const about = d.createElement("input").setAttribute({
  required: "",
  autocomplete: "off",
  spellcheck: "false",
  type: "text",
  oninput: "nin(this, 8)",
});

aboutUs.append(
  d.createElement("div", about, {
    class: "input-field",
  }),
  d.createElement("div", "Error Found").setAttribute({
    class: "error-div",
  })
);

const resumeField = d
  .createElement(
    "div",
    d.createElement("label", [
      "Resume",
      d.createElement("span", " *"),
    ])
  )
  .setAttribute({ 
    class: ["form-item"], 
    id: "file-error-field"});

const resume = d.createElement("input").setAttribute({
  required: "",
  autocomplete: "off",
  spellcheck: "false",
  type: "file",
  onchange: "fch(this, 9)",
  style: "margin-bottom:0"
});

resumeField.append(
  d.createElement("div", resume, {
    class: "input-field",
  }),
  d.createElement("div", "Only PDF, Word files may be uploaded.").setAttribute({
    class: "error-div",
    id: "file-error"
  }),
  d.createElement("div", "Please attach resume (< 5MB PDF/Word File ONLY).", {
    style: ["font-size: 11px; font-style: italic; font-width: 400; font-family: Arial;"]
  })
);

const button = d.createElement("button", "Submit", {
  class: "button",
  type: "submit",
});

const error = d.createElement("div", "", { class: "error" });
const errDiv = d.createElement("div", "Error! Please try again.", {
  style: "width: 100%; text-align: left;",
});
const closeBtn = `
<svg onclick="closeDiv('.error')" aria-hidden="true" style="fill: rgb(207, 34, 46); cursor: pointer" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
</svg>
`;
error.append(errDiv, closeBtn);


form.append(
  userName,
  cityName,
  phoneNo,
  emailAdd,
  schoolName,
  graduationDate,
  aboutUs,
  resumeField,
  button,
  error
);

formDiv.append(header, form);

const thanks = d.createElement("div").setAttribute({
  class: "formDiv"
})

thanks.append(header, 
d.createElement("form",
[d.createElement("div", "Thank you for your application. If you are selected for an interview, our human resources department will be in contact with you.", {
  style: ["font-family: monospace; font-size: 14px; padding: 20px 0"]
})], { class: "form"})
)


const inputList = {
  1: firstName,
  2: lastName,
  3: city,
  4: phone,
  5: email,
  6: school,
  7: graduation,
  8: about,
  9: resume,
};

formDiv.onload = () => {
  //d.render("root", thanks);

  document.forms["form"].onsubmit = (e) => {
    e.preventDefault()
    submitRequest();
  };
  const changeInput = (v, input) => {
    inputList[input].changeAttributeN("value", v.value);
  };

  const changeInputFile = (v, input) => {
    let file = v.files[0];
    let Err = document.getElementById('file-error');
    let ErrF = document.getElementById('file-error-field');
    Err.style.opacity = "0";
    Err.style.marginTop = "-20px";
    //ErrF.removeAttribute("class");
    if(file.type == "application/pdf" ||
		  file.type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
			file.type == "application/msword"){
			//ErrF.setAttribute("class", "form-item");
			inputList[input].changeAttributeN("file", v.files[0]);
		} else{
		  //ErrF.setAttribute("class", "form-item form-item-error");
		  Err.style.opacity = "1";
      Err.style.marginTop = "0";
      Err.innerText = "Only PDF, Word files may be uploaded."
		}
		
		if(file.size > 5242880){
		  Err.style.opacity = "1";
      Err.style.marginTop = "0";
      Err.innerText = "Error! PDF, Word file size < 5MB";
		}
  };

  window.nin = changeInput;
  window.fch = changeInputFile;
  window.closeDiv = (q) => {
    document.querySelector(q).style.display = "none";
  };
};

const submitRequest = () => {
  button
    .setChildren("submitting...")
    .changeAttribute("disabled", "")
    .changeAttribute("style", [
      "background: rgb(0, 93, 180, 0.5); color: #fcfcfcb0;",
    ]);
  error.changeAttribute("style", "display: none;");
  
  d.readFiles(resume.getAttribute("file")[0]).then((files) => {
    d.post("/", {
      data: JSON.stringify({
        date: "",
        firstName: firstName.getAttribute("value")[0],
        lastName: lastName.getAttribute("value")[0],
        city: city.getAttribute("value")[0],
        phone: phone.getAttribute("value")[0],
        email: email.getAttribute("value")[0],
        school: school.getAttribute("value")[0],
        graduationP: graduation.getAttribute("value")[0],
        about: about.getAttribute("value")[0],
        resume: files[0],
      }),
    }).then(res => {
      res = JSON.parse(JSON.parse(res).messege);
      const {result, data} = res;
      if(result){
        d.render("root", thanks);
      }else{
        error.changeAttribute("style", "display: flex");
        button
          .setChildren("Submit")
          .removeAttribute("disabled", "style");
        console.log("Error! Please try again.", data);
      }
    }).catch(err => {
      error.changeAttribute("style", "display: flex");
      button
        .setChildren("Submit")
        .removeAttribute("disabled", "style");
        console.log("Error! Please try again.", err);
    })
  }).catch(err => {
    error.changeAttribute("style", "display: flex");
      button
        .setChildren("Submit")
        .removeAttribute("disabled", "style");
    console.log("Error! Please try again.", err);
  })
};
export { formDiv };
