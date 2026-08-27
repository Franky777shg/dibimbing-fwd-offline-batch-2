const menuItems = [
    { label: "Beranda", href: "#beranda" },
    { label: "Katalog", href: "#katalog" },
    { label: "Cara Pinjam", href: "#cara-pinjam" },
    { label: "Tentang Kami", href: "#tentang-kami" }
]

function Navbar() {
  return (
    <header className='sticky top-0 z-0 border-b border-slate-200 bg-white/90 backdrop-blur'>
        <nav className='mx-auto flex max-w-6xl items-center justify-between px-4 py-4'>
            <a href="#beranda" className='flex gap-2 items-center'>
                <span className='grid h-9 w-9 place-items-center rounded-lg bg-emerald-600 text-lg text-white'>📚</span>
                <span className='text-lg font-bold text-slate-900'>
                    Franky 
                    <span className='text-emerald-600'> Library</span>
                </span>
            </a>

            <ul className='flex items-center gap-8'>
                {menuItems.map((item) => (
                    <li key={item.label}>
                        <a 
                            href={item.href}
                            className='text-sm font-medium text-slate-600 transition hover:text-emerald-600'
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>

            <button className='block cursor-pointer bg-emerald-600 text-white rounded-lg px-4 py-2 text-sm font-semibold transition hover:bg-emerald-700'>
                Masuk
            </button>
        </nav>
    </header>
  )
}

export default Navbar