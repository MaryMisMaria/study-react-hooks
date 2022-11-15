// material
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import ListItemText from '@mui/material/ListItemText'
// images
import BackgroundImage from '../../images/1.png'

const HooksUseState = () => {

  return (
    <Box align='center'>
      <Typography pt={3} variant='h5' fontStyle='Roboto'> useState - хук стану </Typography>
      <Box m={5} sx={{ width: '80%', bgcolor: 'background.paper', borderRadius: '8px' }}>
        <List p={3} sx={{ width: '100%' }}>
          <Typography variant='subtitle1'>
						All about hook useState
          </Typography>
          <ListItemText>
						Єдиним аргументом для useState є початкове значення стану.
						Початкове значення аргументу використовується тільки під час першого рендера.
          </ListItemText>
          <Divider />
          <ListItemText>
						Ми викликаємо його для того, щоб надати внутрішній стан нашому компоненту.
						React буде зберігати цей стан між повторними рендерами. Виклик useState повертає дві речі:
						поточне значення стану та функцію, яка дозволяє оновлювати цей стан.
          </ListItemText>
          <Divider />
          <ListItemText>
						Ви можете викликати цю функцію де завгодно, наприклад, в обробнику події.
          </ListItemText>
        </List>
      </Box>
      <Card pb={4} sx={{ maxWidth: '40%', maxHeight: '65vh' }}>
        <CardMedia
          height='200px'
          component='img'
          sx={{ backgroundImage: `url(${BackgroundImage})` }}
        />
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
						const [state, setState] = useState(initialState);
						Повертає значення стану та функцію, що оновлює його.
						Під час початкового рендеру повернутий стан (state) співпадає зі значенням,
						переданим у першому аргументі (initialState).
						Функція setState використовується для оновлення стану.
						Вона приймає значення нового стану і ставить у чергу повторний рендер компонента.
						setState(newState);
						Упродовж наступних повторних рендерів, перше значення, повернуте useState,
						завжди буде в актуальному стані при здійсненні оновлень.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default HooksUseState
