const { getUserByEmail } = require("../users/users.controllers");
const { comparePassword } = require("../utils/crypt");

const loginUser = async(email, password) => {
  // return await getUserByEmail(email)
  //   .then((res) => {
  //     console.log(res.id)
  //     const verify_password = comparePassword(password, res.password);
  //     if (verify_password) {
  //       return user;
  //     }
  //     return false;
  //   })
  //   .catch((err) => {
  //     return false;
  //   });

  try {
    const user = await getUserByEmail(email)
    const verify_password = comparePassword(password, user.password);
    if (verify_password) {
      return user;
    }
    return false;
  } catch (error) {
    return false
  }
  //? user.password Contraseña hasheada
  //* password Contraseña en texto plano
};


module.exports = {
  loginUser,
};
