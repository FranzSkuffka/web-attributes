
const callback = attribute => callback => mutationList => {
  mutationList.forEach(function (mutation) {
    if (mutation.type == "attributes" && mutation.attributeName == attribute) {
      callback(mutation);
    }
  });

};

function webAttribute(name) {
  return new Promise((res, rej) => {
    var observer = new MutationObserver(callback(name)(x => {

      res([target.getAttribute(name), target]);
    }));
    observer.observe(document, {
      attributeFilter: [name],
      attributeOldValue: false,
      subtree: true });

  });
}

webAttribute('scale-to-fit').then(([attr, el]) => {
  console.log(attr, el);

});



var userListElement = document;