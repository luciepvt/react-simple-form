import "./App.css";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye } from "@fortawesome/free-solid-svg-icons";
library.add(faEye);

const App = () => {
  const [next, setNext] = useState(false);
  // On a besoin de créer des states pour stocker ce qu'on va écrire dans les inputs. Pq besoin de stocker les states?
  //Le principe consiste à remplir un input, pour ensuite envoyer les infos à un autre composant pour qu'il les affiche. Donc
  // il faut bien stocker ces infos qq part.
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // affichage des bordures rouges
  const [identicalPasswords, setIdenticalPasswords] = useState(true);

  // Dans Form, on veut que qd j'écris dans input, on veut que ce soit stocké dans le state correspondant. Pour cela,
  // dans chaque input, on fait un onChange qui contient une fonction qui sera déclenchée à chaque fois que le contenu de l'input va changer ->>
  return (
    <div>
      {next === false ? (
        <Form
          setNext={setNext}
          identicalPasswords={identicalPasswords}
          setIdenticalPasswords={setIdenticalPasswords}
          name={name}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          setName={setName}
          setEmail={setEmail}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
        />
      ) : (
        <StepTwo
          name={name}
          email={email}
          password={password}
          setNext={setNext}
        />
      )}
    </div>
  );
};

export default App;
