Component({
  properties: {
    placeholder: {
      type: String,
      value: ""
    },
    visible: {
      type: Boolean,
      value: false
    },
    value: {
      type: String,
      value: ""
    }
  },
  data: {
    value: ""
  },
  lifetumes: {
    attached(){
      if(this.properties.value){
        this.properties.value = this.data._value
      }
    }
  },
  methods: {
    confirm() {
      this.triggerEvent('confirm', this.data.value)
    },
    cancel() {
      this.triggerEvent('cancel', this.data.value)
    },
    watchValue(event) {
      this.data.value = event.detail.value
    }
  }
})
