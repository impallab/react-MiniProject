import './App.css'
import Card from './components/card'
function App() {
  return (
    < >
      <h2 className='bg-black font-bold text-cyan-300 rounded-3xl py-4 hover:bg-green-600 hover:text-white mb-4' >Tailwind-React</h2>

      <Card songName="Krishna' song" songImage="https://c.saavncdn.com/550/Shree-Krishna-Amrutwani-Krishna-Bhajan-Marathi-2021-20220623102833-500x500.jpg" alt="" width="88" height="88" className="flex-none rounded-lg bg-slate-100" loading="lazy"/>


      <Card songName="Radha-Krishna's song" songImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWy4_cyUhE75L61AGiVj6uztqFe6NcOk4cUg&usqp=CAU"/>

    </>
  )
}

export default App
