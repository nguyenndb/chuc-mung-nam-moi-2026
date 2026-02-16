var buttonActive = document.querySelector('.button button')
buttonActive.onclick = function(){
    var boxFlower = document.querySelector('.flower-img:nth-child(1)')
    var boxFlower2 = document.querySelector('.flower-img:nth-child(2)')
    var boxFlower3 = document.querySelector('.flower-img:nth-child(3)')
    var boxFlower4 = document.querySelector('.flower-img:nth-child(4)')
    var boxFlower5 = document.querySelector('.flower-img:nth-child(5)')
    var boxFlower6 = document.querySelector('.flower-img:nth-child(6)')
    var circleActive = document.querySelector('.circle')
    var boxsliderimg1 = document.querySelector('.box-slider_img1')
    var catActive = document.querySelector('.cat')
    var numberActive = document.querySelector('.box-number')
    var buttonDisplay = document.querySelector('.box-button')
    var rhombus1 = document.querySelector('.rhombus:nth-child(1)')
    var rhombus2 = document.querySelector('.rhombus:nth-child(2)')
    var rhombusImg = document.querySelector('.rhombus-img')
    var mailActive = document.querySelector('.mail')

    boxFlower.classList.toggle("active")
    boxFlower2.classList.toggle("active")
    boxFlower3.classList.toggle("active")
    boxFlower4.classList.toggle("active")
    boxFlower5.classList.toggle("active")
    boxFlower6.classList.toggle("active")
    circleActive.classList.toggle("active")
    boxsliderimg1.classList.toggle("active")
    catActive.classList.toggle("active")
    numberActive.classList.toggle("active")
    buttonDisplay.classList.toggle("active")
    rhombus1.classList.toggle("active")
    rhombus2.classList.toggle("active")
    rhombusImg.classList.toggle("active")
    mailActive.classList.toggle("active")
}

var mail = document.querySelector(".mail")
var slider3 = document.querySelector(".slider3")
var closeSlider3 = document.querySelector(".fa-xmark")
mail.onclick = function(){
    slider3.classList.add("active")
}
closeSlider3.addEventListener('click', function(){
    slider3.classList.remove('active')
})


// ------audio------------
var buttonSong = document.querySelector('.button')
var mySong = document.getElementById("song")

mySong.volume = 0.2; 

buttonSong.onclick= function(){
    if(mySong.paused){
        mySong.play()
    }
}



// --- XỬ LÝ SỰ KIỆN BẤM NÚT XEM PHÁO HOA ---
var btnFireworks = document.getElementById('btn-fireworks');

if (btnFireworks) {
    btnFireworks.addEventListener('click', function() {
        // 1. Tạo một khung iframe
        var iframe = document.createElement('iframe');
        
        // 2. Trỏ thẳng vào file phaohoa.html (vì giờ đã chung thư mục)
        iframe.src = "phaohoa.html"; 
        
        // 3. CSS để iframe phủ kín toàn bộ màn hình
        iframe.style.position = "fixed";
        iframe.style.top = "0";
        iframe.style.left = "0";
        iframe.style.width = "100vw";
        iframe.style.height = "100vh";
        iframe.style.border = "none";
        iframe.style.zIndex = "9999999"; // Số cực lớn để đè lên lá thư
        iframe.style.opacity = "0";
        iframe.style.transition = "opacity 1.5s ease-in-out";

        // 4. Gắn iframe vào trang
        document.body.appendChild(iframe);

        // 5. Hiệu ứng làm mờ lá thư và hiện rõ pháo hoa
        setTimeout(function() {
            iframe.style.opacity = "1";
        }, 100);

        // 6. Ẩn nút X (đóng thư) để người dùng không bấm nhầm
        var closeSlider3 = document.querySelector(".fa-xmark");
        if(closeSlider3) closeSlider3.style.display = "none";
    });
}