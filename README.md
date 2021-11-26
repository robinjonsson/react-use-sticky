# React Sticky Hook

A react hook for observing/watching `position: sticky` state on refs

## Installation

`npm i react-use-sticky`

## Usage

`useSticky` returns a pair of values, the ref to observe/watch and the current sticky state of the ref.

```jsx
import { useSticky } from 'react-use-sticky';

function HeaderBar() {
  const [headerBarRef, sticky] = useSticky();
  const style = {
    position: 'sticky',
    top: 0,
    background: sticky ? 'green' : 'red',
  };

  return (
    <nav ref={headerBarRef} style={style}>
      HeaderBar
    </nav>
  );
}

export default HeaderBar;
```

Typescript with generic

```tsx
import { useSticky } from 'react-use-sticky';

function HeaderBar() {
  const [headerBarRef, sticky] = useSticky<HTMLDivElement>();
  const style = {
    position: 'sticky',
    top: 0,
    background: sticky ? 'green' : 'red',
  } as const;

  return (
    <div ref={headerBarRef} style={style}>
      HeaderBar
    </div>
  );
}

export default HeaderBar;
```

## Build

```bash
npm run build
```
