// Initialize an empty array to store scientist data
let scientistData = {};

// Get the file the user inputted.
document
    .getElementById("csvFileInput")
    .addEventListener("change", function handleFile(e) {
        const file = e.target.files[0];

        // Check if the file is null
        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const contents = e.target.result;
                // Calls the function parseCSV
                scientistData = parseCSV(contents);

                console.log(scientistData);

                // Display each scientist as a bullet in the list
                displayScientistsList(scientistData);
            };

            reader.readAsText(file);
        }
    });

/**
 * Takes in the data from the csv as a string.
 * Parse the string and create an object for each row.
 * @param data
 */
function parseCSV(data) {
    const rows = data.split("\n");
    // TODO: STEP 1
    const dataObject = {}
    for (let i = 1; i<rows.length; i++){
        console.log(rows[i]);
        const row = rows[i].split(";"); //splitting the data  
        const name = row[0];
        const fieldStudy = row[1];
        const discovery = row[2];
        const discoveryYear = row[3];
        const biography = row[4];

        dataObject[name]={
            fieldStudy, 
            discovery, 
            discoveryYear,
            biography,
        }
    }
    return dataObject; 


}

/**
 * Takes in an object of scientists and create a <li> element for each scientist
 * @param scientists
 */
function displayScientistsList(scientists) {
    // TODO: STEP 2
    for (let scientistName in scientists){
        const element = document.createElement("li")
        const list = document.getElementById('scientist-list')
        element.textContent = scientistName;
        list.appendChild(element);

        element.addEventListener("click", ()=>{
            displayScientistInformation(scientistName)
        })
    }
}

/**
 * Takes in a name and add the innerHTML for the
 */
function displayScientistInformation(name) {
    // TODO: Step 3
    item = scientistData [name]

    document.getElementById("scientist-info").innerHTML= `
    <h2>${name}</h2>
    <p><strong>Field:</strong> ${item.fieldStudy}</p>
    <p><strong>Discovery:</strong> ${item.discovery}<p>
    <p><strong>Year of Discovery:</strong> ${item.discoveryYear}</p>
    <p><strong>Biography: </strong>${item.biography}</p>    `;
    
}