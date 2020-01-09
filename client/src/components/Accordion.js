import React from 'react';

import './Accordion.css';

const sections = ['section 1', 'section 2', 'section 3'];

export class Accordion extends React.Component {
  state = {
    clickedButtons: [],
  };
  onClick = i => {
    this.setState(({ clickedButtons }) => ({
      clickedButtons: clickedButtons.includes(i)
        ? clickedButtons.filter(button => button !== i)
        : [...clickedButtons, i],
    }));
  };
  render() {
    const { clickedButtons } = this.state;
    return (
      <div>
        <h1>Make an Accordion with CSS Animations</h1>

        {sections.map((section, i) => (
          <div>
            <button onClick={this.onClick.bind(null, i)} className="accordion">
              {section}
            </button>
            <div
              className={clickedButtons.includes(i) ? 'activated' : 'hidden'}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
