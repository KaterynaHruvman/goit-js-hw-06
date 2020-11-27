const getNamesSortedByFriendsCount = (array) => [...array].sort(
    (userPrev, userNext) => userPrev.friends.length - userNext.friends.length
  )
  .map(({name}) => (name));

console.log(getNamesSortedByFriendsCount(users));

// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
