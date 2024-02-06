// Array de usuarios
const users = [
    { name: 'ppc90', premium: false },
    { name: 'alex17nuro', premium: true },
    { name: 'maria33', premium: true },
    { name: 'abc123', premium: false },
    { name: 'luism9', premium: false },
    { name: 'pablo555', premium: true }
];
  
// Frase por cada usuario premium
users.forEach(user => {
    if (user.premium) {
      console.log(`${user.name} es un usuario premium.`);
    }
});
  
// Array con usuarios NO premium
const usersNoPremium = users.filter(user => !user.premium);
  
console.log("Usuarios que no son premium:");
console.log(usersNoPremium);