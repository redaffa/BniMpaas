Component({
  mixins: [],
  data: {},
  props: {
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onChangeUrl(e){
      this.props.onChangeUrl(e.target.dataset)
    }
  },
});
