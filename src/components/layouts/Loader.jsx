import Loading from './assets/loading.gif'
function Loader() {
  return (
    <div className='w-100 mt-20 flex flex-1 justify-center'>
        <img src={Loading} alt="Loading.." />
    </div>
  )
}

export default Loader