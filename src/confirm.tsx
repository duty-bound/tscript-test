import * as React from 'react'

export class Confirm extends React.Component {
  public render() {
    return (
      <div className='confirm-wrapper confirm-visible'>
        <div className='confirm-container'>
          <span>This is where our title should go</span>
        </div>
        <div className='confirm-content-container'>
          <p>This is where our content should go</p>
        </div>
        <div className='confirm-buttons-container'>
          <button className='confirm-cancel'>Cancel</button>
          <button className='confirm-ok'>Okay</button>
        </div>
      </div>
    )
  }
}
