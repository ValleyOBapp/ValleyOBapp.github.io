import d from "../assets/js/NTechDOM.js";

const formDiv = d.createElement("div").setAttribute({
  class: "formDiv",
});

const header = d
  .createElement("header")
  .setAttribute({ class: "header" });
const h1 = d.createElement("h1", "Valley OBGYN Application");
header.append(h1);

const form = d.createElement("form").setAttribute({ class: "form" });

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
});

const lastName = d.createElement("input").setAttribute({
  required: "",
  autocomplete: "off",
  spellcheck: "false",
  placeholder: "Last",
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
export { formDiv };
