!function() {
  var dash = "--"
  var word = /\S+/g
  var what = "data-varam"
  var where = "[data-varam]"
  var all = "querySelectorAll"
  var par = "URLSearchParams" in window
  var api = par ? varam : no

  function varam(search) {
    var did = false
    var url = new URLSearchParams(search)
    var stack = document[all](where)
    each(stack, function(scope) {
      var keys = scope.getAttribute(what)
      keys = keys && keys.match(word)
      keys && each(keys, function(key) {
        var value = url.get(key)
        var relay = dash + key
        did = fresh(scope.style, relay, value) || did
      })
    })
    return did
  }

  function no() {
    return false
  }

  function fresh(style, relay, value) {
    var prev = style.getPropertyValue(relay)
    var next = value
    var sync = next ? prev === next : !prev
    sync || style.setProperty(relay, value)
    return !sync
  }

  function each(stack, f) {
    var i = stack.length
    while(i--) f(stack[i])
  }

  api(location.search)
  api.fresh = fresh
  window.varam = api
  typeof module == "undefined"
    || module.exports
    && (module.exports = api)
}()
