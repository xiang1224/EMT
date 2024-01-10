let selectedInjuries = []; // 将 selectedInjuries 定义为数组而不是对象

function selectInjury(bodyPart) {
    const selectBox = document.createElement('select');
    selectBox.className = 'form-select';

    const injuryOptions = ['請選擇傷勢', '擦傷', '挫傷', '撕裂傷', '燙傷', '割傷', '拉傷']; // 受傷選項

    injuryOptions.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        selectBox.appendChild(optionElement);
    });

    selectBox.addEventListener('change', function () {
        const selectedOption = this.value;

        if (selectedOption !== '請選擇傷勢') {
            selectedInjuries.push({ bodyPart, injury: selectedOption });
            updateInjuryList();
        }
    });

    document.getElementById('injury-list').appendChild(selectBox);
}
// 打開彈出視窗函數
function openHeadInjuryModal() {
    const modal = new bootstrap.Modal(document.getElementById('HeadinjuryModal'));
    modal.show();
}

// 添加受傷信息函數
function addInjury() {
    const selectedArea = document.getElementById('injuredArea').value;
    const selectedInjury = document.getElementById('injuryType').value;

    if (selectedInjury !== '請選擇傷勢') {
        const injury = { bodyPart: selectedArea, injury: selectedInjury };
        selectedInjuries.push(injury);
        updateInjuryList();
        closeInjuryModal(); // 關閉彈出視窗
    }
}

// 關閉彈出視窗函數
function closeInjuryModal() {
    const modal = bootstrap.Modal.getInstance(document.getElementById('HeadinjuryModal'));
    modal.hide();
}



function showJointModal() {
    var myModal = new bootstrap.Modal(document.getElementById('jointModal'));
    myModal.show();
}
// 添加受傷信息函數
function addJointInjury() {
    const selectedArea = document.getElementById('jointArea').value;
    const selectedInjury = document.getElementById('jointType').value;

    if (selectedInjury !== '請選擇傷勢') {
        const injury = { bodyPart: selectedArea, injury: selectedInjury };
        selectedInjuries.push(injury);
        updateInjuryList();
        closeInjuryModal(); // 關閉彈出視窗
    }
}

// 關閉彈出視窗函數
function closeInjuryModal() {
    const modal = bootstrap.Modal.getInstance(document.getElementById('jointModal'));
    modal.hide();
}

document.getElementById('specialInjuries').addEventListener('change', function () {
    const selectedSpecialInjury = this.value;
    if (selectedSpecialInjury) {
        selectedInjuries.push({ bodyPart: '特殊傷勢', injury: selectedSpecialInjury });
        updateInjuryList();
    }
});

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
            const updatedInjuries = [...selectedInjuries.slice(0, index), ...selectedInjuries.slice(index + 1)];
            selectedInjuries = updatedInjuries;
            updateInjuryList();
        };

        listItem.appendChild(deleteButton);
        injuryList.appendChild(listItem);
    });
}

