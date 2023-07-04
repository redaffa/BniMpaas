Component({
  mixins: [],
  data: {},
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onGoTo(e){
      const {name} = e.target.dataset
      this.props.onGoTo(name)
    }
  },
});
