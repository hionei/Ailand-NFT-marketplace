import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import LaunchIcon from '@mui/icons-material/Launch'

const Provenance = () => {
  return (
    <div>
      <TableContainer>
        <Table sx={{ width: '100%', color: '#AB7BFF' }}>
          <TableHead>
            <TableRow>
              <TableCell className="text-[#AB7BFF] border-2 border-black ">
                Event
              </TableCell>
              <TableCell className="text-[#AB7BFF] border-2 border-black">
                Price
              </TableCell>
              <TableCell className="text-[#AB7BFF] border-2 border-black">
                From
              </TableCell>
              <TableCell className="text-[#AB7BFF] border-2 border-black">
                To
              </TableCell>
              <TableCell className="text-[#AB7BFF] border-2 border-black">
                Date
              </TableCell>
              <TableCell className="text-[#AB7BFF] border-2 border-black"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* table row */}
            <TableRow>
              <TableCell className="border-2 border-black">
                <p className="bg-[#AB7BFF] w-fit px-2.5 py-1 text-white rounded-full whitespace-nowrap">
                  LIST
                </p>
              </TableCell>
              <TableCell className="text-[#D1D1D1] border-2 border-black whitespace-nowrap">
                1235 $
              </TableCell>
              <TableCell className=" text-[#D1D1D1] border-2 border-black whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-violet rounded-full"> </div>

                  <p className="max-w-[70px] overflow-hidden whitespace-nowrap text-ellipsis">
                    vallaedvsdas
                  </p>
                </div>
              </TableCell>
              <TableCell className="text-[#D1D1D1] border-2 border-black whitespace-nowrap">
                -
              </TableCell>
              <TableCell className="text-[#D1D1D1] border-2 border-black whitespace-nowrap">
                1 day ago
              </TableCell>
              <TableCell className="border-2 border-black whitespace-nowrap">
                <LaunchIcon className="text-violet text-[1.2rem]" />
              </TableCell>
            </TableRow>
            {/* table row */}
            <TableRow>
              <TableCell className="border-2 border-black whitespace-nowrap">
                <p className="bg-[#AB7BFF] w-fit px-2.5 py-1 text-white rounded-full whitespace-nowrap">
                  LIST
                </p>
              </TableCell>
              <TableCell className="text-[#D1D1D1] border-2 border-black whitespace-nowrap">
                -
              </TableCell>
              <TableCell className=" text-[#D1D1D1] border-2 border-black whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-violet rounded-full"> </div>

                  <p className="max-w-[70px] overflow-hidden whitespace-nowrap text-ellipsis">
                    client.near
                  </p>
                </div>
              </TableCell>
              <TableCell className="text-[#D1D1D1] border-2 border-black whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-violet rounded-full"> </div>

                  <p className="max-w-[70px] overflow-hidden whitespace-nowrap text-ellipsis">
                    vallladvssdvx
                  </p>
                </div>
              </TableCell>
              <TableCell className="text-[#D1D1D1] border-2 border-black whitespace-nowrap">
                1 day ago
              </TableCell>
              <TableCell className="border-2 border-black whitespace-nowrap">
                <LaunchIcon className="text-violet text-[1.2rem]" />
              </TableCell>
            </TableRow>
            {/* table row */}
            <TableRow>
              <TableCell className="border-2 border-black whitespace-nowrap">
                <p className="text-[#AB7BFF] w-fit px-2.5 py-1 bg-white rounded-full uppercase">
                  MINT
                </p>
              </TableCell>
              <TableCell className="text-[#D1D1D1] border-2 border-black whitespace-nowrap">
                -
              </TableCell>
              <TableCell className=" text-[#D1D1D1] border-2 border-black whitespace-nowrap">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-violet rounded-full"> </div>

                  <p className="max-w-[100px] overflow-hidden whitespace-nowrap text-ellipsis">
                    client.near
                  </p>
                </div>
              </TableCell>
              <TableCell className="text-[#D1D1D1] border-2 border-black whitespace-nowrap">
                -
              </TableCell>
              <TableCell className="text-[#D1D1D1] border-2 border-black whitespace-nowrap">
                1 day ago
              </TableCell>
              <TableCell className="border-2 border-black whitespace-nowrap">
                <LaunchIcon className="text-violet text-[1.2rem]" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <div className="flex justify-between mt-4">
        <div>&nbsp;</div>
        <div className="text-[#AB7BFF] text-center">3 of 3</div>
        <div className="flex items-center justify-center gap-4">
          <img src="/icons/icon-left.svg" alt="" />
          <p>1</p>
          <img src="/icons/icon-right.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Provenance
