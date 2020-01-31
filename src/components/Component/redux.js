import { useSelector, shallowEqual } from 'react-redux'
import { useWithDispatch } from '~hooks/useWithDispatch'
import { add } from '~store/slices/slice'

export const useSlice = () => {
  const [handleAdd] = useWithDispatch([add])
  const { foo } = useSelector(({ slice: { foo } }) => {
    return {
      foo
    }
  }, shallowEqual)

  return {
    foo,
    handleAdd
  }
}
