module.exports = (sequelize, Sequelize) => {
    const Person = sequelize.define("person_details", {
      name: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      mobileNo: {
        type: Sequelize.STRING
      },
      email : {
        type: Sequelize.STRING
      }      
    });
    return Person;
};