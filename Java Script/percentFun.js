function percent(){
    var a=document.getElementById('sub1').value;
    var b=document.getElementById('sub2').value;
    var c=document.getElementById('sub3').value;
    var d=document.getElementById('sub4').value;
    var e=document.getElementById('sub5').value;

    var per= (parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d)+parseInt(e))/5;
    document.getElementById('msg').innerHTML="The percantage is"+per;

    if(per>=60)
{
    document.getElementById('res').innerHTML="Result=First Divison";
}
if(per>=45 && per<60)
{
    document.getElementById('res').innerHTML="RESULT=Second division";
}
if(per>=33 && per<45)
{
    document.getElementById('res').innerHTML="RESULT=Third division";
}

if(per<33)
{
    document.getElementById('res').innerHTML="RESULT=Fail";
}


}




