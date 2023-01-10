import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const index = (props: any) => {
  return (
    <div className="rounded-2xl overflow-hidden">
      <Accordion className="bg-gradient-to-b from-[#3E2A5F]/100 to-[#211A45]/100 text-[#AB7BFF] p-2 ">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-[#AB7BFF] text-4xl " />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="text-lg px-3">{props.title}</Typography>
        </AccordionSummary>
        <hr className="border border-black" />
        <AccordionDetails>{props.children}</AccordionDetails>
      </Accordion>
    </div>
  )
}

export default index
