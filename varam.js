!function(web) {
  var dash = "--"
  var word = /\S+/g
  var what = "data-varam"
  var where = "[data-varam]"
  var all = "querySelectorAll"
  var par = web.URLSearchParams

  function varam(search) {
    var did = false
    var url = new par(search)
    var stack = document[all](where)
    each(stack, function(scope) {
      var keys = scope.getAttribute(what)
      keys = keys && keys.match(word)
      keys && each(keys, function(key) {
        var value = url.get(key)
        var relay = dash + key
        var style = scope.style
        did = fresh(style, relay, value) || did
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

  var api = par ? varam : no
  var seed = web.varam
  var seeded = typeof seed == "string"
  seed = seeded && seed
  api.seed = seed
  api.seeded = seeded
  api.fresh = fresh
  web.varam = api
  api(seeded ? seed : location.search)
  var common = typeof module != "undefined"
  if (common && module.exports)
    module.exports = api
}(window)
