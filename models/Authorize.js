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
    }
  },
);

export default Authorize