import React from 'react'

export interface TableCellProps {
  key: string
  data: string | number | boolean
}

const TableCell: React.FC<TableCellProps> = ({ key, data }) => {

  return (
    <td key={key}>
      {data}
    </td>
  )

}

export default TableCell
