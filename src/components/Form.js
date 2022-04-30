import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "./Input";
import { useState } from "react";

const Form = ({
  setNext,
  identicalPasswords,
  setIdenticalPasswords,
  name,
  email,
  password,
  confirmPassword,
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
}) => {
  // states pour icon eye
  const [eyePassword, setEyePassword] = useState(false);
  const [eyeConfirmPassword, setEyeConfirmPassword] = useState(false);

  // on rajoute un onSubmit sur le form dans lequel il y a une fonction qui va etre appelée qd on va
  // submit le formulaire
  // la première chose que l'on veut c'est empecher le rafraichissement de la page
  const handleSubmit = (event) => {
    event.preventDefault();
    // ensuite on veut vérifier que nos deux mdp sont identiques
    if (confirmPassword === password) {
      setNext(true);
    } else {
      alert("Your passwords are not identical");
    }
  };
  if (confirmPassword === password) {
    setIdenticalPasswords(true);
  } else {
    setIdenticalPasswords(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create account</h1>
      <Input
        className="margin-left"
        title="Name"
        type="text"
        placeholder="Jean Dupont"
        value={name}
        setState={setName}
      />
      <Input
        className="margin-left"
        title="Email"
        type="email"
        placeholder="jeandupont@mail.com"
        value={email}
        setState={setEmail}
      />
      <div>
        <Input
          className={!identicalPasswords && "red"}
          title="Password"
          type={eyePassword ? "text" : "password"}
          placeholder="hgFhzjk9lz"
          value={password}
          setState={setPassword}
        />
        <FontAwesomeIcon
          icon="eye"
          className="eye"
          onClick={() => {
            if (eyePassword === true) {
              setEyePassword(false);
            } else {
              setEyePassword(true);
            }
          }}
        />
      </div>
      <div>
        <Input
          className={!identicalPasswords && "red"}
          title="Confirm your password"
          type={eyeConfirmPassword ? "text" : "password"}
          placeholder="hgFhzjk9lz"
          value={confirmPassword}
          setState={setConfirmPassword}
        />
        <FontAwesomeIcon
          icon="eye"
          className="eye"
          onClick={() => {
            if (eyeConfirmPassword === true) {
              setEyeConfirmPassword(false);
            } else {
              setEyeConfirmPassword(true);
            }
          }}
        />
      </div>

      <br />

      <input className="register " type="submit" value="Register" />
    </form>
  );
};
export default Form;
