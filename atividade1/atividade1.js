const validator = require('validator');

class User {
    constructor(name, email, password, birthDate) {
        this.setName(name);
        this.setEmail(email);
        this.setPassword(password);
        this.setBirthDate(birthDate);
      }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  getBirthDate() {
    return this.birthDate;
  }

  setName(name) {
    this.name = name;
  }

  setEmail(email) {
    if (!validator.isEmail(email)) {
      throw new Error('Invalid email format');
    }
    this.email = email;
  }

  setPassword(password) {
    if (!password || password.length > 8) {
      throw new Error('Password must be between 1 and 8 characters');
    }
    if (password === this.password) {
      throw new Error('The new password cannot be the same as the current password');
    }
    this.password = password;
  }

  setBirthDate(birthDate) {
    const date = new Date(birthDate);
  
    if (isNaN(date.getTime())) {
      throw new Error('Invalid date format');
    }
    if (date < new Date(1900, 0, 1)) {
      throw new Error('Birth date must be greater than 1900');
    }
  
    this.birthDate = date;
  }
}


module.exports = User;