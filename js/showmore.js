function showmore(btn_id) {
  var idNum = btn_id.slice(-1);
  var btnText = document.getElementById(btn_id);
  var dots = document.getElementById("dots_".concat(idNum));
  var moreText = document.getElementById("more_".concat(idNum));
  var moreDiv = document.getElementById("showDiv_".concat(idNum));
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Pročitaj više";
    moreText.style.display = "none";
    moreDiv.style.backgroundColor = "rgba(0,0,0,0.0)";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Pročitaj manje";
    moreText.style.display = "inline-block";
    moreDiv.style.backgroundColor = "rgba(0,0,0,0.85)";
    moreDiv.style.height = "100%";
  }
}
