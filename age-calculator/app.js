const fp = flatpickr("#age", {
    dateFormat: "Y-m-d",
    maxDate: "today"
});

document.getElementById("submitBtn").addEventListener("click", () => {
    const inputDate = fp.selectedDates;

    if (inputDate.length === 0) {
        alert("Masukin tanggal dulu bosku");
        return;
    }

    const formatDateJS = inputDate[0];

    const dateTime = luxon.DateTime;
    const birthDate = dateTime.fromJSDate(formatDateJS);
    const dateNow = dateTime.now();
    const yearDiff = dateNow.diff(birthDate, ["years", "months"]);
    const yearAge = Math.floor(yearDiff.years);
    const monthAge = Math.floor(yearDiff.months);

    console.log(monthAge);
    document.getElementById("result").textContent = `Your age is ${yearAge} years ${monthAge} months`;
})