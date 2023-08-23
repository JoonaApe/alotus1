const celsius = +prompt('Syötä celsius asteet: ');
const fahr = (celsius * 9) / 5 + 32;
const kelvin = celsius + 273.15;

const vastaus = `${celsius} C° on ${fahr} F°  ja ${kelvin} K `;

document.getElementById('kohde').innerHTML = vastaus;
