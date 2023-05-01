import '../Umeet.css'

const BlankEvents = ({ event }) => {
  return (
  <section className='fullPage bg-white border border-gray-400 mr-1 flex justify-center items-center'>
    <div className='w-3/6 h-2/4 bg-gray-100 rounded-[50px] flex flex-col items-center'>
     <span className='text-xl text-[#649b8e] py-8 font-semibold'>{event}</span>
     <span className='text-gray-700 text-sm'>Create Events by relations and locations</span>
    </div>
  </section>
  )
}

export default BlankEvents