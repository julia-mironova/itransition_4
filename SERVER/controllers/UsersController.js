const User = require('../models/User');

class UsersController {
  getAll = async (request, response) => {
    try {
      const users = await User.find();
      return response.json({
        users: users.map(user => {
          return {
            id: user.id,
            userName: user.userName,
            email: user.email,
            lastLoginDate: user.lastLoginDate,
            registerDate: user.registerDate,
            status: user.status
          };
        }),
      });
  } catch (e) {
      console.log(e);
      response.send({ message: "Server error" });
    }
  };

  blockById = async (request, response) => {
    try {
      for (let el of request.body.userIds) {
        await User.findByIdAndUpdate(el, { status: 'Blocked' });
      }

      this.getAll(request, response);
    } catch (e) {
      console.log(e);
      response.send({ message: "Server error" });
    }
  };

  unblockById = async (request, response) => {
    try {
      for (let el of request.body.userIds) {
        await User.findByIdAndUpdate(el, { status: 'Unblocked' });
      }

      this.getAll(request, response);
    } catch (e) {
      console.log(e);
      response.send({ message: "Server error" });
    }
};

deleteById = async (request, response) => {
    try {
      for (let el of request.body.userIds) {
          await User.findByIdAndDelete(el);
      }

      this.getAll(request, response);
    } catch (e) {
      console.log(e);
      response.send({ message: "Server error" });
    }
  };
};

module.exports = new UsersController();
