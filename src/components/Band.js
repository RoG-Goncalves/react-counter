import React, { Component } from 'react';

export default class Band extends Component {
  constructor() {
    super();

    this.state = {
      bandName: 'Alanis',
      bandMembers: [
        {
          id: 1,
          name: 'Alanis Morissette',
          instrument: 'Vocals',
        },
        {
          id: 2,
          name: 'Jimmi Hendrix',
          instrument: 'Guittar',
        },
        {
          id: 3,
          name: 'Paul Mcartney',
          instrument: 'Drums',
        },
      ],
    };
  }
  render() {
    const { bandName, bandMembers } = this.state;
    return (
      <div>
        <h4>{bandName}</h4>
        {bandMembers.map(({ id, name, instrument }) => {
          return (
            <ul key={id}>
              <li>
                {name} - {instrument}
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}
