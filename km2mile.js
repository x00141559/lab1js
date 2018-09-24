function milesToKilometeres(distance, unit){
    if (unit == 'km')
    console.log('Distance in miles:' + distance * 0.621371);
    if (unit == 'miles')
    console.log('Distance in km ' + distance * 1.609344);
}
milesToKilometeres(3,'miles');