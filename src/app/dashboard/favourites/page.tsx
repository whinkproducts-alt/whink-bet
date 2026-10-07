import { Star } from 'lucide-react'

export default function FavouritesPage() {
  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div>
        <h1 className="text-2xl font-black mb-1">Favourites</h1>
        <p className="text-slate-500 text-sm">Your saved predictions</p>
      </div>
      <div className="glass-card p-12 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
          style={{ background: 'rgba(204,148,75,0.1)', border: '1px solid rgba(204,148,75,0.2)' }}>
          <Star size={28} style={{ color: '#CC944B' }} />
        </div>
        <h3 className="font-bold text-slate-300 mb-2">No favourites yet</h3>
        <p className="text-sm text-slate-600">Star any prediction from the Predictions page to save it here</p>
      </div>
    </div>
  )
}
