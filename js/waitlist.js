function joinWaitlist(list, email) {
  var result = Array.isArray(list) ? list.slice() : [];

  if (typeof email !== 'string') {
    return result;
  }

  var normalized = email.trim().toLowerCase();
  var atIndex = normalized.indexOf('@');
  if (atIndex <= 0 || normalized.indexOf('.', atIndex) === -1) {
    return result;
  }

  var normalizedList = result.map(function (item) {
    return typeof item === 'string' ? item.trim().toLowerCase() : item;
  });
  if (normalizedList.indexOf(normalized) === -1) {
    result.push(normalized);
  }

  return result;
}

module.exports = { joinWaitlist };
