const { format } = require('date-fns');

function main() {
  const dateNow = Date.now();

  return format(dateNow, 'dd/MM/yyyy HH:mm:ss');
}

module.exports = {
  main,
};
