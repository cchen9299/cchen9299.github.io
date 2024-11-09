import React from 'react';

export default function Iterator({ input, usage, children }) {
  const amount = new Array(input);
  const arr = [...amount.keys()];

  return arr.map((key) => <div key={`${usage}-${key}`}>{children}</div>);
}

export function iterator({
  count,
  purpose,
  primaryNode,
  subNode,
  glow,
  replacedIndex = [],
}) {
  const amount = new Array(count);
  const arr = [...amount.keys()];

  return arr.map((_, i) => {
    const hasSub = replacedIndex.includes(i);
    const Node = hasSub ? subNode : primaryNode;
    return <Node key={`${purpose}`} glow={glow[i]} style={{ zIndex: hasSub ? 1 : -1 }} />;
  });
}
