import "./App.css";
import Header from "./components/Header";
import TransactionBox from "./components/TransactionBox";
import IncomeTrend from "./components/IncomeTrend";
import InvoiceCard from "./components/InvoiceCard";
import Footer from "./components/Footer";
import TimePeriod from "./components/TimePeriod";

function App() {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <main className="bg-white relative px-3 min-h-screen -mt-12 py-4 rounded-t-[3rem] shadow-lg z-10">
        <div className="bg-[#F2F2F2] rounded-4xl flex flex-col items-center gap-3 p-4">
          <img src="/add.png" alt="add" className="h-8 w-8" />
          <h2 className="bg-gradient-to-b text-2xl font-semibold from-[#DD2A7B] via-[#9747FF] to-[#334CCA] bg-clip-text text-transparent">
            Create New Invoice
          </h2>
          <p className="text-[#999999] text-sm">
            Start by creating and sending new invoice
          </p>
        </div>

        <p className="text-[#8134FA] text-sm text-center my-6">
          Or Upload an existing invoice and set payment reminder
        </p>

        <section className="border-2 border-[#f2f2f2] text-[#999999] rounded-3xl p-4">
          <div className=" flex items-center justify-between">
            <h2 className="font-semibold">Time Period</h2>
            <p className="text-sm">dd:mm:yyyy - dd:mm:yyyy</p>
          </div>

          <TimePeriod />
        </section>

        <section className="my-6 space-y-3">
          <TransactionBox type={"Total Earnings"} money={"1,25,000"} />
          <div className="grid grid-cols-2 gap-3">
            <TransactionBox type={"Payment Awaited"} money={"25,000"} />
            <TransactionBox type={"Payment Overdue"} money={"25,000"} />
          </div>
        </section>

        <IncomeTrend />

        <section className="my-6 space-y-3">
          <h1 className=" text-[#999999] text-[20px] font-bold mb-2">
            Your Invoices
          </h1>
          <InvoiceCard
            header="Client Name"
            money={"1,25,000"}
            due={"2024-06-15"}
            status={"Update Status"}
          />
          <InvoiceCard
            header="Client Name"
            money={"1,25,000"}
            due={"2024-06-15"}
            status={"Unpaid"}
          />
          <InvoiceCard
            header="Income Trend"
            money={"1,25,000"}
            due={"2024-06-15"}
            status={"Disputed"}
          />
          <InvoiceCard
            header="Income Trend"
            money={"1,25,000"}
            due={"2024-06-15"}
            status={"Paid"}
          />
          <InvoiceCard
            header="Income Trend"
            money={"1,25,000"}
            due={"2024-06-15"}
            status={"Paid"}
          />
          <InvoiceCard
            header="Client Name"
            money={"1,25,000"}
            due={"2024-06-15"}
            status={"Partially Paid"}
          />
          <InvoiceCard
            header="Income Trend"
            money={"1,25,000"}
            due={"2024-06-15"}
            status={"Paid"}
          />
          <InvoiceCard
            header="Income Trend"
            money={"1,25,000"}
            due={"2024-06-15"}
            status={"Overdue"}
            icon={"/alarm.png"}
          />
          <InvoiceCard
            header="Income Trend"
            money={"1,25,000"}
            due={"2024-06-15"}
            status={"Draft"}
            icon={"/edit.png"}
          />
          <InvoiceCard
            header="Income Trend"
            money={"1,25,000"}
            due={"2024-06-15"}
            status={"Paid"}
          />
        </section>

        <Footer />
      </main>
    </div>
  );
}

export default App;
