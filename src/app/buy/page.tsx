"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import Image from "next/image"
import { Minus, Plus, ShoppingCart } from "lucide-react"

export default function BuyPage() {
  const [quantities, setQuantities] = useState({
    besar: 0,
    kecil: 0,
  })
  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
  })

  const prices = {
    besar: 22000, // 550ml
    kecil: 13000, // 250ml
  }

  const handleQuantityChange = (size: "besar" | "kecil", change: number) => {
    const newQuantity = Math.max(0, quantities[size] + change)
    setQuantities({
      ...quantities,
      [size]: newQuantity,
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setCustomerInfo({
      ...customerInfo,
      [id]: value,
    })
  }

  const calculateSubtotal = () => {
    return quantities.besar * prices.besar + quantities.kecil * prices.kecil
  }

  const calculateTotal = () => {
    const subtotal = calculateSubtotal()
    // Only add shipping cost if there are items in the cart
    const shippingCost = subtotal > 0 ? 0 : 0
    return subtotal + shippingCost
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Check if at least one product is selected
    if (quantities.besar === 0 && quantities.kecil === 0) {
      alert("Silakan pilih setidaknya satu produk")
      return
    }

    // Format the WhatsApp message
    const message = formatWhatsAppMessage()

    // Create WhatsApp URL with the formatted message
    const whatsappNumber = "6285282325997" 
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank")
  }

  const formatWhatsAppMessage = () => {
    const { firstName, lastName, phone, address } = customerInfo
    const subtotal = calculateSubtotal()
    const total = calculateTotal()

    return `*PESANAN BARU LEMAN FRESH DRINKS*
    
*Detail Pelanggan:*
Nama: ${firstName} ${lastName}
Telepon: ${phone}
Alamat: ${address}

*Detail Pesanan:*
${quantities.besar > 0 ? `- LEMAN Besar (550ml): ${quantities.besar} x Rp ${prices.besar.toLocaleString()} = Rp ${(quantities.besar * prices.besar).toLocaleString()}\n` : ""}
${quantities.kecil > 0 ? `- LEMAN Kecil (250ml): ${quantities.kecil} x Rp ${prices.kecil.toLocaleString()} = Rp ${(quantities.kecil * prices.kecil).toLocaleString()}\n` : ""}

Subtotal: Rp ${subtotal.toLocaleString()}
*Total: Rp ${total.toLocaleString()}*

Terima kasih telah memesan LEMAN Fresh Drinks!`
  }

  const totalItems = quantities.besar + quantities.kecil

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20 pb-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8 text-center">Selesaikan Pembelian Anda</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h2 className="text-xl font-bold mb-6">Pilih Produk</h2>

              {/* Besar Product */}
              <div className="flex items-center border-b border-gray-200 pb-6 mb-6">
                <div className="w-24 flex-shrink-0">
                  <Image
                    src="/leman1.png"
                    alt="LEMAN Fresh Drinks - Besar"
                    width={80}
                    height={160}
                    className="object-contain"
                  />
                </div>
                <div className="flex-grow px-4">
                  <h3 className="font-bold">LEMAN Lemon Sereh - BESAR</h3>
                  <p className="text-sm text-gray-600">550ml</p>
                  <p className="font-medium mt-1">Rp {prices.besar.toLocaleString()}</p>
                </div>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange("besar", -1)}
                    disabled={quantities.besar === 0}
                    className="h-8 w-8"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="mx-3 font-medium w-5 text-center">{quantities.besar}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange("besar", 1)}
                    className="h-8 w-8"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Kecil Product */}
              <div className="flex items-center pb-6 mb-6">
                <div className="w-24 flex-shrink-0">
                  <Image
                    src="/leman5.png"
                    alt="LEMAN Fresh Drinks - Kecil"
                    width={80}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <div className="flex-grow px-4">
                  <h3 className="font-bold">LEMAN Lemon Sereh - KECIL</h3>
                  <p className="text-sm text-gray-600">250ml</p>
                  <p className="font-medium mt-1">Rp {prices.kecil.toLocaleString()}</p>
                </div>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange("kecil", -1)}
                    disabled={quantities.kecil === 0}
                    className="h-8 w-8"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="mx-3 font-medium w-5 text-center">{quantities.kecil}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange("kecil", 1)}
                    className="h-8 w-8"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">

                <div className="flex justify-between font-bold text-lg mt-4">
                  <span>Total</span>
                  <span>Rp {calculateTotal().toLocaleString()}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold mb-6">Informasi Pengiriman</h2>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nama Depan</Label>
                    <Input id="firstName" value={customerInfo.firstName} onChange={handleInputChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nama Belakang</Label>
                    <Input id="lastName" value={customerInfo.lastName} onChange={handleInputChange} required />
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <Label htmlFor="phone">Nomor Telepon</Label>
                  <Input id="phone" value={customerInfo.phone} onChange={handleInputChange} required />
                </div>

                <div className="space-y-2 mb-6">
                  <Label htmlFor="address">Alamat</Label>
                  <Textarea id="address" value={customerInfo.address} onChange={handleInputChange} required />
                </div>

                <div className="mb-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-sm text-yellow-800">
                    <strong>Catatan:</strong> Setelah menekan tombol "Pesan via WhatsApp", Anda akan diarahkan ke
                    WhatsApp untuk menyelesaikan pesanan Anda dengan admin kami.
                  </p>
                </div>

                <Button type="submit" className="w-full" disabled={totalItems === 0}>
                  <div className="flex items-center justify-center">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Pesan via WhatsApp
                  </div>
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

