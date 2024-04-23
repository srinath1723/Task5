let resume_data = {
    personal_information: {
      name: "SRINATH SP",
      email: "srinathsp890@ gamil.com",
      phone: 8610735075,
      github:"srinath1723",
      address: "58 Sekkupatti ,Pirandagam Post ,P.Velur(t.k),Kodur, 637212 Namakkal, India"
    },

    Objective: "To work in an environment which encourages me to succeed and grow professionally where I can utilize my skills and knowledge appropriately for the well growth of the organization",

    education:{BE:{degree:"Electronics and Communication Engineering",institution:"Karpagam College of Engineering",location:"coimbatore,india",graduation_year:2023,cgpa:8.50},
    HSC:{school:"Sivabakkiyam Muthusamy Matriculation Higher Secondary School",location:"Namakkal,india",graduation_year:2019, percentage:"77.8 %" },
    SSLC:{school:"Kongunadu Matriculation Higher Secondary School",location:"Namakkal,india",graduation_year:2017, percentage:"71.6 %" }
    },
    Technical_skills:{Skills:["java","Html & Css"," BigData","C"],
                       Tools:["Hadoop","Tableau","Arduino","git"]
                    },
    intership:{Company:"Data Science and Analytics Centre",location:"coimbatore,india",Duration:"08-2021 – 01-2023",discription:"Worked on the data science project as a data analyst."},
    Project:{First_project:{domain:"Electronic Circuits",project_name:"Resistor Color Coding",discription:"To identify the resistor values by using the c programming"},
             second_project:{domain:"Data Visualization",project_name:"IPL Score Analysis",discription:"Created a Tableau Dashboard based on the IPL Score Dataset to Analyse Score Trend."}
            },
    languages:["Tamil,English"],
    Intersts:["SDE,Data Analytics,Data Visualization"],
    Events:["Participated in Cirqtrix-2k19, Tech-Event conducted by Karpagam College of Engineering, Coimbatore",
    "Participated in Kurukshethra 20-Circuit Craze, TechEvent conducted by College of Engineering Guindy,Chennai"
    ],
    Awards:[ "Won Gold Medal at “Engineering Day-Marathon",
    "Runner Up in National Level Competition in Ball Badminton at SNS College of Engineering",
    "Best Player Award in Ball Badminton in Akshaya trophy",
    "Captain of KCE Ball Badminton Team"],

     Decleration:"The information furnished above is correct to the best of my knowledge"
                       
 }
// iteration using for loop
function for_loop()
{
 let arr=Object.keys(resume_data)
 for(let ind=0;ind<arr.length;ind++){
    key=arr[ind]
    console.log(key,resume_data[key])
 }
}

 //iteration using for in loop
 function for_in_loop()
 {
 for (const key in resume_data) 
 {
    console.log(key + ":");
    const data = resume_data[key];
    if (Array.isArray(data)) {
        data.forEach(item => {
            if (typeof item == 'object') {
                for (const key in item) {
                    console.log(`${key}: ${item[key]}`);
                }
                console.log();
            } else {
                console.log(item);
            }
        });
    } else if (typeof data == 'object') {
        for (const key in data) {
            console.log(`${key}: ${data[key]}`);
        }
        console.log();
    } else {
        console.log(data);
        console.log();
    }
}}


//iteration using for of loop
 function for_of_loop()
 { 
 for(let key of Object.keys(resume_data))
{
    console.log(key + ":");
    const data = resume_data[key];
    if (Array.isArray(data)) {
        data.forEach(item => {
            if (typeof item === 'object') {
                for (const key in item) {
                    console.log(`${key}: ${item[key]}`);
                }
                console.log();
            } else {
                console.log(item);
            }
        });
    } else if (typeof data == 'object') {
        for (const key in data) {
            console.log(`${key}: ${data[key]}`);
        }
        console.log();
    } else {
        console.log(data);
        console.log();
    }
}}

//iteration using forEach
function forEach_loop()
{
Object.entries(resume_data).forEach(([key, data]) => {
    console.log(key + ":");

    if (Array.isArray(data)) {
        data.forEach(item => {
            if (typeof item == 'object') {
                for (const key in item) {
                    console.log(`${key}: ${item[key]}`);
                }
                console.log();
            } else {
                console.log(item);
            }
        });
    } else if (typeof data == 'object') {
        for (const key in data) {
            console.log(`${key}: ${data[key]}`);
        }
        console.log();
    } else {
        console.log(data);
        console.log();
    }
 });
}
for_loop();  // iteration using for loop
for_in_loop(); // iteration using for in loop
for_of_loop(); // iteration using for of loop
forEach_loop(); // iteration using forEach loop

