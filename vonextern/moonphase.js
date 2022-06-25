/*
   Moonphase approximation in Javascript by Pieter Suurmond, january 3, 2020.
   https://ecomaan.nl/javascript/moonphase/moonphase.js
   
   Input must be a Javascript Date; output is a floating point number between 0
   and 1 (exclusive), where a value about 0.5 indicates a full moon.
   Tested and OK up to 2022:
     date = new Date(2020,  0, 10, 20); //full: 10 jan 2020, 20h
     date = new Date(2020,  6,  5, 21); //full: 5 juli 2020, 21h
     date = new Date(2021,  4, 26, 13); //supermoon 26 may 2021, 13h
     date = new Date(2021, 11, 19);     //full: 19 december 2021
  Once per 5 years or so, new moon offset 18256.8 may need a correction to keep
  the approximation in sync with the real moon.
*/
function moonphase(date)
{
    // A recent new moon occured on december, 26, 2019 = 18256 days since 1970.
    // An average synodic month takes 29 days, 12 hours, 44 minutes, 3 seconds.
    var days_after_new_moon = (date.getTime() / 86400000) - 18256.8;
    var synodic_month = 29.53059;
    var m = Math.abs(days_after_new_moon / synodic_month);         // Must be +.
    return (m - Math.floor(m)); // Fractional part = moonphase from 0 to 1 (ex).
}
