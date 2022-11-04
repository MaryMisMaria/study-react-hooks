import { ToggleButton, ToggleButtonGroup } from '@mui/material'

const ToggleButtons = ({ value, setValue, toggleSettings}) => {

	return (
		<ToggleButtonGroup
			exclusive
			size='small'
			value={value}
			aria-label='text alignment'
			sx={{ backgroundColor: 'white' }}
		>
			<ToggleButton
				value={toggleSettings.MAIN_HOOKS}
				sx={{ textTransform: 'capitalize' }}
				onClick={() => setValue(toggleSettings.MAIN_HOOKS)}
			>
				Main
			</ToggleButton>
			<ToggleButton
				sx={{ textTransform: 'capitalize' }}
				value={toggleSettings.ADDITIONAL_HOOKS}
				onClick={() => setValue(toggleSettings.ADDITIONAL_HOOKS)}
			>
				Additional
			</ToggleButton>
		</ToggleButtonGroup>
)
}

export default ToggleButtons
