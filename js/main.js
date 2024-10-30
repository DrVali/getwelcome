const user1={username :"ali",language:"Spanish"}
const user2={};

const getWelcome =({username,language,...rest}) =>{
   const result = `Hello ${username??"(cant find Your name)"} welcome to our site in ${language??"(cant find Your language)"}`;
   alert(result);
   return result;
    }

     console.log(getWelcome(user1));