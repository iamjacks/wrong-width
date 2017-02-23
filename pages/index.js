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
        <h3>This page uses styled-jsx</h3>
        <div className='inner'>
          <h1>My width is {width}px</h1>
        </div>
        <p><Link href='/other'><a>Goto: page with global style</a></Link></p>
        <style jsx>{`
          .container {
            width: 100%;
            background-color: pink;
            padding: 50px;
            margin: 0 auto;
            text-align: center;
            box-sizing: border-box;
          }
          .inner {
            background-color: rgba(0,0,0,.1);
          }
        `}</style>
      </div>
    )
  }
}
