const qrForm = document.getElementById("qrForm");

qrForm.addEventListener("submit", generateQRCode);

function generateQRCode(e) {
  e.preventDefault();

  const formData = new FormData(qrForm);
  const qrOptions = {
    text: formData.get("url"),
    radius: 0.5,
    ecLevel: "H",
    fill: formData.get("color"),
    background: formData.get("background") === null ? null : formData.get("backgroundColor"),
    size: 1200
  };

  const div = document.createElement("div");
  QrCreator.render(qrOptions, div);
  const src = div.firstChild.toDataURL("image/png");

  const link = document.createElement("a");
  link.href = src;
  link.download = `${formData.get("filename")}.png`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
