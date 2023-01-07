class Activity {
    constructor(sessions, userId) {
      this.sessions = sessions;
      this.userId = userId;
    }
  
    validate() {
      if (!this.sessions || !this.userId) {
        return false;
      }
  
      if (typeof this.sessions !== 'object') {
        return false;
      }

      if (typeof this.userId !== 'number') {
        return false;
      }
  
      return true;
    }
  }
  
  export default Activity