function showData() {
    const formData = {
        physicalAppearance: document.getElementById('physicalAppearance').value,
        gender: document.getElementById('gender').value,
        height: document.getElementById('height').value,
        weight: document.getElementById('weight').value,
        bloodType: document.getElementById('bloodType').value,
        bloodPressure: document.getElementById('bloodPressure').value,
        heartRate: parseInt(document.getElementById('heartRate').value),
        bloodOxygen: document.getElementById('bloodOxygen').value,
        selectedInjuries: selectedInjuries.map(item => `${item.bodyPart}: ${item.injury}`)
    };

    const modalBody = document.getElementById('modalBody');
    let heartRateContent = `<p><strong>心跳：</strong> ${formData.heartRate ? formData.heartRate + ' bpm' : '未測量'}</p>`;

    if (formData.heartRate && (formData.heartRate < 20 || formData.heartRate > 150 || (formData.heartRate < 50 && formData.heartRate > 0))) {
        heartRateContent = `<p><strong>心跳：</strong> <span style="color: red;">${formData.heartRate} bpm（危及個案！）</span></p>`;
    }
    let bloodPressureContent = `<p><strong>血壓：</strong> ${formData.bloodPressure ? formData.bloodPressure + ' mmHg' : '未測量'}</p>`;

    if (formData.bloodPressure && (formData.bloodPressure > 200 || formData.bloodPressure < 90)) {
        bloodPressureContent = `<p><strong>血壓：</strong> <span style="color: red;">${formData.bloodPressure} mmHg（危及個案！）</span></p>`;
    }
    let bloodOxygenContent = `<p><strong>血氧：</strong> ${formData.bloodOxygen ? formData.bloodOxygen + ' %' : '未測量'}</p>`;

    if (formData.bloodOxygen && formData.bloodOxygen < 90) {
        bloodOxygenContent = `<p><strong>血氧：</strong> <span style="color: red;">${formData.bloodOxygen} %（危及個案！）</span></p>`;
    }

    modalBody.innerHTML = `
    <p><strong>外表特徵：</strong> ${formData.physicalAppearance || '未填寫'}</p>
    <p><strong>性別：</strong> ${formData.gender || '未選擇'}</p>
    <p><strong>身高：</strong> ${formData.height ? formData.height + ' cm' : '未測量'}</p>
    <p><strong>體重：</strong> ${formData.weight ? formData.weight + ' kg' : '未測量'}</p>
    <p><strong>血型：</strong> ${formData.bloodType || '未填寫'}</p>
    ${bloodPressureContent}
    ${heartRateContent}
    ${bloodOxygenContent}
    <p><strong>已選擇的受傷部位：</strong></p>
    <ul>
        ${formData.selectedInjuries.length > 0 ? formData.selectedInjuries.map(injury => `<li>${injury}</li>`).join('') : '未填寫'}
    </ul>
`;

    const modal = new bootstrap.Modal(document.getElementById('dataModal'));
    modal.show();
}
