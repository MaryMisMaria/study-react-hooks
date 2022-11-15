import { Box, Typography } from '@mui/material'

const HooksUseEffect = () => {
  return (
    <Box>
      <Typography mt={3} variant='h5' align='center'> useEffect - хук ефектy </Typography>
      <Box m={3} sx={{ display: 'flex', justifyContent: 'center' }}>
				Використовуючи цей хук, ви говорите React оновити щось після рендера компонента.
				React запам’ятає функцію (тобто “ефект”), яку ви передали та викличе її після того,
				як внесе зміни в DOM. У цьому ефекті, ми встановлюємо заголовок документа,
				але ми також можемо виконати або викликати який-небудь імперативний API.
				За замовчуванням він буде виконуватися після кожного рендеру та кожного оновлення.
      </Box>
      <Typography mt={3} variant='h5' align='center'>Example</Typography>
      <Box m={3}>
        <Typography>Example</Typography>

      </Box>
    </Box>
  )
}

export default HooksUseEffect
