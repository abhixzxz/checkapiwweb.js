import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import CompanyUser from "./model.companyUser.js";  // Make sure to import CompanyUser model

const Message = sequelize.define("Message", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  companyId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  companyUserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
  },
  mediaType: {
    type: DataTypes.ENUM('none', 'image', 'video', 'document'),
    defaultValue: 'none',
  },
  mediaURL: {
    type: DataTypes.STRING,
  },
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  status: {
    type: DataTypes.ENUM('sent', 'delivered', 'read'),
    defaultValue: 'sent',
  },
});

// Define the association
Message.belongsTo(CompanyUser, { foreignKey: 'companyUserId' });

export default Message;