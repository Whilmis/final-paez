import { useContext } from "react";
import CrudContext from "../context/CrudContext"
import Loader from "./Loader";
import Message from "./Message";
import HeaderC from "./HeadersC";
import CrudTableE from "./CrudTableEn";
import CrudFormE from "./CrudFormE";



const CrudApiE = () => {
  const { db, loading, error } = useContext(CrudContext);

  return (
    <>
    <HeaderC/>
      
      <article className="grid-1-2">
        <CrudFormE />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && <CrudTableE />}
      </article>
    </>
  );
};

export default CrudApiE;