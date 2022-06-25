//https://jasonsturges.medium.com/moons-lunar-phase-in-javascript-a5219acbfe6e
//https://github.com/jasonsturges/lunarphase-js


const getJulianDate = (date = new Date()) => {
  const time = date.getTime();
  const tzoffset = date.getTimezoneOffset()
  
  return (time / 86400000) - (tzoffset / 1440) + 2440587.5;
}

const LUNAR_MONTH = 29.530588853;

const getLunarAge = (date = new Date()) => {
  const percent = getLunarAgePercent(date);
  const age = percent * LUNAR_MONTH;
  return age;
}
const getLunarAgePercent = (date = new Date()) => {
  return normalize((getJulianDate(date) - 2451550.1) / LUNAR_MONTH);
}
const normalize = value => {
  value = value - Math.floor(value);
  if (value < 0)
    value = value + 1
  return value;
}

/*🌑 New
🌒 Waxing Crescent
🌓 First Quarter
🌔 Waxing Gibbous
🌕 Full
🌖 Waning Gibbous
🌗 Last Quarter
🌘 Waning Crescent
*/

const getLunarPhase = (date = new Date()) => {
  const age = getLunarAge(date);
  if (age < 1.84566)
    return "Neumond";
  else if (age < 5.53699)
    return "zunehmenden Sichelmond";
  else if (age < 9.22831)
    return "zunehmenden Halbmond (Erstes Viertel)";
  else if (age < 12.91963)
    return "zunehmenden Dreiviertelmond";
  else if (age < 16.61096)
    return "Vollmond";
  else if (age < 20.30228)
    return "abnehmenden Dreiviertelmond";
  else if (age < 23.99361)
    return "abnehmenden Halbmond (Letztes Viertel)";
  else if (age < 27.68493)
    return "abnehmenden Sichelmond";
  return "Neumond";
}

//edited
const getLunarPhaseEmoji = (date = new Date()) => {
  const age = getLunarAge(date);
  if (age < 1.84566)
    return "🌑";
  else if (age < 5.53699)
    return "🌒";
  else if (age < 9.22831)
    return "🌓";
  else if (age < 12.91963)
    return "🌔";
  else if (age < 16.61096)
    return "🌕";
  else if (age < 20.30228)
    return "🌖";
  else if (age < 23.99361)
    return "🌗";
  else if (age < 27.68493)
    return "🌘";
  return "🌑";
}

const isWaxing = (date = new Date()) => {
  const age = getLunarAge(date);
  return age <= 14.765;
}
const isWaning = (date = new Date()) => {
  const age = getLunarAge(date);
  return age > 14.765;
}

var mondtext = getLunarPhaseEmoji()+"<br>Zur Zeit haben wir einen "+getLunarPhase()+"."


/*
getLunarPhase() — Get the current lunar phase from the LunarPhase enum (ex: "Full")
getLunarPhaseEmoji() —Get the current lunar phase emoji from the LunarPhaseEmoji enum (ex: "🌕")
getLunarAge() — Get the lunar age (ex: 16.54412413414952)
getLunarAgePercent() — Get the percentage through the lunar cycle (ex: 0.5602368519132597)
isWaxing() — Whether the moon is waxing (ex: false)
isWaning() — Whether the moon is waning (ex: true)
getJulianDate()— Get the current Julian date (ex: 2459244.5972259142)
*/

//alert(getLunarPhase());
//alert(getLunarAgePercent());
//alert(getLunarAgePercent());