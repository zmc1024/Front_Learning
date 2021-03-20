function Archiver() {
  let value = null;
  let archive = []

  Object.defineProperty(this, 'num', {
    get: function() {
      console.log('执行get操作');
      return value
    },
    set: function(newValue) {
      console.log('执行set操作');
      archive.push({val: newValue})
    }
  })

  this.getArchiver = function() {
    return archive
  }
}

let arc = new Archiver()
arc.num         //get
arc.num = 11;   //set
arc.num = 22;   //set
arc.getArchiver()   // [{val: 11}, {val: 22}]

// obj.num = 2
// console.log(obj.num);
