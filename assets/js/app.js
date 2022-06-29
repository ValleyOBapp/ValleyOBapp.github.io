import d from "./NTechDOM.js";
import { formDiv } from "../../modules/form.js";

console.log("version " + d.version);
console.log("Developer : " + d.meta.developer.name);
console.log("Developer Profile : " + d.meta.developer.profile);
d.render("root", formDiv);
