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
  maxlength: 40,
});

const lastName = d.createElement("input").setAttribute({
  required: "",
  autocomplete: "off",
  spellcheck: "false",
  placeholder: "Last",
  oninput: "nin(this, 2)",
  maxlength: 40,
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
  maxlength: 80,
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
  type: "text",
  oninput: "nin(this, 4)",
  maxlength: 80,
  placeholder: "xxx-xxx-xxxx"
  //pattern: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,//"/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/",//"/^\\(?([0-9]{3})\\)?[-.\\s]?([0-9]{3})[-.\\s]?([0-9]{4})$/",
  //title: "(555) 555-5555, 555-555-5555, 555.555.5555, 5555555555, 555 555 5555"
});

phoneNo.append(
  d.createElement("div", phone, {
    class: "input-field",
  }),
  d
    .createElement("div", "Valid Phone Number required.")
    .setAttribute({
      class: "error-div",
      id: "phone-error",
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
  maxlength: 80,
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
  maxlength: 80,
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
  maxlength: 80,
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
    id: "file-error-field",
  });

const resume = d.createElement("input").setAttribute({
  required: "",
  autocomplete: "off",
  spellcheck: "false",
  type: "file",
  onchange: "fch(this, 9)",
  style: "margin-bottom:0",
});

resumeField.append(
  d.createElement("div", resume, {
    class: "input-field",
  }),
  d
    .createElement("div", "Only PDF, Word files may be uploaded.")
    .setAttribute({
      class: "error-div",
      id: "file-error",
    }),
  d.createElement(
    "div",
    "Please attach resume (< 5MB PDF/Word File ONLY).",
    {
      style: [
        "font-size: 11px; font-style: italic; font-width: 400; font-family: Arial;",
      ],
    }
  )
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
  error,
  button
);

formDiv.append(header, form);

const thanks = d.createElement("div").setAttribute({
  class: ["formDiv thanks"],
});

thanks.append(
  header,
  d.createElement(
    "form",
    [
      d.createElement(
        "div",
        "Thank you for your application. If you are selected for an interview, our human resources department will be in contact with you.",
        {
          style: [
            "font-family: Arial,Helvetica,sans-serif; font-size: 14px; padding: 20px 0",
          ],
        }
      ),
    ],
    { class: "form" }
  )
);

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
  // d.render("root", thanks);

  document.forms["form"].onsubmit = (e) => {
    e.preventDefault();
    let regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let Err = document.getElementById("phone-error");
    Err.style.opacity = "0";
    Err.style.marginTop = "-20px";
    let node = phone._node;
    let phn = document.querySelector('div [node="' + node + '"]');
    phn.style.borderColor = "";
    if (regex.test(phn.value)) {
      submitRequest();
    } else {
      Err.style.opacity = "1";
      Err.style.marginTop = "0";
      phn.style.borderColor = "red";
      phn.focus();
    }
  };
  const changeInput = (v, input) => {
    inputList[input].changeAttributeN("value", v.value);
  };

  const changeInputFile = (v, input) => {
    let file = v.files[0];
    let Err = document.getElementById("file-error");
    let ErrF = document.getElementById("file-error-field");
    Err.style.opacity = "0";
    Err.style.marginTop = "-20px";
    Err.style.marginLeft = "150px";
    //ErrF.removeAttribute("class");
    if (
      file.type == "application/pdf" ||
      file.type ==
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      file.type == "application/msword"
    ) {
      //ErrF.setAttribute("class", "form-item");
      inputList[input].changeAttributeN("file", v.files[0]);
    } else {
      //ErrF.setAttribute("class", "form-item form-item-error");
      Err.style.opacity = "1";
      Err.style.marginTop = "0";
      Err.style.marginLeft = "0";
      inputList[input].changeAttributeN("file", v.files[0]);
      inputList[input].changeAttribute("t", "");
      Err.innerText = "Only PDF, Word files may be uploaded.";
    }

    if (file.size > 5242880) {
      inputList[input].changeAttribute("t", "");
      Err.style.opacity = "1";
      Err.style.marginTop = "0";
      Err.style.marginLeft = "0";
      Err.innerText = "Error! PDF, Word file size < 5MB";
    }
  };

  window.nin = changeInput;
  window.fch = changeInputFile;
  window.closeDiv = (q) => {
    document.querySelector(q).style.display = "none";
  };
};

const dateCovert = (date) => {
  date = new Date(date);
  return (
    String(date.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(date.getDate()).padStart(2, "0") +
    "-" +
    date.getFullYear()
  );
};

const submitRequest = () => {
  button
    .setChildren(
      `
      <svg viewBox="0 0 18 18" focusable="false" ><g><path d="M15.5 9.8V8.17l-1.83-.32a5.21 5.21 0 00-.56-1.33L14.16 5 13 3.83l-1.52 1.08a8.28 8.28 0 00-1.32-.54L9.82 2.5H8.19l-.34 1.87a4.87 4.87 0 00-1.3.53L5 3.84 3.87 4.92l1 1.64a4.53 4.53 0 00-.54 1.31L2.5 8.2v1.64l1.86.34a5 5 0 00.55 1.3L3.87 13 5 14.19l1.54-1.06a4.89 4.89 0 001.31.56l.33 1.81h1.63l.33-1.86a5.38 5.38 0 001.34-.54L13 14.15 14.16 13l-1.06-1.53a5.46 5.46 0 00.57-1.34zM9 11a2 2 0 112-2 2 2 0 01-2 2z"></path></g></svg>
    `
    )
    .changeAttribute("disabled", "")
    .changeAttribute("style", [
      "background: rgb(0, 93, 180, 0.5); color: #fcfcfcb0;",
    ]);
  error.changeAttribute("style", "display: none;");

  d.readFiles(resume.getAttribute("file")[0])
    .then((files) => {
      d.post(
        "https://script.google.com/macros/s/AKfycbzWOXQ1MWe-1i2Oiox7po6k8l29e0JwUqYM5eja/exec",
        {
          data: JSON.stringify({
            firstName: firstName.getAttribute("value")[0],
            lastName: lastName.getAttribute("value")[0],
            city: city.getAttribute("value")[0],
            phone: phone.getAttribute("value")[0],
            email: email.getAttribute("value")[0],
            school: school.getAttribute("value")[0],
            graduation: dateCovert(
              graduation.getAttribute("value")[0]
            ),
            about: about.getAttribute("value")[0],
            resume: files[0],
          }),
        }
      )
        .then((res) => {
          res = JSON.parse(JSON.parse(res).messege);
          const { result, data } = res;
          if (result) {
            d.render("root", thanks);
          } else {
            error.changeAttribute("style", "display: flex");
            button
              .setChildren("Submit")
              .removeAttribute("disabled", "style");
            console.log("Error! Please try again.", data);
          }
        })
        .catch((err) => {
          error.changeAttribute("style", "display: flex");
          button
            .setChildren("Submit")
            .removeAttribute("disabled", "style");
          console.log("Error! Please try again.", err);
        });
    })
    .catch((err) => {
      error.changeAttribute("style", "display: flex");
      button
        .setChildren("Submit")
        .removeAttribute("disabled", "style");
      console.log("Error! Please try again.", err);
    });
};
export { formDiv };
