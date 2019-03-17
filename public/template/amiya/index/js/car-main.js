import "../libs/jquery.js";
import "../libs/jquery.cookie.js";


import obj from "../module/car.js";

new obj.Car({
    cont:$("tbody"),
    url:"ctrl/select.php"
})
