let usersTable = [
    { id: 1, name: "Alice", email: "alice@example.com" }
  ];
  
  let nextId = 2;
  
  const UserModel = {
    findAll: () => usersTable,
    
    findById: (id) => usersTable.find(u => u.id === parseInt(id)),
    
    create: (data) => {
      const newUser = { id: nextId++, ...data };
      usersTable.push(newUser);
      console.log(newUser);
      return newUser;
    },
    
    update: (id, data) => {
      const index = usersTable.findIndex(u => u.id === parseInt(id));
      if (index === -1) return null;
      usersTable[index] = { ...usersTable[index], ...data };
      return usersTable[index];
    },
    
    delete: (id) => {
      const index = usersTable.findIndex(u => u.id === parseInt(id));
      console.log(index);
      if (index === -1) return false;
      usersTable.splice(index, 1);
      return true;
    }
  };
  
  export default UserModel;