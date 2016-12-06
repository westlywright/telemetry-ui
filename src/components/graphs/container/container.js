import React, { Component } from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import GraphLoader from '../../graph-loader/graph-loader';


class Container extends Component {
  render() {
    if (this.props.lineData) {
      return (
        <div className="col span-12">
          <h1>Containers</h1>
          <h4>Per Host Average: {this.props.containerTotals}</h4>
          <ResponsiveContainer width={'50%'} height={300} >
            <AreaChart data={this.props.lineData}>
              <XAxis dataKey="name"/>
              <YAxis/>
              <CartesianGrid strokeDasharray="3 3"/>
              <Tooltip/>
              <Area type='monotone' dataKey='value' stroke='#8884d8' fill='#8884d8' />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      );
    }
    return (
      <GraphLoader />
    );
  }
}

export default Container;
