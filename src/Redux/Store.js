import {createStore} from 'redux'
import crudReducer from './Reducers/CrudReducer'

import {useState } from 'react'
import React from 'react'




const store = createStore(crudReducer)
export default store;