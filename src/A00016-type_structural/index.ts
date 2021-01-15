// tipagem estruturada
// para o typescript a identidade do tipo não importa tanto, mas mais as restrições

type User = { username: string; password: string };

type VerifyUser = (user: User, sentValues: User) => boolean;

const verifyUser: VerifyUser = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'thiago', password: '123456' };
const sentUser = { username: 'thiago', password: '1234567' };

const logIn = verifyUser(bdUser, sentUser);

console.log(logIn);
