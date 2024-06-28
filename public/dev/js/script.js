import $ from 'jquery';
import bootstrap from '../../../node_modules/bootstrap';

const loader = document.getElementById("loader");
const body = document.querySelector("body");

function loadPage() {
    setTimeout(showPage, 3500);

    function showPage() {
        // 
        let loaderLeft = 0;
        let abcd = setInterval(moveOut, 20);
        console.log(loader.style.left);
            
        function moveOut() {
            if (loaderLeft == 100) {
                clearInterval(abcd);
                loader.style.display = "none";
                body.style.overflow = "auto";
            } else {
                loaderLeft++;
                loader.style.left = loaderLeft + "%";
            }
        }
    }
}

loadPage();

console.log(loader);