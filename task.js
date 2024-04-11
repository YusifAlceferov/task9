const ad = document.querySelector("#AD");
const soyad = document.querySelector("#SOYAD");
const yas = document.querySelector("#YAS");
const elaveet = document.querySelector("#elaveet");
const liste = document.querySelector("#liste tbody"); // tbody seçildi
elaveet.onclick = function () {
  let tAd = document.createElement("td");
  let tSoyad = document.createElement("td");
  let tYas = document.createElement("td");
  tAd.textContent = ad.value;
  tSoyad.textContent = soyad.value;
  tYas.textContent = yas.value;
  let tr = document.createElement("tr");
  tr.appendChild(tAd);
  tr.appendChild(tSoyad);
  tr.appendChild(tYas);
  liste.appendChild(tr);
  ad.value = "";
  soyad.value = "";
  yas.value = "";
  ad.focus();
};
