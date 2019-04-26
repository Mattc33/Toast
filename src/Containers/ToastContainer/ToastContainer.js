import React, { Component } from 'react'
import './ToastContainer.scss'

import CancelIcon from '../../Assets/SVG/icons8-cancel.svg'
import CheckIcon from '../../Assets/SVG/icons8-checkmark.svg'

class ToastContainer extends Component {

   state = {
      isToastVisible: false,
      toastStatus: {}
   }
   
   componentWillMount() {
      this.setState({isToastVisible: this.props.isToastActive})
      clearInterval(this.timer)
      this.timer = setInterval(() => this.closeToast(), this.props.toastTimeActive)
   }

   componentDidMount() {
      this.chooseToastStatus()
   }

   componentWillUnmount() {
      clearInterval(this.timer)
   }

   chooseToastStatus = () => {
      const toastStatus = this.props.toastType
      toastStatus.toLowerCase()
      let toastStatusObj = {
         statusClass: '',
         statusIcon: ''
      }

      switch(toastStatus) {
         case 'success':
            toastStatusObj = {statusClass: 'ToastSuccess', statusIcon: CheckIcon}
            break
         case 'error':
            toastStatusObj = {statusClass: 'ToastError', statusIcon: CancelIcon}
            break
         // case 'loading': 
         //    toastStatusObj = {statusClass: 'ToastLoading', statusIcon: LoadingIcon}
         //    break
         default:
            toastStatusObj = {statusClass: 'ToastSuccess', statusIcon: CheckIcon}
            break
      }

      this.setState({ toastStatus: toastStatusObj})
   }

   closeToast = () => {
      this.setState({ isToastVisible: false})
   }

   render = () => (

      this.state.isToastVisible
         ?
         <main className={'ToastContainer'}>
            <aside className={`ToastStatus ${this.state.toastStatus.statusClass}`}>
               <img src={this.state.toastStatus.statusIcon} alt={'Cancel Icon'}/>
            </aside>
            <div className={'ToastInfo'}>
               <header className={'ToastHeader'}>
                  <div className={'ToastTitle'}>
                     {this.props.toastTitle}
                  </div>
                  <img src={CancelIcon} alt={'Cancel Icon'} onClick={this.closeToast}/>
               </header>
               <section className={'ToastBody'}>
                  {this.props.toastMessage}
               </section>
            </div>
         </main>
         : 
         null
   )
}

export default ToastContainer

