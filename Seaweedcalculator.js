const Carotenoid = (A, B, C, D) => {
  const Chla = (15.65 * A - 7.34 * B) / D;
  const Chlb = (27.05 * B - 11.21 * A) / D;
  const Carotenoid = (((1000 * C - (2.86 * Chla) - (129.2 * Chlb)) / 245)) / D;
  return [Chla, Chlb, Carotenoid];
  // 이따 식을 한 번 짜보자 A = A666, B = A653, C = A470, D = mass
};
let carot = Carotenoid(1.72343, 1.734155, 1.60662, 44);
console.log(carot[0], carot[1], carot[2]);
// Sample 1 = A666 A653 A470 = 1.72343 ,1.734155,1.60662 / Chla = 14.243, Chlb = 27.589, Carotenoid = -8.158
// Sample 2 = A666 A653 A470 = 1.574078,1.638532,1.69261 / Chla = 12.607, Chlb = 26.677, Carotenoid = -7.307
// Sample 3 = A666 A653 A470 = 1.15382 ,1.292035,1.614738/ Chla = 8.574, Chlb = 22.015, Carotenoid = -5.119
// Sample 4 = A666 A653 A470 = 1.867494,1.809491,1.672496/ Chla = 15.945, Chlb = 28.012, Carotenoid = -8.132
// Sample 5 = A666 A653 A470 = 0.785918,0.7943959,1.344697/ Chla = 6.469, Chlb = 12.678, Carotenoid = -1.273
// Sample 6 = A666 A653 A470 = 0.800136,0.8549887,1.364963/ Chla = 6.247, Chlb = 14.158, Carotenoid = -1.968
// Sample 7 = A666 A653 A470 = 0.871285,0.9065931,1.369132/ Chla = 6.981, Chlb = 14.756, Carotenoid = -2.275
// Sample 8 = A666 A653 A470 = 0.67816 ,0.7505947,1.362664/ Chla = 5.104, Chlb = 12.701, Carotenoid = -1.196
// Chla, Chlb, Carotenoid 값의 평균과 표준편차를 구해야 한다. 
// Sample 1(/44) = Chl a = 0.324, Chl b = 0.627, Carotenoids = 0.141 
// Sample 2(/23) = Chl a = 0.548, Chl b = 1.160, Carotenoids = 0.274
// Sample 3(/50) = Chl a = 0.171, Chl b = 0.440, Carotenoids = 0.127
// Sample 4(/54) = Chl a = 0.295, Chl b = 0.519, Carotenoids = 0.121 
// Sample 5(/45) = Chl a = 0.144, Chl b = 0.282, Carotenoids = 0.119
// Sample 6(/25) = Chl a = 0.250, Chl b = 0.566, Carotenoids = 0.211
// Sample 7(/25) = Chl a = 0.279, Chl b = 0.590, Carotenoids = 0.211
// Sample 8(/37) = Chl a = 0.138, Chl b = 0.343, Carotenoids = 0.145
function means(arr) {
  let answer = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return answer = sum / arr.length;
}
console.log(means([-1.273, -1.968, -2.275, -1.196]));
const standardDeviation = (arr, usePopulation = false) => {
  const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
  return Math.sqrt(
    arr.reduce((acc, val) => acc.concat((val - mean) ** 2), []).reduce((acc, val) => acc + val, 0) /
    (arr.length - (usePopulation ? 0 : 1))
  );
};
console.log(standardDeviation([-1.273, -1.968, -2.275, -1.196]));
 
// Air O => Chl a mean = 11.842, Chl a deivation = 3.155 / Chl b mean = 26.073, Chl b deivation = 2.762 / Carotenoid mean = -7.179, Carotenoid deivation = 1.429 
// Air X => Chl a mean = 5.200, Chl a deivation = 0.793 / Chl b mean = 13.573, Chl b deivation = 1.049 / Carotenoid mean = -1.678 Carotenoid deivation = 0.528