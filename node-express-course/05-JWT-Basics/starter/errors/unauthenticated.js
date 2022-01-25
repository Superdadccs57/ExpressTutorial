const CustomAPIError = require('./custom-error')

class unAuthError extends CustomAPIError {
    constructor(message) {
      super(message)
      this.statusCode = 401
    }
  }
  
  module.exports = unAuthError