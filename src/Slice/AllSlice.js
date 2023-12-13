import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  loggedIn: localStorage.getItem('access'),
  value: 0,
  ticketData: undefined,
  ticketAdults: 1,
  ticketChild: 0,
  ticketBabies: 0,
  ticketTarif: 'a',
  shopTicketCom: false,
  ticketId: '',
  filterAirlines: [],
  changeFilterAir: false,
  allAirlinesName: [],
  ticketDetail: [],
  filterDirect: 0,
  filterDirectChange: undefined
}


export const slice = createSlice({
  name: 'AllSlice',
  initialState,
  reducers: {

    changeTicketData: (state, action) => {
      state.ticketData = action.payload
    },
    setTicketAdult: (state, action) => {
      state.ticketAdults = action.payload
    },
    setTicketChild: (state, action) => {
      state.ticketChild = action.payload
    },
    setTicketDetail: (state, action) => {
      state.ticketDetail = action.payload
    },

    setTicketBabies: (state, action) => {
      state.ticketBabies = action.payload
    },
    setTicketTarif: (state, action) => {
      state.ticketTarif = action.payload
    },
    setShopTicketCom: (state, action) => {
      state.shopTicketCom = action.payload
    },
    setTicketId: (state, action) => {
      state.ticketId = action.payload
    },
    addFilterAirlines: (state, action) => {
      state.filterAirlines = [...state.filterAirlines.filter(item => (item !== action.payload)), action.payload]
    },
    removeFilterAirlines: (state, action) => {
      state.filterAirlines = [...state.filterAirlines.filter(item => (item !== action.payload))]
    },
    clearFilterAirlines: (state, action) => {
      state.filterAirlines = []
    },
    checkChangeAir: (state, action) => {
      state.changeFilterAir = true
    },
    addFilterAirlinesName: (state, action) => {
      state.allAirlinesName = [...state.allAirlinesName.filter(item => item.name !== action.payload.name), action.payload]
    },
    clearFilterAirlinesName: (state, action) => {
      state.allAirlinesName = []
    },
    setFilterDirect: (state, action) => {
      state.filterDirect = action.payload
    },
    setFilterDirectChange: (state, action) => {
      state.filterDirectChange = action.payload

    }
  }
})

export const { changeTicketData, setTicketAdult, setTicketChild, setTicketBabies, setTicketTarif, setShopTicketCom, setTicketId, addFilterAirlines, removeFilterAirlines, checkChangeAir, addFilterAirlinesName, clearFilterAirlinesName, clearFilterAirlines, setFilterDirect, setFilterDirectChange } = slice.actions

export default slice.reducer 