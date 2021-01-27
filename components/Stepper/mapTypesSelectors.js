import ChipSelector from '../ChipSelector'
import Select from '../Select'
import NativeSelect from '../NativeSelect'

const mapTypesSelectors = {
  select: {
    selector: NativeSelect,
    option: NativeSelect.Option,
  },
  chip: {
    selector: ChipSelector,
    option: Select.Option
  },
  radioCard: {
    selector: Select,
    option: Select.Option
  }
}
export default mapTypesSelectors