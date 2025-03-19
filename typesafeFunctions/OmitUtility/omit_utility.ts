// Below User type is given which has sensitive properties role and password.
// we want to create typesafe function who received user's object and returns same object but with password and role removed.
type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    role: "admin" | "user";
  };
  type safeUserInfo = Omit<User, "password"|"role">
  function getSafeUser<T extends User>(user: T):safeUserInfo{
      const {password,role,...safeUser} = user
      return safeUser
  }
  const user:User = {
      id: 1,
      name: "inshiya",
      email: "inshiya.ravat@simform.com",
      password: "1234",
      role: "admin",
  }
  console.log(getSafeUser(user))