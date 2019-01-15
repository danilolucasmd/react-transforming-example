import React, { PureComponent, SyntheticEvent } from 'react';
import './App.css';
import { Draggable, Resizable } from 'react-transforming';

interface IPosition {
  x: number;
  y: number;
}

interface ISize {
  width: number;
  height: number;
}

interface IProps {}

interface IState extends IPosition, ISize {}

export default class App extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
      width: 300,
      height: 100,
    };
  }

  handleDragStop = (event: SyntheticEvent, position: IPosition) => {
    this.setState({
      ...position,
    });
  }

  handleResizeStop = (event: SyntheticEvent, size: ISize) => {
    this.setState({
      ...size,
    });
  }

  render() {
    const { x, y, width, height } = this.state;

    return (
      <div className='App'>
        <h3>React Transforming Example</h3>
        <div className='container'>
          <Draggable
            default={{x, y}}
            onDragStop={this.handleDragStop}
          >
            <Resizable
              default={{width, height}}
              onResizeStop={this.handleResizeStop}
            >
              <div className='my-component'>
                <span>MyComponent</span>
              </div>
            </Resizable>
          </Draggable>
        </div>  
      </div>
    );
  }
}
