import { useContext } from "react";
import CrudContext from "../context/CrudContext"
import Loader from "./Loader";
import Message from "./Message";
import Headers from "./Headers";
import CrudTableE from "./CrudTableEs";
import CrudFormEs from "./CrudFormEs";
import CrudtableEs from "./CrudTableEs";


const CrudApiEs = () => {
  const { db, loading, error } = useContext(CrudContext);

  return (
    <>
    <Headers/>
      
      <article className="grid-1-2">
        <CrudFormEs />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && <CrudtableEs />}
      </article>
    </>
  );
};

export default CrudApiEs;