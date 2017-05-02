import Sequelize from 'sequelize'
import DB from "./db"

const Comment = DB.defineModel('comment', {
    article_id: {
      type: Sequelize.STRING(32),
      allowNull: false,
      comment: "文章id"
    },
    content: {
      type: Sequelize.STRING(20),
      allowNull: false,
      defaultValue: '',
      comment: "评论内容"
    },
    ip: {
      type: Sequelize.STRING(18),
      allowNull: true,
      defaultValue: '0.0.0.0',
      comment: "客户端请求ip"
    },
    client: {
      type: Sequelize.STRING(200),
      allowNull: true,
      comment: "客户端类型"
    },
    url: {
      type: Sequelize.STRING(100),
      allowNull: true,
      comment: "url"
    },
    parent_id: {
      type: Sequelize.STRING(32),
      allowNull: true,
      defaultValue: '0',
      comment: "评论父级id"
    },
    is_author: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: "是否是作者"
    }
  },
);

export default Comment