// app/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-white/80 border-t border-gray-200 py-6 text-center text-sm text-gray-600">
      <p>
        © {new Date().getFullYear()} История, култура и традиции. Всички права запазени.
      </p>
      <div className="mt-3 flex justify-center gap-2">
        <span className="w-3 h-3 bg-white border border-gray-300 rounded-full"></span>
        <span className="w-3 h-3 bg-green-600 rounded-full"></span>
        <span className="w-3 h-3 bg-red-600 rounded-full"></span>
      </div>
    </footer>
  );
}
