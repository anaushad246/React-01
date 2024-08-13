import React from 'react'

function List02({items}) {
    const listItems = items.map(i => <li key={i}>{i}</li>);

    return (
      <div>
        
        <ul>{listItems}</ul>
      </div>
    );
}

export default List02