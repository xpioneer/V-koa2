import Sequelize from 'sequelize'
import DB from "./db"
// import Guid from "./utils"

const OutNotice = DB.defineModel('outnotice_dtl', {
    notice_id: {
      type: Sequelize.STRING(32),
      allowNull: false,
      unique: true
    },
    contract_id: {
      type: Sequelize.STRING(32),
      allowNull: false,
    },
    contract_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    weight: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '数量'
    },
    count: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '件数'
    },
    created_username: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
      comment: "创建者姓名"
    },
    remark: {
      type: Sequelize.STRING(300),
      allowNull: false,
      defaultValue: '',
      comment: "备注"
    }
  },
);

export default OutNotice