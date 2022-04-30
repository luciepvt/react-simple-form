const Input = ({ title, type, placeholder, value, setState, className }) => {
  return (
    <>
      <p>{title}</p>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        value={value}
        //   ici on met en argument (event) qui correspond au changement qui s'est passé
        //  setState = permet de changer le contenu du state , redéfinir la valeur du state
        onChange={(event) => {
          setState(event.target.value);
        }}
      />
    </>
  );
};
export default Input;
