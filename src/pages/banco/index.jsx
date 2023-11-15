import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { TabelaBancos } from "./tabela";

const Banco = () => {
  const [search, setSearch] = useState("");

  const fetchData = async (search) => {
    const url =
      search !== ""
        ? `https://brasilapi.com.br/api/banks/v1/${search}`
        : `https://brasilapi.com.br/api/banks/v1`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  };

  const { data, isLoading, error, refetch } = useQuery(
    ["bancos", search],
    () => fetchData(search),
    {
      enabled: false,
    }
  );

  useEffect(() => handleSearchClick(), []);

  const handleSearchClick = () => {
    refetch();
  };

  return (
    <>
      <div className="container pt">
        <h2>Buscar Informações de um Banco</h2>
      </div>
      <div className="container">
        <input
          type="number"
          placeholder="Código do banco"
          onChange={(event) => setSearch(event.target.value)}
        />
        <button className="btn-search" onClick={handleSearchClick}>
          Buscar
        </button>
      </div>
      <div className="container pt-2">
        {isLoading && <p>Carregando...</p>}
        {(data?.code || data?.[0]) && <TabelaBancos data={data} />}
        {data?.type && <p>Banco não encontrado.</p>}
        {error && <p>Houve alum erro, tente novamente.</p>}
      </div>
    </>
  );
};

export { Banco };
