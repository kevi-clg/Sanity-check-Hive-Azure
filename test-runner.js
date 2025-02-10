const {exec} = require('child_process');
const path = require('path');
const fs = require('fs');
const { stderr } = require('process');



const command = 'npm run cy:run_headed';

const reportDir = path.resolve(__dirname, 'cypress/results/mochawesome');


const checkRports = () => {
    fs.readdir(reportDir, (err, files) => {
        if (err) {
            console.error(`Erreur lors de la lecture des rapports ${err.message}`);
            return;
        }

        console.log('Rapports générés :');
        files.forEach((file) => {console.log(`- $(path.join(reportDir, file))`)});
    });
}

const openReport = () =>{
  open.default('cypress/results/mochawesome/mochawesome.html')
}


exec(command, (error, stdout, stderr) => {
    // if (error) {
    //     console.error(`Erreur : ${error.message}`);
    //     return;
    // }

    // if(stderr){
    //     console.error(`Erreur : ${stderr}`);
    //     return;
    // }

    console.log(`Résultats des tests : \n${stdout}`)

    checkRports();
})
