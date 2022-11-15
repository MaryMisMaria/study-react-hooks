import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'

const HooksUseState = () => {

  return (
    <Box align='center'>
      <Typography pt={5} variant='h5' fontStyle='Roboto'> useState - хук стану </Typography>
      <Box m={5} width='80%' borderRadius='10px'>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
            aria-controls='panel1d-content'
            id='panel1d-header'>
            <Typography>item 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
							Ми викликаємо його для того, щоб надати внутрішній стан нашому компоненту.
							React буде зберігати цей стан між повторними рендерами. Виклик useState повертає дві речі:
							поточне значення стану та функцію, яка дозволяє оновлювати цей стан.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
            aria-controls='panel2d-content'
            id='panel2d-header'>
            <Typography> item 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
							Ви можете викликати цю функцію де завгодно, наприклад, в обробнику події.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
            aria-controls='panel3d-content'
            id='panel3d-header'>
            <Typography>item 3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
							Єдиним аргументом для useState є початкове значення стану. Початкове значення
							аргументу використовується
							тільки під час першого рендера.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Typography variant='h6'>Example</Typography>
    </Box>
  )
}

export default HooksUseState
