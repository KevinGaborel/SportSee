class Perf {
  constructor(data, kind, userId) {
    this.data = data;
    this.kind = kind;
    this.userId = userId
  }
  
  validate() {
    if (!this.data || !this.kind || !this.userId) {
      return false;
    }
    if (typeof this.data !== 'object') {
      return false;
    }
    if (typeof this.kind !== 'object') {
      return false;
    }

    for (const key in this.kind) {
      if (typeof this.kind[key] !== 'string') {
        return false;
      }
    }

    if (typeof this.userId !== 'number') {
      return false;
    }

    return true;
  }
}
  
export default Perf