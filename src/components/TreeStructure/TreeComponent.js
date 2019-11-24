import React from 'react';
import TreeItem from "./TreeItem";
import './TreeComponent.css';

const TreeComponent = ({ data = [] }) => {
    const [d, setData] = React.useState(data);

    function onCollapseExpandItem(item, collapse) {
        item.collapsed = collapse;
        setData([...d]);
    }

    // function findItem(datum, item) {
    //     if (datum && Array.isArray(datum)) {
    //         datum.forEach((obj) => {
    //             if (obj.id === item.id) {
    //                 return obj;
    //             } else if (obj.children && obj.children.length) {
    //                 findItem(obj, item);
    //             }
    //         });
    //     }
    // }

    return (
        <ul>
            {
                d.map(node => {
                    return (
                        <TreeItem
                            key={node.id}
                            item={node}
                            onCollapseExpandItem={onCollapseExpandItem}
                        />
                    )
                })
            }
        </ul>
    );
};

export default TreeComponent;