import moment from 'moment'

export default {
	beforeCreate(){
		this.$moment = moment;
	},
	methods: {
		logMessage(message) {
			console.log(message);
		},
	},
}