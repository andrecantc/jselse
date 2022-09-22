function alphanumeric(inputtxt)
{ 
var letters = /^[0-9]+$/;
if(inputtxt.value.match(letters))
{
alert('du skrev en siffra');
document.form1.text1.focus();
return true;
}
else
{
alert(' det är en förmodligen en bokstav');
return false;
}
}