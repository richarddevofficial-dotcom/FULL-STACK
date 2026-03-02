const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("User", {
  username: { type: DataTypes.STRING, allowNull: false, unique: true },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  role: {
    type: DataTypes.ENUM(
      "Admin",
      "Doctor",
      "Nurse",
      "Receptionist",
      "Pharmacist",
      "Patient",
    ),
    defaultValue: "Patient",
  },
});

module.exports = User;
