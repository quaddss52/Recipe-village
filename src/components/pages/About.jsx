function About() {
  return (
    <div>
        <h1 className="text-6xl mb-4">
            Recipe Village
        </h1>
        <p className='mb-4 text-2xl font-light'>
        A React app to search and display Tasty's recipes for awesome dishes. This
        project is part of my series;
        <a href='https://portfolio-react-omega-six.vercel.app/'>
          {' '}
          Understanding how to work with rest APIs , useReducer React hooks amognst others.


        </a>{' '}
       
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Layout By:
        <a className='text-white' href='https://twitter.com/hassibmoddasser'>
          Hassib Moddasser
        </a>
      </p>
      <p className='text-lg text-gray-400'>
        Built By:
        <a className='text-white' href='https://portfolio-react-omega-six.vercel.app/'>
          Akinpelu Quadri
        </a>
      </p>
      <p className='text-lg text-gray-400'>
        API:
        <a className='text-white' href='https://rapidapi.com/apidojo/api/tasty/' target='_blank' rel="noopener noreferrer">
        tasty.p.rapidapi.com
        </a>
      </p>
    </div>
  )
}

export default About