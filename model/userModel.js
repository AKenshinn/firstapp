var connection = require('../config/dbconfig');

exports.create = function(user, done) {
  console.log('userModel.create');
  connection.query('INSERT INTO users (username, password) VALUES (?, ?)', [user.username, user.password], function(err, result) {
    if (err) {
      console.log('Error in userModel.create !!');
      done(err);
    }

    // debug result
    // console.log('insertId : ' + result.insertId);

    done(null, null); // return result
  });
}

exports.update = function(user, done) {
  console.log('userModel.update');
  connection.query('UPDATE users SET username=?, password=? WHERE id=?', [user.username, user.password, user.id], function(err, result) {
    if (err) {
      console.log('Error in userModel.update !!');
      done(err);
    }

    // debug result
    // /console.log('result : ' + JSON.stringify(result));

    done(null, null); // return result
  });
}

exports.deleteById = function (id, done) {
  console.log('userModel.deleteById');
  connection.query('DELETE FROM users WHERE id = ?', [id], function(err, result) {
    if (err) {
      console.log('Error in userModel.deleteById !!');
      done(err);
    }

    // debug result
    // console.log('result : ' + JSON.stringify(result));

    done(null, null); // return result
  });
}

exports.findAll = function(done) {
  console.log('userModel.findAll');
  connection.query('SELECT * FROM users', function(err, rows, field) {
    if (err) {
      console.log('Error in userModel.findAll !!');
      done(err);
    } 

    // check data
    if(!rows.length) {
      console.log('Empty data in userModel.findAll !!');
      done(null, []);
    }

    // debug result
    // console.log('Result of userModel.findAll :');
    // rows.forEach( function(item) { 
    //   console.log('id : ' + item.id);
    //   console.log('username : ' + item.username);
    //   console.log('password : ' + item.password);
    //   console.log('<-------------------------------------------------------------------------->');
    // });
    done(null, rows); // return result
  });
};

exports.findById = function(id, done) {
  console.log('userModel.findById');
  connection.query('SELECT * FROM users WHERE id = ? ', [id], function(err, rows, field) {
    if (err) {
      console.log('Error in userModel.findById !!');
      done(err);
    }

    // check data
    if(!rows.length) {
      console.log('Empty data in userModel.findAll !!');
      done(null, {});
    }

    // debug result
    // console.log('Result of userModel.findById : ' + id);
    // console.log('id : ' + rows[0].id);
    // console.log('username : ' + rows[0].username);
    // console.log('password : ' + rows[0].password);
    // console.log('<-------------------------------------------------------------------------->');

    done(null, rows[0]); // return result
  });
};