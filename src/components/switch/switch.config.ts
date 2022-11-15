import { CSSProperties } from 'react';

export const switchConfig = (): CSSProperties => {
  return {
    display: 'flex',
    width: '160px',
    height: '100px',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'flex-start',
    borderRadius: '50px',
    padding: '10px',
    cursor: 'pointer',
  };
};

/*
.switch {
  width: 160px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: flex-start;
  border-radius: 50px;
  padding: 10px;
  cursor: pointer;
}

.switch[data-isOn="true"] {
  justify-content: flex-end;
}

.handle {
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 40px;
}
* */
