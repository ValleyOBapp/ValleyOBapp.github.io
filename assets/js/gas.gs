const ssId = "1DLBSknOZIWO-9es8rnvDu9kNTuMI86nWNyJ9NXH7Zdo";
const emailAdd = "fahim.infc@gmail.com";

const emailTemplete = `\`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta
      http-equiv="Content-Type"
      content="text/html; charset=utf-8"
    />
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
  </head>
  <body>
    <h1
      style="
        font-size: 20px;
        font-family: monospace;
        font-weight: 700;
        margin-left: 20px;
        margin-bottom: 10px;
      "
    >
      Valley OBGYN Application
    </h1>

    <table
      style="
        width: max-content;
        padding: 0 20px;
        font-family: monospace;
        font-size: 14px;
        text-align: left;
      "
    >
      <tr>
        <th>First Name</th>
        <td>:</td>
        <td>\${firstName}</td>
      </tr>
      <tr>
        <th>Last Name</th>
        <td>:</td>
        <td>\${lastName}</td>
      </tr>
      <tr>
        <th>City, State</th>
        <td>:</td>
        <td>\${city}</td>
      </tr>
      <tr>
        <th>Phone</th>
        <td>:</td>
        <td>\${phone}</td>
      </tr>
      <tr>
        <th>Email</th>
        <td>:</td>
        <td>\${email}</td>
      </tr>
      <tr>
        <th>School Name</th>
        <td>:</td>
        <td>\${school}</td>
      </tr>
      <tr>
        <th>Graduation Date</th>
        <td>:</td>
        <td>\${graduation}</td>
      </tr>
    </table>
    <div
      style="
        margin: 20px 20px 0;
        font-family: monospace;
        font-size: 14px;
        font-weight: 700;
      "
    >
      How did you hear about us?
    </div>
    <div
      style="
        margin: 20px;
        font-family: monospace;
        font-size: 14px;
        font-weight: 400;
        margin-top: 0px;
      "
    >
      <span style="font-weight: 700; text-decoration: underline"
        >Ans:</span
      >
      \${about}
    </div>
    <div
      style="
        margin: 20px 20px 0;
        font-family: monospace;
        font-size: 14px;
        font-weight: 700;
      "
    >
      Resume Link: <a href="\${link}">\${link}</a>
    </div>
  </body>
</html>
\``

const sendEmail = ({firstName, lastName, city, phone, email, school,  graduation, about, resume}) => {
  try{
    let link = resume;
    MailApp.sendEmail({
      to: emailAdd,
      subject: "Valley OBGYN Application data at " + new Date().toISOString(),
      htmlBody: eval(emailTemplete)
    })
    return {
       result: true
    }
  }catch(err){return {result:false, error: err}}
}

const fileUpload = (fileName, base64, moveId) => {
  try {
    let spitBase = base64.split(",");
    let type = spitBase[0].split(";")[0].replace("data", "");
    let file = Utilities.newBlob(Utilities.base64Decode(spitBase[1]));
    file = Drive.Files.insert({ title: fileName, mimeType: type }, file);
    let fileId = file.getId();
    DriveApp.getFileById(fileId).moveTo(DriveApp.getFolderById(moveId));
    return { name: "fileUpload", result: true, id: fileId };
  } catch (err) {
    return { name: "fileUpload", result: false, messege: err };
  }
};

const test = () => {
  const data = {
    firstName: "Fahim", 
    lastName: "Gazi", 
    city: "City", 
    phone: "01212128", 
    email: "fahim@gmail.com", 
    schoolName: "School of Independent", 
    graduation: "12/12/2022", 
    about: "by link", 
    link: "https://google.com"
  }

  Logger.log(submitR(data))
}

const submitR = (data) => {
  try{
  const file = fileUpload(data.firstName + new Date(), data.resume, "1AGGYEjCxErhD8tiTlxLP8ROv2BMH0gGm")
  if(!file.result ){
  return {
    result: false,
    massage: file.messege,
    name: 'file'
  }
  }
  data.resume = file.id;
  
  const email = sendEmail(data);
  let emailS = '', emailE = '';
  if(email.result){
    emailS = "sent";
  } else {
    emailE = email.error;
    //return emailE;
  }
  let  finalData = [];
  for(let x in data){
    finalData.push(data[x]);
  }
  finalData.push(emailS);
  finalData = [finalData]
  let ss = SpreadsheetApp.openById(ssId).getSheets()[0];
  ss.insertRowBefore(2).getRange("A2:J2").setValues(finalData);

  return {
    result: true,
    message: "success",
    email: emailE
  }
  }
  catch(err){
    return {
      result: false,
       message: err,
       name: 'submit'
}
    }
}

const doPost = (e) => {
  try {
    let { data } = e.parameter,
      result;
    result = submitR(JSON.parse(data));
    return ContentService.createTextOutput(
      JSON.stringify({
        result: true,
        name: "doPost",
        messege: JSON.stringify(result),
      })
    ); 
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({
        result: false,
        name: "doPost",
        messege: err,
      })
    );
  }
};

const doGet = (e) => {
  return ContentService.createTextOutput("Oops!. 404 not found.");
};




