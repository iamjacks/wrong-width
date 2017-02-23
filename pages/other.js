import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      width: 0
    }
  }
  onWindowResize = () => {
    const w = document.querySelector('.global-inner').clientWidth
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
      <div className='global-container'>
        <Head>
          <style>{`
            .global-container {
              width: 100%;
              background-color: LightGreen;
              padding: 50px;
              margin: 0 auto;
              text-align: center;
              box-sizing: border-box;
            }
            .global-inner {
              background-color: rgba(0,0,0,.1);
            }
          `}</style>
        </Head>
        <div className='global-inner'>
          <h1>My width is {width}px</h1>
        </div>
        <p><Link href='/'><a>Goto: styled-jsx page</a></Link></p>
      </div>
    )
  }
}
