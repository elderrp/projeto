import { useNavigate, Outlet } from "react-router-dom";
import logo from "/assets/logo.svg";

const Menu = () => {
  const navigateTo = useNavigate();

  return (
    <>
      <div className="container">
        <img
          src={logo}
          className="logo pt pb-2"
          onClick={() => navigateTo("/")}
        />
      </div>
      <div className="container">
        <span className="mx"></span>
        <button className="btn-primary" onClick={() => navigateTo("/banco")}>
          Banco
        </button>
        <span className="mx"></span>
        <button className="btn-primary" onClick={() => navigateTo("/cep")}>
          CEP
        </button>
        <span className="mx"></span>
        <button className="btn-primary" onClick={() => navigateTo("/cnpj")}>
          CNPJ
        </button>
        <span className="mx"></span>
        <button className="btn-primary" onClick={() => navigateTo("/ddd")}>
          DDD
        </button>
      </div>
      <Outlet />
    </>
  );
};

export { Menu };
