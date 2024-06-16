let count=0;
function increment()
{   
    document.getElementById("addpeople").classList.add("glow");
    setTimeout(() => {
        document.getElementById("addpeople").classList.remove("glow");
    }, 100);  
    count+=1;
    document.getElementById("count-el").innerHTML=count;
}


function decrement()
{   document.getElementById("removepeople").classList.add("glow");
    setTimeout(() => {
        document.getElementById("removepeople").classList.remove("glow");
    }, 100);
    if(count!=0)
        count-=1;
    document.getElementById("count-el").innerHTML=count;
}


var saved ="";
function save()
    {   
        document.getElementById("Savebtn").classList.add("glow");
        setTimeout(() => {
        document.getElementById("Savebtn").classList.remove("glow");
    }, 100);
        saved+=count+" - ";
        document.getElementById("saved").innerHTML=saved;
        count=0;
    }
function glow()
    {
        document.getElementById("removepeople").innerHTML=".glow";
    }
