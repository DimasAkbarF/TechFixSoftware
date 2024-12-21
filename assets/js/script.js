function sendWhatsApp() {
    const _0x2589d5 = document.getElementById("name").value;
    const _0x5e7ddc = document.getElementById("phone").value;
    const _0x2d519d = document.getElementById("message").value;
    if (_0x2589d5 && _0x5e7ddc && _0x2d519d) {
      const _0x239f95 = "Hi, my name is " + _0x2589d5 + ". My phone number is " + _0x5e7ddc + ". I have a question: " + _0x2d519d;
      const _0x1f1d45 = "https://wa.me/+6289515001716?text=" + encodeURIComponent(_0x239f95);
      window.open(_0x1f1d45, "_blank");
    } else {
      alert("Please fill in all fields.");
    }
  }
  function toggleFAQ(_0x525fc5) {
    _0x525fc5.classList.toggle('active');
  }
  document.getElementById("buyNowBtn").addEventListener("click", function (_0x1d802e) {
    _0x1d802e.preventDefault();
    const _0x54e2d9 = document.getElementById("serviceSelect").value;
    const _0x18c4c5 = document.getElementById('deviceName').value;
    if (!_0x18c4c5) {
      alert("Harap masukkan nama device Anda!");
      return;
    }
    const _0x4805f5 = "Halo min, saya ingin " + _0x54e2d9 + " hp " + _0x18c4c5;
    const _0x228c6d = 'https://wa.me/+6289515001716?text=' + encodeURIComponent(_0x4805f5);
    window.open(_0x228c6d, "_blank");
  });