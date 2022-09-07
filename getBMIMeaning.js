const { template } = require('@babel/core')
let bmi // ต้อง let ข้างนอกเพราะตัว bmi มีการใช้งานในหลายฟังก์ชั่น
function calculateBMI(weight, height) {
  //code here
  bmi = weight / ((height)^2) // ค่า BMI ดัชนีมวลกาย (BMI) = น้ำหนักตัว (กิโลกรัม)/ส่วนสูง(เมตร)^2
  return bmi
}
function getBMIMeaning(weight, height) {
  //code here
  calculateBMI(weight, height) // เรียก calculateBMI
  if (bmi < 18.5) {
    return 'Underweight'
  }else if (18.5 <= bmi && bmi <= 24.9) {
    return 'Normal weight'
  }else if (bmi > 25.0) {
    return 'Overweight'
  }
}
module.exports = getBMIMeaning
