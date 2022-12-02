function hospital(input) {
  let doctors = 7;
  let index = 0;
  let days = Number(input[index]);
  index++;
  let currentPatients = Number(input[index]);
  index++;
  let checkPatients = 0;
  let uncheckPatients = 0;

  for (let i = 0; i < days; i++) {
    let currentUncheckPatients = currentPatients - doctors;
    if (currentUncheckPatients > 0) {
      uncheckPatients += currentUncheckPatients;
    }
    if (currentPatients > doctors) {
      checkPatients += doctors;
    } else {
      checkPatients += currentPatients;
    }
    if (checkPatients < uncheckPatients) {
      doctors++;
    }
    currentPatients = Number(input[index]);
    index++;
  }

  console.log(`Treated patients: ${checkPatients}.`);
  console.log(`Untreated patients: ${uncheckPatients}.`);
}

hospital(["6", " 25", " 25", " 25", "25", " 25", "2"]);
