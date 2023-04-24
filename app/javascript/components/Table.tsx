import React from 'react'

type TableProps = {
  headers: string[]
  children: JSX.Element[]
}

const Table: React.FC<TableProps> = ({ headers, children }) => {

  return (
    <table className='table'>
      <thead>
        <tr>
          {headers.map(header => <th key={`header_${header}`}>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  )

}

export default Table
