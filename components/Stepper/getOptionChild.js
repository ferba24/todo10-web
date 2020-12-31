import RadioCard from '../RadioCard'
import ChipSelector from '../ChipSelector'
import Card from '../../components/Card'
import List from '../../components/List'

const getOptionChild = (type, option) => {
  switch(type) {
    case 'select':
      return option.label
    case 'chip':
      return props => (
        <ChipSelector.Chip
          className="w-60"
          {...props}
        >
          <ChipSelector.MiniContent {...option}/>
        </ChipSelector.Chip>
      )
    case 'radioCard':
      return props => (
        <RadioCard
          className="w-6/12 md:w-3/12 p-2 tap-highlight-transparent"
          ribbon={option.ribbon}
          {...props}
        >
          <RadioCard.Content {...option}/>
        </RadioCard>
      )
    case 'card':
      return (
        <Card
          className="max-w-xs flex-1 mx-3"
          ribbon={option.ribbon}
          style={{height: 'fit-content'}}
        >
          <Card.Plan {...option}/>
        </Card>
      )
  }
}
export default getOptionChild