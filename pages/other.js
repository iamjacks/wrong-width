import Link from 'next/link'

export default () => (
  <div className='container'>
    <h1>Other Page</h1>
    <p><Link href='/'><a>Go back home</a></Link></p>
    <style jsx>{`
      .container {
        width: 100%;
        background-color: #f0f0f0;
        padding: 50px;
        margin: 0 auto;
        text-align: center;
        box-sizing: border-box;
      }
    `}</style>
  </div>
)
