function success(position){
    console.log(position);
}

function error(){
    alert('posisi tidak dapat diakses');
}

function userLocation(){
    if(!navigator.geolocation){
        alert('browser tidak mendukung geolocation');
    }else{
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

function index(){
    let app = document.getElementById('app');
    let h3 = document.createElement('h3');
    h3.innerHTML = 'Prayer Time';

    app.appendChild(h3);

    userLocation();
}
index();