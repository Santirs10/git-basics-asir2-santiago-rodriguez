function calcularLetraDNI(numeroDNI) {
  if (isNaN(numeroDNI) || numeroDNI <0 || numeroDNI > 999999999 {
    return "Número de DNI erróneo";
   }

  const letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";
  const indice = numeroDNI % 23;
 
  return letrasDNI.charAt(indice);
}
