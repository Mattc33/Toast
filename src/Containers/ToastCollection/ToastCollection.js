import React, { Component } from 'react'
import './ToastCollection.scss'

import ToastContainer from '../ToastContainer/ToastContainer'

class ToastCollection extends Component {

   state = {
      toastCollection: []
   }

   componentWillReceiveProps() {

   }

   mockToastObjOne = {
      toastType: 'success',
      toastTitle: 'Copied',
      toastMessage: 'Some copied Message',
      isToastActive: true,
      toastTimeActive: 10000
   }

   mockToastObjTwo = {
      toastType: 'error',
      toastTitle: '2',
      toastMessage: '2 Some copied Message',
      isToastActive: true,
      toastTimeActive: 10000
   }

   addNewToastToCollection = (toastObj) => {
      const currentToastCollection = this.state.toastCollection
      currentToastCollection.push(toastObj)
      this.setState({ toastCollection: currentToastCollection},
         () => console.log(this.state.toastCollection)
      )
   }

   render = () => (
      <div className={'ToastCollectionOverlay'}>
         <button onClick={() => this.addNewToastToCollection(this.mockToastObjOne)}>Add New Toast</button>
         <button onClick={() => this.addNewToastToCollection(this.mockToastObjTwo)}>Add New Toast 2</button>
         <div className={'ToastCollectionContainer'}>
            {
               this.state.toastCollection.map( (eaToast, index) => (
                  <ToastContainer 
                     key = {index}
                     isToastActive = {eaToast.isToastActive}
                     toastType = {eaToast.toastType}
                     toastTitle = {eaToast.toastTitle}
                     toastMessage = {eaToast.toastMessage}
                     toastTimeActive = {eaToast.toastTimeActive}
                  />
               ))
            }
         </div>
      </div>
   )
}

export default ToastCollection

// ! 
// Recieve a Redux Action, on RecieveProps
// Trigger Toast using a action
// action takes an object as param containing
/*
   {
      toastType: 'success', // 3 types = success, error, loading
      toastTitle: 'Copied',
      toastMessage: 'Some copied Message',
      toastTimeActive: 10000 // Toast is active for in milliseconds
   }
*/
