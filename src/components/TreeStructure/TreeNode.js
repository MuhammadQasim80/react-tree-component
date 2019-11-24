import React from 'react';
import TreeItem from "./TreeItem";

const ParentItem = ({ parentNode, onCollapseExpandItem }) => {
    return (
        <ul>
            {
                (!parentNode.children || !parentNode.children.length) &&
                <TreeItem
                    item={parentNode}
                    onCollapseExpandItem={onCollapseExpandItem}
                />
            }
            {
                parentNode.children && parentNode.children.length > 0 && parentNode.children.map(item => (
                    <TreeItem
                        key={item.id}
                        item={item}
                        onCollapseExpandItem={onCollapseExpandItem}
                    />
                ))
            }

        </ul>
    );
}

export default ParentItem;