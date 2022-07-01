import TreeList, {
  Column,
  ColumnChooser,
  ColumnFixing,
  Item,
  SearchPanel,
  Selection,
  StateStoring,
  Toolbar,
} from 'devextreme-react/tree-list';
import React from 'react';
import { data } from './Data';

/**
 * Examples and things: https://js.devexpress.com/Documentation/Guide/UI_Components/TreeList
 * Full component configuration: https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/
 * Keyboard accessibility: https://js.devexpress.com/Documentation/Guide/UI_Components/TreeList/Keyboard_Support/
 */

const TreeListExample = () => {
  const [expandedRows, setExpandedRows] = React.useState<number[]>([1, 4]);
  const [selectedRows, setSelectedRows] = React.useState<number[]>([4]);

  return (
    <TreeList
      /**
       * By default, this takes a flat list where each item has an ID and a ParentID.
       * It is possible to use nested data by setting dataStructure='tree' and defining some itemsExpr
       */
      dataSource={data}
      rootValue={-1} // I think that this needs to match the lowest value of parentIdExpre ("HeadID")
      keyExpr='ID' // Defines the data element which is referenced by children
      parentIdExpr='HeadID' // Defines the data element which is used reference a parent
      // autoExpandAll // Defaults the rows to be expanded by default
      defaultExpandedRowKeys={expandedRows} // Allows for a specific chain to be expanded by default. Cannot be used with autoExpandAll.
      selectedRowKeys={selectedRows}
      onSelectionChanged={(e) => setSelectedRows(e.selectedRowKeys)} // If selectedRowKeys is defined, you have to implement onSelectionChanged
      allowColumnResizing // Allows the columns to be resized by dragging
      columnAutoWidth // Seems to set adjust column width based on the column's contents
      cellHintEnabled // When a cell's contents are truncated, a hint is displayed on hover
      // hoverStateEnabled // Highlights rows when they are hovered over
      rowAlternationEnabled // Shades each row, alternating. This uses the same shade as hoverStateEnabled, so they don't feel very nice when used together.
    >
      {/**
       * Without minWidth, the columns can be completely collapsed by resizing. People will definitely do this and complain about the column "disappearing".
       */}
      <Column dataField='ID' visible={false} allowSearch={false} />
      <Column dataField='HeadID' visible={false} allowSearch={false} />
      <Column dataField='Entity' minWidth={100} />
      <Column dataField='RequestDate' minWidth={100} />
      <Column dataField='RequestStatus' minWidth={100} />
      <Column dataField='ResponseDate' minWidth={100} />
      <Column dataField='ResponseStatus' minWidth={100} />
      {/**
       * The SearchPanel is a text-based search field which appears above the TreeList.
       * Columns within the TreeList have allowSearch enabled by default -- they are opt-out.
       */}
      <SearchPanel visible={true} />
      <Selection mode='single' />
      <StateStoring
        enabled
        type='localStorage'
        storageKey='tree-list-example'
      />
      {/** Allows you to choose which columns are shown. */}
      <ColumnChooser enabled mode='select' />
    </TreeList>
  );
};

export default TreeListExample;
