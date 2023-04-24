import React from 'react'

export type TableRowProps = {
  key: string
  children: JSX.Element[]
}

const TableRow: React.FC<TableRowProps> = ({ key, children }) => {

  return (
    <tr key={key}>
      {children}
    </tr>
  )

}

export default TableRow
