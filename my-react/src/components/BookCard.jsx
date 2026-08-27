function BookCard({ book }) {
  const isAvailable = book.stock > 0

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">
      <div
        className={`flex h-44 items-end bg-linear-to-br p-4 ${book.coverBook}`}
      >
        <h3 className="text-xl font-bold text-white drop-shadow">
          {book.title}
        </h3>
      </div>

      <div className="space-y-3 p-4">
        <div>
          <p className="text-sm text-slate-500">{book.author}</p>
          <p className="text-xs text-slate-400">
            {book.category} &middot; {book.year}
          </p>
        </div>

        <span
          className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
            isAvailable
              ? 'bg-emerald-50 text-emerald-700'
              : 'bg-rose-50 text-rose-700'
          }`}
        >
          {isAvailable ? `Tersedia ${book.stock} buku` : 'Sedang dipinjam'}
        </span>

        <button
          type="button"
          disabled={!isAvailable}
          className="w-full rounded-lg bg-emerald-600 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
        >
          {isAvailable ? 'Pinjam Buku' : 'Tidak Tersedia'}
        </button>
      </div>
    </article>
  )
}

export default BookCard
