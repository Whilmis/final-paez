import { createContext, useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

const EstudianteContext = createContext();

const EstudianteProvider = ({ children }) => {
  const [dbE, setDbE] = useState(null);
  const [actualE, setActualE] = useState(5);
  const [dataToEditE, setDataToEditE] = useState(null);
  const [errorE, setErrorE] = useState(null);
  const [loadingeE, setLoadingE] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/estudiantes";


  useEffect(() => {
    setLoadingE(true);
    helpHttp()
      .get(url)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          setDbE(res);
          setErrorE(null);
        } else {
          setDbE(null);
          setErrorE(res);
        }
        setLoadingE(false);
      });
  }, [url]);


 const actualisaActual = (data) =>
 {
  setActualE(data);
 }

  const createDataE = (data) => {
    data.id = Date.now();
    //console.log(data);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        setDbE([...dbE, res]);
      } else {
        setErrorE(res);
      }
    });
  };

  const updateDataE = (data) => {
    let endpoint = `${url}/${data.id}`;
    //console.log(endpoint);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        let newData = dbE.map((el) => (el.id === data.id ? data : el));
        setDbE(newData);
      } else {
        setErrorE(res);
      }
    });
  };

  const deleteDataE = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };

      api.del(endpoint, options).then((res) => {
        //console.log(res);
        if (!res.err) {
          let newData = dbE.filter((el) => el.id !== id);
          setDbE(newData);
        } else {
          setErrorE(res);
        }
      });
    } else {
      return;
    }
  };

  const data = {
    dbE,
    errorE,
    loadingeE,
    createDataE,
    dataToEditE,
    setDataToEditE,
    updateDataE,
    deleteDataE,
    setActualE,
    actualE,
    actualisaActual
  };

  return <EstudianteContext.Provider value={data}>{children}</EstudianteContext.Provider>;
};

export { EstudianteProvider };
export default EstudianteContext;
