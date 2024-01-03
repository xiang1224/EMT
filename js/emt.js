let selectedInjuries = {};

function selectInjury(bodyPart) {
    if (selectedInjuries[bodyPart]) {
        delete selectedInjuries[bodyPart];
    } else {
        selectedInjuries[bodyPart] = true;
    }

    updateInjuryList();
}

function updateInjuryList() {
    const injuryList = document.getElementById('injury-list');
    injuryList.innerHTML = '';

    for (const bodyPart in selectedInjuries) {
        const listItem = document.createElement('li');
        listItem.textContent = bodyPart;
        injuryList.appendChild(listItem);
    }
}

function generateReport() {
    console.log("===== 簡易報告 =====");
    for (const bodyPart in selectedInjuries) {
        console.log(bodyPart + " 受傷選項：...");
    }
    console.log("===================");
}