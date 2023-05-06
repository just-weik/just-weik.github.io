import moment from 'moment'

export default {
	beforeCreate(){
		moment.locale('id');
		this.$moment = moment;
	},
	methods: {
		
	},
}