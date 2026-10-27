// Doc cau hinh tu bien moi truong, khong hardcode secret.
function layCauHinh() {
  const cong = Number(process.env.PORT || 3000);
  if (!process.env.DB_URL || !process.env.JWT_SECRET) {
    throw new Error("Thieu bien moi truong bat buoc");
  }
  return {
    cong: cong,
    dbUrl: process.env.DB_URL,
    paymentApiKey: process.env.PAYMENT_API_KEY,
    jwtSecret: process.env.JWT_SECRET
  };
}
module.exports = layCauHinh;
