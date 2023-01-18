var status = 1;

setTimeout(() => {
  var status = 2;

  const obj = {
    status: 3,
    getStatus: function () {
      return this.status;
    },
  };
  console.log(obj.getStatus());
  console.log(obj.getStatus.call(this));
}, 0);
