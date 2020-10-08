module.exports = {
  login: {
    valid: { email: 'devdtester18@gmail.com', password: 'testing' },
    invalid: { format_email: 'asfd@com', trailing_email: 'devdtester18@gmail.com ', invalidEmail: 'auto.qa @example.com' }
  },
  signup: {
    valid: { invitecode: '59.3elru5sj' },
    invalid: { invitecode: 'safsdf' }

  },
  profile: {
    valid: { xid: '~Test_Freddy' }
  },

  users: {
    freeUser: { email: 'amdv3956@gmail.com', password: 'testing', type: 'Free', xcoobee_id: '~test_amdv-free' },
    personalUser: { email: 'amdv0005@gmail.com', password: 'testing', type: 'Paid', xcoobee_id: '~test_amdv-personal' },
    developerUser: { email: 'amdv0004@gmail.com', password: 'testing', type: 'Paid', xcoobee_id: '~test_amdv-developer' },
    professionalUser: { email: 'amdv7777@gmail.com', password: 'testing', type: 'Paid', xcoobee_id: '~test_amdv-professional' },
    businessUser: { email: 'amdv394@gmail.com', password: 'testing', type: 'Paid', xcoobee_id: '~test_amdv-business' }
  },

  address: {
        add_india: {country: "india", province: "testing", pin: "Free",street: "devdtester18@gmail.com", province: "testing" },// eslint-disable-line
    PaidUser: { email: 'milton@sjinnovation.com', password: '55Newyork', type: 'Paid' }
  }

}
