import Sequelize from 'sequelize'
import DB from "./db"

const Authorize = DB.defineModel('authorize', {
    token: {
      type: Sequelize.STRING(64),
      allowNull: false,
    },
    remark: {
      type: Sequelize.STRING(100),
      allowNull: true,
    },
    version: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "版本"
    }
  },
);

export default Authorize