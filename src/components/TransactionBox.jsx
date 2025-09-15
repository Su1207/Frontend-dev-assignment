const TransactionBox = ({ type, money }) => {
  return (
    <div className="border-2 border-[#f2f2f2] text-[#999999] rounded-3xl p-4">
      <h2 className="mb-2 font-semibold">{type}</h2>
      <h1 className="text-[#8134af] font-bold text-xl">${money}</h1>
    </div>
  );
};

export default TransactionBox;
