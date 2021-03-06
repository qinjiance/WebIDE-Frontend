import { extendObservable, autorun, createTransformer, toJS } from 'mobx'
import PanelState from './components/Panel/state'
import PaneState from './components/Pane/state'
import EditorTabState from './components/Tab/state'
import FileTreeState from './components/FileTree/state'
import SettingState from './components/Setting/state'
import FileState from './commons/File/state'
import EditorState from './components/Editor/state'

const store = {
  PanelState,
  PaneState,
  EditorTabState,
  FileTreeState,
  SettingState,
  FileState,
  EditorState,
}

extendObservable(store, {
  debug: false,
})
const transform = createTransformer(store => ({
  PanelState: toJS(store.PanelState),
  PaneState: toJS(store.PaneState),
  EditorTabState: toJS(store.EditorTabState),
  FileTreeState: toJS(store.FileTreeState),
  FileState: toJS(store.FileState)
}))

autorun(() => {
  if (store.debug) {
    const transformedStore = transform(store)
    console.log('[mobx store] ', transformedStore)
  }
})

export default store
window.mobxStore = store
