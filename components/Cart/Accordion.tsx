import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const index = (props: any) => {
  return (
    <div className="rounded-xl overflow-hidden">
      <Accordion className="bg-[#181330] text-white   shadow-xl border">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-white text-3xl " />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="text-md px-3">{props.title}</Typography>
        </AccordionSummary>
        <hr className="border border-black" />
        <AccordionDetails>{props.children}</AccordionDetails>
      </Accordion>
    </div>
  )
}

export default index
