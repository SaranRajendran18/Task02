var req = new XMLHttpRequest();
req.open('GET','https://api.covid19api.com/summary',true);
req.send();
req.onload=function(){
    var data=JSON.parse(this.response);
    for (var i in data){
        console.log(data["Global"]);
    }
}