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
  .setAttribute({ class: ["form-item"] });

const resume = d.createElement("input").setAttribute({
  required: "",
  autocomplete: "off",
  spellcheck: "false",
  type: "file",
  onchange: "fch(this, 9)",
});

resumeField.append(
  d.createElement("div", resume, {
    class: "input-field",
  }),
  d.createElement("div", "Error Found").setAttribute({
    class: "error-div",
  })
);

const button = d.createElement("button", "Submit", {
  class: "button",
  type: "submit",
});

form.append(
  userName,
  cityName,
  phoneNo,
  emailAdd,
  schoolName,
  graduationDate,
  aboutUs,
  resumeField,
  button
);

formDiv.append(header, form);

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
  document.forms["form"].onsubmit = () => {
    submitRequest();
  };
  const changeInput = (v, input) => {
    inputList[input].changeAttributeN("value", v.value);
  };

  const changeInputFile = (v, input) => {
    inputList[input].changeAttributeN("file", v.files[0]);
  };

  window.nin = changeInput;
  window.fch = changeInputFile;
};

const submitRequest = () => {
  d.readFiles(resume.getAttribute("file")[0]).then((files) => {
    d.post("", {
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
    });
  });
};
export { formDiv };
