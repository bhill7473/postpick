module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      // The email cannot be null, and must be a proper email before creation
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
      },
      // The password cannot be null
      position: {
        type: DataTypes.STRING,
        allowNull: false
      },
      gameDate:{
          type: DataTypes.DATE,
          allowNull: false,
        validate: {
            isDate: true
        }
      },
      fanPoints:{
          type:DataTypes.INTEGER,
          allowNull:false
      },
      minutesPlayed:{
          type: DataTypes.INTEGER,
          allowNUll:false
      },
     
      teamPoints:{
          type: DataTypes.INTEGER,
          allowNull: false
      },
      opponentPoints:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    team:{
        type:DataTypes.STRING,
        allowNull:false
    
    },
    opponent:{
        type:DataTypes.STRING,
        allowNull:false
       
    },
    notes:{
        type: DataTypes.STRING,
        allowNull:true
    }



   
    });

    return Post;
};