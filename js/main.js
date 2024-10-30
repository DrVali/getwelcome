const user1={username :"ali",language:"Spanish"}
const user2={};

const getWelcome =({username,language,...rest}) =>{
   const result = `Hello ${username??"(Gust)"} welcome to our site in ${language??"(English)"}`;
   alert(result);
   return result;
    }

     console.log(getWelcome(user1));
