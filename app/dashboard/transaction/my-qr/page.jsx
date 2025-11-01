import QRCode from "react-qr-code";

export default function MyQR() {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-xl text-center">
      <h1 className="text-xl font-semibold mb-4">My QR Code</h1>

      <div className="p-6 bg-gray-100 rounded-xl inline-block">
        <QRCode value="user-ccpi-qr-id-123" size={180} />
      </div>

      <p className="mt-3 text-gray-600">
        Scan this to send me money via CCPI.
      </p>
    </div>
  );
}
