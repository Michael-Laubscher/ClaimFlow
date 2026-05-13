export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold">Askari Insure</h3>
            <p className="mt-3 text-sm text-slate-300">
              Reliable insurance solutions with trusted claims support.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Products</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>Motor Insurance</li>
              <li>Travel Insurance</li>
              <li>Commercial Cover</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Contact</h4>
            <p className="mt-3 text-sm text-slate-300">
              Pretoria, South Africa
              <br />
              info@askariinsure.com
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700 pt-4 text-sm text-slate-400">
          © 2026 Askari Insure. All rights reserved.
        </div>
      </div>
    </footer>
  );
}