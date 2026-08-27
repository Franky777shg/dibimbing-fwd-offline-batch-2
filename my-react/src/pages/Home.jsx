import React from 'react'
import { books } from '../data/books'
import BookCard from '../components/BookCard'

const steps = [
    {
        number: 1,
        title: 'Cari Buku',
        description: 'Telusuri katalog dan temukan buku yang ingin kamu baca.',
    },
    {
        number: 2,
        title: 'Ajukan Pinjam',
        description: 'Klik tombol pinjam, lalu ambil bukunya di meja petugas.',
    },
    {
        number: 3,
        title: 'Kembalikan',
        description: 'Kembalikan buku maksimal 7 hari agar tidak kena denda.',
    },
]

function Home() {
    return (
        <main>
            <section id='beranda' className='bg-slate-50'>
                <div className='mx-auto max-w-6xl px-4 py-20 text-center'>
                    <span className='rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-700'>Perpustakaan Digital</span>
                    <h1 className='mt-6 text-5xl font-bold text-slate-900'>
                        Pinjam Buku Favoritmu <br />
                        <span className='text-emerald-600'> Tanpa Ribet</span>
                    </h1>
                    <p className='mt-4 mx-auto max-w-xl text-slate-600'>
                        Ribuan koleksi buku siap dipinjam kapan saja. Cukup pilih buku,
                        ajukan pinjaman, dan baca sepuasnya.
                    </p>
                    <div className='flex flex-wrap mt-8 gap-3 justify-center'>
                        <a href="#katalog" className='rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700'>Lihat Katalog</a>
                        <a href="#cara-pinjam" className='rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transtion hover:bg-slate-100'>Cara Meminjam</a>
                    </div>
                </div>
            </section>

            <section id='katalog' className="mx-auto max-w-6xl px-4 py-16">
                <h2 className="text-2xl font-bold text-slate-900">Katalog Buku</h2>
                <p className="mt-1 text-slate-600">
                    Koleksi buku yang paling sering dipinjam bulan ini.
                </p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {books.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            </section>

            <section id="cara-pinjam" className="bg-slate-50">
                <div className="mx-auto max-w-6xl px-4 py-16">
                    <h2 className="text-center text-2xl font-bold text-slate-900">
                        Cara Meminjam Buku
                    </h2>
                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {steps.map((step) => (
                            <div
                                key={step.number}
                                className="rounded-2xl border border-slate-200 bg-white p-6 text-center"
                            >
                                <span className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-emerald-600 font-bold text-white">
                                    {step.number}
                                </span>
                                <h3 className="mt-4 font-semibold text-slate-900">
                                    {step.title}
                                </h3>
                                <p className="mt-2 text-sm text-slate-600">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="tentang" className="mx-auto max-w-6xl px-4 py-16 text-center">
                <h2 className="text-2xl font-bold text-slate-900">Tentang Kami</h2>
                <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                    Franky Library adalah perpustakaan digital yang dibuat sebagai bahan
                    belajar React. Tujuannya sederhana: membuat proses pinjam meminjam
                    buku jadi lebih mudah untuk semua orang.
                </p>
            </section>
        </main>
    )
}

export default Home