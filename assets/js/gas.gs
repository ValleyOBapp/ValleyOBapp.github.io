const ssId = "1DLBSknOZIWO-9es8rnvDu9kNTuMI86nWNyJ9NXH7Zdo";
const emailAdd = "valleyobapp@gmail.com";

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
        font-weight: 700;
        margin-left: 20px;
        margin-bottom: 10px;
        font-family: 'Google Sans',Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
      "
    >
      Valley OBGYN Application
    </h1>

    <table
      style="
        width: calc(100% - 40px);
        padding: 0 20px;
        font-size: 14px;
        text-align: left;
        font-family: 'Google Sans',Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
      "
    >
      <tr>
        <th style="width: 150px">First Name</th>
        <td>:</td>
        <td>\${firstName}</td>
      </tr>
      <tr>
        <th style="width: 150px">Last Name</th>
        <td>:</td>
        <td>\${lastName}</td>
      </tr>
      <tr>
        <th style="width: 150px">City, State</th>
        <td>:</td>
        <td>\${city}</td>
      </tr>
      <tr>
        <th style="width: 150px">Phone</th>
        <td>:</td>
        <td>\${phone}</td>
      </tr>
      <tr>
        <th style="width: 150px">Email</th>
        <td>:</td>
        <td>\${email}</td>
      </tr>
      <tr>
        <th style="width: 150px">School Name</th>
        <td>:</td>
        <td>\${school}</td>
      </tr>
      <tr>
        <th style="width: 150px">Graduation Date</th>
        <td>:</td>
        <td>\${graduation}</td>
      </tr>
    </table>
    <div
      style="
        margin: 20px 20px 0;
        font-size: 14px;
        font-weight: 700;
        font-family: 'Google Sans',Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
      "
    >
      How did you hear about us? 
      <span style="font-weight: 400;">\${about}</span>
    </div>
    <div
      style="
        margin: 20px 20px 0;
        font-size: 14px;
        font-weight: 700;
        font-family: 'Google Sans',Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
      "
    >
      Resume Link: <a style="font-weight: 400;" href="\${link}">\${link}</a>
    </div>
  </body>
</html>
\``;

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

const sendEmail = ({
  firstName,
  lastName,
  city,
  phone,
  email,
  school,
  graduation,
  about,
  resume,
}) => {
  try {
    let link = resume;
    MailApp.sendEmail({
      to: emailAdd,
      subject:
        "Valley OBGYN Application data " +
        lastName +
        " at " +
        dateCovert(new Date().toISOString()) +
        new Date().toISOString().substr(10),
      htmlBody: eval(emailTemplete),
    });
    return {
      result: true,
    };
  } catch (err) {
    return { result: false, error: err };
  }
};

const fileUpload = (fileName, base64, moveId) => {
  try {
    let spitBase = base64.split(",");
    let type = spitBase[0].split(";")[0].replace("data", "");
    let file = Utilities.newBlob(Utilities.base64Decode(spitBase[1]));
    file = Drive.Files.insert(
      { title: fileName, mimeType: type },
      file
    );
    let fileId = file.getId();
    DriveApp.getFileById(fileId).moveTo(
      DriveApp.getFolderById(moveId)
    );
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
    link: "https://google.com",
  };

  Logger.log(submitR(data));
};

const submitR = (data) => {
  try {
    const file = fileUpload(
      data.lastName + " " + new Date().getTime(),
      data.resume,
      "1lN3gZt-ldPAqD68srGYMyA5MIrxQ695t"
    );
    if (!file.result) {
      return {
        result: false,
        massage: file.messege,
        name: "file",
      };
    }
    data.resume =
      "https://drive.google.com/file/d/" + file.id + "/view";

    const email = sendEmail(data);
    let emailS = "",
      emailE = "";
    if (email.result) {
      emailS = "sent";
    } else {
      emailE = email.error;
      //return emailE;
    }
    let finalData = [];
    for (let x in data) {
      finalData.push(data[x]);
    }
    finalData.push(emailS);
    finalData = [finalData];
    let ss = SpreadsheetApp.openById(ssId).getSheets()[0];
    ss.insertRowBefore(2).getRange("A2:J2").setValues(finalData);

    return {
      result: true,
      message: "success",
      email: emailE,
    };
  } catch (err) {
    return {
      result: false,
      message: err,
      name: "submit",
    };
  }
};

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
