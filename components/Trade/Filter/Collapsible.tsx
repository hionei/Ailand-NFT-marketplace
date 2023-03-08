/* eslint-disable arrow-body-style */
import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'

import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
// import { data } from './FilterData'

const Collapsible = (props: any) => {
  const { data } = props
  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  return (
    <div className="font-roboto ">
      {data.map((item: any, index: any) => {
        return (
          <Accordion
            key={`filter-accordion-${index}`}
            elevation={0}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            sx={{
              background: 'transparent',
              color: 'white',
            }}
          >
            <AccordionSummary
              expandIcon={
                expanded === `panel${index}` ? (
                  <RemoveIcon sx={{ color: 'white' }} />
                ) : (
                  <AddIcon sx={{ color: 'white' }} />
                )
              }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: 'fit-content',
                  flexShrink: 0,
                  marginRight: '15px',
                }}
              >
                {item.title}
              </Typography>
              {item.count && (
                <p className="bg-violet-light px-3 py-0 rounded-full flex items-center justify-center">
                  {item.count}
                </p>
              )}
            </AccordionSummary>
            <AccordionDetails>{item.children}</AccordionDetails>
          </Accordion>
          // <Accordion
          //   elevation={0}
          //   key={index}
          //   expanded={expanded === `panel${index}`}
          //   onChange={handleChange(`panel${index}`)}
          //   sx={{
          //     background: 'transparent',
          //     color: 'white',
          //   }}
          // >
          //   <AccordionSummary
          //     expandIcon={<ExpandMoreIcon />}
          //     aria-controls="panel3bh-content"
          //     id="panel3bh-header"
          //     sx={{ color: 'white' }}
          //   >
          //     <Typography sx={{ width: '33%', flexShrink: 0 }}>
          //       {item.title}
          //     </Typography>
          //   </AccordionSummary>
          //   <AccordionDetails>{item.children}</AccordionDetails>
          // </Accordion>
        )
      })}
    </div>
  )
}

export default Collapsible
