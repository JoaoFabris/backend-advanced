const User = require('./atividade1');

console.log('--- STARTING USER CLASS TESTS ---\n');

// 1. Valid User Creation Test
try {
  const user = new User('João Silva', 'joao@email.com', '123456', '1995-05-20');
  console.log(' User created successfully!');
  console.log('Name:', user.getName());
  console.log('Email:', user.getEmail());
  console.log('Birth Date:', user.getBirthDate().toLocaleDateString('en-US'));
} catch (error) {
  console.error(' Failed to create valid user:', error.message);
}

console.log('\n--- TESTING VALIDATIONS AND ERRORS ---\n');

// 2. Invalid Email Test
try {
  const invalidUser = new User('Maria', 'invalid-email', '123456', '2000-01-01');
} catch (error) {
  console.log(' Invalid email correctly caught:', error.message);
}

// 3. Long Password Test (Greater than 8 characters)
try {
  const longPasswordUser = new User('Carlos', 'carlos@email.com', '123456789', '2000-01-01');
} catch (error) {
  console.log(' Long password correctly caught:', error.message);
}

// 4. Same Password Update Test
try {
  const user = new User('Ana', 'ana@email.com', 'password123', '2000-01-01');
  user.setPassword('password123'); // Trying to set the same password
} catch (error) {
  console.log(' Changing to the same password blocked:', error.message);
}

// 5. Birth Year Before 1900 Test
try {
  const oldUser = new User('Grandpa', 'grandpa@email.com', '123456', '1899-12-31');
} catch (error) {
  console.log(' Year prior to 1900 blocked:', error.message);
}