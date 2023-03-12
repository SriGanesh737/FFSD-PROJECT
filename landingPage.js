$('.card').click(function (e) {
    let currentUrl = window.location.origin;

   let redirectFile = "Health.html";

//    window.location.href = currentUrl + "/" + redirectFile;
   window.open("./" + redirectFile, "_blank");
});