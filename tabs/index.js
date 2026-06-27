function tampilPage(page, btnClicked) {
    const allContent = document.querySelectorAll('.page');
    const allButton = document.querySelectorAll('.page-btn');

    allContent.forEach((content) => {
        content.classList.remove("aktif")
    })

    allButton.forEach((button) => {
        button.classList.remove("active")
    })

    document.getElementById(page).classList.add("aktif");
    btnClicked.classList.add("active");

}