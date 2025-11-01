export default function History() {
  const data = [
    {
      date: "28 Oct",
      from: "Me",
      to: "B987",
      type: "Inter-bank",
      amount: "₹500",
      bank: "CCPI",
      status: "✅",
    },
    {
      date: "27 Oct",
      from: "Me",
      to: "Self Transfer",
      type: "Own Bank",
      amount: "₹1000",
      bank: "GreenPay",
      status: "✅",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-xl font-semibold mb-4">Transaction History</h1>

      <div className="bg-white rounded-xl shadow p-4">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th>Date</th>
              <th>From</th>
              <th>To</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Bank</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {data.map((t, i) => (
              <tr key={i} className="border-b">
                <td>{t.date}</td>
                <td>{t.from}</td>
                <td>{t.to}</td>
                <td>{t.type}</td>
                <td>{t.amount}</td>
                <td>{t.bank}</td>
                <td>{t.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
