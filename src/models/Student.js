import Sequelize, { Model } from 'sequelize';

export default class Student extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      surname: Sequelize.STRING,
      email: Sequelize.STRING,
      age: Sequelize.INTEGER,
      weight: Sequelize.FLOAT,
      height: Sequelize.FLOAT,
    }, {
      sequelize,
    });
    return this;
  }
}
