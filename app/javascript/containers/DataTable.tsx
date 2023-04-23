import React, { useState } from 'react'
import Table from 'components/Table'
import TableRow from 'components/TableRow'
import TableCell from 'components/TableCell'

interface ActiveModel {
  id: number
  [key: string]: string | number | boolean
}

interface DataTableProps {
  headers: Record<string, string>
  data: ActiveModel[]
}

const DataTable: React.FC<DataTableProps> = props => {

  const [data, setData] = useState<ActiveModel[]>(props.data)

  const { headers } = props

  return (
    <Table headers={Object.values(headers)}>
      {data.map(item => <TableRow key={`row_${item.id}`}>
        {Object.keys(headers).map(attr => <TableCell key={`cell_${item.id}_${attr}`} data={item[attr]}/>)}
      </TableRow>) }
    </Table>
  )

}

export default DataTable
