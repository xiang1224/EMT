let selectedInjuries = []; // 将 selectedInjuries 定义为数组而不是对象

function selectInjury(bodyPart) {
    const selectBox = document.createElement('select');
    selectBox.className = 'form-select';

    const injuryOptions = ['請選擇傷勢', '撕裂傷', '挫傷', '擦傷']; // 受傷選項

    injuryOptions.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        selectBox.appendChild(optionElement);
    });

    selectBox.addEventListener('change', function () {
        const selectedOption = this.value;
        const foundIndex = selectedInjuries.findIndex(injury => injury.bodyPart === bodyPart);

        if (selectedOption && foundIndex === -1) {
            selectedInjuries.push({ bodyPart, injury: selectedOption });
            updateInjuryList();
        }
    });

    document.getElementById('injury-list').appendChild(selectBox);
}

function updateInjuryList() {
    const injuryList = document.getElementById('injury-list');
    injuryList.innerHTML = '';

    selectedInjuries.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.textContent = `${item.bodyPart}: ${item.injury}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '刪除';
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.onclick = function () {
            selectedInjuries.splice(index, 1);
            updateInjuryList();
        };

        listItem.appendChild(deleteButton);
        injuryList.appendChild(listItem);
    });
}
