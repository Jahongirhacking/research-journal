export const getErrorMessage = (message: string) => {
  if (message.includes("User already exists")) {
    return "Ushbu foydalanuvchi allaqachon ro'yxatdan o'tgan";
  }
  if (message.includes("Invalid or expired OTP")) {
    return "SMS kod xato kiritildi yoki muddati tugagan kod kiritdingiz";
  }
  return message;
};
