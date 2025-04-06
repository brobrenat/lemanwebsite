import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">LEMAN</h3>
            <p className="text-gray-400 mb-4">Minuman Sehat & Menyegarkan untuk Setiap Momen</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Menu</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-primary transition-colors">
                  Tentang
                </Link>
              </li>
              <li>
                <Link href="#benefits" className="text-gray-400 hover:text-primary transition-colors">
                  Manfaat
                </Link>
              </li>
              <li>
                <Link href="/buy" className="text-gray-400 hover:text-primary transition-colors">
                  Beli Sekarang
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Kontak</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: hello@leman.fresh</li>
              <li>Telepon: +62 8782 3411 23</li>
              <li>Instagram: @leman.fresh</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} LEMAN Fresh Drinks. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}

