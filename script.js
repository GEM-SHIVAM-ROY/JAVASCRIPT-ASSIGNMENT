(function() {


    //create a array of Data
    var data = [
        {
            Name : "Shivam",
            Age : 21,
            DOB : "15/02/2002",
            Email : "royshivam5612@gmail.com",
            Company : "Gemini Solution"
        },
        {
            Name : "Koushal Malviya",
            Age : 21,
            DOB : "23/12/2001",
            Email : "koushalmalviya11@gmail.com",
            Company : "Xyle Byte"
        },
        {
            Name : "Mithu Gupta",
            Age : 21,
            DOB : "05/08/2001",
            Email : "guptamithu23@gmail.com",
            Company : "Mount Blu"
        },
        {
            Name : "Kaushik Tiwari",
            Age : 21,
            DOB : "15/07/2001",
            Email : "ktiwari24@gmail.com",
            Company : "TCS"
        },
        {
            Name : "Sushant Kumar",
            Age : 21,
            DOB : "20/08/2001",
            Email : "mehtasushant1@gmail.com",
            Company : "Infosys"
        }
    ];

    //Header styling
    var header = document.getElementsByTagName("h1")[0];
  header.style.width = "50%";
  header.style.margin = " auto";
  header.style.marginLeft = "40%";
  header.style.paddingBottom = "auto";


  // create table
  const table = document.createElement("table");
  table.style.width = "50%";
  table.style.margin = "0 auto";


  // create table header row
  const headerRow = document.createElement("tr");

  
  // create table header cells with bold font
  
  //name
  const nameHeader = document.createElement("th");
  const nameHeaderText = document.createTextNode("Name");
  nameHeader.style.fontWeight = "bold";
  nameHeader.appendChild(nameHeaderText);
  headerRow.appendChild(nameHeader);

  //age
  const ageHeader = document.createElement("th");
  const ageHeaderText = document.createTextNode("Age");
  ageHeader.style.fontWeight = "bold";
  ageHeader.appendChild(ageHeaderText);
  headerRow.appendChild(ageHeader);
  
  //dob
  const dobHeader = document.createElement("th");
  const dobHeaderText = document.createTextNode("DOB");
  dobHeader.style.fontWeight = "bold";
  dobHeader.appendChild(dobHeaderText);
  headerRow.appendChild(dobHeader);
  
  //email
  const emailHeader = document.createElement("th");
  const emailHeaderText = document.createTextNode("Email");
  emailHeader.style.fontWeight = "bold";
  emailHeader.appendChild(emailHeaderText);
  headerRow.appendChild(emailHeader);
  
  //company
  const companyHeader = document.createElement("th");
  const companyHeaderText = document.createTextNode("Company");
  companyHeader.style.fontWeight = "bold";
  companyHeader.appendChild(companyHeaderText);
  headerRow.appendChild(companyHeader);

  
  // append header row to table
  table.appendChild(headerRow);
  


data.forEach((userData)=>{
  
   let row = document.createElement("tr");

   //name
  let nameCell = document.createElement("td");
  nameCell.appendChild(document.createTextNode(userData.Name));
  nameCell.style.border = "1px solid black";
    nameCell.style.textAlign = "center";
    row.appendChild(nameCell);

   //age
   var ageCell = document.createElement("td");
    ageCell.appendChild(document.createTextNode(userData.Age));
    ageCell.style.border = "1px solid black";
    ageCell.style.textAlign = "center";
    row.appendChild(ageCell);

   //dob
   var dobCell = document.createElement("td");
   dobCell.appendChild(document.createTextNode(userData.DOB));
   dobCell.style.border = "1px solid black";
   dobCell.style.textAlign = "center";
   row.appendChild(dobCell);
   //email
   var emailCell = document.createElement("td");
   emailCell.appendChild(document.createTextNode(userData.Email));
   emailCell.style.border = "1px solid black";
   emailCell.style.textAlign = "center";
   row.appendChild(emailCell);

   //company
   var companyCell = document.createElement("td");
   companyCell.appendChild(document.createTextNode(userData.Company));
   companyCell.style.border = "1px solid black";
   companyCell.style.textAlign = "center";
   row.appendChild(companyCell);
 // add row to table
 table.appendChild(row);
})

// add table to document body
document.body.appendChild(table);
    
})();
