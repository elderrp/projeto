const TabelaBancos = (props) => {
  const { data } = props;
  return Array.isArray(data) ? (
    <>
      <table className="d-desktop-table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome Fantasia</th>
            <th>ISPB</th>
            <th>Nome</th>
          </tr>
        </thead>
        {data?.map((item, key) => (
          <>
            <tbody key={key}>
              <tr>
                <td>{item?.code || "-"}</td>
                <td>{item?.fullName || "---"}</td>
                <td>{item?.ispb || "-"}</td>
                <td>{item?.name || "--"}</td>
              </tr>
            </tbody>
          </>
        ))}
      </table>
      <div className="fluid d-mobile">
        {" "}
        {data?.map((item, key) => (
          <>
            <span className="border-top"></span>
            <div className="d-flex flex-row justify-between items-center">
              <p className="text-start">
                <b>Código</b>
              </p>
              <p className="text-end">{item?.code || "-"}</p>
            </div>
            <div className="d-flex flex-row justify-between items-center">
              <p className="text-start">
                <b>Nome Fantasia</b>
              </p>
              <p className="text-end">{item?.fullName || "---"}</p>
            </div>
            <div className="d-flex flex-row justify-between items-center">
              <p className="text-start">
                <b>ISPB</b>
              </p>
              <p className="text-end">{item?.ispb || "-"}</p>
            </div>
            <div className="d-flex flex-row justify-between items-center mb-1">
              <p className="text-start">
                <b>Nome</b>
              </p>
              <p className="text-end">{item?.name || "--"}</p>
            </div>
          </>
        ))}
      </div>
    </>
  ) : (
    <>
      <table className="d-desktop-table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome Fantasia</th>
            <th>ISPB</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data?.code || "-"}</td>
            <td>{data?.fullName || "---"}</td>
            <td>{data?.ispb || "-"}</td>
            <td>{data?.name || "--"}</td>
          </tr>
        </tbody>
      </table>
      <div className="fluid d-mobile">
        <span className="border-top"></span>
        <div className="d-flex flex-row justify-between items-center">
          <p className="text-start">
            <b>Código</b>
          </p>
          <p className="text-end">{data?.code || "-"}</p>
        </div>
        <div className="d-flex flex-row justify-between items-center">
          <p className="text-start">
            <b>Nome Fantasia</b>
          </p>
          <p className="text-end">{data?.fullName || "---"}</p>
        </div>
        <div className="d-flex flex-row justify-between items-center">
          <p className="text-start">
            <b>ISPB</b>
          </p>
          <p className="text-end">{data?.ispb || "-"}</p>
        </div>
        <div className="d-flex flex-row justify-between items-center mb-1">
          <p className="text-start">
            <b>Nome</b>
          </p>
          <p className="text-end">{data?.name || "--"}</p>
        </div>
      </div>
    </>
  );
};

export { TabelaBancos };
