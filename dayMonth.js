function dayMonth(day,month,year){
var mylist = [0,3,2,5,0,3,5,1,4,6,2,4];
year -= month < 3;
   console.log(( year + year/4 - year/100 + year/400 + day) % 7); 
}

/* A program to find day of a given date */

  
dayMonth(10,01,1990);