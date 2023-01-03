function prayerTimes(latitude, longitude){
    // API digunakan untuk perhitungan waktu sholat menggunakan referensi mekah
    fetch('http://api.aladhan.com/v1/calendar?latitude='+latitude+'&longitude='+longitude+'&method=4')
    .then(response => response.json())
    .then(function(response){
        let date = new Date();
        let today = date.getDate() - 1;
        let data = response.data[0].timings;

        // membuat table
        let app = document.getElementById('app');
        let table = document.createElement('table');
        let tableTbody = document.createElement('Tbody');

        // looping table
        for(i in data){
            let row = tableTbody.insertRow();
            let name = row.insertCell(0);
            let time = row.insertCell(1);
            name.innerHTML = i;
            time.innerHTML = data[i];
            tableTbody.appendChild(row);
            
        }        
        table.appendChild(tableTbody);
        app.appendChild(table);


        // console.log(data);
        // console.log(today);
        // console.log(response.data[today]);
    });
}

function success(position){
    prayerTimes(position.coords.latitude, position.coords.longitude);
}

function error(){
    // jika tidak mengijinkan browser untuk mengakses lokasi maka akan menggunakan lokasi jakarta
    // default menggunakan latitude dan longtitude Jakarta
    prayerTimes('-6.200000','106.816666');
}

function userLocation(){
    if(!navigator.geolocation){
        alert('bGeoLocation tidak didukung oleh browser anda silahkan gunakan browser lain');
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