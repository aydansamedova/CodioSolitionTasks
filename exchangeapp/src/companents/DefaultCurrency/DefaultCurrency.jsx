const DefaultCurrency = ({ fxSymbol, fxRate}) => {
  return (
    <div>
      <div className="inputs w-full my-2">
        <div className="singleInput flex w-full justify-between items-center">
          <div className="flex">
            <div className="icon"></div>
            <h3 className="text-sm">{fxSymbol}</h3>
          </div>
          <h3 className="text-sm">{fxRate}</h3>
        </div>
      </div>
    </div>
  );
};

export default DefaultCurrency;
