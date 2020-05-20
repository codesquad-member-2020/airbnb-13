import React from 'react';

interface IHelloProp {
  /** 보여주고 싶은 이름 */
  name: string;
  big?: boolean;
  onHello?: () => void;
  onBye?: () => void;
}

const Hello = ({ name, big, onHello, onBye }: IHelloProp) => {
  return (
    <div>
      {big ? <h1>안녕하세요, {name}!</h1> : <div>안녕하세요, {name}!</div>}
      <div>
        <button onClick={onHello}>Hello</button>
        <button onClick={onBye}>Bye</button>
      </div>
    </div>
  );
};

Hello.defaultProps = {
  big: false
};

export default Hello;
