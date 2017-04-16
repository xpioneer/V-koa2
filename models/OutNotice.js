import Sequelize from 'sequelize'
import DB from "./db"
// import Guid from "./utils"

const OutNotice = DB.defineModel('outnotice', {
    serial_no: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    customer_id: {
      type: Sequelize.STRING(32),
      allowNull: false,
    },
    customer_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    warehouse_id: {
      type: Sequelize.STRING(32),
      allowNull: false,
    },
    warehouse_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    weight: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '数量'
    },
    type: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    type_desc: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
      comment: "单据类型描述"
    },
    approval_status: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "审核状态"
    },
    approval_status_desc: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '初始状态',
      comment: "审核状态描述"
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