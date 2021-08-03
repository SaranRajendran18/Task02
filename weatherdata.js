var req = new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload=function(){
    var data=JSON.parse(this.response);
    for (var i in data){
        var cname=data[i].name;
        var lang=data[i].latlng;
        weatherdata(cname,...lang);
    }
}
function weatherdata(name,lat,lang){
var request= new XMLHttpRequest();
var url='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lang+'&appid=de1d28bc2449a1c0e53de21bb58d2773';
request.open('GET',url,true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    console.log(`${name} : ${data.main.temp}`);
}

}