function mod(n, m) {
  while (n < 0){
    n+=m;
  }
  return n % m;
}

module.exports = {mod}