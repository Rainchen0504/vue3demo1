import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'

//vuex根目录下state中的数据类型
export interface IRootState {
  name: string
  age: number
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}

//
export type IStoreType = IRootState & IRootWithModule
