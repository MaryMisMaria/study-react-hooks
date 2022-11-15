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
				const [state, setState] = useState(initialState);
				Повертає значення стану та функцію, що оновлює його.
				Під час початкового рендеру повернутий стан (state) співпадає зі значенням,
				переданим у першому аргументі (initialState).
				Функція setState використовується для оновлення стану.
				Вона приймає значення нового стану і ставить у чергу повторний рендер компонента.
				setState(newState);
				Упродовж наступних повторних рендерів, перше значення, повернуте useState,
				завжди буде в актуальному стані при здійсненні оновлень.
      </Box>
    </Box>
  )
}

export default HooksUseRef
