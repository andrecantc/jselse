function alphanumeric(inputtxt)
{ 
var letters = /^[a-zA-Z]+$/;
if(inputtxt.value.match(letters))
{
alert('du skrev en bokstav');
document.form1.text1.focus();
return true;
}
else
{
alert(' det är en förmodligen en siffra');
return false;
}
}