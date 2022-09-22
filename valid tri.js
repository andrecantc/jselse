function checkValidity(a, b, c)
{
    // check condition
    if (a + b <= c || a + c <= b || b + c <= a)
        return false;
    else
        return true;
}
 
// Driver function
  
    let a = 7, b = 10, c = 5;
     
    if (checkValidity(a, b, c))
        alert("rätt");
    else
        alert("fel");  