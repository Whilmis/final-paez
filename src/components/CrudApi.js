import { useContext } from "react";
import UserContext from "../context/UserContext"
import CrudForm from "./CrudForm";
import Loader from "./Loader";
import Message from "./Message";
import Headers from "./Headers";
import CrudTableF from "./CrudTableF";


const CrudApi = () => {
  const { dbU, loadingU, errorU } = useContext(UserContext);

  return (
    <>
    <Headers/>
      
      <article className="grid-1-2">
        <CrudForm />
        {loadingU && <Loader />}
        {errorU && (
          <Message
            msg={`Error ${errorU.status}: ${errorU.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {dbU && <CrudTableF />}
      </article>
    </>
  );
};

export default CrudApi;
