var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function hitungLuasDanKelilingPersegiPanjang() {
    var panjang = document.getElementById("panjang").value;
    var lebar = document.getElementById("lebar").value;
  
    var luas = panjang * lebar;
    var keliling = 2 * (parseInt(panjang) + parseInt(lebar));
  
    document.getElementById("luasPersegi").value = luas;
    document.getElementById("kelilingPersegi").value = keliling;
  
  }



  function hitung() {
    var sisi = document.getElementById("sisi").value;
    var luas = sisi * sisi;
    var keliling = 4 * sisi;
    document.getElementById("luas").innerHTML = "Luas bujur sangkar = " + luas;
    document.getElementById("keliling").innerHTML = "Keliling bujur sangkar = " + keliling;
  }
  
  


  function hitungLingkaran() {
 
    var jariJari = document.getElementById("jariJari").value;
  
    var luas = Math.PI * jariJari * jariJari;
    var keliling = 2 * Math.PI * jariJari;
  
    document.getElementById("luasLingkaran").innerHTML = "Luas Lingkaran = " + luas.toFixed(2) + " cm<sup>2</sup>";
    document.getElementById("kelilingLingkaran").innerHTML = "Keliling Lingkaran = " + keliling.toFixed(2) + " cm";
  
   
  }
  
  function reset() {
    document.getElementById("jariJari").value = "";
    document.getElementById("luasLingkaran").innerHTML = "";
    document.getElementById("kelilingLingkaran").innerHTML = "";
    document.getElementById("panjang").value = "";
    document.getElementById("lebar").value = "";
    document.getElementById("luasPersegi").value = "";
    document.getElementById("kelilingPersegi").value = "";
    document.getElementById("sisi").value = "";
    document.getElementById("luas").value = "";
    document.getElementById("sisi").value = "";
    
    document.getElementById("luas").innerHTML = "";
    document.getElementById("keliling").innerHTML= "";

    
    
  
  }
  
  