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
  .setAttribute({ class: ["form-item", "form-item-error"] });

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
form.append(userName, userName);

formDiv.append(header, form);
export { formDiv };
