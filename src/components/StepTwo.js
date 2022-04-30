const StepTwo = ({ name, email, password, setNext }) => {
  return (
    <div className="step-2">
      <h1>Results</h1>
      <div>
        <p>Name : {name}</p>
        <p>Email : {email}</p>
        <p>Password : {password}</p>
      </div>

      <button
        className="edit"
        onClick={() => {
          setNext(false);
        }}
      >
        {" "}
        Edit your informations
      </button>
    </div>
  );
};
export default StepTwo;
