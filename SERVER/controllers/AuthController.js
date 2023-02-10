const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const User = require('../models/User');

class AuthController {
  async registration(request, response) {
    try {
      const { userName, email, password } = request.body;
      if (userName === '' || email === '' || password === '') { 
        return response.status(400).json({ message: "Put info to all fields" });
      } 

      const isEmail = await User.findOne({ email });
      if (isEmail) {
        return response.status(400).json({ message: "Such email already exists" });
      } 

      const isUsername = await User.findOne({ userName });
      if (isUsername) {
        return response.status(400).json({ message: "Such username already exists" });
      }
      
      const userData = {
        userName,
        email,
        password: await bcrypt.hash(password, 7),
        registerDate: new Date().toLocaleDateString(),
        status: 'Available',
      }

      const user = new User(userData);
      await user.save();

      return response.json({ message: "User was created" });
    } catch (e) {
      console.error(e);
      response.send({ message: "Server error" });
    }
  }

  async login(request, response) {
    try {
      const { userName, password } = request.body;
      if (userName === '' || password === '') return response.status(400).json({ message: "Put info to all fields" });

      const user = await User.findOne({ userName });
      if (!user) return response.status(404).json({ message: "User not found" });
      if (user.status === 'Blocked') return response.status(403).json({ message: "User blocked" });

      const isPassValid = bcrypt.compareSync(password, user.password);
      if (!isPassValid) return response.status(400).json({ message: "Invalid password" });

      const secretKey = config.get('secretKey');
      const token = jwt.sign({ id: user.id, status: user.status }, secretKey, { expiresIn: '5h' });

      await User.findOneAndUpdate(
        { userName: user.userName },
        { lastLoginDate: new Date().toLocaleDateString() }
      );

      return response.json({
        token,
        user: {
          id: user.id,
          email: user.email,
          lastLoginDate: user.lastLoginDate,
          status: user.status
        }
      });
    } catch (e) {
      console.error(e);
      response.send({ message: "Server error" });
    }
  }

  async authentication(request, response) {
    try {
      const user = await User.findOne({ _id: request.user.id });
      const secretKey = config.get('secretKey');
      const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: '5h' });

      user.update({ lastLoginDate: new Date().toLocaleDateString() });

      return response.json({
        token,
        user: {
          id: user.id,
          email: user.email,
          lastLoginDate: user.lastLoginDate
        },
        success: true
      });
    } catch (e) {
      console.error(e);
      response.send({ message: "Server error" });
    }
  }
};

module.exports = new AuthController();
