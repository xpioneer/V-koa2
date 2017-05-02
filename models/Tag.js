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
    }
  },
);

export default Tag