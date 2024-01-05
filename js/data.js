function showData() {
    // 获取其他表单数据
    const formData = {
        physicalAppearance: document.getElementById('physicalAppearance').value,
        gender: document.getElementById('gender').value,
        height: document.getElementById('height').value,
        weight: document.getElementById('weight').value,
        bloodType: document.getElementById('bloodType').value,
        bloodPressure: document.getElementById('bloodPressure').value,
        heartRate: document.getElementById('heartRate').value,
        bloodOxygen: document.getElementById('bloodOxygen').value,
        selectedInjuries: selectedInjuries.map(item => `${item.bodyPart}: ${item.injury}`)
    };

    // 创建模态框并显示表单数据
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <p><strong>外表特徵：</strong> ${formData.physicalAppearance}</p>
        <p><strong>性別：</strong> ${formData.gender}</p>
        <p><strong>身高：</strong> ${formData.height}</p>
        <p><strong>體重：</strong> ${formData.weight}</p>
        <p><strong>血型：</strong> ${formData.bloodType}</p>
        <p><strong>血壓：</strong> ${formData.bloodPressure}</p>
        <p><strong>心跳：</strong> ${formData.heartRate}</p>
        <p><strong>血氧：</strong> ${formData.bloodOxygen}</p>
        <p><strong>已選擇的受傷部位：</strong></p>
        <ul>
            ${formData.selectedInjuries.map(injury => `<li>${injury}</li>`).join('')}
        </ul>
    `;

    const modal = new bootstrap.Modal(document.getElementById('dataModal'));
    modal.show();
}