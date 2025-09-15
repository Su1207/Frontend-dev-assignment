const InvoiceCard = ({ header, money, due, status, icon }) => {
  return (
    <div className="border-2 border-[#f2f2f2] rounded-3xl p-4 flex justify-between items-center">
      <div className=" flex flex-col items-start gap-1">
        <h2 className="text-[#6b7280] font-medium">{header}</h2>
        <p className="text-[#999999]">
          &#8377;{money}, Due: {due}
        </p>
      </div>
      <div className=" flex items-center gap-3">
        <div
          className={` px-4 py-2 rounded-[24px] ${
            status === "Paid"
              ? "bg-[#9cefb8] text-green-600"
              : status === "Awaited" || status === "Partially Paid"
              ? "bg-[#fffae5] text-yellow-500"
              : status === "Draft" || status === "Unpaid"
              ? "bg-[#f2f2f2] text-[#999999]"
              : status === "Update Status"
              ? "bg-[#8134AF] text-white"
              : "bg-red-100 text-red-600"
          } flex items-center gap-2`}
        >
          <p className="font-medium flex items-center gap-2">
            {status}
            {status === "Update Status" && (
              <img src="/arrow.png" alt="down" className="h-2 w-4" />
            )}
          </p>
        </div>
        {icon && <img src={icon} alt="icon" className="h-6 w-5" />}
      </div>
    </div>
  );
};

export default InvoiceCard;
