import { toggleDebugMode } from '@/shared/model/debugModeSlice'
import { useAppDispatch, useAppSelector } from '@/shared/model/hooks'
import css from './DebugModeToggler.module.css'

export function DebugModeToggler() {
  const isDebugMode = useAppSelector((state) => state.debugMode.isEnabled)
  const dispatch = useAppDispatch()

  return (
    <div className={css.root}>
      <button onClick={() => dispatch(toggleDebugMode())}>
        {isDebugMode ? '✅ debug mode' : '☑️ debug mode'}
      </button>
    </div>
  )
}