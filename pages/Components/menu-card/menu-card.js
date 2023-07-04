Component({
  mixins: [],
  data: {},
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onHandlePopUpOpen(e){
      const{menu} = e.target.dataset
      this.props.onHandlePopUpOpen(menu)
    }
  },
});
