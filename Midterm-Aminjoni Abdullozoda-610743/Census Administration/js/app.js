$(function(){
    $("#myForm").on("submit",function(evt){
        evt.preventDefault();
        const itemListEl = $('#itemsList');
        const itemInfoEl = $('<div>',{"class":"itemInfo"});
        
        jQuery.each($(this).serializeArray(), function(index, item){
            let p = $('<span>',{"text":item.value, "class":"info-col col-"+item.name});
            itemInfoEl.append(p);
            
        });
        itemListEl.append(itemInfoEl);
        $(this).trigger("reset");
       
    });
    
    showClock();
});


function showClock(){
    let id = "time";
    let date = new Date;
    let year = date.getFullYear();
    let month = date.getMonth();
    let months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
    let d = date.getDate();
    let day = date.getDay();
    let days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    let h = date.getHours();
    if(h<10)
    {
            h = "0"+h;
    }
    let m = date.getMinutes();
    if(m<10)
    {
            m = "0"+m;
    }
    let s = date.getSeconds();
    if(s<10)
    {
            s = "0"+s;
    }
    let result = ''+days[day]+' '+months[month]+' '+d+' '+year+' '+h+':'+m+':'+s;
    document.getElementById(id).innerHTML = result;
    setTimeout('showClock();','1000');
    return true;
}