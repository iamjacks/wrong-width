import React from 'react'
import Link from 'next/link'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      width: 0
    }
  }
  onWindowResize = () => {
    const w = document.querySelector('.inner').clientWidth
    this.setState({
      width: w
    }, () => {
      console.log('width = ', this.state.width)
    })
  }
  componentDidMount () {
    this.onWindowResize()
    window.addEventListener('resize', this.onWindowResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onWindowResize)
  }

  render () {
    const {width} = this.state
    return (
      <div className='container'>
        <div className='inner'>
          <h1>My width is {width}px</h1>
        </div>
        <p><Link href='/other'><a>Go to other page</a></Link></p>
        <style jsx>{`
          .container {
            width: 100%;
            background-color: #f0f0f0;
            padding: 50px;
            margin: 0 auto;
            text-align: center;
            box-sizing: border-box;
          }
          .inner {
            background-color: #e0e0e0;
          }
        `}</style>
      </div>
    )
  }
}
