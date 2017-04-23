import Sequelize from 'sequelize'
import DB from "./db"

const Tag = DB.defineModel('tag', {
    name: {
      type: Sequelize.STRING(20),
      allowNull: false,
      defaultValue: '',
      comment: "标签名称"
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

export default Tag