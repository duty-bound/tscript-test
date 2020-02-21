import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Confirm } from './confirm'

interface IState {
  confirmOpen: boolean;
  confirmMessage: string;
  confirmVisible: boolean;
  countDown: number;
}

class App extends React.Component<{}, IState> {

  private timer: number = 0

  constructor(props: {}) {
    super(props)
    this.state = {
      confirmOpen: true,
      confirmMessage: 'Please hit the confirm button',
      confirmVisible: true,
      countDown: 10,
    }
  }

  private handleTimerTick() {
    this.setState(
      {
        confirmMessage: `Please hit the confirm button ${
          this.state.countDown
        } secs to go`,
        countDown: this.state.countDown - 1
      },
      () => {
        if (this.state.countDown <= 0) {
          clearInterval(this.timer);
          this.setState({
            confirmMessage: "Too late to confirm!",
            confirmVisible: false
          });
        }
      }
    );
  }

  private handleConfirmClick = () => {
    this.setState({ confirmOpen: true })
    clearInterval(this.timer)
  }

  private handleCancelConfirmClick = () => {
    this.setState({
      confirmMessage: 'Take a break, I am sure you will later...',
      confirmOpen: false
    })
    clearInterval(this.timer)
  }

  private handleOkConfirmClick = () => {
    this.setState({
      confirmMessage: 'Cool, carry on reading!',
      confirmOpen: false
    })
    clearInterval(this.timer)
  }

  public render() {
    return (
        <React.Fragment>
          <h1>My React and TypeScript App!</h1>
          <p>{this.state.confirmMessage}</p>
          {this.state.confirmVisible && (
            <button onClick={this.handleConfirmClick}>Confirm</button>
          )}
          <Confirm
            open={this.state.confirmOpen}
            title='React and TypeScript'
            content='Are you sure you want to learn React and TypeScript?'
            cancelCaption='No way'
            okCaption='Yes please!'
            onCancelClick={this.handleCancelConfirmClick}
            onOkClick={this.handleOkConfirmClick}
          />
        </React.Fragment>
    )
  }

  public componentDidMount() {
    this.timer = window.setInterval(() => this.handleTimerTick(), 1000)
  }
}

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement)
