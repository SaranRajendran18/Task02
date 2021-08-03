var req = new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload=function(){
    var data=JSON.parse(this.response);
    for (var i in data){
        console.log(data[i].name+" "+data[i].capital+" "+data[i].flag);


        var result= data.filter(element=>element.region==="Asia");
        console.log(result);
        
        var result1=data.filter(element=>element.population<200000);
        console.log(result1);
        
        var result2=data.filter(element=>{
            for (let i in element.currencies){
                if(element.currencies[i].code==="USD" ){
                    return true;
                }
            }
        });
        console.log(result2);
        
        
        var result3= data.reduce((acc,ele)=>acc+ele.population,0);
        console.log(result3);

        
    }
}