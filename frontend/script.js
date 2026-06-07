document
.getElementById(
"careerForm"
)

.addEventListener(

"submit",

async (e)=>{

e.preventDefault();

const status =
document.getElementById(
"status"
);

const reportDiv =
document.getElementById(
"report"
);

status.innerHTML =
"Analyzing Resume... ⏳";

reportDiv.innerHTML =
"";

const formData =
new FormData();

formData.append(

"name",

document.getElementById(
"name"
).value

);

formData.append(

"email",

document.getElementById(
"email"
).value

);

formData.append(

"github",

document.getElementById(
"github"
).value

);

formData.append(

"field",

document.getElementById(
"field"
).value

);

formData.append(

"role",

document.getElementById(
"role"
).value

);

formData.append(

"resume",

document.getElementById(
"resume"
).files[0]

);

try{

const response =

await fetch(

"https://lolworld.app.n8n.cloud/webhook-test/career-analysis",

{

method:"POST",

body:formData

}

);

const result =

await response.json();

status.innerHTML =

"Analysis Complete ✅";

const formattedReport =

result.report

.replaceAll(
"\\n",
"\n"
);

reportDiv.innerHTML =

formattedReport;

}

catch(error){

console.error(
error
);

status.innerHTML =

"Something went wrong ❌";

reportDiv.innerHTML =

"";

}

}

);