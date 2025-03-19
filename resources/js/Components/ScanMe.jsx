import qrCode from "../../assets/images/sections/scan.avif"; // Asegúrate de tener un QR en tu proyecto
import { Languages, QrCode } from "lucide-react"; // Íconos de Lucide

export default function ScanMe() {
  return (
    <section className="py-6 bg-gray-100 text-center relative bg-white shadow-lg ">
      {/* Banner con QR y mensaje */}
      <div className=" p-4 flex items-center justify-between flex-col-reverse md:flex-row gap-6 max-w-6xl mx-auto mt-6 ">
        {/* Sección de texto */}
        <div className="flex items-center justify-center gap-2 py-9 px-4 bg-secondary text-white rounded-lg md:w-1/3">
          <Languages className="w-6 h-6 text-primary" />
          <span className="text-white font-semibold text-xl text-gray-800">
            También Hablamos Español
          </span>
        </div>

        {/* Sección del QR */}
        <div className="flex flex-col items-center">
          <img
            src={qrCode}
            alt="QR Code"
            className="w-3/5 object-contain bg-white p-1 rounded-md border"
          />
          <div className="flex items-center gap-1 mt-2 text-sm text-gray-600">
            <QrCode className="w-10 h-10 text-gray-500" />
            <span>Scan Me</span>
          </div>
        </div>
      </div>

    </section>
  );
}
