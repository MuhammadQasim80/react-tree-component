import React from 'react';
import TreeNode from "./TreeNode";

const TreeItem = ({ item, onCollapseExpandItem }) => {

    return (
        <div className='node'>
            {
                item.children && item.children.length > 0 && <div style={{ width: 25 }}>
                    <input type='button' value={item.collapsed ? '+' : '-'} onClick={() => { onCollapseExpandItem(item, !item.collapsed) }} />
                </div>
            }
            <div>
                <li id={item.id}>
                    {item.label}

                    {item.children && item.children.length > 0 && !item.collapsed &&
                        <TreeNode
                            parentNode={item}
                            onCollapseExpandItem={onCollapseExpandItem}
                        />}
                </li>
            </div>
        </div>
    );
};

export default TreeItem;