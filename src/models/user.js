class User {
  constructor(id, keyData, score, userInfos) {
    this.id = id;
    this.keyData = keyData;
    this.score = score
    this.userInfos = userInfos;
  }

  validate() {
    if (!this.id || !this.keyData || !this.userInfos || !this.score) {
      return false;
    }
    if (typeof this.id !== 'number') {
      return false;
    }

    for (const key in this.keyData) {
      if (key === 'calorieCount') {
        if (typeof this.keyData[key] !== 'number') {
          return false;
        }
      }else if(key === 'carbohydrateCount'){
        if (typeof this.keyData[key] !== 'number') {
          return false;
        }
      }else if(key === 'lipidCount'){
        if (typeof this.keyData[key] !== 'number') {
          return false;
        }
      }else if(key === 'proteinCount'){
        if (typeof this.keyData[key] !== 'number') {
          return false;
        }
      }
    }

    if (typeof this.score !== 'number') {
      return false;
    }

    for (const key in this.userInfos) {
      if (key === 'age') {
        if (typeof this.userInfos[key] !== 'number') {
          return false;
        }
      }else if(key === 'firstName'){
        if (typeof this.userInfos[key] !== 'string') {
          return false;
        }
      }else if(key === 'lastName'){
        if (typeof this.userInfos[key] !== 'string') {
          return false;
        }
      }
    }
    return true;
  }
}

export default User