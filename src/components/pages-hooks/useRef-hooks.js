import { Box, Typography } from '@mui/material'

const HooksUseRef = () => {
  return (
    <Box>
      <Typography mt={3} variant='h5' align='center'> useState - хук стану </Typography>
      <Box m={3} sx={{ display: 'flex', justifyContent: 'center' }}>
				useState — це хук (визначення хуку наведенно нижче).
				Ми викликаємо його для того, щоб надати внутрішній стан нашому компоненту.
				React буде зберігати цей стан між повторними рендерами. Виклик useState повертає дві речі:
				поточне значення стану та функцію, яка дозволяє оновлювати цей стан.
				Ви можете викликати цю функцію де завгодно, наприклад, в обробнику події.
      </Box>
      <Typography mt={3} variant='h5' align='center'>Example</Typography>
      <Box m={3}>

      </Box>
    </Box>
  )
}

export default HooksUseRef
