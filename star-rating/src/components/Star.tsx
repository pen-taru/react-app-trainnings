import StarRateIcon from '@mui/icons-material/StarRate';

const Star = ({ selected = false, onSelect = (f: any) => f}) => {
  return (
    <StarRateIcon style={{ color: selected ? 'gold' : 'gray' }} onClick={onSelect} />
  )
}

export default Star;